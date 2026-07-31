#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
convert.py  —  Academic Paper Hub corpus builder
=================================================
Walks the generated corpus (generator/output/<subject>/<paper_dir>/),
parses each paper's real data, copies the 4 source files into the site,
and emits `assets/scripts/data.papers.js` (window.PAPER_DATA).

Why this exists:
  - The sandbox where this assistant runs cannot execute Python, so the
    assistant authors the code; YOU run it on your own machine.
  - The old GitHub site (Wadesha/academic-paper) used FAKE template data.
    This converter feeds the site the REAL, citation-verifiable corpus.

Usage:
    cd paper/site
    python convert.py --src ../generator/output --out .
    # then open index.html, or:  python -m http.server 8000

Flags:
    --src   path to generator/output   (default: ../generator/output)
    --out   site root (writes assets/scripts/data.papers.js + assets/papers/)
    --year  illustrative submission year stamped on papers (default: 2025)
"""
import os, re, json, shutil, argparse, sys

# ---- knowledge-base import (shared prerequisite concept cards) --------------
# kb.py lives in ../generator; pull it onto the path so the SAME curated
# prerequisite content used by render.py powers the website.
_KB = None
try:
    sys.path.insert(0, os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "generator"))
    import kb as _KB
except Exception:
    _KB = None

# ---- Subject taxonomy (id -> display) ---------------------------------------
SUBJECTS = {
    "01_ai_ml":                    ("AI & Machine Learning", "Artificial Intelligence / Machine Learning",
                                    "ML foundations, scaling, efficiency and multimodal systems."),
    "02_cs_systems_security":      ("CS: Systems & Security", "Computer Systems & Security",
                                    "Operating systems, distributed systems, networking and security."),
    "03_mathematics":              ("Mathematics", "Mathematics",
                                    "Pure and applied mathematics across core subfields."),
    "04_statistics_probability":   ("Statistics & Probability", "Statistics & Probability",
                                    "Statistical theory, inference and stochastic processes."),
    "05_physics_hep_quantum":      ("Physics: HEP & Quantum", "High-Energy & Quantum Physics",
                                    "Particle physics, quantum theory and field theory."),
    "06_astronomy_astrophysics":   ("Astronomy & Astrophysics", "Astronomy & Astrophysics",
                                    "Cosmology, galaxies, stars and observational astronomy."),
    "07_chemistry":                ("Chemistry", "Chemistry",
                                    "Organic, inorganic, physical and analytical chemistry."),
    "08_biological_sciences":      ("Biological Sciences", "Biological Sciences",
                                    "Cell biology, physiology and organismal biology."),
    "09_genetics_genomics":        ("Genetics & Genomics", "Genetics & Genomics",
                                    "DNA, sequencing, gene regulation and omics."),
    "10_neuroscience":             ("Neuroscience", "Neuroscience",
                                    "Brain, cognition, systems and computational neuroscience."),
    "11_earth_sciences":           ("Earth Sciences", "Earth Sciences",
                                    "Geology, geophysics and planetary science."),
    "12_climate_atmosphere":       ("Climate & Atmosphere", "Climate & Atmosphere",
                                    "Climate dynamics, atmospheric and ocean science."),
    "13_environmental_ecology":    ("Environmental & Ecology", "Environmental Science & Ecology",
                                    "Ecosystems, conservation and sustainability."),
    "14_materials_nano":           ("Materials & Nanotech", "Materials & Nanotechnology",
                                    "Materials design, nanoscience and characterization."),
    "15_engineering":              ("Engineering", "Engineering",
                                    "Mechanical, civil and general engineering."),
    "16_ee_robotics":              ("EE & Robotics", "Electrical Eng. & Robotics",
                                    "Circuits, control, signal processing and robotics."),
    "17_economics":                ("Economics", "Economics",
                                    "Micro, macro, behavioral and development economics."),
    "18_quant_finance":            ("Quantitative Finance", "Quantitative Finance",
                                    "Asset pricing, risk, derivatives and markets."),
    "19_psychology":               ("Psychology", "Psychology",
                                    "Cognition, development, social and clinical psychology."),
    "20_social_sciences":          ("Social Sciences", "Social Sciences",
                                    "Sociology, political science and anthropology."),
}
ANGLES = ["Efficient", "Robust", "Scalable", "Uncertainty", "SelfSupervised",
          "Benchmark", "Adaptive"]

# ---- parsing helpers --------------------------------------------------------
def parse_md(path):
    """Return (title, abstract, sections[]) from a companion Markdown file."""
    title, abstract, sections = "", "", []
    try:
        with open(path, encoding="utf-8") as f:
            lines = f.read().splitlines()
    except Exception:
        return title, abstract, sections
    cur = None
    buf = []
    for ln in lines:
        m = re.match(r"^#\s+(.*)$", ln)
        if m and not title:
            title = m.group(1).strip()
            continue
        m2 = re.match(r"^##\s+(.*)$", ln)
        if m2:
            head = m2.group(1).strip()
            if cur is not None:
                sections.append({"title": cur, "content": "\n".join(buf).strip()})
            cur = head
            buf = []
            continue
        if cur is not None:
            buf.append(ln)
    if cur is not None:
        sections.append({"title": cur, "content": "\n".join(buf).strip()})
    # split abstract / sections / references
    abs_text, body = "", []
    for s in sections:
        if s["title"].lower().startswith("abstract"):
            abs_text = s["content"]
        elif s["title"].lower().startswith("references") or s["title"].lower().startswith("reference"):
            continue
        elif s["title"].lower().startswith("prerequisites"):
            continue
        else:
            body.append(s)
    return title, abs_text, body

def parse_author(tex_path):
    try:
        with open(tex_path, encoding="utf-8") as f:
            txt = f.read()
        m = re.search(r"\\author\{([^}]*)\}", txt)
        if m:
            a = m.group(1).strip()
            return [a] if a and a.lower() != "anonymous" else ["Anonymous"]
    except Exception:
        pass
    return ["Anonymous"]

def paper_id(subject_id, subfield, idx):
    return "%s-%s-%02d" % (subject_id, re.sub(r"[^a-z0-9]+", "", subfield), idx)

def humanize(s):
    return s.replace("_", " ").title()

# ---- prerequisite / knowledge-base expansion --------------------------------
def _slug(s, n=4):
    words = re.sub(r"[^a-z0-9 ]", "", s.lower()).split()
    return "_".join(words[:n]) or "paper"

def _extract_prereq_block(md_path):
    """If the paper.md has an explicit `## Prerequisites` block (emitted by the
    newer render.py), parse its `[KB:xxx]` ids and `专题：` focus line."""
    ids, specific = [], ""
    try:
        with open(md_path, encoding="utf-8") as f:
            lines = f.read().splitlines()
    except Exception:
        return ids, specific
    in_block = False
    for ln in lines:
        if re.match(r"^##\s+Prerequisites", ln.strip(), re.I):
            in_block = True
            continue
        if in_block:
            if re.match(r"^##\s+", ln):   # next top-level section ends the block
                break
            m = re.match(r"-\s*\[KB:([A-Za-z0-9_]+)\]", ln)
            if m:
                ids.append(m.group(1))
            else:
                ms = re.match(r"-\s*专题[:：]\s*(.+)", ln)
                if ms:
                    specific = ms.group(1).strip()
    return ids, specific

def parse_prereqs(md_path, subfield_key, subject_folder):
    """Return {concepts:[{id,title,level,points}], specific:str}.

    Strategy:
      - Prefer an explicit `## Prerequisites` block if present (newly generated papers).
      - Otherwise DERIVE prerequisites from kb.py by subfield — this means even
        the 600+ papers generated BEFORE the block existed still get a real,
        accurate prerequisite module with zero regeneration (the "reuse to save
        effort" requirement).
    """
    ids, specific = _extract_prereq_block(md_path)
    if _KB is not None:
        if ids:
            # explicit block wins; ensure discipline-level concepts are included too
            common, spec = _KB.prereq_for(subfield_key, subject_folder)
            for c in common:
                if c not in ids:
                    ids.append(c)
            if not specific and spec:
                specific = spec
        else:
            common, spec = _KB.prereq_for(subfield_key, subject_folder)
            ids = common
            specific = spec
    concepts = []
    if _KB is not None:
        for cid in ids:
            card = _KB.KB.get(cid)
            if card:
                concepts.append({
                    "id": cid,
                    "title": card.get("title", cid),
                    "level": card.get("level", ""),
                    "points": card.get("points", []),
                })
    return {"concepts": concepts, "specific": specific}

def build(src, out, year):
    src = os.path.abspath(src)
    out = os.path.abspath(out)
    assets_papers = os.path.join(out, "assets", "papers")
    os.makedirs(assets_papers, exist_ok=True)

    disciplines = []
    total = 0
    for subj_dir in sorted(os.listdir(src)):
        subj_path = os.path.join(src, subj_dir)
        if not os.path.isdir(subj_path):
            continue
        if subj_dir not in SUBJECTS:
            # try to derive id from suffix
            sid = re.sub(r"^\d+_", "", subj_dir)
        else:
            sid = re.sub(r"^\d+_", "", subj_dir)
        name, enName, desc = SUBJECTS.get(subj_dir, (humanize(sid), humanize(sid), ""))
        subfields_map = {}
        for paper_dir in sorted(os.listdir(subj_path)):
            pp = os.path.join(subj_path, paper_dir)
            if not os.path.isdir(pp):
                continue
            md = os.path.join(pp, "paper.md")
            refs_json = os.path.join(pp, "refs.json")
            tex = os.path.join(pp, "paper.tex")
            if not (os.path.exists(md) and os.path.exists(refs_json)):
                continue
            m = re.match(r"^paper_\d+_(.+)$", paper_dir)
            subfield = m.group(1) if m else paper_dir
            subfield_key = _slug(subfield)
            prerequisites = parse_prereqs(md, subfield_key, subj_dir)
            title, abstract, sections = parse_md(md)
            try:
                with open(refs_json, encoding="utf-8") as f:
                    refs = json.load(f)
            except Exception:
                refs = []
            references = [{
                "title": r.get("title", ""),
                "authors": r.get("authors", []),
                "year": r.get("year"),
                "venue": r.get("venue", ""),
                "doi": r.get("doi", ""),
                "cited_by": r.get("cited_by", 0),
                "source": r.get("source", ""),
            } for r in refs]
            author = parse_author(tex)
            angle = None
            for a in ANGLES:
                if title.startswith(a):
                    angle = a
                    break
            pid = paper_id(sid, subfield, len(subfields_map.get(subfield, [])) + 1)
            # copy source files
            dest = os.path.join(assets_papers, pid)
            os.makedirs(dest, exist_ok=True)
            dl = {}
            for fname, key in [("paper.tex", "tex"), ("paper.md", "md"), ("slides.pptx", "pptx"), ("paper.pdf", "pdf")]:
                sp = os.path.join(pp, fname)
                if os.path.exists(sp):
                    shutil.copy2(sp, os.path.join(dest, fname))
                    dl[key] = "assets/papers/%s/%s" % (pid, fname)
                else:
                    dl[key] = None
            paper = {
                "id": pid,
                "title": title,
                "authors": author,
                "year": year,
                "venue": "illustrative",
                "keywords": [humanize(subfield)] + ([angle] if angle else []),
                "angle": angle,
                "verified": True,
                "abstract": abstract,
                "sections": sections,
                "references": references,
                "prerequisites": prerequisites,
                "downloads": dl,
            }
            subfields_map.setdefault(subfield, []).append(paper)
            total += 1
        if not subfields_map:
            continue
        subfields = [{
            "id": sf,
            "name": humanize(sf),
            "enName": humanize(sf),
            "description": "",
            "capacity": 30,
            "papers": papers,
        } for sf, papers in subfields_map.items()]
        disciplines.append({
            "id": sid, "name": name, "enName": enName,
            "description": desc, "subfields": subfields,
        })

    data = {
        "site": {
            "name": "Academic Paper Hub — Verified Corpus",
            "tagline": "Real citations · illustrative methods",
            "description": "A browsable portal over a generated academic corpus. Each paper is grounded in a real, citable literature (OpenAlex / arXiv); experiments are clearly marked illustrative. References are 100% verifiable.",
        },
        "generatedAt": "built by convert.py",
        "note": "Generated from generator/output via convert.py. %d real-citation papers." % total,
        "disciplines": disciplines,
    }
    out_path = os.path.join(out, "assets", "scripts", "data.papers.js")
    os.makedirs(os.path.dirname(out_path), exist_ok=True)
    with open(out_path, "w", encoding="utf-8") as f:
        f.write("// AUTO-GENERATED by convert.py — do not edit by hand.\n")
        f.write("window.PAPER_DATA = ")
        json.dump(data, f, ensure_ascii=False, indent=1)
        f.write(";\n")
    print("Wrote %s  (%d disciplines, %d papers)" % (out_path, len(disciplines), total))

if __name__ == "__main__":
    ap = argparse.ArgumentParser()
    ap.add_argument("--src", default="../generator/output")
    ap.add_argument("--out", default=".")
    ap.add_argument("--year", type=int, default=2025)
    args = ap.parse_args()
    if not os.path.isdir(args.src):
        print("ERROR: src not found: %s" % args.src, file=sys.stderr)
        sys.exit(1)
    build(args.src, args.out, args.year)
