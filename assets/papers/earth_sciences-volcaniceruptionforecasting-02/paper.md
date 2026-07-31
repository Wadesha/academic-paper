# Robust Volcanic Eruption Forecasting under Distribution Shift

> Companion Markdown. References are **real/verifiable** (OpenAlex/arXiv); experiments are **illustrative/simulated**.

## Abstract
This paper studies **Volcanic Eruption Forecasting**, grounded in a real, citable literature, and proposes a focused method with illustrative experiments.

## 1. Introduction
Volcanic Eruption Forecasting is an active research area. We target a concrete gap identified from recent literature.

## 2. Related Work (real literature)
- Draxler et al. (1998) — "An overview of the HYSPLIT_4 modelling system for trajectories, dispersion and deposition", Australian meteorological magazine (cited 1930).
- Onogi et al. (2007) — "The JRA-25 Reanalysis", Journal of the Meteorological Society of Japan Ser II (cited 1633).
- Hawkes et al. (1963) — "Geochemistry in Mineral Exploration", Soil Science (cited 1005).
- Chouet (1996) — "Long-period volcano seismicity: its source and use in eruption forecasting", Nature (cited 942).
- Mastin et al. (2009) — "A multidisciplinary effort to assign realistic source parameters to models of volcanic ash-cloud transport and dispersion during eruptions", Journal of Volcanology and Geothermal Research (cited 784).
- Brenguier et al. (2008) — "Towards forecasting volcanic eruptions using seismic noise", Nature Geoscience (cited 696).

## 3. Method
We model distribution shift explicitly and optimise a worst-case objective over an uncertainty set of plausible test distributions. We instantiate this idea for Volcanic Eruption Forecasting.

## 4. Experiments (Illustrative)
| System | Primary Metric | Efficiency |
|---|---|---|
| Strong baseline | 0.812 | 1.00× |
| Ablation | 0.828 | 0.92× |
| **Ours** | **0.851** | **0.71×** |

*Metrics simulated to illustrate intended behaviour; not measured.*

## 5. Conclusion
We connected a real literature to a concrete method for Volcanic Eruption Forecasting.

## References (real, verifiable)
1. Roland R. Draxler, G.D. Hess. An overview of the HYSPLIT_4 modelling system for trajectories, dispersion and deposition. *Australian meteorological magazine*, 1998. DOI:10.1071/es98032
2. Kazutoshi Onogi, Junichi Tsutsui, Hiroshi Koide et al.. The JRA-25 Reanalysis. *Journal of the Meteorological Society of Japan Ser II*, 2007. DOI:10.2151/jmsj.85.369
3. H. E. Hawkes, John S. Webb. Geochemistry in Mineral Exploration. *Soil Science*, 1963. DOI:10.1097/00010694-196304000-00016
4. Bernard Chouet. Long-period volcano seismicity: its source and use in eruption forecasting. *Nature*, 1996. DOI:10.1038/380309a0
5. Larry G. Mastin, Marianne Guffanti, R. Servranckx et al.. A multidisciplinary effort to assign realistic source parameters to models of volcanic ash-cloud transport and dispersion during eruptions. *Journal of Volcanology and Geothermal Research*, 2009. DOI:10.1016/j.jvolgeores.2009.01.008
6. Florent Brenguier, Н. М. Шапиро, Michel Campillo et al.. Towards forecasting volcanic eruptions using seismic noise. *Nature Geoscience*, 2008. DOI:10.1038/ngeo104
7. John H. Sorensen. Hazard Warning Systems: Review of 20 Years of Progress. *Natural Hazards Review*, 2000. DOI:10.1061/(asce)1527-6988(2000)1:2(119)
8. R. S. J. Sparks. Forecasting volcanic eruptions. *Earth and Planetary Science Letters*, 2003. DOI:10.1016/s0012-821x(03)00124-9
