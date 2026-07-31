# Scalable Polygenic Risk Score Prediction for Large-Scale Settings

> Companion Markdown. References are **real/verifiable** (OpenAlex/arXiv); experiments are **illustrative/simulated**.

## Abstract
This paper studies **Polygenic Risk Score Prediction**, grounded in a real, citable literature, and proposes a focused method with illustrative experiments.

## 1. Introduction
Polygenic Risk Score Prediction is an active research area. We target a concrete gap identified from recent literature.

## 2. Related Work (real literature)
- Khera et al. (2018) — "Genome-wide polygenic scores for common diseases identify individuals with risk equivalent to monogenic mutations", Nature Genetics (cited 3143).
- Ge et al. (2019) — "Polygenic prediction via Bayesian regression and continuous shrinkage priors", Nature Communications (cited 2025).
- Torkamani et al. (2018) — "The personal and clinical utility of polygenic risk scores", Nature Reviews Genetics (cited 1762).
- Dudbridge (2013) — "Power and Predictive Accuracy of Polygenic Risk Scores", PLoS Genetics (cited 1658).
- Michailidou et al. (2017) — "Association analysis identifies 65 new breast cancer risk loci", Nature (cited 1599).
- Martin et al. (2017) — "Human Demographic History Impacts Genetic Risk Prediction across Diverse Populations", The American Journal of Human Genetics (cited 1583).

## 3. Method
We decompose the problem across shards with a communication-efficient aggregation rule that keeps overhead sublinear in scale. We instantiate this idea for Polygenic Risk Score Prediction.

## 4. Experiments (Illustrative)
| System | Primary Metric | Efficiency |
|---|---|---|
| Strong baseline | 0.812 | 1.00× |
| Ablation | 0.828 | 0.92× |
| **Ours** | **0.851** | **0.71×** |

*Metrics simulated to illustrate intended behaviour; not measured.*

## 5. Conclusion
We connected a real literature to a concrete method for Polygenic Risk Score Prediction.

## References (real, verifiable)
1. Amit V. Khera, Mark Chaffin, Krishna G. Aragam et al.. Genome-wide polygenic scores for common diseases identify individuals with risk equivalent to monogenic mutations. *Nature Genetics*, 2018. DOI:10.1038/s41588-018-0183-z
2. Tian Ge, Chia‐Yen Chen, Yang Ni et al.. Polygenic prediction via Bayesian regression and continuous shrinkage priors. *Nature Communications*, 2019. DOI:10.1038/s41467-019-09718-5
3. Ali Torkamani, Nathan E. Wineinger, Eric J. Topol. The personal and clinical utility of polygenic risk scores. *Nature Reviews Genetics*, 2018. DOI:10.1038/s41576-018-0018-x
4. Frank Dudbridge. Power and Predictive Accuracy of Polygenic Risk Scores. *PLoS Genetics*, 2013. DOI:10.1371/journal.pgen.1003348
5. Kyriaki Michailidou, Sara Lindström, Joe Dennis et al.. Association analysis identifies 65 new breast cancer risk loci. *Nature*, 2017. DOI:10.1038/nature24284
6. Alicia R. Martin, Christopher R. Gignoux, Raymond K. Walters et al.. Human Demographic History Impacts Genetic Risk Prediction across Diverse Populations. *The American Journal of Human Genetics*, 2017. DOI:10.1016/j.ajhg.2017.03.004
7. Nasim Mavaddat, Kyriaki Michailidou, Joe Dennis et al.. Polygenic Risk Scores for Prediction of Breast Cancer and Breast Cancer Subtypes. *The American Journal of Human Genetics*, 2018. DOI:10.1016/j.ajhg.2018.11.002
8. Daifeng Wang, Shuang Liu, Jonathan Warrell et al.. Comprehensive functional genomic resource and integrative model for the human brain. *Science*, 2018. DOI:10.1126/science.aat8464
