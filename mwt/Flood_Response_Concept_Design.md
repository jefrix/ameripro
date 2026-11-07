# AmeriPro Flood Response Team — Concept Design

Revision A · November 7, 2026 · Jeff Ricks, AmeriPro concept development

**Status: proposed equipment — design basis for review.** Equipment selections, ratings and weights follow supplier review; planner inputs are editable starting assumptions.

## Mission and scope

**Design continuation:** [Revision B design development](Flood_Response_Design_Development.md) adds candidate equipment arrangements, hydraulic comparison assumptions, mass allocations and a DryForce power study. Explore them in the [interactive design studio](flood-design-studio.html).

**Pump → Dry → Restore.** Pair the MFP-500 Mobile Flood Pumping Station with the DryForce Mobile Industrial Drying Plant. The pair removes standing water and supports controlled drying before restoration handoff. “Restore” describes the workflow destination; neither trailer alone certifies remediation or readiness for occupancy.

The existing MWTP-50, MWTP-50C and MWTP-250 retain their separate water-treatment roles. This concept does not establish a treatment path from floodwater to potable supply. Keep flood-response hoses, tools and storage segregated from potable-water equipment.

## MFP-500 functional basis

MFP-500 is a working product designation. **500 GPM is a planner starting assumption, not an established rated capacity.** Select the pump only after defining duty flow, total dynamic head, suction conditions, solids and liquid characteristics.

| Tag | Proposed function | Selection / design question |
| --- | --- | --- |
| STR-1101 | Accessible intake screen | Debris, allowable opening, open area and cleaning access |
| P-1101 | Solids-handling pumping package | Vendor pump curve, priming, solids passage, suction limitations and materials |
| DRV-1101 | Pump drive and fuel provision | Diesel versus electric architecture, duty cycle, noise and service access |
| H-1101 / H-1102 | Intake and discharge hose sets | Vacuum / pressure ratings, diameter, length, coupling restraint and storage |
| PI-1101 / VI-1101 | Discharge pressure and suction vacuum indication | Instrument ranges and protected installation |
| LIT-1101 | Site water-level sensing | Sensor mounting, low-water protection and verified control logic |
| CP-1101 | Local control / emergency stop | Start permissives, failure response, manual mode and independent protective functions |
| TEL-1101 | Optional remote monitoring | Communications loss behavior; telemetry must not replace local protection |

Conceptual flow: screened intake → suction hose → P-1101 → discharge indication / engineered valve arrangement → restrained discharge hose → authorized receiving point. Check-valve, isolation, drain and pressure-protection arrangements require vendor review for the chosen pump; do not assume deadhead tolerance.

Top-view zones, tow end to rear: drive / fuel; pump / local controls; hose storage / deployment. This is functional zoning only. Exhaust, fuel containment, ventilation, service access, hose handling and loaded center of gravity may require reordering. No trailer length or axle rating is fixed.

## DryForce functional basis

Select refrigerant, desiccant or a combined approach from the expected temperature / humidity envelope and drying load. No technology or removal rating is frozen in this revision.

| Tag | Proposed function | Selection / design question |
| --- | --- | --- |
| DH-1201 | Dehumidification module(s) | Removal curves at site conditions, operating envelope and power |
| AF-1201 | Air distribution / circulation | Required airflow at duct static pressure; air movers and zoning |
| D-1201 / D-1202 | Supply / return duct kits | Length, diameter, leakage, routing and separation from contaminated zones |
| T/RH-1201 | Temperature and relative-humidity monitoring | Outdoor, process inlet / outlet and representative indoor measurement locations |
| MM-1201 | Material moisture survey kit | Material-appropriate methods, reference readings and documented locations |
| CM-1201 | Moisture disposal path | Condensate drainage / containment for refrigerant equipment, or regeneration exhaust for desiccant equipment |
| PWR-1201 | Electrical distribution / power provision | Connected and starting loads, grounding, protective devices and selected shore / generator arrangement |
| LOG-1201 | Monitoring and reporting | Time-stamped readings, equipment status and restoration handoff record |

Top-view zones, tow end to rear: separated power / service bay; drying module; ducts / air movers / field kit. Generator exhaust and regeneration exhaust, if used, must be addressed as separate streams.

## Deployment planning boundaries

Before mobilization, establish the water source and contamination condition, site access, electrical isolation, structural condition, authorized discharge / disposal route and the responsible restoration lead. Unknown contamination may require a different process before air movement or drying can begin.

Plan distinct intake, discharge, drying and access zones. Confirm hose routes, drains, duct openings, exhaust placement and service clearances. Field records should capture the site assessment, equipment identity, actual flow / head where measurable, temperature / humidity trends, material readings, disposal arrangements and completion decisions.

Bulk water removal and drying may be staged; the planner deliberately does not sum their times into a promised completion date. The drying endpoint is based on measured materials and the restoration plan, not elapsed time or room RH alone.

## Companion planner

Open the [Flood Response Team planner](flood-response.html).

| Quantity | Calculation | Default illustrative result |
| --- | --- | --- |
| Standing water | 10,000 ft² × 6 in ÷ 12 × 7.48052 US gal/ft³ | 37,402.6 gal |
| Average net pump rate | 500 GPM × 75% − 25 GPM inflow | 350 GPM |
| Bulk pumping duration | 37,402.6 ÷ 350 ÷ 60 | 1.78 hours |
| Idealized moisture removal | 300 gal equivalent ÷ (50 gal/day/module × 2 modules) | 3 days |

The 75% effective-time factor represents interruptions averaged over elapsed time. It does not calculate hydraulic derating. Enter the pump flow at the actual duty point separately. Continuing inflow is also averaged over elapsed time.

The independent 300-gallon residual-moisture assumption is not inferred from flood volume. The drying estimate assumes a constant effective rate; it does not calculate material moisture transport, evaporation or falling-rate drying.

Zero initial water produces zero initial-removal time, but continuing inflow can still require pumping. If net pumping capacity is nonpositive with standing water present, no finite drawdown time is shown. Positive moisture with zero drying rate has no finite modeled drying duration.

## Validation before procurement

| Gate | Required evidence | Decision owner to assign |
| --- | --- | --- |
| 1. Define mission envelope | Site types, flood volumes, head and hose runs, contamination limits, ambient envelope and drying objectives | AmeriPro project lead |
| 2. Select equipment | Pump curves / suction analysis, solids limits, drying curves and airflow / static-pressure data | Pump and drying suppliers with engineering review |
| 3. Close packaging budgets | Component weights, full fuel / cargo loads, axle and hitch reactions, service clearances, rated tow vehicle combination | Trailer supplier and vehicle / structural reviewer |
| 4. Close power and controls | Load schedule, starting demand, distribution design, protective functions and failure-state review | Qualified electrical / controls designer |
| 5. Review site interfaces | Discharge / disposal requirements, contamination procedure and restoration handoff requirements | Site authority and responsible specialists |
| 6. Review commercial basis | Comparable quotations, insurance, labor, mobilization, maintenance and utilization assumptions | AmeriPro management |
| 7. Verify assembled units | Weighing, documented pump duty-point test, hose / coupling inspection, electrical checks, drying performance logging and control failure tests | Assigned acceptance team |

Gate outputs become the basis for a later engineering revision: dimensioned layout, P&ID / valve matrix, electrical single line, control narrative, supplier-backed BOM and acceptance protocol.
