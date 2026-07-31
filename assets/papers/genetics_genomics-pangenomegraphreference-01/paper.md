# Efficient Pangenome Graph Reference: A Resource-Aware Approach

> Companion Markdown. References are **real/verifiable** (OpenAlex/arXiv); experiments are **illustrative/simulated**.

## Abstract
This paper studies **Pangenome Graph Reference**, grounded in a real, citable literature, and proposes a focused method with illustrative experiments.

## 1. Introduction
Pangenome Graph Reference is an active research area. We target a concrete gap identified from recent literature.

## 2. Related Work (real literature)
- Martin et al. (2022) — "Ensembl 2023", Nucleic Acids Research (cited 1109).
- Wang et al. (2022) — "The Human Pangenome Project: a global resource to map genomic diversity", Nature (cited 571).
- Zhou et al. (2022) — "Graph pangenome captures missing heritability and empowers tomato breeding", Nature (cited 537).
- Li et al. (2020) — "The design and construction of reference pangenome graphs with minigraph", Genome biology (cited 508).
- Sirén et al. (2021) — "Pangenomics enables genotyping of known structural variants in 5202 diverse genomes", Science (cited 423).
- Hickey et al. (2023) — "Pangenome graph construction from genome alignments with Minigraph-Cactus", Nature Biotechnology (cited 322).

## 3. Method
We reduce the dominant computational cost via adaptive resource allocation, activating only the components needed per input. We instantiate this idea for Pangenome Graph Reference.

## 4. Experiments (Illustrative)
| System | Primary Metric | Efficiency |
|---|---|---|
| Strong baseline | 0.812 | 1.00× |
| Ablation | 0.828 | 0.92× |
| **Ours** | **0.851** | **0.71×** |

*Metrics simulated to illustrate intended behaviour; not measured.*

## 5. Conclusion
We connected a real literature to a concrete method for Pangenome Graph Reference.

## References (real, verifiable)
1. Fergal J. Martin, M Ridwan Amode, Alisha Aneja et al.. Ensembl 2023. *Nucleic Acids Research*, 2022. DOI:10.1093/nar/gkac958
2. Ting Wang, Lucinda Antonacci-Fulton, Kerstin Howe et al.. The Human Pangenome Project: a global resource to map genomic diversity. *Nature*, 2022. DOI:10.1038/s41586-022-04601-8
3. Yao Zhou, Zhiyang Zhang, Zhigui Bao et al.. Graph pangenome captures missing heritability and empowers tomato breeding. *Nature*, 2022. DOI:10.1038/s41586-022-04808-9
4. Heng Li, Xiaowen Feng, Chong Chu. The design and construction of reference pangenome graphs with minigraph. *Genome biology*, 2020. DOI:10.1186/s13059-020-02168-z
5. Jouni Sirén, Jean Monlong, Xian Chang et al.. Pangenomics enables genotyping of known structural variants in 5202 diverse genomes. *Science*, 2021. DOI:10.1126/science.abg8871
6. Glenn Hickey, Jean Monlong, Jana Ebler et al.. Pangenome graph construction from genome alignments with Minigraph-Cactus. *Nature Biotechnology*, 2023. DOI:10.1038/s41587-023-01793-w
7. Erik Garrison, Zev Kronenberg, Eric T. Dawson et al.. A spectrum of free software tools for processing the VCF variant call format: vcflib, bio-vcf, cyvcf2, hts-nim and slivar. *PLoS Computational Biology*, 2022. DOI:10.1371/journal.pcbi.1009123
8. Erich D. Jarvis, Giulio Formenti, Arang Rhie et al.. Semi-automated assembly of high-quality diploid human reference genomes. *Nature*, 2022. DOI:10.1038/s41586-022-05325-5
