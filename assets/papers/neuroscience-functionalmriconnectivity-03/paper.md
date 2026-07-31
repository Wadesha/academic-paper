# Scalable Functional Mri Connectivity for Large-Scale Settings

> Companion Markdown. References are **real/verifiable** (OpenAlex/arXiv); experiments are **illustrative/simulated**.

## Abstract
This paper studies **Functional Mri Connectivity**, grounded in a real, citable literature, and proposes a focused method with illustrative experiments.

## 1. Introduction
Functional Mri Connectivity is an active research area. We target a concrete gap identified from recent literature.

## 2. Related Work (real literature)
- Biswal et al. (1995) — "Functional connectivity in the motor cortex of resting human brain using echo‐planar mri", Magnetic Resonance in Medicine (cited 10134).
- Yeo et al. (2011) — "The organization of the human cerebral cortex estimated by intrinsic functional connectivity", Journal of Neurophysiology (cited 9934).
- Buckner et al. (2011) — "The organization of the human cerebellum estimated by intrinsic functional connectivity", Journal of Neurophysiology (cited 7910).
- Power et al. (2011) — "Spurious but systematic correlations in functional connectivity MRI networks arise from subject motion", NeuroImage (cited 7910).
- Seeley et al. (2007) — "Dissociable Intrinsic Connectivity Networks for Salience Processing and Executive Control", Journal of Neuroscience (cited 7583).
- Power et al. (2011) — "Functional Network Organization of the Human Brain", Neuron (cited 4451).

## 3. Method
We decompose the problem across shards with a communication-efficient aggregation rule that keeps overhead sublinear in scale. We instantiate this idea for Functional Mri Connectivity.

## 4. Experiments (Illustrative)
| System | Primary Metric | Efficiency |
|---|---|---|
| Strong baseline | 0.812 | 1.00× |
| Ablation | 0.828 | 0.92× |
| **Ours** | **0.851** | **0.71×** |

*Metrics simulated to illustrate intended behaviour; not measured.*

## 5. Conclusion
We connected a real literature to a concrete method for Functional Mri Connectivity.

## References (real, verifiable)
1. Bharat B. Biswal, F. Zerrin Yetkin, Victor M. Haughton et al.. Functional connectivity in the motor cortex of resting human brain using echo‐planar mri. *Magnetic Resonance in Medicine*, 1995. DOI:10.1002/mrm.1910340409
2. B.T. Thomas Yeo, Fenna M. Krienen, Jorge Sepulcre et al.. The organization of the human cerebral cortex estimated by intrinsic functional connectivity. *Journal of Neurophysiology*, 2011. DOI:10.1152/jn.00338.2011
3. Randy L. Buckner, Fenna M. Krienen, Angela Castellanos et al.. The organization of the human cerebellum estimated by intrinsic functional connectivity. *Journal of Neurophysiology*, 2011. DOI:10.1152/jn.00339.2011
4. Jonathan D. Power, Kelly A. Barnes, Abraham Z. Snyder et al.. Spurious but systematic correlations in functional connectivity MRI networks arise from subject motion. *NeuroImage*, 2011. DOI:10.1016/j.neuroimage.2011.10.018
5. William W. Seeley, Vinod Menon, Alan F. Schatzberg et al.. Dissociable Intrinsic Connectivity Networks for Salience Processing and Executive Control. *Journal of Neuroscience*, 2007. DOI:10.1523/jneurosci.5587-06.2007
6. Jonathan D. Power, Alexander L. Cohen, Steven M. Nelson et al.. Functional Network Organization of the Human Brain. *Neuron*, 2011. DOI:10.1016/j.neuron.2011.09.006
7. Jessica S. Damoiseaux, Serge A.R.B. Rombouts, Frederik Barkhof et al.. Consistent resting-state networks across healthy subjects. *Proceedings of the National Academy of Sciences*, 2006. DOI:10.1073/pnas.0601417103
8. Alexander Schaefer, Ru Kong, Evan M. Gordon et al.. Local-Global Parcellation of the Human Cerebral Cortex from Intrinsic Functional Connectivity MRI. *Cerebral Cortex*, 2017. DOI:10.1093/cercor/bhx179
