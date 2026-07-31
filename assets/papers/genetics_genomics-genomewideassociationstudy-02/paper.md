# Robust Genome Wide Association Study under Distribution Shift

> Companion Markdown. References are **real/verifiable** (OpenAlex/arXiv); experiments are **illustrative/simulated**.

## Abstract
This paper studies **Genome Wide Association Study**, grounded in a real, citable literature, and proposes a focused method with illustrative experiments.

## 1. Introduction
Genome Wide Association Study is an active research area. We target a concrete gap identified from recent literature.

## 2. Related Work (real literature)
- Dunham et al. (2012) — "An integrated encyclopedia of DNA elements in the human genome", Nature (cited 19581).
- Chang et al. (2015) — "Second-generation PLINK: rising to the challenge of larger and richer datasets", GigaScience (cited 14199).
- Price et al. (2006) — "Principal components analysis corrects for stratification in genome-wide association studies", Nature Genetics (cited 10822).
- Bowden et al. (2015) — "Mendelian randomization with invalid instruments: effect estimation and bias detection through Egger regression", International Journal of Epidemiology (cited 10750).
- Prior work (2013) — "The Genotype-Tissue Expression (GTEx) project.", PubMed (cited 10115).
- Bycroft et al. (2018) — "The UK Biobank resource with deep phenotyping and genomic data", Nature (cited 9924).

## 3. Method
We model distribution shift explicitly and optimise a worst-case objective over an uncertainty set of plausible test distributions. We instantiate this idea for Genome Wide Association Study.

## 4. Experiments (Illustrative)
| System | Primary Metric | Efficiency |
|---|---|---|
| Strong baseline | 0.812 | 1.00× |
| Ablation | 0.828 | 0.92× |
| **Ours** | **0.851** | **0.71×** |

*Metrics simulated to illustrate intended behaviour; not measured.*

## 5. Conclusion
We connected a real literature to a concrete method for Genome Wide Association Study.

## References (real, verifiable)
1. Ian Dunham, Ewan Birney, Javier Herrero et al.. An integrated encyclopedia of DNA elements in the human genome. *Nature*, 2012. DOI:10.1038/nature11247
2. Christopher Chang, Carson C. Chow, Laurent CAM Tellier et al.. Second-generation PLINK: rising to the challenge of larger and richer datasets. *GigaScience*, 2015. DOI:10.1186/s13742-015-0047-8
3. Alkes L. Price, Nick J. Patterson, Robert M. Plenge et al.. Principal components analysis corrects for stratification in genome-wide association studies. *Nature Genetics*, 2006. DOI:10.1038/ng1847
4. Jack Bowden, George Davey Smith, Stephen Burgess. Mendelian randomization with invalid instruments: effect estimation and bias detection through Egger regression. *International Journal of Epidemiology*, 2015. DOI:10.1093/ije/dyv080
5. . The Genotype-Tissue Expression (GTEx) project.. *PubMed*, 2013. DOI:10.1038/ng.2653
6. Clare Bycroft, Colin Freeman, Desislava Petkova et al.. The UK Biobank resource with deep phenotyping and genomic data. *Nature*, 2018. DOI:10.1038/s41586-018-0579-z
7. Jack Bowden, George Davey Smith, Philip Haycock et al.. Consistent Estimation in Mendelian Randomization with Some Invalid Instruments Using a Weighted Median Estimator. *Genetic Epidemiology*, 2016. DOI:10.1002/gepi.21965
8. Paul R. Burton, David G. Clayton, Lon R. Cardon et al.. Genome-wide association study of 14,000 cases of seven common diseases and 3,000 shared controls. *Nature*, 2007. DOI:10.1038/nature05911
