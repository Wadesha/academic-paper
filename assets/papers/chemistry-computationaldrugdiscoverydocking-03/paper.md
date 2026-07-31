# Scalable Computational Drug Discovery Docking for Large-Scale Settings

> Companion Markdown. References are **real/verifiable** (OpenAlex/arXiv); experiments are **illustrative/simulated**.

## Abstract
This paper studies **Computational Drug Discovery Docking**, grounded in a real, citable literature, and proposes a focused method with illustrative experiments.

## 1. Introduction
Computational Drug Discovery Docking is an active research area. We target a concrete gap identified from recent literature.

## 2. Related Work (real literature)
- Kitchen et al. (2004) — "Docking and scoring in virtual screening for drug discovery: methods and applications", Nature Reviews Drug Discovery (cited 4090).
- Ferreira et al. (2015) — "Molecular Docking and Structure-Based Drug Design Strategies", Molecules (cited 2498).
- Zoete et al. (2011) — "SwissParam: A fast force field generation tool for small organic molecules", Journal of Computational Chemistry (cited 2354).
- Sliwoski et al. (2014) — "Computational Methods in Drug Discovery", Pharmacological Reviews (cited 2186).
- Vilar et al. (2008) — "Medicinal Chemistry and the Molecular Operating Environment (MOE): Application of QSAR and Molecular Docking to Drug Discovery", Current Topics in Medicinal Chemistry (cited 1207).
- Agu et al. (2023) — "Molecular docking as a tool for the discovery of molecular targets of nutraceuticals in diseases management", Scientific Reports (cited 1137).

## 3. Method
We decompose the problem across shards with a communication-efficient aggregation rule that keeps overhead sublinear in scale. We instantiate this idea for Computational Drug Discovery Docking.

## 4. Experiments (Illustrative)
| System | Primary Metric | Efficiency |
|---|---|---|
| Strong baseline | 0.812 | 1.00× |
| Ablation | 0.828 | 0.92× |
| **Ours** | **0.851** | **0.71×** |

*Metrics simulated to illustrate intended behaviour; not measured.*

## 5. Conclusion
We connected a real literature to a concrete method for Computational Drug Discovery Docking.

## References (real, verifiable)
1. Douglas B. Kitchen, Hélène Decornez, John R. Furr et al.. Docking and scoring in virtual screening for drug discovery: methods and applications. *Nature Reviews Drug Discovery*, 2004. DOI:10.1038/nrd1549
2. Leonardo L. G. Ferreira, Ricardo Nascimento dos Santos, Glaucius Oliva et al.. Molecular Docking and Structure-Based Drug Design Strategies. *Molecules*, 2015. DOI:10.3390/molecules200713384
3. Vincent Zoete, Michel A. Cuendet, Aurélien Grosdidier et al.. SwissParam: A fast force field generation tool for small organic molecules. *Journal of Computational Chemistry*, 2011. DOI:10.1002/jcc.21816
4. Gregory Sliwoski, Sandeepkumar Kothiwale, Jens Meiler et al.. Computational Methods in Drug Discovery. *Pharmacological Reviews*, 2014. DOI:10.1124/pr.112.007336
5. Santiago Vilar, Giorgio Cozza, Stefano Moro. Medicinal Chemistry and the Molecular Operating Environment (MOE): Application of QSAR and Molecular Docking to Drug Discovery. *Current Topics in Medicinal Chemistry*, 2008. DOI:10.2174/156802608786786624
6. Peter Chinedu Agu, Celestine Azubuike Afiukwa, O.U. Orji et al.. Molecular docking as a tool for the discovery of molecular targets of nutraceuticals in diseases management. *Scientific Reports*, 2023. DOI:10.1038/s41598-023-40160-2
7. Pedro J. Ballester, John B. O. Mitchell. A machine learning approach to predicting protein–ligand binding affinity with applications to molecular docking. *Bioinformatics*, 2010. DOI:10.1093/bioinformatics/btq112
8. Aashish Manglik, Henry J. Lin, Dipendra K. Aryal et al.. Structure-based discovery of opioid analgesics with reduced side effects. *Nature*, 2016. DOI:10.1038/nature19112
