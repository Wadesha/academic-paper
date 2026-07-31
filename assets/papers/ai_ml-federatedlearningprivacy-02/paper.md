# Robust Federated Learning Privacy under Distribution Shift

> Companion Markdown. References are **real/verifiable** (OpenAlex/arXiv); experiments are **illustrative/simulated**.

## Abstract
This paper studies **Federated Learning Privacy**, grounded in a real, citable literature, and proposes a focused method with illustrative experiments.

## 1. Introduction
Federated Learning Privacy is an active research area. We target a concrete gap identified from recent literature.

## 2. Related Work (real literature)
- Yang et al. (2019) — "Federated Machine Learning", ACM Transactions on Intelligent Systems and Technology (cited 6001).
- McMahan et al. (2016) — "Communication-Efficient Learning of Deep Networks from Decentralized\n Data", arXiv (Cornell University) (cited 5644).
- McMahan et al. (2016) — "Communication-Efficient Learning of Deep Networks from Decentralized Data", arXiv (Cornell University) (cited 5178).
- Kairouz et al. (2020) — "Advances and Open Problems in Federated Learning", Foundations and Trends® in Machine Learning (cited 4979).
- Li et al. (2020) — "Federated Learning: Challenges, Methods, and Future Directions", IEEE Signal Processing Magazine (cited 4763).
- Bonawitz et al. (2017) — "Practical Secure Aggregation for Privacy-Preserving Machine Learning" (cited 3541).

## 3. Method
We model distribution shift explicitly and optimise a worst-case objective over an uncertainty set of plausible test distributions. We instantiate this idea for Federated Learning Privacy.

## 4. Experiments (Illustrative)
| System | Primary Metric | Efficiency |
|---|---|---|
| Strong baseline | 0.812 | 1.00× |
| Ablation | 0.828 | 0.92× |
| **Ours** | **0.851** | **0.71×** |

*Metrics simulated to illustrate intended behaviour; not measured.*

## 5. Conclusion
We connected a real literature to a concrete method for Federated Learning Privacy.

## References (real, verifiable)
1. Qiang Yang, Yang Liu, Tianjian Chen et al.. Federated Machine Learning. *ACM Transactions on Intelligent Systems and Technology*, 2019. DOI:10.1145/3298981
2. H. Brendan McMahan, Eider Moore, Daniel Ramage et al.. Communication-Efficient Learning of Deep Networks from Decentralized\n Data. *arXiv (Cornell University)*, 2016. DOI:10.48550/arxiv.1602.05629
3. H. Brendan McMahan, Eider Moore, Daniel Ramage et al.. Communication-Efficient Learning of Deep Networks from Decentralized Data. *arXiv (Cornell University)*, 2016. DOI:10.48550/arxiv.1602.05629
4. Peter Kairouz, H. Brendan McMahan, Brendan Avent et al.. Advances and Open Problems in Federated Learning. *Foundations and Trends® in Machine Learning*, 2020. DOI:10.1561/2200000083
5. Tian Li, Anit Kumar Sahu, Ameet Talwalkar et al.. Federated Learning: Challenges, Methods, and Future Directions. *IEEE Signal Processing Magazine*, 2020. DOI:10.1109/msp.2020.2975749
6. Keith Bonawitz, Vladimir Ivanov, Ben Kreuter et al.. Practical Secure Aggregation for Privacy-Preserving Machine Learning. **, 2017. DOI:10.1145/3133956.3133982
7. Nicola Rieke, Jonny Hancox, Wenqi Li et al.. The future of digital health with federated learning. *npj Digital Medicine*, 2020. DOI:10.1038/s41746-020-00323-1
8. Wei Yang Bryan Lim, Nguyen Cong Luong, Dinh Thai Hoang et al.. Federated Learning in Mobile Edge Networks: A Comprehensive Survey. *IEEE Communications Surveys & Tutorials*, 2020. DOI:10.1109/comst.2020.2986024
