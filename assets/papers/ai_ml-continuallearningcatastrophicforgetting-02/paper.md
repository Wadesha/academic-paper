# Robust Continual Learning Catastrophic Forgetting under Distribution Shift

> Companion Markdown. References are **real/verifiable** (OpenAlex/arXiv); experiments are **illustrative/simulated**.

## Abstract
This paper studies **Continual Learning Catastrophic Forgetting**, grounded in a real, citable literature, and proposes a focused method with illustrative experiments.

## 1. Introduction
Continual Learning Catastrophic Forgetting is an active research area. We target a concrete gap identified from recent literature.

## 2. Related Work (real literature)
- Parisi et al. (2019) — "Continual lifelong learning with neural networks: A review", Neural Networks (cited 3060).
- Delange et al. (2021) — "A continual learning survey: Defying forgetting in classification tasks", IEEE Transactions on Pattern Analysis and Machine Intelligence (cited 1611).
- Wang et al. (2024) — "A Comprehensive Survey of Continual Learning: Theory, Method and Application", IEEE Transactions on Pattern Analysis and Machine Intelligence (cited 847).
- Wang et al. (2022) — "Learning to Prompt for Continual Learning", 2022 IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) (cited 675).
- Ven et al. (2019) — "Three scenarios for continual learning", Lirias (cited 557).
- Zhao et al. (2020) — "Maintaining Discrimination and Fairness in Class Incremental Learning" (cited 475).

## 3. Method
We model distribution shift explicitly and optimise a worst-case objective over an uncertainty set of plausible test distributions. We instantiate this idea for Continual Learning Catastrophic Forgetting.

## 4. Experiments (Illustrative)
| System | Primary Metric | Efficiency |
|---|---|---|
| Strong baseline | 0.812 | 1.00× |
| Ablation | 0.828 | 0.92× |
| **Ours** | **0.851** | **0.71×** |

*Metrics simulated to illustrate intended behaviour; not measured.*

## 5. Conclusion
We connected a real literature to a concrete method for Continual Learning Catastrophic Forgetting.

## References (real, verifiable)
1. German I. Parisi, Ronald Kemker, Jose L. Part et al.. Continual lifelong learning with neural networks: A review. *Neural Networks*, 2019. DOI:10.1016/j.neunet.2019.01.012
2. Matthias Delange, Rahaf Aljundi, Marc Masana et al.. A continual learning survey: Defying forgetting in classification tasks. *IEEE Transactions on Pattern Analysis and Machine Intelligence*, 2021. DOI:10.1109/tpami.2021.3057446
3. Liyuan Wang, Xingxing Zhang, Hang Su et al.. A Comprehensive Survey of Continual Learning: Theory, Method and Application. *IEEE Transactions on Pattern Analysis and Machine Intelligence*, 2024. DOI:10.1109/tpami.2024.3367329
4. Zifeng Wang, Zizhao Zhang, Chen‐Yu Lee et al.. Learning to Prompt for Continual Learning. *2022 IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)*, 2022. DOI:10.1109/cvpr52688.2022.00024
5. Gido M. van de Ven, Andreas S. Tolias. Three scenarios for continual learning. *Lirias*, 2019. DOI:10.48550/arxiv.1904.07734
6. Bowen Zhao, Xi Xiao, Guojun Gan et al.. Maintaining Discrimination and Fairness in Class Incremental Learning. **, 2020. DOI:10.1109/cvpr42600.2020.01322
7. Gido M. van de Ven, Hava T. Siegelmann, Andreas S. Tolias. Brain-inspired replay for continual learning with artificial neural networks. *Nature Communications*, 2020. DOI:10.1038/s41467-020-17866-2
8. Zifeng Wang, Zizhao Zhang, Sayna Ebrahimi et al.. DualPrompt: Complementary Prompting for Rehearsal-Free Continual Learning. *Lecture notes in computer science*, 2022. DOI:10.1007/978-3-031-19809-0_36
