# Ameripro Local Operations

Static local operations map for Ameripro Environmental Services.

Future Concepts is at `/future-concepts.html`, linked from the main operations
header and the mobile water-treatment portal. It collects flood response,
DryForce, HybridForce-60, Reclaim-25, SmartTrap / GREX-1000 and the pump-skid
scoping item. Detailed concept pages retain their existing `/mwt/` URLs.
The grease-recovery study is at `/mwt/grease-to-energy.html`; its mass-balance
calculator models candidate feedstock recovery, not certified fuel production.
Concept equipment tags use the 1100–1600 series (MFP-500 11xx, DryForce 12xx,
HybridForce-60 13xx, Reclaim-25 14xx, SmartTrap 15xx, GREX-1000 16xx, PPS-200 17xx) so they
never collide with MWTP tags (100–900 series). Concept illustrations are WebP in
`mwt/assets/`.
Run `npm run build:concept-docs` after editing concept Markdown documents to
refresh their directly linked, offline-readable HTML versions.

The mobile infrastructure portal is at `/mwt/`. The proposed Flood Response Team
is at `/mwt/flood-response.html`, pairing the MFP-500 pumping trailer with DryForce.
It includes concept zoning, mission and operating-economics calculators, a scenario
JSON download, and linked concept-design / preliminary-cost documents. Performance
and cost inputs are illustrative, pending equipment selection and validation.

The `/mwt/flood-design-studio.html` continuation adds interactive component zoning,
editable loaded-mass budgets and a DryForce electrical-load study. The accompanying
`mwt/Flood_Response_Design_Development.md` records the Revision B candidate basis.

The fleet illustration is displayed on the Future Concepts hub and flood-response
overview. `/mwt/flood-deployment.html` adds the Revision C schematic site layout,
connection schedule and controls-response viewer; its design basis is recorded in
`mwt/Flood_Response_Deployment_and_Controls.md`.

The `/mwt/hybrid-power.html` concept adds HybridForce-60: a proposed generator,
battery, inverter and dedicated charger package with an engine-off / recharge
planner, an SOC-cycle chart and JSON scenario export. Design and preliminary
cost assumptions are recorded in `mwt/HybridForce_60_Concept_Design.md` and
`mwt/HybridForce_60_BOM_and_Cost_Basis.md`. All targets remain provisional.

The `/mwt/pump-skid.html` concept adds PPS-200, a forklift- and crane-placeable
duplex centrifugal pump skid with a hydraulic / NPSH / power planner. See
`mwt/Pump_Skid_Concept_Design.md` and `mwt/Pump_Skid_BOM_and_Cost_Basis.md`.

The `/mwt/wastewater-recycling.html` concept adds Reclaim-25 / WWR-25 for known
washwater sources and qualified nonpotable reuse. It includes a treatment-stage
viewer, volume / external-tank balance planner and scenario export. See
`mwt/Reclaim_25_Concept_Design.md` and `mwt/Reclaim_25_BOM_and_Cost_Basis.md` for
the candidate process, boundaries, allocations and next validation gates.

This first cut was split out from the larger Global Data project so the company app can be developed without the global globe, live feeds, or heavy visualization stack.

Included layers:

- Ameripro fleet and FOG tank levels
- Restaurant customer points and service data
- Prospects / target markets
- Georgia counties
- Georgia cities

Run locally from this folder:

```powershell
npm start
```

Then open:

```text
http://localhost:3020/
```

When started with `npm start`, tank levels, restaurant edits, and locally added restaurants are shared through `data/operator-state.json` so every tablet connected to the same server sees the same operator data.

To publish the current shared operator state back to GitHub:

```powershell
npm run publish-state
```
