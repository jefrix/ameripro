# AmeriPro PPS-200 — Prefabricated Industrial Pump Skid

Concept Revision A · November 7, 2026 · Jeff Ricks

**Proposed equipment — the `200 GPM` per-pump flow, `120 ft` total dynamic head, `15 HP` motor frame, dimensions and mass budgets are design targets pending service definition and supplier selection.** `PPS-200` is the working designation. Explore the [interactive concept and hydraulic planner](pump-skid.html).

## 1. Mission and fleet role

Provide a self-contained, forklift- and crane-placeable duplex horizontal centrifugal pump skid with common suction and discharge headers, manual branch isolation and a local VFD/PLC control panel. The package is intended for rapid drop-in deployment across stationary facilities and mobile tank farms.

| Candidate application | Initial design position |
| --- | --- |
| Reclaim-25 ground-tank transfer or nonpotable booster | Candidate for transferring screened equalization water (`TK-1401`) or boosting qualified nonpotable reuse water (`TK-1402`) within tested hydraulic limits |
| GREX-1000 stationary facility screened aqueous transfer | Candidate for transferring screened aqueous residual (`TK-1603`) or utility water after solids and heavy free grease are removed |
| Industrial / commercial utility water boosting | Candidate once fluid chemistry, temperature, suction pressure and code requirements are confirmed |
| Bulk debris-laden floodwater removal | Not applicable — remains assigned to the diesel solids-handling [MFP-500 flood pumping trailer](flood-response.html) |
| Unscreened grease-trap pumpings or dewatering sludge cake | Not applicable — use positive-displacement / progressive-cavity equipment selected for high viscosity and solids |
| Potable drinking-water distribution | Not interchangeable with wastewater or industrial service; potable duty requires dedicated NSF/ANSI 61 wetted components and sanitary custody |

## 2. Initial equipment targets

| Tag | Package | Study target / unresolved item |
| --- | --- | --- |
| SK-1701 | Structural steel skid base | 8 ft 0 in L × 5 ft 0 in W nominal welded channel/tube frame with drip rim and drain plug |
| FK-1701 / LF-1701 | Forklift pockets & 4 corner lifting lugs | Structural load path, center-of-gravity envelope, weld inspection and rated rigging calculation required |
| HDR-1701 | Common suction manifold | 6 in nominal flanged header (304/316 SS or epoxy-lined carbon steel per fluid); eccentric reducers to prevent air pockets |
| STR-1701A/B | Branch suction strainers & drains | Perforated basket or Y-strainer sized for low clean pressure drop; differential pressure monitoring TBD |
| P-1701A / P-1701B | Duplex horizontal centrifugal pumps | 2 × 100% lead/standby (or parallel lead/lag) targeting 200 GPM @ 120 ft TDH per pump; ANSI/ASME B73.1 or close-coupled industrial frame TBD |
| DRV-1701A/B | Pump motors | 2 × 15 HP TEFC inverter-duty motors, 230/460 V 3-phase 60 Hz candidate; check non-overloading BHP across full curve |
| CV-1701A/B | Discharge check valves | Spring-assisted silent or wafer swing check valves sized to prevent slam on pump trip |
| HV-1701A/B & HV-1702A/B | Suction & discharge isolation valves | Flanged OS&Y gate or lug-style butterfly valves with handwheels for single-pump maintenance isolation |
| HDR-1702 | Common discharge manifold | 6 in nominal flanged header with high-point air release / vent tap and thermal relief provision |
| PIT-1701 / PT-1701 | Suction & discharge pressure instruments | Local liquid-filled compound/pressure gauges plus 4–20 mA transmitters for VFD PID control and dry-run/deadhead trips |
| CP-1701 | Local control & VFD enclosure | NEMA 4/4X panel with main disconnect, duplex VFDs, PLC/HMI, auto alternation, hand-off-auto selectors and local E-stop |

## 3. Hydraulic and electrical baseline

The default planner scenario evaluates one pump operating at **200 GPM** against **80 ft static head** and **40 ft friction loss** (**120 ft TDH**, equivalent to **52.0 psi** at specific gravity `1.00`):

| Parameter | Single-pump (Lead / Standby) | Parallel 2-pump (Lead + Lag), independent discharge lines |
| --- | ---: | ---: |
| Active running pumps | 1 (1 standby) | 2 (at entered per-pump duty) |
| Flow rate | 200 GPM | 400 GPM |
| 8-hour shift transfer volume | 96,000 gal | 192,000 gal |
| Water horsepower per pump (`SG = 1.00`) | 6.06 HP | 6.06 HP |
| Shaft brake horsepower per pump (`72%` eff.) | 8.42 BHP | 8.42 BHP |
| Motor frame utilization (`15 HP` nameplate) | 56.1% | 56.1% each |
| Electrical input per pump (`90%` motor+VFD eff.) | 6.97 kW AC | 6.97 kW AC each |
| Total skid electrical demand (incl. `0.4 kW` aux) | **7.37 kW AC** | **14.35 kW AC** |

**Parallel operation warning:** The parallel column applies only when each pump discharges into its own line, or the shared header's friction is negligible. Two centrifugal pumps discharging into a common pipeline deliver less than double the flow, because friction head rises with the combined flow. Before operating `P-1701A` and `P-1701B` simultaneously, plot the combined two-pump curve against the actual site system curve and verify that neither pump operates left of minimum continuous stable flow when both run.

**Suction and NPSH check:** At `33.9 ft` absolute suction supply head (sea-level flooded suction baseline), `4.0 ft` suction manifold/strainer loss and `1.2 ft` vapor pressure head, available **NPSHa is 28.7 ft** against a `10.0 ft` assumed **NPSHr** (**+18.7 ft margin**). Suction lift from below-grade sumps, warm liquids, high altitudes or fouled strainers rapidly reduce NPSHa and must be checked in the planner.

## 4. General arrangement and mass study

The skid is proportioned around an **8 ft 0 in length × 5 ft 0 in width × 6 ft 2 in overall height** envelope so it can travel inside standard flatbed or box trucks and pass through industrial double doors.

| Mass group | Allocation, lb |
| --- | ---: |
| Welded structural steel skid base with forklift pockets, lifting lugs and drip pan | 950 |
| Two horizontal centrifugal pumps and cast/fabricated bases (`P-1701A/B`) | 520 |
| Two 15 HP TEFC motors (`DRV-1701A/B`) | 460 |
| Suction and discharge manifolds, valves, check valves, strainers and spools | 540 |
| Local VFD / PLC control panel, conduit and pedestal (`CP-1701`) | 260 |
| Instruments, flexible connectors, fasteners and protective guards | 120 |
| **Proposed dry shipping mass** | **2,850** |
| Operating liquid holdup in 6 in headers, strainers and casings (~48 gal @ 8.34 lb/gal) | 400 |
| **Proposed wet operating mass** | **3,250** |
| **Reserve to 4,000 lb structural design target** | **750** |

The `4,000 lb` structural target is a design allocation, not a certified rigging rating. Lifting lugs must be engineered for sling angles, dynamic hoist factors and wet vs. dry weight rules (lift dry and drained only, unless structurally rated for wet lifting).

## 5. Functional control and protective modes

| Mode / condition | Candidate functional response | Required design closure |
| --- | --- | --- |
| Auto Lead / Standby | Lead pump modulates speed to hold discharge pressure or tank level; standby pump auto-starts on lead fault and alternates on runtime schedule | Setpoints, PID tuning, bumpless transfer and check-valve closure verification |
| Auto Lead + Lag | Lag pump stages on when lead pump reaches high speed and demand remains unmet | System-curve verification, staging deadband and feeder ampacity |
| Low suction pressure / low source level (`PSLL-1701`) | Inhibit start or trip running pump after short debounce to prevent dry running and mechanical seal failure | Sensor location, trip threshold and manual vs. automatic reset philosophy |
| High discharge pressure / deadhead (`PSHH-1702`) | Trip pump on closed downstream valve or blocked line; provide thermal relief for casing heating | Pressure rating of downstream hoses/piping and relief discharge routing |
| Strainer high differential pressure | Alarm on HMI before suction starvation causes cavitation | Gauge/switch selection and dual-branch cleaning procedure |
| Single-branch maintenance isolation | Close `HV-1701` and `HV-1702` on offline pump, lock out its VFD disconnect and drain casing while partner pump operates | Double-block/bleed requirements for hot or hazardous fluids |
| External interlock / receiving tank high level | Stop skid pumping when downstream receiving tank (`TK-1402`, `TK-1601`, etc.) signals high level | Hardwired dry-contact permissive vs. network telemetry |

## 6. Validation gates

1. Define the target service fluids, flow/head range, solids/viscosity limits, temperature envelope and suction conditions.
2. Select pump hydraulic curves, impeller diameters, wetted materials and mechanical seal plans from vendor submittals.
3. Verify single-pump and two-pump parallel operating points against site piping curves, minimum continuous stable flow and end-of-curve motor BHP.
4. Complete electrical design for 230 V or 460 V 3-phase supply, VFD harmonic/thermal dissipation, short-circuit rating and branch protection.
5. Complete structural calculations for the skid base, forklift pockets, four-point lifting lugs and seismic/site anchor bolts.
6. Replace planning allowances with supplier quotes and run hydrostatic, mechanical run, VFD interlock and NPSH/flow factory acceptance tests before field deployment.

## Primary references

- [Hydraulic Institute — Pump Standards and Application Guidelines](https://www.pumps.org/).
- [US EPA — Water Reuse and Industrial Washwater Management](https://www.epa.gov/waterreuse).

References support general pump-application principles.
