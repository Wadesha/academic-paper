# Scalable Atmospheric River Prediction for Large-Scale Settings

> Companion Markdown. References are **real/verifiable** (OpenAlex/arXiv); experiments are **illustrative/simulated**.

## Abstract
This paper studies **Atmospheric River Prediction**, grounded in a real, citable literature, and proposes a focused method with illustrative experiments.

## 1. Introduction
Atmospheric River Prediction is an active research area. We target a concrete gap identified from recent literature.

## 2. Related Work (real literature)
- Mandelbrot et al. (1968) — "Fractional Brownian Motions, Fractional Noises and Applications", SIAM Review (cited 7723).
- Lefsky et al. (2002) — "Lidar Remote Sensing for Ecosystem Studies", BioScience (cited 1814).
- Maurer et al. (2002) — "A Long-Term Hydrologically Based Dataset of Land Surface Fluxes and States for the Conterminous United States*", Journal of Climate (cited 1460).
- Dai et al. (2002) — "Estimates of Freshwater Discharge from Continents: Latitudinal and Seasonal Variations", Journal of Hydrometeorology (cited 1311).
- Lam et al. (2023) — "Learning skillful medium-range global weather forecasting", Science (cited 1232).
- Balsamo et al. (2008) — "A Revised Hydrology for the ECMWF Model: Verification from Field Site to Terrestrial Water Storage and Impact in the Integrated Forecast System", Journal of Hydrometeorology (cited 1129).

## 3. Method
We decompose the problem across shards with a communication-efficient aggregation rule that keeps overhead sublinear in scale. We instantiate this idea for Atmospheric River Prediction.

## 4. Experiments (Illustrative)
| System | Primary Metric | Efficiency |
|---|---|---|
| Strong baseline | 0.812 | 1.00× |
| Ablation | 0.828 | 0.92× |
| **Ours** | **0.851** | **0.71×** |

*Metrics simulated to illustrate intended behaviour; not measured.*

## 5. Conclusion
We connected a real literature to a concrete method for Atmospheric River Prediction.

## References (real, verifiable)
1. Benoît B. Mandelbrot, John W. Van Ness. Fractional Brownian Motions, Fractional Noises and Applications. *SIAM Review*, 1968. DOI:10.1137/1010093
2. M. A. Lefsky, Warren B. Cohen, Geoffrey G. Parker et al.. Lidar Remote Sensing for Ecosystem Studies. *BioScience*, 2002. DOI:10.1641/0006-3568(2002)052[0019:lrsfes]2.0.co;2
3. Edwin P. Maurer, Andrew W. Wood, J. C. Adam et al.. A Long-Term Hydrologically Based Dataset of Land Surface Fluxes and States for the Conterminous United States*. *Journal of Climate*, 2002. DOI:10.1175/1520-0442(2002)015<3237:althbd>2.0.co;2
4. Aiguo Dai, Kevin E. Trenberth. Estimates of Freshwater Discharge from Continents: Latitudinal and Seasonal Variations. *Journal of Hydrometeorology*, 2002. DOI:10.1175/1525-7541(2002)003<0660:eofdfc>2.0.co;2
5. Rémi Lam, Álvaro Sánchez‐González, Matthew Willson et al.. Learning skillful medium-range global weather forecasting. *Science*, 2023. DOI:10.1126/science.adi2336
6. Gianpaolo Balsamo, Anton Beljaars, Klaus Scipal et al.. A Revised Hydrology for the ECMWF Model: Verification from Field Site to Terrestrial Water Storage and Impact in the Integrated Forecast System. *Journal of Hydrometeorology*, 2008. DOI:10.1175/2008jhm1068.1
7. Charles T. Driscoll, Gregory B. Lawrence, Arthur J. Bulger et al.. Acidic Deposition in the Northeastern United States: Sources and Inputs, Ecosystem Effects, and Management Strategies. *BioScience*, 2001. DOI:10.1641/0006-3568(2001)051[0180:aditnu]2.0.co;2
8. Eric Kirby, K. X. Whipple. Quantifying differential rock-uplift rates via stream profile analysis. *Geology*, 2001. DOI:10.1130/0091-7613(2001)029<0415:qdrurv>2.0.co;2
