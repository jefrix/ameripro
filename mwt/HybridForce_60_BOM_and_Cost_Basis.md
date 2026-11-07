# HybridForce-60 — Preliminary BOM & Cost Basis

Concept Revision A · November 7, 2026

**Planning allowances in USD, pending supplier quotations.** This schedule exercises a project budget for the [proposed hybrid power architecture](HybridForce_60_Concept_Design.md).

| Package | Quantity / scope basis | Placeholder allowance |
| --- | --- | ---: |
| Trailer / enclosure | 1 candidate 22 ft body; actual platform TBD | $18,000 |
| Diesel generator | 1 package targeting 45 kW at selected duty / conditions | $32,000 |
| Integrated battery system | 1 package targeting 60 kWh nominal; vendor enclosure / BMS | $50,000 |
| Inverter / conversion | 1 package targeting 40 kW continuous real power | $24,000 |
| Dedicated battery charger | 1 package targeting 20 kW AC input | $8,000 |
| Distribution / source selector / cables | 1 allowance; voltage / phase and protection TBD | $12,000 |
| Thermal / environmental provisions | 1 allowance; selected supplier requirements TBD | $10,000 |
| Engineering integration / EMS / acceptance | 1 allowance; scope and approval costs to reconcile | $20,000 |
| **Base concept allowance** | | **$174,000** |
| Concept contingency | 20% × base | $34,800 |
| **Illustrative project capital** | | **$208,800** |

The battery package includes vendor BMS and its normal package protection. The thermal allowance is for additional trailer-level environmental provisions and must be reconciled against supplier inclusions. EMS / integration is separate from the packaged inverter and BMS: avoid paying twice for controls already included by a supplier.

The fuel tank, normal fuel provision, mounts and other minor integration items are assumed within relevant package allowances and integration scope, not separately quoted lines. Obtain explicit inclusion lists before comparing bids. Trailer mass allocations are independent design assumptions; the cost schedule does not prove a package of those weights is available.

## Exclusions and unresolved costs

Sales taxes, freight, tow vehicle, financing, working capital, registration, storage, insurance, maintenance, operator training, replacement batteries, spare capacity, site-specific electrical works, PV / shore charging, grid-parallel protection and special approval / certification beyond the stated allowances are excluded. Formal compliance review and supplier integration scope can materially change the budget.

Contingency covers unresolved scope. No reduction to DryForce's existing build allowance is booked: an external-power variant requires its own coordinated scope and revised BOM.

## Supplier quote requirements

Request electrical ratings in both kW and kVA where applicable; battery nominal and usable energy at defined conditions; charge / discharge current limits; conversion efficiencies; thermal loads; dimensions; wet / loaded masses; applicable duty ratings; voltage / phase options; fuel curves; and documented controller interfaces.

Require a written source-transfer design and a clear statement of whether the proposed package permits any AC paralleling. Match the quote to the baseline's nonparallel selector / dedicated-charger architecture or explicitly revise the design. Do not assume a generic hybrid inverter supports the required generator, battery and voltage / phase combination.

## Operating economics to develop later

Fuel consumption depends on generator fuel curves, actual dispatch and load profile; fewer engine hours do not directly establish a fuel-saving percentage. Obtain measured or vendor-backed fuel rates before modeling operating savings. Include battery degradation / replacement, thermal auxiliaries, maintenance, mobilization and utilization in a later commercial case.
