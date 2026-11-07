# AmeriPro Flood Response Team — Design Development

Revision B concept supplement · November 7, 2026 · Jeff Ricks

This supplement advances the [Revision A design basis](Flood_Response_Concept_Design.md) with candidate packaging and load allocations. It does not supersede the original mission boundaries. Open the [interactive design studio](flood-design-studio.html) to inspect zones and vary mass / power assumptions.

**Dimensions, quantities, loads and masses are design allocations pending supplier data.** The [Revision A cost schedule](Flood_Response_BOM_and_Cost_Basis.md) has not yet been reconciled with these architectures.

## 1. Candidate architectures

**Continuation:** [Revision C deployment and controls](Flood_Response_Deployment_and_Controls.md) adds a proposed site arrangement, connection schedule and functional cause-and-effect review. Open the [interactive deployment viewer](flood-deployment.html).

| Design item | MFP-500 | DryForce |
| --- | --- | --- |
| Proposed configuration | Diesel-driven, prime-assisted solids-handling pump package | Desiccant drying package; electric regeneration used for initial power study |
| Nominal equipment body / deck | 20 ft long × 8 ft 6 in external width | 24 ft long × 8 ft 6 in external width |
| Overall road dimensions | TBD; body length excludes tow connection | TBD; body length excludes tow connection |
| Proposed loaded mass ceiling | 9,500 lb | 12,000 lb |
| Initial allocated mass | 8,250 lb | 10,600 lb |
| Unallocated design reserve | 1,250 lb | 1,400 lb |
| Access reservation | 30 in nominal longitudinal service strip | 30 in nominal longitudinal service strip |
| Trailer structure / running gear | Supplier selection after load distribution study | Supplier selection after load distribution study |

The loaded mass ceilings are project targets; the plated GVWR must cover them. **Licensing:** MFP-500's 9,500 lb ceiling fits under a 9,990 lb GVWR, so it tows without a CDL like the MWTP-50C. DryForce's 12,000 lb ceiling puts it over 10,000 lb, which means Class A CDL drivers behind a typical 1-ton pickup (49 CFR 383.91: a towed unit over 10,000 lb GVWR in a combination rated 26,001 lb or more requires a Class A CDL; typical 1-ton pickups carry a manufacturer GCWR above 26,000 lb). Holding DryForce to 9,990 lb would need about 610 lb removed from its current 10,600 lb allocation; otherwise plan staffing around CDL drivers. Door openings, wall thickness, structural intrusions, personnel access and service clearances reduce usable equipment space. The service strip is a layout reservation, not an asserted compliant aisle dimension.

## 2. MFP-500 arrangement

Longitudinal stations are measured from the front of the equipment deck, excluding the tow connection.

| Station | Allocation | Design content |
| --- | --- | --- |
| 0–4 ft | Drive / fuel zone | Fuel fill and service access, cooling / exhaust provisions |
| 4–13 ft | Pump / controls zone | Pump, priming, local panel, pressure / vacuum indication and service access |
| 13–20 ft | Hose deployment zone | Hose baskets, screen, couplings and tools |

A combined pump / engine skid may span the first two zones. The pump inlet / outlet locations determine the final hose and instrument arrangements.

### Hydraulic study case

Use **500 GPM at 40 ft total dynamic head** as a candidate comparison point for soliciting supplier curves, with **6 in nominal suction / discharge hoses** as an initial routing study. Neither value establishes a rated duty point or permissible suction lift. The mission calculator's 500 GPM value remains an independent illustrative input.

For this study point, water hydraulic power = Q × H ÷ 3,960 = 500 × 40 ÷ 3,960 = **5.05 HP**. At an assumed pump efficiency of 55%, shaft power would be **9.18 HP**. Efficiency is unknown until equipment is selected; this calculation is not an engine rating recommendation. Priming, speed, transmission, operating envelope, accessory loads and engine derating must also be reconciled.

Total dynamic head must include the applicable static head and line / fitting losses. Xylem's selection guide describes static suction, static delivery and friction loss as components of generated head. Its installation manual requires checking available against required NPSH using the selected pump curve. This study does not calculate those quantities or demonstrate that the proposed hose will achieve the target duty.

Conceptual water path: screened intake → vacuum-rated suction assembly → P-1101 → instrumented discharge / engineered valve arrangement → restrained hose → authorized receiving point. The valve and protection arrangement is to be specified with the selected pump supplier.

### Loaded mass allocations

| Component group | Allocation, lb |
| --- | ---: |
| Trailer / structure | 3,000 |
| Pump + engine package, including normal service fluids but excluding fuel | 2,600 |
| Full fuel / tank package | 500 |
| Hoses / screen / couplings, including retained water allowance | 950 |
| Controls / instruments | 300 |
| Tools / field kit | 250 |
| Mounts / guards / integration | 650 |
| **Allocated loaded mass** | **8,250** |
| **Reserve to 9,500 lb design ceiling** | **1,250** |

No water-storage tank is allocated. The fuel allocation does not establish tank capacity or runtime. Obtain supplier masses, centers of gravity and a complete cargo schedule before positioning the axle group or specifying the coupler.

## 3. DryForce arrangement

The desiccant option is a candidate for development, not a completed technology comparison. Refrigerant or hybrid alternatives remain open until ambient conditions, moisture load, electrical supply and commercial duty are defined.

| Station | Allocation | Design content |
| --- | --- | --- |
| 0–6 ft | Power / service bay | Candidate generator, power distribution, fuel access and engine service |
| 6–17 ft | Drying equipment bay | Desiccant package, process / regeneration paths and filter service |
| 17–24 ft | Field-kit bay | Ducts, air movers, monitoring instruments and deployment access |

Propose two **20 in nominal process-air connections** as layout placeholders, one supply and one return. Airflow is not rated by duct diameter: establish the vendor airflow at the required external static pressure, then size the complete distribution system. Regeneration inlet and wet-air outlet are separate, supplier-sized connections.

### Air and moisture interfaces

The process path returns building air to the drying module and supplies dry air to the designated drying zone. The regeneration path heats a separate airstream and expels its collected moisture outdoors. Engine exhaust, if onboard power is used, is a third distinct exhaust stream.

Munters' desiccant-system information identifies electric, gas and steam regeneration options. Its handbook discusses how inlet conditions, regeneration heat and air leakage affect performance. Therefore the electric load study below is one architecture assumption; it does not establish removal capacity, outlet dew point or a drying-time guarantee.

### Initial connected-load allocation

| Load group | Quantity basis | Real-power allowance |
| --- | --- | ---: |
| Electric regeneration heat | 1 staged heater allowance | 12.0 kW |
| Process fan | 1 allowance | 3.0 kW |
| Regeneration fan | 1 allowance | 1.0 kW |
| Distributed air movers | 8 × 0.4 kW assumed | 3.2 kW |
| Controls | 1 allowance | 0.3 kW |
| Lighting / auxiliary | 1 allowance | 0.2 kW |
| **Connected real power** | | **19.7 kW** |
| **Planning envelope with 25% reserve** | 19.7 × 1.25 | **24.625 kW** |

No simultaneity reduction is applied. The studio combines the two fans into a 4.0 kW input and controls / lighting into a 0.5 kW input. The reserve is arithmetic headroom, not a demonstrated generator transient margin. Select voltage, phase, generator kW / kVA, grounding, distribution, motor-start strategy, protection and shore / generator switching through a separate electrical design. No conductor sizes or connection instructions are supplied here.

The allocated 1,800 lb generator / power mass must be revisited after power selection. A load allocation and a mass allocation do not prove a compatible package exists.

### Loaded mass allocations

| Component group | Allocation, lb |
| --- | ---: |
| Trailer / enclosure | 3,600 |
| Drying module package | 2,400 |
| Generator / power package, including normal service fluids but excluding fuel | 1,800 |
| Ducts / air movers | 900 |
| Full fuel / tank package | 600 |
| Electrical / controls | 400 |
| Monitoring / field kit | 300 |
| Mounts / integration | 600 |
| **Allocated loaded mass** | **10,600** |
| **Reserve to 12,000 lb design ceiling** | **1,400** |

## 4. Controls concept for review

| Function | MFP-500 candidate behavior | DryForce candidate behavior |
| --- | --- | --- |
| Ready | Local permission, engine / pump checks, valid level input | Local permission, power checks, airflow proof and package readiness |
| Run | Level-based pumping within supplier limits | Humidity / drying demand within supplier limits |
| Protective fault | Controlled stop or trip according to fault and vendor requirements | Heater disable / package trip according to fault, with supplier-required purge or cooldown |
| Communications loss | Local protective functions remain effective | Local protective functions remain effective |
| Recovery | Fault-specific local inspection / reset; no universal restart rule | Fault-specific local inspection / reset; no universal restart rule |

A later cause-and-effect matrix must define inputs, thresholds, delays, failure states, independent protective devices and restart conditions. Emergency stop, normal stop and loss-of-power behavior must be designed individually; do not assume a single hard power cut is the proper response to every fault.

## 5. Decisions to close in the next revision

1. Define representative pump sites: source condition, static elevations, suction arrangement, hose lengths and authorized discharge routes.
2. Obtain supplier curves and a dimensioned pump / drive package for the selected duty envelope.
3. Define DryForce ambient and moisture-load cases; compare desiccant, refrigerant and hybrid options using supplier data at those conditions.
4. Reconcile the drying capacity, heat source, connected load and generator / shore architecture.
5. Obtain component weights, service dimensions and cargo lists. Perform center-of-gravity, axle and hitch reaction calculations before freezing the floor plan.
6. Issue a coordinated layout, P&ID, electrical single line, controls matrix and updated quote-backed BOM for review.

## Technical references

- [Xylem rental guide — pump selection](https://www.xylem.com/siteassets/rentals/related-content/rental-guide_final_web_spread.pdf).
- [Godwin CD and DPC installation, operation and maintenance manual](https://atlas.xylem.com/siteassets/brand/godwin/resources/manual/cd-and-dpc-series-iom.pdf).
- [Munters DEW desiccant-system overview](https://www.munters.com/en-us/products-cms/dehumidifiers/dew-series/).
- [Munters Dehumidification Handbook](https://www.munters.com/globalassets/digizuite/7600-en-dehumidification-handbook-third-edition-br-en-2019pdf/).

References support general design principles.
