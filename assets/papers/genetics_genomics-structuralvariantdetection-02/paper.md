# Robust Structural Variant Detection under Distribution Shift

> Companion Markdown. References are **real/verifiable** (OpenAlex/arXiv); experiments are **illustrative/simulated**.

## Abstract
This paper studies **Structural Variant Detection**, grounded in a real, citable literature, and proposes a focused method with illustrative experiments.

## 1. Introduction
Structural Variant Detection is an active research area. We target a concrete gap identified from recent literature.

## 2. Related Work (real literature)
- Manolio et al. (2009) — "Finding the missing heritability of complex diseases", Nature (cited 8579).
- Chen et al. (2015) — "Manta: rapid detection of structural variants and indels for germline and cancer sequencing applications", Bioinformatics (cited 2479).
- Cheng et al. (2015) — "Memorial Sloan Kettering-Integrated Mutation Profiling of Actionable Cancer Targets (MSK-IMPACT)", Journal of Molecular Diagnostics (cited 2182).
- Ye et al. (2009) — "Pindel: a pattern growth approach to detect break points of large deletions and medium sized insertions from paired-end short reads", Bioinformatics (cited 2178).
- Jain et al. (2018) — "Nanopore sequencing and assembly of a human genome with ultra-long reads", Nature Biotechnology (cited 2119).
- Wenger et al. (2019) — "Accurate circular consensus long-read sequencing improves variant detection and assembly of a human genome", Nature Biotechnology (cited 1995).

## 3. Method
We model distribution shift explicitly and optimise a worst-case objective over an uncertainty set of plausible test distributions. We instantiate this idea for Structural Variant Detection.

## 4. Experiments (Illustrative)
| System | Primary Metric | Efficiency |
|---|---|---|
| Strong baseline | 0.812 | 1.00× |
| Ablation | 0.828 | 0.92× |
| **Ours** | **0.851** | **0.71×** |

*Metrics simulated to illustrate intended behaviour; not measured.*

## 5. Conclusion
We connected a real literature to a concrete method for Structural Variant Detection.

## References (real, verifiable)
1. Teri A. Manolio, Francis S. Collins, Nancy J. Cox et al.. Finding the missing heritability of complex diseases. *Nature*, 2009. DOI:10.1038/nature08494
2. Xiaoyu Chen, Ole Schulz-Trieglaff, Richard J. Shaw et al.. Manta: rapid detection of structural variants and indels for germline and cancer sequencing applications. *Bioinformatics*, 2015. DOI:10.1093/bioinformatics/btv710
3. Donavan T. Cheng, Talia Mitchell, Ahmet Zehir et al.. Memorial Sloan Kettering-Integrated Mutation Profiling of Actionable Cancer Targets (MSK-IMPACT). *Journal of Molecular Diagnostics*, 2015. DOI:10.1016/j.jmoldx.2014.12.006
4. Kai Ye, Marcel H. Schulz, Quan Long et al.. Pindel: a pattern growth approach to detect break points of large deletions and medium sized insertions from paired-end short reads. *Bioinformatics*, 2009. DOI:10.1093/bioinformatics/btp394
5. Miten Jain, Sergey Koren, Karen H. Miga et al.. Nanopore sequencing and assembly of a human genome with ultra-long reads. *Nature Biotechnology*, 2018. DOI:10.1038/nbt.4060
6. Aaron M. Wenger, Paul Peluso, William J. Rowell et al.. Accurate circular consensus long-read sequencing improves variant detection and assembly of a human genome. *Nature Biotechnology*, 2019. DOI:10.1038/s41587-019-0217-9
7. Fritz J. Sedlazeck, Philipp Rescheneder, Moritz Smolka et al.. Accurate detection of complex structural variations using single-molecule sequencing. *Nature Methods*, 2018. DOI:10.1038/s41592-018-0001-7
8. Ryan M. Layer, Colby Chiang, Aaron R. Quinlan et al.. LUMPY: a probabilistic framework for structural variant discovery. *Genome biology*, 2014. DOI:10.1186/gb-2014-15-6-r84
