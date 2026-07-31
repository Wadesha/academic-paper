# Scalable Causal Inference Observational Data for Large-Scale Settings

> Companion Markdown. References are **real/verifiable** (OpenAlex/arXiv); experiments are **illustrative/simulated**.

## Abstract
This paper studies **Causal Inference Observational Data**, grounded in a real, citable literature, and proposes a focused method with illustrative experiments.

## 1. Introduction
Causal Inference Observational Data is an active research area. We target a concrete gap identified from recent literature.

## 2. Related Work (real literature)
- Stuart (2010) — "Matching Methods for Causal Inference: A Review and a Look Forward", Statistical Science (cited 5421).
- Spirtes et al. (2001) — "Causation, Prediction, and Search", The MIT Press eBooks (cited 4503).
- Hartwig et al. (2017) — "Robust inference in summary data Mendelian randomization via the zero modal pleiotropy assumption", International Journal of Epidemiology (cited 3781).
- Rubin (1997) — "Estimating Causal Effects from Large Data Sets Using Propensity Scores", Annals of Internal Medicine (cited 2912).
- Hernán et al. (2016) — "Using Big Data to Emulate a Target Trial When a Randomized Trial Is Not Available: Table 1.", American Journal of Epidemiology (cited 2850).
- Robins (1986) — "A new approach to causal inference in mortality studies with a sustained exposure period—application to control of the healthy worker survivor effect", Mathematical Modelling (cited 2518).

## 3. Method
We decompose the problem across shards with a communication-efficient aggregation rule that keeps overhead sublinear in scale. We instantiate this idea for Causal Inference Observational Data.

## 4. Experiments (Illustrative)
| System | Primary Metric | Efficiency |
|---|---|---|
| Strong baseline | 0.812 | 1.00× |
| Ablation | 0.828 | 0.92× |
| **Ours** | **0.851** | **0.71×** |

*Metrics simulated to illustrate intended behaviour; not measured.*

## 5. Conclusion
We connected a real literature to a concrete method for Causal Inference Observational Data.

## References (real, verifiable)
1. Elizabeth A. Stuart. Matching Methods for Causal Inference: A Review and a Look Forward. *Statistical Science*, 2010. DOI:10.1214/09-sts313
2. Peter Spirtes, Clark Glymour, Richard Scheines. Causation, Prediction, and Search. *The MIT Press eBooks*, 2001. DOI:10.7551/mitpress/1754.001.0001
3. Fernando Pires Hartwig, George Davey Smith, Jack Bowden. Robust inference in summary data Mendelian randomization via the zero modal pleiotropy assumption. *International Journal of Epidemiology*, 2017. DOI:10.1093/ije/dyx102
4. Donald B. Rubin. Estimating Causal Effects from Large Data Sets Using Propensity Scores. *Annals of Internal Medicine*, 1997. DOI:10.7326/0003-4819-127-8_part_2-199710151-00064
5. Miguel A. Hernán, James M. Robins. Using Big Data to Emulate a Target Trial When a Randomized Trial Is Not Available: Table 1.. *American Journal of Epidemiology*, 2016. DOI:10.1093/aje/kwv254
6. James M. Robins. A new approach to causal inference in mortality studies with a sustained exposure period—application to control of the healthy worker survivor effect. *Mathematical Modelling*, 1986. DOI:10.1016/0270-0255(86)90088-6
7. Joy D. Osofsky. Handbook of infant development. **, 1979. 
8. Heejung Bang, James M. Robins. Doubly Robust Estimation in Missing Data and Causal Inference Models. *Biometrics*, 2005. DOI:10.1111/j.1541-0420.2005.00377.x
