# Robust Long Read Sequencing Assembly under Distribution Shift

> Companion Markdown. References are **real/verifiable** (OpenAlex/arXiv); experiments are **illustrative/simulated**.

## Abstract
This paper studies **Long Read Sequencing Assembly**, grounded in a real, citable literature, and proposes a focused method with illustrative experiments.

## 1. Introduction
Long Read Sequencing Assembly is an active research area. We target a concrete gap identified from recent literature.

## 2. Related Work (real literature)
- Li (2018) — "Minimap2: pairwise alignment for nucleotide sequences", Bioinformatics (cited 17224).
- Magoč et al. (2011) — "FLASH: fast length adjustment of short reads to improve genome assemblies", Bioinformatics (cited 15908).
- Wick et al. (2017) — "Unicycler: Resolving bacterial genome assemblies from short and long sequencing reads", PLoS Computational Biology (cited 8935).
- Koren et al. (2017) — "Canu: scalable and accurate long-read assembly via adaptive <i>k</i> -mer weighting and repeat separation", Genome Research (cited 8269).
- Kolmogorov et al. (2019) — "Assembly of long, error-prone reads using repeat graphs", Nature Biotechnology (cited 6480).
- Jonathan et al. (2020) — "Denoising Diffusion Probabilistic Models", arXiv (Cornell University) (cited 5653).

## 3. Method
We model distribution shift explicitly and optimise a worst-case objective over an uncertainty set of plausible test distributions. We instantiate this idea for Long Read Sequencing Assembly.

## 4. Experiments (Illustrative)
| System | Primary Metric | Efficiency |
|---|---|---|
| Strong baseline | 0.812 | 1.00× |
| Ablation | 0.828 | 0.92× |
| **Ours** | **0.851** | **0.71×** |

*Metrics simulated to illustrate intended behaviour; not measured.*

## 5. Conclusion
We connected a real literature to a concrete method for Long Read Sequencing Assembly.

## References (real, verifiable)
1. Heng Li. Minimap2: pairwise alignment for nucleotide sequences. *Bioinformatics*, 2018. DOI:10.1093/bioinformatics/bty191
2. Tanja Magoč, Steven L. Salzberg. FLASH: fast length adjustment of short reads to improve genome assemblies. *Bioinformatics*, 2011. DOI:10.1093/bioinformatics/btr507
3. Ryan R. Wick, Louise M. Judd, Claire L. Gorrie et al.. Unicycler: Resolving bacterial genome assemblies from short and long sequencing reads. *PLoS Computational Biology*, 2017. DOI:10.1371/journal.pcbi.1005595
4. Sergey Koren, Brian P. Walenz, Konstantin Berlin et al.. Canu: scalable and accurate long-read assembly via adaptive <i>k</i> -mer weighting and repeat separation. *Genome Research*, 2017. DOI:10.1101/gr.215087.116
5. Mikhail Kolmogorov, Jeffrey Yuan, Yu Lin et al.. Assembly of long, error-prone reads using repeat graphs. *Nature Biotechnology*, 2019. DOI:10.1038/s41587-019-0072-8
6. Ho, Jonathan, Ajay N. Jain, Pieter Abbeel. Denoising Diffusion Probabilistic Models. *arXiv (Cornell University)*, 2020. DOI:10.48550/arxiv.2006.11239
7. Ruibang Luo, Binghang Liu, Yinlong Xie et al.. SOAPdenovo2: an empirically improved memory-efficient short-read <i>de novo</i> assembler. *GigaScience*, 2012. DOI:10.1186/2047-217x-1-18
8. Heng Li. Aligning sequence reads, clone sequences and assembly contigs with BWA-MEM. *DROPS (Schloss Dagstuhl – Leibniz Center for Informatics)*, 2013. DOI:10.48550/arxiv.1303.3997
