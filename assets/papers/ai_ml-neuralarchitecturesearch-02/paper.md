# Robust Neural Architecture Search under Distribution Shift

> Companion Markdown. References are **real/verifiable** (OpenAlex/arXiv); experiments are **illustrative/simulated**.

## Abstract
This paper studies **Neural Architecture Search**, grounded in a real, citable literature, and proposes a focused method with illustrative experiments.

## 1. Introduction
Neural Architecture Search is an active research area. We target a concrete gap identified from recent literature.

## 2. Related Work (real literature)
- Bahdanau et al. (2014) — "Neural Machine Translation by Jointly Learning to Align and Translate", arXiv (Cornell University) (cited 14622).
- Greff et al. (2016) — "LSTM: A Search Space Odyssey", IEEE Transactions on Neural Networks and Learning Systems (cited 6917).
- Tan et al. (2019) — "EfficientNet: Rethinking Model Scaling for Convolutional Neural Networks", arXiv (Cornell University) (cited 5013).
- Prior work (1991) — "Unified theories of cognition", Choice Reviews Online (cited 4264).
- Zhou et al. (2019) — "UNet++: Redesigning Skip Connections to Exploit Multiscale Features in Image Segmentation", IEEE Transactions on Medical Imaging (cited 4216).
- Zoph et al. (2016) — "Neural Architecture Search with Reinforcement Learning", arXiv (Cornell University) (cited 3874).

## 3. Method
We model distribution shift explicitly and optimise a worst-case objective over an uncertainty set of plausible test distributions. We instantiate this idea for Neural Architecture Search.

## 4. Experiments (Illustrative)
| System | Primary Metric | Efficiency |
|---|---|---|
| Strong baseline | 0.812 | 1.00× |
| Ablation | 0.828 | 0.92× |
| **Ours** | **0.851** | **0.71×** |

*Metrics simulated to illustrate intended behaviour; not measured.*

## 5. Conclusion
We connected a real literature to a concrete method for Neural Architecture Search.

## References (real, verifiable)
1. Dzmitry Bahdanau, Kyunghyun Cho, Yoshua Bengio. Neural Machine Translation by Jointly Learning to Align and Translate. *arXiv (Cornell University)*, 2014. DOI:10.48550/arxiv.1409.0473
2. Klaus Greff, Rupesh K. Srivastava, Jan Koutník et al.. LSTM: A Search Space Odyssey. *IEEE Transactions on Neural Networks and Learning Systems*, 2016. DOI:10.1109/tnnls.2016.2582924
3. Mingxing Tan, Quoc V. Le. EfficientNet: Rethinking Model Scaling for Convolutional Neural Networks. *arXiv (Cornell University)*, 2019. DOI:10.48550/arxiv.1905.11946
4. . Unified theories of cognition. *Choice Reviews Online*, 1991. DOI:10.5860/choice.28-5376
5. Zongwei Zhou, Md Mahfuzur Rahman Siddiquee, Nima Tajbakhsh et al.. UNet++: Redesigning Skip Connections to Exploit Multiscale Features in Image Segmentation. *IEEE Transactions on Medical Imaging*, 2019. DOI:10.1109/tmi.2019.2959609
6. Barret Zoph, Quoc V. Le. Neural Architecture Search with Reinforcement Learning. *arXiv (Cornell University)*, 2016. DOI:10.48550/arxiv.1611.01578
7. George E. Dahl, Dong Yu, Li Deng et al.. Context-Dependent Pre-Trained Deep Neural Networks for Large-Vocabulary Speech Recognition. *IEEE Transactions on Audio Speech and Language Processing*, 2011. DOI:10.1109/tasl.2011.2134090
8. Xin Yao. Evolving artificial neural networks. *Proceedings of the IEEE*, 1999. DOI:10.1109/5.784219
