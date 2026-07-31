# Robust Mixed Effects Longitudinal Models under Distribution Shift

> Companion Markdown. References are **real/verifiable** (OpenAlex/arXiv); experiments are **illustrative/simulated**.

## Abstract
This paper studies **Mixed Effects Longitudinal Models**, grounded in a real, citable literature, and proposes a focused method with illustrative experiments.

## 1. Introduction
Mixed Effects Longitudinal Models is an active research area. We target a concrete gap identified from recent literature.

## 2. Related Work (real literature)
- Breslow et al. (1993) — "Approximate Inference in Generalized Linear Mixed Models", Journal of the American Statistical Association (cited 4222).
- Singer (1998) — "Using SAS PROC MIXED to Fit Multilevel Models, Hierarchical Models, and Individual Growth Models", Journal of Educational and Behavioral Statistics (cited 2715).
- Harman et al. (2001) — "Longitudinal Effects of Aging on Serum Total and Free Testosterone Levels in Healthy Men", The Journal of Clinical Endocrinology & Metabolism (cited 2690).
- Fox (2008) — "Applied Regression Analysis and Generalized Linear Models" (cited 2112).
- Anderson et al. (1991) — "An updated coronary risk profile. A statement for health professionals.", Circulation (cited 1865).
- Epanechnikov (1969) — "Non-Parametric Estimation of a Multivariate Probability Density", Theory of Probability and Its Applications (cited 1838).

## 3. Method
We model distribution shift explicitly and optimise a worst-case objective over an uncertainty set of plausible test distributions. We instantiate this idea for Mixed Effects Longitudinal Models.

## 4. Experiments (Illustrative)
| System | Primary Metric | Efficiency |
|---|---|---|
| Strong baseline | 0.812 | 1.00× |
| Ablation | 0.828 | 0.92× |
| **Ours** | **0.851** | **0.71×** |

*Metrics simulated to illustrate intended behaviour; not measured.*

## 5. Conclusion
We connected a real literature to a concrete method for Mixed Effects Longitudinal Models.

## References (real, verifiable)
1. N. E. Breslow, David Clayton. Approximate Inference in Generalized Linear Mixed Models. *Journal of the American Statistical Association*, 1993. DOI:10.1080/01621459.1993.10594284
2. J. David Singer. Using SAS PROC MIXED to Fit Multilevel Models, Hierarchical Models, and Individual Growth Models. *Journal of Educational and Behavioral Statistics*, 1998. DOI:10.3102/10769986023004323
3. S. Mitchell Harman, E. Jeffrey Metter, Jordan D. Tobin et al.. Longitudinal Effects of Aging on Serum Total and Free Testosterone Levels in Healthy Men. *The Journal of Clinical Endocrinology & Metabolism*, 2001. DOI:10.1210/jcem.86.2.7219
4. John Fox. Applied Regression Analysis and Generalized Linear Models. **, 2008. 
5. Keaven M. Anderson, P W Wilson, Patricia M. Odell et al.. An updated coronary risk profile. A statement for health professionals.. *Circulation*, 1991. DOI:10.1161/01.cir.83.1.356
6. V. A. Epanechnikov. Non-Parametric Estimation of a Multivariate Probability Density. *Theory of Probability and Its Applications*, 1969. DOI:10.1137/1114019
7. . Longitudinal Data Analysis. *The SAGE Encyclopedia of Educational Research, Measurement, and Evaluation*, 2018. DOI:10.4135/9781506326139.n404
8. Brady T. West, Kathleen B. Welch, Andrzej T. Gałecki. Linear Mixed Models: A Practical Guide Using Statistical Software. **, 2006. 
