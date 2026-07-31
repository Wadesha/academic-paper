# Scalable Confidential Computing Enclave for Large-Scale Settings

> Companion Markdown. References are **real/verifiable** (OpenAlex/arXiv); experiments are **illustrative/simulated**.

## Abstract
This paper studies **Confidential Computing Enclave**, grounded in a real, citable literature, and proposes a focused method with illustrative experiments.

## 1. Introduction
Confidential Computing Enclave is an active research area. We target a concrete gap identified from recent literature.

## 2. Related Work (real literature)
- Arnautov et al. (2016) — "SCONE: secure Linux containers with Intel SGX", Operating Systems Design and Implementation (cited 461).
- Priebe et al. (2018) — "EnclaveDB: A Secure Database Using SGX" (cited 284).
- Sinha et al. (2015) — "Moat" (cited 101).
- Lind et al. (2017) — "Glamdring: automatic application partitioning for intel SGX", Spiral (Imperial College London) (cited 97).
- Tramèr et al. (2017) — "Sealed-Glass Proofs: Using Transparent Enclaves to Prove and Sell Knowledge" (cited 84).
- Zhu et al. (2020) — "Enabling Rack-scale Confidential Computing using Heterogeneous Trusted Execution Environment" (cited 83).

## 3. Method
We decompose the problem across shards with a communication-efficient aggregation rule that keeps overhead sublinear in scale. We instantiate this idea for Confidential Computing Enclave.

## 4. Experiments (Illustrative)
| System | Primary Metric | Efficiency |
|---|---|---|
| Strong baseline | 0.812 | 1.00× |
| Ablation | 0.828 | 0.92× |
| **Ours** | **0.851** | **0.71×** |

*Metrics simulated to illustrate intended behaviour; not measured.*

## 5. Conclusion
We connected a real literature to a concrete method for Confidential Computing Enclave.

## References (real, verifiable)
1. Sergei Arnautov, Bohdan Trach, Franz Gregor et al.. SCONE: secure Linux containers with Intel SGX. *Operating Systems Design and Implementation*, 2016. DOI:10.5555/3026877.3026930
2. Christian Priebe, Kapil Vaswani, Manuel Costa. EnclaveDB: A Secure Database Using SGX. **, 2018. DOI:10.1109/sp.2018.00025
3. Rohit Sinha, Sriram K. Rajamani, Sanjit A. Seshia et al.. Moat. **, 2015. DOI:10.1145/2810103.2813608
4. Joshua Lind, Christian Priebe, Divya Muthukumaran et al.. Glamdring: automatic application partitioning for intel SGX. *Spiral (Imperial College London)*, 2017. 
5. Florian Tramèr, Fan Zhang, Huang Lin et al.. Sealed-Glass Proofs: Using Transparent Enclaves to Prove and Sell Knowledge. **, 2017. DOI:10.1109/eurosp.2017.28
6. Jianping Zhu, Rui Hou, XiaoFeng Wang et al.. Enabling Rack-scale Confidential Computing using Heterogeneous Trusted Execution Environment. **, 2020. DOI:10.1109/sp40000.2020.00054
7. Marcus Brandenburger, Christian Cachin, Rüdiger Kapitza et al.. Trusted Computing Meets Blockchain: Rollback Attacks and a Solution for Hyperledger Fabric. **, 2019. DOI:10.1109/srds47363.2019.00045
8. mark-russinovich, edward-ashton, christine-avanessians et al.. CCF: A Framework for Building Confidential Verifiable Replicated Services. **, 2019. 
