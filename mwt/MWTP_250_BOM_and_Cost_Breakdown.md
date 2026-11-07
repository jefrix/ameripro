# Bill of Materials (BOM) & Capital Cost Breakdown (MWTP-250)

**Revision B — November 2026.** Reflects the Rev B design: break tank and hydrant kit, contact tank and transfer pump, UF integrity testing, third UV reactor, larger pumps and generator, duplex instrument air, segregated chemical room and safety station; onboard GAC removed. Adds engineering, and a 15% contingency for a first-of-a-kind build.

## 1. Executive Cost Summary

These are **budget estimates** for one **MWTP-250 (250 GPM rated)** unit in a custom 36-ft triple-axle gooseneck. Final pricing is confirmed by written vendor quotes.

| Category | Subsystem Description | Equipment Cost (USD) | % of Hardware |
| :--- | :--- | :---: | :---: |
| **1.0** | **36-ft Triple-Axle Gooseneck, 9.5-ft Tall Box, Firewall & Hydraulic Outriggers** | $64,500 | 14.9% |
| **2.0** | **Stage 1 & 2: Hydrant Kit, Raw Break Tank, 15 HP Intake Pump, Auto-Strainer & Bag Filters** | $34,200 | 7.9% |
| **3.0** | **Stage 3: Hollow-Fiber UF Skid (14 Modules) + Direct Integrity Test** | $80,200 | 18.5% |
| **4.0** | **Stage 4 & 5: 3 UV Reactors, Chemical Dosing, Segregated Chemical Room & Contact Tank** | $59,800 | 13.8% |
| **5.0** | **Stage 6: 500-Gal Clearwell, Triplex 15 HP VFD Booster & RPZ Backflow** | $42,700 | 9.9% |
| **6.0** | **316L SS Process Piping, 20 Pneumatic Valves (`XV`), Bulkhead & Hose Kits** | $43,800 | 10.1% |
| **7.0** | **PLC/SCADA, Analyzers, Wet Lab & Safety Station** | $46,800 | 10.8% |
| **8.0** | **80 kW Tier-4 Diesel Generator, 150-Gal Fuel, ATS & Duplex Instrument Air** | $61,000 | 14.1% |
| — | **SUBTOTAL — MAJOR EQUIPMENT & MATERIALS** | **$433,000** | **100.0%** |
| **9.0** | **System Integration, 316L SS TIG Welding, UL-508A Panel Wiring & FAT Testing** | $68,000 | — |
| **10.0** | **Engineering: PE Basis-of-Design, Stamped Drawings, State Plan Review** | $22,000 | — |
| **11.0** | **Contingency (15% of items 1.0–10.0, first-of-a-kind build)** | $78,450 | — |
| — | **TOTAL TURNKEY BUILD COST (Single Unit)** | **$601,450** | — |

> [!NOTE]
> **Commercial comparison:** Get at least two written quotes for a comparable turnkey mobile UF plant before using any OEM price comparison with a lender or customer. Rev A's "$650,000–$850,000 OEM retail" figure has no quote behind it and has been removed.

---

## 2. Line-Item Bill of Materials (BOM)

### 2.1 Category 1.0: Mobility Platform & Enclosure (`$64,500`)

| Item | Qty | Description & Technical Specification | Reference OEM / Model | Unit Cost | Extended |
| :--- | :-: | :--- | :--- | :---: | :---: |
| **1.1** | 1 | **36-ft Triple-Axle Commercial Gooseneck** (28 ft main deck + 8 ft gooseneck), **9.5-ft main-deck interior** within 13'-6" legal height, 3 × 10,000 lb torsion axles, electric-over-hydraulic disc brakes, 30,000 lb GVWR | ATC / Featherlite / Custom Commercial | $44,000 | $44,000 |
| **1.2** | 1 | **Insulated Package + Machinery Compartment:** R-12 closed-cell foam, aluminum treadplate floor with perimeter drains, **fire-separated gooseneck generator compartment with exterior doors and radiator/exhaust venting**, rear barn doors + side doors, curbside belly boxes | Factory Upfit | $8,500 | $8,500 |
| **1.3** | 1 | **4-Point Hydraulic Auto-Leveling Outrigger Jacks** | Equalizer Systems / Bulldog | $6,400 | $6,400 |
| **1.4** | 1 | **24,000 BTU Heat Pump HVAC + Unit Heaters + Chemical-Room Exhaust Fan** | Mitsubishi / Qmark | $5,600 | $5,600 |

---

### 2.2 Category 2.0: Supply, Break Tank & Pre-Filtration (`$34,200`)

| Item | Qty | Description & Technical Specification | Reference OEM / Model | Unit Cost | Extended |
| :--- | :-: | :--- | :--- | :---: | :---: |
| **2.1** | 1 | **Raw Water Intake Pump (`P-101`):** Self-priming, 260 GPM @ 130 ft TDH, **15 HP** TEFC, 316SS wet end, VFD | Gorman-Rupp / Goulds / Grundfos | $7,200 | $7,200 |
| **2.2** | 1 | **Automatic Self-Cleaning Strainer (`STR-101`):** 3" 316SS, 200 μm wedge-wire, motorized scanner with ΔP switch (`PDI-102`) | Eaton / Amiad SAF-1500 | $9,800 | $9,800 |
| **2.3** | 1 | **316L SS Inline Static Mixer (`SM-101`):** 3", single injection quill (PACl), installed **after** the bag filters | Koflo 3" 316SS | $1,400 | $1,400 |
| **2.4** | 1 | **Duplex Bag Filter Housing (`BF-101A/B`):** 2 × 4-bag 304SS with transfer valve + 100 spare 25 μm bags | Eaton Duoline / Pentair | $8,200 | $8,200 |
| **2.5** | 1 | **Raw-Water Break Tank (`TK-100`):** 3,000-gal open-top frame tank, NSF-61 liner, cover, air-gap fill nozzle, level transmitter (`LIT-100`) | Husky / Fol-Da-Tank | $5,200 | $5,200 |
| **2.6** | 1 | **Hydrant Kit:** Pressure-sustaining valve `PSV-100` (set 20 PSI), `PT-100`, fill valve `XV-100` actuator package, hydrant wrench. *Hydrant meter and backflow device are normally rented from the utility with the hydrant permit.* | Cla-Val / Watts | $2,400 | $2,400 |

---

### 2.3 Category 3.0: Hollow-Fiber Ultrafiltration Skid (`$80,200`)

| Item | Qty | Description & Technical Specification | Reference OEM / Model | Unit Cost | Extended |
| :--- | :-: | :--- | :--- | :---: | :---: |
| **3.1** | 14 | **PVDF Hollow-Fiber UF Modules (`UF-201A/B`):** 0.02 μm, 775 ft² (72 m²) each, **NSF/ANSI 61 + NSF/ANSI 419 challenge-tested** | DuPont IntegraFlux / Toray / Veolia | $2,650 | $37,100 |
| **3.2** | 1 | **UF Skid Frame & Manifolds:** Dual-train rack (2 × 7) with vibration mounts — height to suit 9.5-ft ceiling | Custom Fabricated | $14,500 | $14,500 |
| **3.3** | 1 | **UF Backwash Pump (`P-202`):** 180 GPM @ 40 PSI, 5.0 HP 316SS, soft-starter | Grundfos / Ebara 316SS | $3,600 | $3,600 |
| **3.4** | 1 | **Air Scour Blower (`BL-201`) & CIP Tank (`TK-203`):** 2.0 HP oil-free blower + 100-gal CIP tank with 6 kW heater and CIP pump | Gast / Fuji + Custom CIP | $6,800 | $6,800 |
| **3.5** | 1 | **UF Local Valve & Sensor Harness:** sanitary couplings, sample valves, air vents, gauges | Integrated Package | $12,200 | $12,200 |
| **3.6** | 1 | **Direct Integrity Test Panel (`DIT-201`):** regulated air supply, high-resolution pressure transmitters, PLC test routine | Membrane OEM package | $4,800 | $4,800 |
| **3.7** | 1 | **Membrane Preservation Kit:** preservative chemical stock, glycol for freeze season, fill fittings | Membrane OEM recommended | $1,200 | $1,200 |

---

### 2.4 Category 4.0: UV, Chemical Dosing, Chemical Room & Contact Tank (`$59,800`)

| Item | Qty | Description & Technical Specification | Reference OEM / Model | Unit Cost | Extended |
| :--- | :-: | :--- | :--- | :---: | :---: |
| **4.1** | 3 | **Validated Amalgam UV Reactors (`UV-401A/B/C`):** 125 GPM each, **2 duty + 1 standby**, 316L SS, ≥ 40 mJ/cm² **EPA UVDGM validated**, intensity sensors & controller | TrojanUV / Xylem Wedeco / Evoqua | $9,600 | $28,800 |
| **4.2** | 1 | **Online UVT Analyzer (`AIT-401`)** | Real Tech / Hach | $4,500 | $4,500 |
| **4.3** | 5 | **Digital Metering Pumps:** `P-501` PACl, `P-502A/B` NaOCl duty/standby, `P-503` bisulfite (waste dechlor), `P-504` citric acid (CIP) | Grundfos DDA / ProMinent | $2,200 | $11,000 |
| **4.4** | Lot | **Segregated Chemical Storage:** separate oxidizer, acid/reducer and PACl cabinets with individual spill containment; small-container (≤ 8 gal) stock for transport | Justrite / Denios | — | $5,500 |
| **4.5** | 1 | **Baffled Contact Tank (`TK-401`):** 3,000-gal NSF-61 frame tank with internal baffle curtains, cover, level transmitter (`LIT-401`) | Husky / SEI (custom baffles) | $6,800 | $6,800 |
| **4.6** | 1 | **Contact Tank Transfer Pump (`P-401`):** self-priming 260 GPM @ 40 ft, 5 HP, VFD | Gorman-Rupp / Grundfos | $3,200 | $3,200 |

*Removed from Rev A: 2 × 36" GAC vessels ($10,400) and 50 ft³ GAC media ($5,500).*

---

### 2.5 Category 5.0: Clearwell, Building Booster Skid & Backflow (`$42,700`)

| Item | Qty | Description & Technical Specification | Reference OEM / Model | Unit Cost | Extended |
| :--- | :-: | :--- | :--- | :---: | :---: |
| **5.1** | 1 | **500-Gal Baffled Clearwell (`TK-601`):** NSF-61 XLPE rectangular tank (~32" × 48" × 75") with baffles and steel transport cage | Custom Plastic Fab | $4,900 | $4,900 |
| **5.2** | 1 | **Triplex VFD Booster Skid (`P-601A/B/C`):** 3 × 125 GPM @ ~100 PSI, **15 HP each (2 duty + 1 standby)**, 316SS, individual VFDs, 85-gal ASME bladder tank, remote pressure transmitter (`PT-603`) | Grundfos Hydro MPC-E / Goulds | $32,000 | $32,000 |
| **5.3** | 1 | **3" RPZ Backflow Preventer (`RPZ-602`):** lead-free, ASSE 1013 / AWWA, field-testable | Watts 957 / Wilkins 375XL | $5,800 | $5,800 |

*Rev A's 3,000-gal pillow bladder is replaced by the baffled contact tank in item 4.5.*

---

### 2.6 Category 6.0: Piping, Pneumatic Valves & Hose Kits (`$43,800`)

| Item | Qty | Description & Technical Specification | Reference OEM / Model | Unit Cost | Extended |
| :--- | :-: | :--- | :--- | :---: | :---: |
| **6.1** | 20 | **Pneumatically Actuated 316SS Valves (`XV-100` to `XV-602`):** 0.5" to 4" NSF-61 seats, spring-return actuators, 24VDC solenoids & limit switches | Bray / Keystone | $850 avg | $17,000 |
| **6.2** | Lot | **Schedule 10 316L SS Piping, Check Valves & Manual Valves:** headers, hangers, heat tracing | Victaulic / Swagelok | — | $13,800 |
| **6.3** | 1 | **Bulkhead, 12-Tap Manifold & Hose Kits:** 100 ft 4" NSF-61 hydrant-to-tank hose, 2 × 50 ft 4" contact-tank hoses, 150 ft 3" NSF-61 potable hose, 200 ft 3" waste hose, hose ramps, **hose-sanitizing kit** (batch tank, pump, test strips) | Snap-Tite / Kuriyama NSF-61 | $13,000 | $13,000 |

---

### 2.7 Category 7.0: PLC SCADA, Online Water Quality Lab & Safety (`$46,800`)

| Item | Qty | Description & Technical Specification | Reference OEM / Model | Unit Cost | Extended |
| :--- | :-: | :--- | :--- | :---: | :---: |
| **7.1** | 1 | **Main PLC Control Cabinet (`CP-701`):** NEMA 4X, CompactLogix 5380, 15" PanelView Plus, UPS, Starlink/cellular gateway, CT calculation logic | Rockwell Automation | $14,200 | $14,200 |
| **7.2** | 2 | **Laser Turbidity Analyzers (`AIT-101`, `AIT-201`)** | Hach TU5300sc + SC200 | $5,400 | $10,800 |
| **7.3** | 2 | **Free Chlorine, pH & Temperature Analyzer Panels (`AIT-402` contact-tank outlet, `AIT-601` finished)** | Hach CLF10sc + pHD | $5,800 | $11,600 |
| **7.4** | Lot | **Mag Meters, Pressure Transmitters, Level Transmitters, DR900 Colorimeter, Bench Turbidimeter, Bac-T Sampling Supplies** | Endress+Hauser / IFM / Hach | — | $5,400 |
| **7.5** | Lot | **Safety Station:** ANSI Z358.1 tempered eyewash/drench, chlorine gas detector (`AIT-901`), spill kits, fire extinguishers, scene lighting, traffic cones & signs | Bradley / Honeywell / Justrite | — | $4,800 |

---

### 2.8 Category 8.0: Power & Instrument Air (`$61,000`)

| Item | Qty | Description & Technical Specification | Reference OEM / Model | Unit Cost | Extended |
| :--- | :-: | :--- | :--- | :---: | :---: |
| **8.1** | 1 | **80 kW Prime Tier-4 Final Diesel Generator:** sound-attenuated, 208/480V 3-phase, 150-gal sub-base fuel tank, sized for VFD loads | Cummins / Caterpillar / Kohler | $48,000 | $48,000 |
| **8.2** | 1 | **200A ATS & Shore Power Camlock Panel (480V)** with shore cable | ASCO 300 / Hubbell | $6,800 | $6,800 |
| **8.3** | 1 | **Duplex Oil-Free Scroll Compressors (2 × 2 HP, lead/lag) + Receiver + Refrigerated Dryer (`AC-802A/B`)** | Atlas Copco SF2 / Quincy | $6,200 | $6,200 |

---

## 3. Operating Cost (OpEx) per Day of Deployment

At **250 GPM rated (~350,000 gallons/day net)** on generator power. Crew labor is in the business plan, not here.

| Consumable / Operating Item | Consumption Rate | Unit Cost | Daily Cost | Cost per 1,000 Gal (net) |
| :--- | :--- | :---: | :---: | :---: |
| **Off-Road Diesel Fuel** (37.8 kW avg load) | ~3.1 gal/hr (74 gal/day) | $3.80 / gal | $281.20 | $0.80 |
| **12.5% Sodium Hypochlorite** (~2.5 mg/L dose for 1.5–2.0 mg/L residual) | 7.2 gal/day | $3.25 / gal | $23.40 | $0.07 |
| **PACl Coagulant** (only if raw turbidity > 5 NTU) | 4.50 gal/day | $4.50 / gal | $20.25 | $0.06 |
| **Bag Filters & CIP Chemicals** (amortized) | 2 bags/day avg | $6.50 / bag | $13.00 | $0.04 |
| **Bac-T Lab Samples & Field Reagents** | Per state sampling plan | — | $75.00 | $0.21 |
| **Membrane, UV Lamp & Consumable Reserve** | — | — | $38.00 | $0.11 |
| **TOTAL OPERATING COST (Generator Power)** | — | — | **$450.85 / day** | **$1.29 / 1,000 Gal** |
| **TOTAL OPERATING COST (Shore Power, ~907 kWh/day at $0.13/kWh)** | — | — | **$287.59 / day** | **$0.82 / 1,000 Gal** |

> [!NOTE]
> At about $1.29 per 1,000 gallons in consumables, the plant's water costs roughly a tenth of a cent per gallon before labor. Delivered bulk or bottled water typically costs far more per gallon and doesn't keep a building pressurized — but quote local tanker and bottled-water prices before putting a specific comparison in front of a customer.
