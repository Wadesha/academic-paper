# Robust Multiple Hypothesis Testing False Discovery under Distribution Shift

> Companion Markdown. References are **real/verifiable** (OpenAlex/arXiv); experiments are **illustrative/simulated**.

## Abstract
This paper studies **Multiple Hypothesis Testing False Discovery**, grounded in a real, citable literature, and proposes a focused method with illustrative experiments.

## 1. Introduction
Multiple Hypothesis Testing False Discovery is an active research area. We target a concrete gap identified from recent literature.

## 2. Related Work (real literature)
- Storey et al. (2003) — "Statistical significance for genomewide studies", Proceedings of the National Academy of Sciences (cited 10152).
- Storey (2002) — "A Direct Approach to False Discovery Rates", Journal of the Royal Statistical Society Series B (Statistical Methodology) (cited 5815).
- Genovese et al. (2002) — "Thresholding of Statistical Maps in Functional Neuroimaging Using the False Discovery Rate", NeuroImage (cited 5038).
- Anderson (2008) — "Multiple Inference and Gender Differences in the Effects of Early Intervention: A Reevaluation of the Abecedarian, Perry Preschool, and Early Training Projects", Journal of the American Statistical Association (cited 2396).
- Storey (2003) — "The positive false discovery rate: a Bayesian interpretation and the q-value", The Annals of Statistics (cited 2316).
- Nakagawa (2004) — "A farewell to Bonferroni: the problems of low statistical power and publication bias", Behavioral Ecology (cited 2132).

## 3. Method
We model distribution shift explicitly and optimise a worst-case objective over an uncertainty set of plausible test distributions. We instantiate this idea for Multiple Hypothesis Testing False Discovery.

## 4. Experiments (Illustrative)
| System | Primary Metric | Efficiency |
|---|---|---|
| Strong baseline | 0.812 | 1.00× |
| Ablation | 0.828 | 0.92× |
| **Ours** | **0.851** | **0.71×** |

*Metrics simulated to illustrate intended behaviour; not measured.*

## 5. Conclusion
We connected a real literature to a concrete method for Multiple Hypothesis Testing False Discovery.

## References (real, verifiable)
1. John D. Storey, Robert Tibshirani. Statistical significance for genomewide studies. *Proceedings of the National Academy of Sciences*, 2003. DOI:10.1073/pnas.1530509100
2. John D. Storey. A Direct Approach to False Discovery Rates. *Journal of the Royal Statistical Society Series B (Statistical Methodology)*, 2002. DOI:10.1111/1467-9868.00346
3. Christopher R. Genovese, Nicole A. Lazar, Thomas E. Nichols. Thresholding of Statistical Maps in Functional Neuroimaging Using the False Discovery Rate. *NeuroImage*, 2002. DOI:10.1006/nimg.2001.1037
4. Michael Anderson. Multiple Inference and Gender Differences in the Effects of Early Intervention: A Reevaluation of the Abecedarian, Perry Preschool, and Early Training Projects. *Journal of the American Statistical Association*, 2008. DOI:10.1198/016214508000000841
5. John D. Storey. The positive false discovery rate: a Bayesian interpretation and the q-value. *The Annals of Statistics*, 2003. DOI:10.1214/aos/1074290335
6. Shinichi Nakagawa. A farewell to Bonferroni: the problems of low statistical power and publication bias. *Behavioral Ecology*, 2004. DOI:10.1093/beheco/arh107
7. András Lánczky, Balázs Győrffy. Web-Based Survival Analysis Tool Tailored for Medical Research (KMplot): Development and Implementation. *Journal of Medical Internet Research*, 2021. DOI:10.2196/27633
8. Balázs Győrffy. Survival analysis across the entire transcriptome identifies biomarkers with the highest prognostic power in breast cancer. *Computational and Structural Biotechnology Journal*, 2021. DOI:10.1016/j.csbj.2021.07.014
