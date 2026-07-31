# Scalable Survival Analysis Competing Risks for Large-Scale Settings

> Companion Markdown. References are **real/verifiable** (OpenAlex/arXiv); experiments are **illustrative/simulated**.

## Abstract
This paper studies **Survival Analysis Competing Risks**, grounded in a real, citable literature, and proposes a focused method with illustrative experiments.

## 1. Introduction
Survival Analysis Competing Risks is an active research area. We target a concrete gap identified from recent literature.

## 2. Related Work (real literature)
- Kanda (2012) — "Investigation of the freely available easy-to-use software ‘EZR’ for medical statistics", Bone Marrow Transplantation (cited 18981).
- Fine et al. (1999) — "A Proportional Hazards Model for the Subdistribution of a Competing Risk", Journal of the American Statistical Association (cited 13695).
- Chalasani et al. (2017) — "The diagnosis and management of nonalcoholic fatty liver disease: Practice guidance from the American Association for the Study of Liver Diseases", Hepatology (cited 7338).
- Ray (1988) — "A Class of $K$-Sample Tests for Comparing the Cumulative Incidence of a Competing Risk", The Annals of Statistics (cited 4992).
- Chalasani et al. (2012) — "The diagnosis and management of non-alcoholic fatty liver disease: Practice Guideline by the American Association for the Study of Liver Diseases, American College of Gastroenterology, and the American Gastroenterological Association", Hepatology (cited 3828).
- Hosmer et al. (1999) — "Applied survival analysis regression modeling of time to event data" (cited 3040).

## 3. Method
We decompose the problem across shards with a communication-efficient aggregation rule that keeps overhead sublinear in scale. We instantiate this idea for Survival Analysis Competing Risks.

## 4. Experiments (Illustrative)
| System | Primary Metric | Efficiency |
|---|---|---|
| Strong baseline | 0.812 | 1.00× |
| Ablation | 0.828 | 0.92× |
| **Ours** | **0.851** | **0.71×** |

*Metrics simulated to illustrate intended behaviour; not measured.*

## 5. Conclusion
We connected a real literature to a concrete method for Survival Analysis Competing Risks.

## References (real, verifiable)
1. Yoshinobu Kanda. Investigation of the freely available easy-to-use software ‘EZR’ for medical statistics. *Bone Marrow Transplantation*, 2012. DOI:10.1038/bmt.2012.244
2. Jason P. Fine, Malcolm H. Ray. A Proportional Hazards Model for the Subdistribution of a Competing Risk. *Journal of the American Statistical Association*, 1999. DOI:10.1080/01621459.1999.10474144
3. Naga Chalasani, Zobair M. Younossi, Joel E. Lavine et al.. The diagnosis and management of nonalcoholic fatty liver disease: Practice guidance from the American Association for the Study of Liver Diseases. *Hepatology*, 2017. DOI:10.1002/hep.29367
4. Malcolm H. Ray. A Class of $K$-Sample Tests for Comparing the Cumulative Incidence of a Competing Risk. *The Annals of Statistics*, 1988. DOI:10.1214/aos/1176350951
5. Naga Chalasani, Zobair M. Younossi, Joel E. Lavine et al.. The diagnosis and management of non-alcoholic fatty liver disease: Practice Guideline by the American Association for the Study of Liver Diseases, American College of Gastroenterology, and the American Gastroenterological Association. *Hepatology*, 2012. DOI:10.1002/hep.25762
6. David W. Hosmer, Stanley Lemeshow, Susanne May. Applied survival analysis regression modeling of time to event data. **, 1999. 
7. John M. Bennett, DANIEL CATOVSKY, MARIE T. DANIEL et al.. Proposed Revised Criteria for the Classification of Acute Myeloid Leukemia. *Annals of Internal Medicine*, 1985. DOI:10.7326/0003-4819-103-4-620
8. Christopher M. Petrilli, Simon A Jones, Jie Yang et al.. Factors associated with hospital admission and critical illness among 5279 people with coronavirus disease 2019 in New York City: prospective cohort study. *BMJ*, 2020. DOI:10.1136/bmj.m1966
