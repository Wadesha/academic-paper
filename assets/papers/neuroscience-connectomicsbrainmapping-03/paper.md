# Scalable Connectomics Brain Mapping for Large-Scale Settings

> Companion Markdown. References are **real/verifiable** (OpenAlex/arXiv); experiments are **illustrative/simulated**.

## Abstract
This paper studies **Connectomics Brain Mapping**, grounded in a real, citable literature, and proposes a focused method with illustrative experiments.

## 1. Introduction
Connectomics Brain Mapping is an active research area. We target a concrete gap identified from recent literature.

## 2. Related Work (real literature)
- Gordon et al. (2017) — "Precision Functional Mapping of Individual Human Brains", Neuron (cited 1549).
- Yeh et al. (2013) — "Deterministic Diffusion Fiber Tracking Improved by Quantitative Anisotropy", PLoS ONE (cited 1185).
- Smith et al. (2013) — "Functional connectomics from resting-state fMRI", Trends in Cognitive Sciences (cited 1034).
- Fornito et al. (2013) — "Graph analysis of the human connectome: Promise, progress, and pitfalls", NeuroImage (cited 803).
- Fornito et al. (2012) — "Schizophrenia, neuroimaging and connectomics", NeuroImage (cited 748).
- Deco et al. (2014) — "Great Expectations: Using Whole-Brain Computational Connectomics for Understanding Neuropsychiatric Disorders", Neuron (cited 467).

## 3. Method
We decompose the problem across shards with a communication-efficient aggregation rule that keeps overhead sublinear in scale. We instantiate this idea for Connectomics Brain Mapping.

## 4. Experiments (Illustrative)
| System | Primary Metric | Efficiency |
|---|---|---|
| Strong baseline | 0.812 | 1.00× |
| Ablation | 0.828 | 0.92× |
| **Ours** | **0.851** | **0.71×** |

*Metrics simulated to illustrate intended behaviour; not measured.*

## 5. Conclusion
We connected a real literature to a concrete method for Connectomics Brain Mapping.

## References (real, verifiable)
1. Evan M. Gordon, Timothy O. Laumann, Adrian W. Gilmore et al.. Precision Functional Mapping of Individual Human Brains. *Neuron*, 2017. DOI:10.1016/j.neuron.2017.07.011
2. Fang‐Cheng Yeh, Timothy Verstynen, Yibao Wang et al.. Deterministic Diffusion Fiber Tracking Improved by Quantitative Anisotropy. *PLoS ONE*, 2013. DOI:10.1371/journal.pone.0080713
3. Stephen M. Smith, Diego Vidaurre, Christian F. Beckmann et al.. Functional connectomics from resting-state fMRI. *Trends in Cognitive Sciences*, 2013. DOI:10.1016/j.tics.2013.09.016
4. Alex Fornito, Andrew Zalesky, Michael Breakspear. Graph analysis of the human connectome: Promise, progress, and pitfalls. *NeuroImage*, 2013. DOI:10.1016/j.neuroimage.2013.04.087
5. Alex Fornito, Andrew Zalesky, Christos Pantelis et al.. Schizophrenia, neuroimaging and connectomics. *NeuroImage*, 2012. DOI:10.1016/j.neuroimage.2011.12.090
6. Gustavo Deco, Morten L. Kringelbach. Great Expectations: Using Whole-Brain Computational Connectomics for Understanding Neuropsychiatric Disorders. *Neuron*, 2014. DOI:10.1016/j.neuron.2014.08.034
7. Hugues Duffau. Stimulation mapping of white matter tracts to study brain functional connectivity. *Nature Reviews Neurology*, 2015. DOI:10.1038/nrneurol.2015.51
8. Mayuresh S. Korgaonkar, Alex Fornito, Leanne M. Williams et al.. Abnormal Structural Networks Characterize Major Depressive Disorder: A Connectome Analysis. *Biological Psychiatry*, 2014. DOI:10.1016/j.biopsych.2014.02.018
