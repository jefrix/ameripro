# AmeriPro SmartTrap + GREX-1000 — Grease-to-Energy Concept

Concept Revision C · November 7, 2026 · Jeff Ricks

**Proposed concept — not yet built.** This is a recovery / feedstock-development study, not a fuel-production license, fabrication package or performance certification. Open the [interactive concept](grease-to-energy.html) or the [Future Concepts hub](../future-concepts.html).

## 1. Product chain

SmartTrap is a proposed automated commercial-kitchen grease-recovery device. GREX-1000 is a separate proposed permanent receiving, separation and dewatering facility housed in an available large building. Its initial product is an oil-rich candidate feedstock held for characterization and buyer qualification. Wastewater and solids remain managed residual streams.

Neither name asserts a tested hydraulic rating, registered trademark or approved plumbing installation. GREX-1000 does not establish 1,000 GPH, GPD or a 1,000-gallon batch. The first calculator uses a 1,000 kg wet-feed reference batch solely as an editable mass-balance example.

Keep used cooking oil, SmartTrap skimmings, bulk interceptor pumpings and chemically contaminated wastes separately identified. Do not blend unknown streams before establishing acceptance and receiving criteria. The lipid, water, solids, free-fatty-acid and contaminant content can materially change the process and product value.

## 2. SmartTrap functional design

| Tag | Candidate function | Required design closure |
| --- | --- | --- |
| ST-1501 | Stainless interceptor body / separation zone | Kitchen fixture demand, temperature, detergent conditions, materials and approved hydraulic sizing |
| SC-1501 | Removable food-solids basket | Capture duty, cleaning access and service frequency |
| SK-1501 | Mechanical surface skimmer | Separation / recovery trials, mechanism and operating cycle |
| RC-1501 | Sealed removable recovery container | Working capacity, compatible closure, access and handling |
| LIT-1501 | Interceptor liquid level | Sensor suitability, fouling, alarm thresholds and failure detection |
| GIT-1501 | Grease-layer indication | Measurement validity, calibration and cleaning |
| LSH-1501 | Collector-full detection | Skimmer inhibit, local alarm and service response |
| CP-1501 | Local controller / optional telemetry | Interlocks, local independence, event log and service alerts |

The device must remain a properly sized and maintained grease-control installation. Automatic skimming is not permission to eliminate required cleaning, inspections or service. Plumbing arrangement, venting, access, installation approval and applicable device testing require qualified review; no certified standard conformity is claimed.

A full recovery container should inhibit the recovery mechanism and signal service. The effect on continued kitchen use and interceptor hydraulic operation requires an approved design and site response. Do not invent a wastewater bypass or an automatic drain blockage as a substitute for that review.

## 3. GREX-1000 candidate process

Receiving / sampling → screening → controlled thermal conditioning where testing supports it → mechanical separation → product polishing / dewatering → segregated product hold → qualified feedstock shipment.

| Tag | Candidate function | Required design closure |
| --- | --- | --- |
| TK-1601 | Receiving / equalization tank | Feed acceptance, working volume, mixing, containment and sample points |
| STR-1601 | Screen | Solids / debris load and access |
| HX-1601 | Controlled conditioning / heat exchange | Feed-specific test basis, thermal duty, fouling, limits and independent protection |
| SEP-1601 | Additional oil / water recovery stage, equipment unselected | Phase behavior, emulsion response, throughput and tested partition yields |
| SCR-1601 | Existing custom inclined-screen / screw separator | Candidate front-end solids removal; confirm screen slots, flow, discharge arrangement and duty |
| FIL-1601 | Product polishing | Insolubles / moisture goals, fouling and maintenance |
| TK-1602 | Oil-rich product hold | Sampling, temperature needs, compatibility, segregation and buyer qualification |
| TK-1603 | Aqueous residual holding | Characterization, working capacity and authorized receiving path |
| PR-1601 | Existing custom PJDL-302 multi-disc screw press | Feed suitability, condition, trials, cake quality, press-liquor composition and oil losses |
| SC-1601 | Solids / wet-cake collection | Waste composition, handling, containment and receiving |
| CP-1601 | Local PLC / protective controls | Level, flow, temperature and machine permissives / faults |

No thermal setpoints, chemical dosing recipes, high-speed separator settings or fuel-conversion procedures are defined. The first development gate is representative-feed separation testing. Dissolved contaminants, emulsions, variability, odor and corrosion can require a different process or make a feed unacceptable.

This concept does not include solvent extraction, esterification, transesterification, hydrotreating or another chemical fuel-conversion process. Specialist downstream conversion is a separate possible pathway, not a capability of the receiving / separation facility.

## 3A. Stationary facility and existing equipment

AmeriPro has a large available building and an existing screw press and separator. This revision removes trailer and single-skid size constraints. Building suitability and equipment compatibility remain to be established; ownership alone does not establish capacity or process fit.

The provisional layout separates truck unloading / sampling, segregated receiving and quarantine, conditioning / separation, oil-rich product finishing and hold, solids handling, aqueous holding, utilities and maintenance access. Survey dimensions, floor condition / loading, containment and drainage, ventilation / odor management, electrical service, heat supply, truck movements and lifting / service clearances. Size storage from delivery peaks, operating hours, batch residence and shipment / residual collection intervals, not the illustration.

**Existing separator (SCR-1601):** AmeriPro's equipment guide describes an inclined wedge-wire screen, filtrate chamber, solids-conveying screw and timed vibrator. This is a photo / drawing interpretation of the custom solid-liquid separator, not an oil / water centrifuge specification. Assign it provisionally to front-end screening. Screen slot size, flow capacity, discharge-end settings and level-rod location remain unresolved. Its documented motor plate is 4 kW, 230 V, 60 Hz, S3-75%; continuous-duty suitability remains a maker question. The generic separator paperwork differs from the actual shared cabinet and must not be treated as its as-built design.

**Existing screw press (PR-1601):** the equipment guide identifies a Yangzhou Pujiang PJDL-302, custom-built for restaurant F.O.G., with two multi-disc screw shafts and polymer conditioning. Recorded nameplate values: 70–140 kg dry solids/hour, 2.05 kW press rating, 230 V / 60 Hz and 1,350 kg equipment weight. These are documented ratings, not verified grease-processing yields or a facility feed rate. The 2.05 kW excludes the separator and other connected loads; the weight is not an installed floor-load calculation. The general PJDL manual supplies no model-specific F.O.G. feed / cake targets.

Evaluate the press on a conditioned sludge branch after testing oil recovery before polymer addition. Measure lipid losses to screenings, press cake and filtrate and check any polymer effects on the intended product. Do not commit the whole incoming grease stream to polymer conditioning before comparing recovery paths. Keep press filtrate in characterized holding; recycle requires a complete balance and controlled return. Neither existing machine is demonstrated to produce a qualified oil-rich product.

### Provisional routing and integration

Receiving / segregated holding → existing screen separator (SCR-1601) → screened-liquid equalization → trial-selected oil recovery (SEP-1601) → oil-rich product finishing / hold. A suitable residual sludge branch proceeds to polymer conditioning and PJDL-302 dewatering (PR-1601). Screenings, cake, press filtrate and aqueous residual remain separately measured and managed. This is a proposed routing for trials, not a confirmed existing installation.

Integrate the existing machines with the facility PLC only after an as-built wiring review and a defined feed-permissive and fault-response sequence for the whole line.

Run representative trials for feed variability, actual throughput, plugging / cleaning, energy, labor, consumables and complete phase yields. Compare using existing equipment, refurbishing it or purchasing new equipment. No purchase credit or recovery guarantee is assigned yet.

The calculator remains a simplified total-batch balance: its wet-cake assumption is not a press prediction, and it does not separately model press liquor, recycle or lipid losses in cake. Replace those assumptions with a measured multi-stream balance before facility sizing.

## 4. Why the product is not automatically No. 4 fuel oil

ASTM's fuel-oil specification overview describes No. 4 grades as heavy distillates or distillate / residual blends used in suitable commercial / industrial burners, with defined property requirements. Recovering fats from grease does not by itself demonstrate conformity to that specification. No. 4 fuel oil and marine fuel are also not interchangeable labels for any recovered oil.

USDA research describes brown-grease lipids as a potential biofuel feedstock with substantial free fatty acids. That supports investigating resource recovery; it does not establish that unconverted recovered grease is biodiesel, marine fuel, a burner-approved fuel or suitable for HybridForce-60's diesel generator.

Obtain an actual buyer and written specification before selecting the finishing train. Define representative sampling, water / sediment / insolubles, acidity / FFA, composition, source-specific contaminants and any other buyer / end-use tests. Fuel-specific properties and applicable requirements belong to the selected downstream use and conformity program, not this calculator.

## 5. Assumed batch mass balance

The calculator partitions feed into three mutually exclusive input categories: lipids, dry nonlipid solids and water. All entries are assumptions, not measured separation results. The product fractions are by mass; no gallon yield is calculated from an assumed generic density.

| Default input | Value |
| --- | ---: |
| Wet feed | 1,000 kg |
| Feed lipids | 15% |
| Feed dry nonlipid solids | 5% |
| Feed water by difference | 80% |
| Lipid recovery to oil-rich product | 85% of feed lipids |
| Water in oil-rich product | 2% of product mass |
| Solids in oil-rich product | 0.5% of product mass |
| Wet-cake dry nonlipid solids | 25% of cake mass |

Recovered lipids = 1,000 × 15% × 85% = **127.5 kg**. Oil-rich product = 127.5 / (1 − 2% − 0.5%) = approximately **130.77 kg**. This contains about 2.62 kg water and 0.65 kg dry solids under the assumed fractions.

Remaining dry solids enter wet cake at the assumed 25% dry-solids fraction, yielding approximately **197.38 kg wet cake**. Remaining water and all unrecovered lipids enter approximately **671.85 kg aqueous residual**. Outputs sum to 1,000 kg within numerical rounding.

The model assigns no unrecovered lipid to cake, no dissolved-solid partition and no evaporation or chemical addition. This is a deliberately simple accounting scenario; actual phase compositions require trials and laboratory data. Inputs demanding more water or solids than are present are rejected. Mass closure does not demonstrate product quality or separator performance.

Reclaim-25 is not automatically an acceptable receiver for TK-1603 wastewater. Its washwater source envelope is a separate design. Establish actual residual composition, treatment needs and authorized receiving arrangements before connecting systems.

## 6. Candidate controls and storage

| Condition | Candidate response / review need |
| --- | --- |
| Unknown / unacceptable receiving sample | Segregate or refuse feed; no automatic processing acceptance |
| Low level / loss of circulation during heating | Inhibit heat or follow supplier-approved protective sequence |
| High temperature | Independent protective response coordinated with thermal system |
| Separator protective fault | Follow machine supplier sequence; retain containment and product hold |
| Product qualification pending / failed | Inhibit shipment to the intended buyer; identify retained batch |
| Receiving / residual / product high level | Manage feed / transfers before overflow; consider process holdup and response time |
| Invalid sensor or power / communications loss | Defined local safe state, no implied product-release permission |

Tank capacities, batch runtime, heating duty, connected power, building layout, floor loading and operating inventory are not assigned in this revision. They must follow feed testing, vendor sizing and the intended operating schedule. The illustration's apparent fit does not establish a buildable layout or compatibility with a specific power trailer.

## 7. Development sequence

1. Characterize separately collected SmartTrap skimmings and bulk interceptor pumpings; define unacceptable feeds.
2. Obtain prospective buyer specifications and aqueous / solids receiving requirements before optimizing yield.
3. Run representative separation / conditioning trials and document complete phase mass and quality data.
4. Develop SmartTrap hydraulic / service design and approval path independently of the processing plant.
5. Inventory and trial the existing separator and screw press; select reuse, refurbishment or replacement and size remaining equipment from tested duty data.
6. Close site layout, utility, containment, service, machine protection and residual logistics designs.
7. Replace allowances with supplier quotes and issue coordinated process drawings, controls matrix and acceptance protocol.

## Primary references and provenance

- [AmeriPro custom PJDL-302 and separator guide](../screwpress/index.html): equipment identity, recorded plates and drawing interpretation.
- [Equipment open questions and source drawings](../screwpress/notes.html): unresolved maker / field checks. These records take precedence over generic equipment assumptions, while retaining their stated uncertainties.

- [HUBER screw press documentation - general cake / filtrate dewatering reference, not identification or endorsement of existing equipment](https://www.huber-se.com/fileadmin/user_upload/huber-technology/brochures/04-sludge-mechanical/brochure-q-press-en.pdf).

- [USDA ARS — Isolation of free fatty acids from brown grease lipids using wiped film evaporation](https://www.ars.usda.gov/research/publications/publication/?seqNo115=419159).
- [ASTM — Standard Specification for Fuel Oils, D396 overview](https://store.astm.org/d0396-26a.html).
- [EPA — Controlling FOG discharges from food service establishments](https://www.epa.gov/sites/default/files/2020-02/documents/pretreatment_foodservice_fs1.pdf).

External sources support general principles, not the numerical AmeriPro assumptions.
