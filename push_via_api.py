#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""push_via_api.py -- Push files to GitHub via REST API (no git needed).
Uses GitHub Contents API with personal access token.
Run:  set GH_TOKEN=ghp_xxx && python push_via_api.py
"""
import os, json, base64, urllib.request, urllib.error

TOKEN = os.environ.get("GH_TOKEN", "")
OWNER = "Wadesha"
REPO = "academic-paper"
BRANCH = "main"
API = "https://api.github.com"

FILES = [
    "assets/scripts/data.kb.js",
    "assets/scripts/data.papers.js",
    "assets/scripts/app.js",
    "assets/styles/main.css",
    "index.html",
    "gen_kb_js.py",
    "publish.bat",
]

def api_put(path, content_b64, sha=None, message="Update"):
    url = "%s/repos/%s/%s/contents/%s" % (API, OWNER, REPO, path)
    data = {"message": message, "content": content_b64, "branch": BRANCH}
    if sha:
        data["sha"] = sha
    req = urllib.request.Request(url, data=json.dumps(data).encode(), method="PUT")
    req.add_header("Authorization", "token " + TOKEN)
    req.add_header("Accept", "application/vnd.github.v3+json")
    req.add_header("Content-Type", "application/json")
    try:
        with urllib.request.urlopen(req) as resp:
            return json.loads(resp.read())
    except urllib.error.HTTPError as e:
        print("ERROR %d: %s" % (e.code, e.read().decode()[:500]))
        return None

def api_get_sha(path):
    url = "%s/repos/%s/%s/contents/%s?ref=%s" % (API, OWNER, REPO, path, BRANCH)
    req = urllib.request.Request(url)
    req.add_header("Authorization", "token " + TOKEN)
    req.add_header("Accept", "application/vnd.github.v3+json")
    try:
        with urllib.request.urlopen(req) as resp:
            return json.loads(resp.read()).get("sha")
    except urllib.error.HTTPError:
        return None

def main():
    if not TOKEN:
        print("ERROR: GH_TOKEN environment variable not set")
        return
    base = os.path.dirname(os.path.abspath(__file__))
    ok, fail = 0, 0
    for fpath in FILES:
        local = os.path.join(base, fpath)
        if not os.path.exists(local):
            print("SKIP (not found): %s" % fpath)
            continue
        with open(local, "rb") as f:
            content = base64.b64encode(f.read()).decode()
        sha = api_get_sha(fpath)
        result = api_put(fpath, content, sha,
            "v2: 46 prerequisite modules (2000+ chars each) + runtime KB derivation")
        if result:
            print("OK: %s" % fpath)
            ok += 1
        else:
            print("FAIL: %s" % fpath)
            fail += 1
    print("\nDone: %d succeeded, %d failed" % (ok, fail))
    print("URL: https://wadesha.github.io/academic-paper/")

if __name__ == "__main__":
    main()
