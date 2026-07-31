# Scalable Landslide Susceptibility Mapping for Large-Scale Settings

> Companion Markdown. References are **real/verifiable** (OpenAlex/arXiv); experiments are **illustrative/simulated**.

## Abstract
This paper studies **Landslide Susceptibility Mapping**, grounded in a real, citable literature, and proposes a focused method with illustrative experiments.

## 1. Introduction
Landslide Susceptibility Mapping is an active research area. We target a concrete gap identified from recent literature.

## 2. Related Work (real literature)
- Guzzetti et al. (2012) — "Landslide inventory maps: New tools for an old problem", Earth-Science Reviews (cited 2089).
- Ayalew et al. (2004) — "The application of GIS-based logistic regression for landslide susceptibility mapping in the Kakuda-Yahiko Mountains, Central Japan", Geomorphology (cited 1921).
- Fell et al. (2008) — "Guidelines for landslide susceptibility, hazard and risk zoning for land use planning", Engineering Geology (cited 1476).
- Bui et al. (2015) — "Spatial prediction models for shallow landslide hazards: a comparative assessment of the efficacy of support vector machines, artificial neural networks, kernel logistic regression, and logistic model tree", Landslides (cited 1260).
- Pradhan (2012) — "A comparative study on the predictive ability of the decision tree, support vector machine and neuro-fuzzy models in landslide susceptibility mapping using GIS", Computers & Geosciences (cited 1209).
- Merghadi et al. (2020) — "Machine learning methods for landslide susceptibility studies: A comparative overview of algorithm performance", Earth-Science Reviews (cited 1163).

## 3. Method
We decompose the problem across shards with a communication-efficient aggregation rule that keeps overhead sublinear in scale. We instantiate this idea for Landslide Susceptibility Mapping.

## 4. Experiments (Illustrative)
| System | Primary Metric | Efficiency |
|---|---|---|
| Strong baseline | 0.812 | 1.00× |
| Ablation | 0.828 | 0.92× |
| **Ours** | **0.851** | **0.71×** |

*Metrics simulated to illustrate intended behaviour; not measured.*

## 5. Conclusion
We connected a real literature to a concrete method for Landslide Susceptibility Mapping.

## References (real, verifiable)
1. Fausto Guzzetti, Alessandro Mondini, Mauro Cardinali et al.. Landslide inventory maps: New tools for an old problem. *Earth-Science Reviews*, 2012. DOI:10.1016/j.earscirev.2012.02.001
2. Lulseged Ayalew, Hiromitsu Yamagishi. The application of GIS-based logistic regression for landslide susceptibility mapping in the Kakuda-Yahiko Mountains, Central Japan. *Geomorphology*, 2004. DOI:10.1016/j.geomorph.2004.06.010
3. Robin Fell, Jordi Corominas, C. Bonnard et al.. Guidelines for landslide susceptibility, hazard and risk zoning for land use planning. *Engineering Geology*, 2008. DOI:10.1016/j.enggeo.2008.03.022
4. Dieu Tien Bui, Trần Anh Tuấn, Harald Klempe et al.. Spatial prediction models for shallow landslide hazards: a comparative assessment of the efficacy of support vector machines, artificial neural networks, kernel logistic regression, and logistic model tree. *Landslides*, 2015. DOI:10.1007/s10346-015-0557-6
5. Biswajeet Pradhan. A comparative study on the predictive ability of the decision tree, support vector machine and neuro-fuzzy models in landslide susceptibility mapping using GIS. *Computers & Geosciences*, 2012. DOI:10.1016/j.cageo.2012.08.023
6. Abdelaziz Merghadi, Ali P. Yunus, Jie Dou et al.. Machine learning methods for landslide susceptibility studies: A comparative overview of algorithm performance. *Earth-Science Reviews*, 2020. DOI:10.1016/j.earscirev.2020.103225
7. Michel Jaboyedoff, Thierry Oppikofer, Antonio Abellán et al.. Use of LIDAR in landslide investigations: a review. *Natural Hazards*, 2010. DOI:10.1007/s11069-010-9634-2
8. Hamid Reza Pourghasemi, Biswajeet Pradhan, Candan Gökçeoğlu. Application of fuzzy logic and analytical hierarchy process (AHP) to landslide susceptibility mapping at Haraz watershed, Iran. *Natural Hazards*, 2012. DOI:10.1007/s11069-012-0217-2
