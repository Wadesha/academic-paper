# Scalable Neural Population Dynamics for Large-Scale Settings

> Companion Markdown. References are **real/verifiable** (OpenAlex/arXiv); experiments are **illustrative/simulated**.

## Abstract
This paper studies **Neural Population Dynamics**, grounded in a real, citable literature, and proposes a focused method with illustrative experiments.

## 1. Introduction
Neural Population Dynamics is an active research area. We target a concrete gap identified from recent literature.

## 2. Related Work (real literature)
- Chen et al. (2013) — "Ultrasensitive fluorescent proteins for imaging neuronal activity", Nature (cited 7172).
- Strang (1968) — "On the Construction and Comparison of Difference Schemes", SIAM Journal on Numerical Analysis (cited 3509).
- Edelman (1987) — "Neural Darwinism: The Theory Of Neuronal Group Selection" (cited 2540).
- Grill‐Spector et al. (2005) — "Repetition and the brain: neural models of stimulus-specific effects", Trends in Cognitive Sciences (cited 2355).
- Mante et al. (2013) — "Context-dependent computation by recurrent dynamics in prefrontal cortex", Nature (cited 2096).
- Taniguchi et al. (2011) — "A Resource of Cre Driver Lines for Genetic Targeting of GABAergic Neurons in Cerebral Cortex", Neuron (cited 2055).

## 3. Method
We decompose the problem across shards with a communication-efficient aggregation rule that keeps overhead sublinear in scale. We instantiate this idea for Neural Population Dynamics.

## 4. Experiments (Illustrative)
| System | Primary Metric | Efficiency |
|---|---|---|
| Strong baseline | 0.812 | 1.00× |
| Ablation | 0.828 | 0.92× |
| **Ours** | **0.851** | **0.71×** |

*Metrics simulated to illustrate intended behaviour; not measured.*

## 5. Conclusion
We connected a real literature to a concrete method for Neural Population Dynamics.

## References (real, verifiable)
1. Tsai‐Wen Chen, Trevor J. Wardill, Yi Sun et al.. Ultrasensitive fluorescent proteins for imaging neuronal activity. *Nature*, 2013. DOI:10.1038/nature12354
2. Gilbert Strang. On the Construction and Comparison of Difference Schemes. *SIAM Journal on Numerical Analysis*, 1968. DOI:10.1137/0705041
3. Gerald M. Edelman. Neural Darwinism: The Theory Of Neuronal Group Selection. **, 1987. 
4. Kalanit Grill‐Spector, Richard N. Henson, Alex Martin. Repetition and the brain: neural models of stimulus-specific effects. *Trends in Cognitive Sciences*, 2005. DOI:10.1016/j.tics.2005.11.006
5. Valerio Mante, David Sussillo, Krishna V. Shenoy et al.. Context-dependent computation by recurrent dynamics in prefrontal cortex. *Nature*, 2013. DOI:10.1038/nature12742
6. Hiroki Taniguchi, Miao He, Priscilla Wu et al.. A Resource of Cre Driver Lines for Genetic Targeting of GABAergic Neurons in Cerebral Cortex. *Neuron*, 2011. DOI:10.1016/j.neuron.2011.07.026
7. Carl van Vreeswijk, Haim Sompolinsky. Chaos in Neuronal Networks with Balanced Excitatory and Inhibitory Activity. *Science*, 1996. DOI:10.1126/science.274.5293.1724
8. V. A. Epanechnikov. Non-Parametric Estimation of a Multivariate Probability Density. *Theory of Probability and Its Applications*, 1969. DOI:10.1137/1114019
