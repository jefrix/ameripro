# Bill of Materials (BOM) & Capital Cost Breakdown (MWTP-250)

## 1. Executive Cost Summary

This estimate reflects **2026 commercial industrial pricing** for NSF-61 / EPA municipal-grade components required to build one **MWTP-250 (250 GPM / 360,000 GPD)** unit inside a custom 36-ft Triple-Axle Gooseneck Trailer.

| Category | Subsystem Description | Equipment Cost (USD) | % of Hardware |
| :--- | :--- | :---: | :---: |
| **1.0** | **36-ft Triple-Axle Gooseneck Trailer & Hydraulic Outriggers** | $58,500 | 16.4% |
| **2.0** | **Stage 1 & 2: Raw Intake Booster, Auto-Strainer & Duplex Bag Filters** | $24,800 | 7.0% |
| **3.0** | **Stage 3: Hollow-Fiber Ultrafiltration (UF) Skid (14 Modules, 0.02 μm)** | $74,200 | 20.8% |
| **4.0** | **Stage 4 & 5: Duplex GAC Carbon Vessels, Dual UV Reactors & Chemical Skid** | $48,900 | 13.7% |
| **5.0** | **Stage 6: 500-Gal Baffled Clearwell, Triplex VFD Booster & RPZ Backflow** | $36,400 | 10.2% |
| **6.0** | **316L SS Process Piping, 18x Pneumatic Valves (`XV`) & Bulkhead Manifolds** | $38,700 | 10.9% |
| **7.0** | **PLC/SCADA Control Panel, Laser Turbidity & Chlorine Analyzers, Wet Lab** | $35,600 | 10.0% |
| **8.0** | **45 kW Tier-4 Diesel Generator, 100-Gal Fuel Tank & Instrument Air** | $39,200 | 11.0% |
| — | **SUBTOTAL — MAJOR EQUIPMENT & MATERIALS** | **$356,300** | **100.0%** |
| **9.0** | **System Integration, 316L SS TIG Welding, UL-508A Panel Wiring & FAT Testing** | $68,000 | — |
| — | **TOTAL TURNKEY BUILD COST (Single Unit)** | **$424,300** | — |

> [!TIP]
> **Commercial Comparison:** Turnkey 250 GPM municipal UF trailers purchased from large OEMs typically retail between **$650,000 and $850,000**. Procuring the skids and integrating on a custom commercial gooseneck chassis saves **~$250,000–$400,000 per trailer**.

---

## 2. Line-Item Bill of Materials (BOM)

### 2.1 Category 1.0: Mobility Platform & Enclosure (`$58,500`)

| Item | Qty | Description & Technical Specification | Reference OEM / Model | Unit Cost | Extended |
| :--- | :-: | :--- | :--- | :---: | :---: |
| **1.1** | 1 | **36-ft Triple-Axle Commercial Gooseneck Trailer** (28 ft main deck + 8 ft gooseneck), 3 × 10,000 lb Dexter torsion axles, electric-over-hydraulic disc brakes, 30,000 lb GVWR, heavy-duty steel tube frame | ATC / Featherlite / Custom Commercial | $39,500 | $39,500 |
| **1.2** | 1 | **Insulated All-Season Package:** R-12 closed-cell spray foam walls/ceiling, 0.125" aluminum treadplate marine floor with perimeter floor drains, rear barn doors + streetside/curbside access doors | Factory Upfit | $7,800 | $7,800 |
| **1.3** | 1 | **4-Point Hydraulic Auto-Leveling Outrigger Jacks** (40,000 lb static support capacity for wet operating load) | Equalizer Systems / Bulldog | $6,400 | $6,400 |
| **1.4** | 1 | **24,000 BTU Split Heat Pump HVAC + Compartment Unit Heaters** (Freeze protection down to -10°F) | Mitsubishi / Qmark | $4,800 | $4,800 |

---

### 2.2 Category 2.0: Intake & Pre-Filtration (`$24,800`)

| Item | Qty | Description & Technical Specification | Reference OEM / Model | Unit Cost | Extended |
| :--- | :-: | :--- | :--- | :---: | :---: |
| **2.1** | 1 | **Raw Water Intake Booster Pump (`P-101`):** 260 GPM @ 130 ft TDH, 7.5 HP TEFC motor, 316SS wet end, vacuum-priming assist + VFD | Goulds 3656SS / Grundfos | $5,400 | $5,400 |
| **2.2** | 1 | **Automatic Self-Cleaning Strainer (`STR-101`):** 3" flanged 316SS body, 200 μm wedge-wire screen, motorized suction scanner/brush with ΔP switch (`PDI-102`) | Eaton / Amiad SAF-1500 | $9,800 | $9,800 |
| **2.3** | 1 | **316L SS Inline Helical Static Mixer (`SM-101`):** 3" NPT/Flanged with dual chemical injection quills | Koflo 3" 316SS | $1,400 | $1,400 |
| **2.4** | 1 | **Duplex Multi-Bag Filter Housing (`BF-101A/B`):** 2x 4-bag 304SS vessels (150 PSI) with continuous-flow transfer valve + 100 spare 25 μm felt bags | Eaton Duoline / Pentair | $8,200 | $8,200 |

---

### 2.3 Category 3.0: Hollow-Fiber Ultrafiltration Skid (`$74,200`)

| Item | Qty | Description & Technical Specification | Reference OEM / Model | Unit Cost | Extended |
| :--- | :-: | :--- | :--- | :---: | :---: |
| **3.1** | 14 | **PVDF Hollow-Fiber UF Membrane Modules (`UF-201A/B`):** 0.02 μm nominal pore size, 775 ft² (72 m²) area per module (10,850 ft² total), NSF-61 certified | DuPont IntegraFlux / Toray / Veolia ZeeWeed | $2,650 | $37,100 |
| **3.2** | 1 | **UF Structural 304SS Skid Frame & Schedule 80 PVC/316SS Manifolds:** Dual-train rack (2 × 7 modules) with shock-absorbing vibration mounts | Custom Fabricated | $14,500 | $14,500 |
| **3.3** | 1 | **UF Backwash Pump (`P-202`):** 180 GPM @ 40 PSI, 5.0 HP 316SS close-coupled centrifugal pump with soft-starter | Grundfos / Ebara 316SS | $3,600 | $3,600 |
| **3.4** | 1 | **Oil-Free Air Scour Regenerative Blower (`BL-201`) & CIP Heater/Tank (`TK-203`):** 2.0 HP oil-free blower + 100-gal HDPE Clean-In-Place tank with 6 kW immersion heater | Gast / Fuji + Custom CIP | $6,800 | $6,800 |
| **3.5** | 1 | **UF Skid Local Valve & Sensor Harness:** Pre-mounted sanitary couplings, sample valves, air vents, and glycerine pressure gauges | Integrated Package | $12,200 | $12,200 |

---

### 2.4 Category 4.0: Carbon Polishing, UV & Chemical Dosing (`$48,900`)

| Item | Qty | Description & Technical Specification | Reference OEM / Model | Unit Cost | Extended |
| :--- | :-: | :--- | :--- | :---: | :---: |
| **4.1** | 2 | **36" Dia x 72" FRP Pressure Vessels (`GAC-301A/B`):** 150 PSI ASME code-stamped composite vessels with 3" flanged hub-and-lateral underdrains | Pentair Structural / Clack | $5,200 | $10,400 |
| **4.2** | 50 | **Granular Activated Carbon Media (ft³):** NSF-61 acid-washed 12× 40 mesh coconut shell GAC (1,500 lbs total) + underbed garnet gravel | Calgon Filtrasorb / Jacobi | $110/ft³ | $5,500 |
| **4.3** | 2 | **Validated Amalgam UV Disinfection Reactors (`UV-401A/B`):** 130 GPM each (260 GPM total), 316L SS chamber, ≥ 40 mJ/cm² dose, UV intensity sensor (`UIT-401`) & controller | Viqua / TrojanUV / Luminor Blackcomb | $9,600 | $19,200 |
| **4.4** | 4 | **Digital Stepper Diaphragm Chemical Metering Pumps (`P-501` to `P-503`):** 4–20mA flow-paced dosing for PACl Coagulant, 12.5% NaOCl (Duty + Standby), and Sodium Bisulfite | Grundfos DDA / Prominent | $2,200 | $8,800 |
| **4.5** | 3 | **Double-Walled HDPE Chemical Day Tanks:** 55-gal NaOCl, 35-gal PACl, 35-gal Bisulfite with transport tie-down cages, calibration columns & spill containment | Assmann / Snyder HDPE | — | $5,000 |

---

### 2.5 Category 5.0: Clearwell, Building Booster Skid & Backflow (`$36,400`)

| Item | Qty | Description & Technical Specification | Reference OEM / Model | Unit Cost | Extended |
| :--- | :-: | :--- | :--- | :---: | :---: |
| **5.1** | 1 | **500-Gallon Baffled Clearwell Tank (`TK-601`):** Heavy-wall NSF-61 XLPE rectangular tank with internal serpentine baffles & structural steel highway cage | Custom Plastic Fab | $4,900 | $4,900 |
| **5.2** | 1 | **Stowed 3,000-Gallon Collapsible Pillow Bladder Tank:** NSF-61 potable fabric tank with 3" camlocks (for ground deployment if extended CT or peak storage is needed) | Husky Portable / SEI | $4,200 | $4,200 |
| **5.3** | 1 | **Triplex VFD Vertical Multistage Booster Skid (`P-601A/B/C`):** 3 × 125 GPM @ 80 PSI (7.5 HP each) 316SS pumps, individual VFDs, 316SS headers, 85-gal ASME bladder tank | Grundfos Hydro MPC-E / Goulds | $21,500 | $21,500 |
| **5.4** | 1 | **3-Inch Reduced Pressure Zone (RPZ) Backflow Preventer (`RPZ-602`):** Lead-free 316SS body, ASSE 1013 / AWWA certified for hospital potable tie-in | Watts 957 / Wilkins 375XL | $5,800 | $5,800 |

---

### 2.6 Category 6.0: 316L SS Piping, Pneumatic Valves & Hose Kit (`$38,700`)

| Item | Qty | Description & Technical Specification | Reference OEM / Model | Unit Cost | Extended |
| :--- | :-: | :--- | :--- | :---: | :---: |
| **6.1** | 18 | **Pneumatically Actuated 316SS Butterfly Valves (`XV-101` to `XV-602`):** 1" to 3" NSF-61 EPDM seats, spring-return rack-and-pinion actuators, 24VDC Namur solenoids & limit switches | Bray Series 20/92 / Keystone | $850 avg | $15,300 |
| **6.2** | Lot | **Schedule 10 316L SS Sanitary/Victaulic Piping, Check Valves & Manual Valves:** All interconnecting headers, overhead pipe hangers, and heat tracing | Victaulic / Swagelok | — | $13,800 |
| **6.3** | 1 | **Rear Stainless Camlock Bulkhead + 12-Tap Community Manifold + Hose Kit:** 100 ft of 4" intake hose, 150 ft of 3" NSF-61 high-pressure potable hose, 200 ft of 3" waste hose, hydrant wrench & pressure regulator | Snap-Tite / Kuriyama NSF-61 | $9,600 | $9,600 |

---

### 2.7 Category 7.0: PLC SCADA & Online Water Quality Lab (`$35,600`)

| Item | Qty | Description & Technical Specification | Reference OEM / Model | Unit Cost | Extended |
| :--- | :-: | :--- | :--- | :---: | :---: |
| **7.1** | 1 | **Main PLC Control Cabinet (`CP-701`):** NEMA 4X enclosure, Allen-Bradley CompactLogix 5380 PLC, 15" PanelView Plus HMI, 24VDC power supplies, UPS backup, Starlink/Cellular gateway | Rockwell Automation | $14,200 | $14,200 |
| **7.2** | 2 | **Online Laser Nephelometer Turbidity Analyzers (`AIT-101`, `AIT-201`):** Continuous raw and UF permeate monitoring (0.0001 to 1000 NTU) | Hach TU5300sc + SC200 | $5,400 | $10,800 |
| **7.3** | 1 | **Online Reagentless Free Chlorine & pH Analyzer Panel (`AIT-601`):** Amperometric sensor flow cell with automatic pH compensation | Hach CLF10sc + pHD | $5,800 | $5,800 |
| **7.4** | Lot | **Magnetic Flow Meters (`FIT-200/602`), Pressure Transmitters (`PT`), Ultrasonic Level (`LIT-601`) & Benchtop DR900 Spectrophotometer** | Endress+Hauser / IFM / Hach | — | $4,800 |

---

### 2.8 Category 8.0: Autonomous Power & Pneumatic Air (`$39,200`)

| Item | Qty | Description & Technical Specification | Reference OEM / Model | Unit Cost | Extended |
| :--- | :-: | :--- | :--- | :---: | :---: |
| **8.1** | 1 | **45 kW Prime / 50 kW Standby Tier-4 Final Diesel Generator:** Sound-attenuated enclosure (66 dBA), 208/480V 3-phase switchable, integrated 100-gallon sub-base belly fuel tank | Cummins C50D6C / Caterpillar / Kohler | $31,500 | $31,500 |
| **8.2** | 1 | **100A Automatic Transfer Switch (ATS) & Shore Power Camlock Panel:** Allows running off hospital/grid shore power (50 ft 4/0 SOOW cable included) | ASCO 300 Series / Hubbell | $4,200 | $4,200 |
| **8.3** | 1 | **2.0 HP Oil-Free Scroll Air Compressor + Refrigerated Dryer (`AC-802`):** Supplies clean, dry 80 PSI air to all 18 pneumatic valves | Atlas Copco SF2 / Quincy | $3,500 | $3,500 |

---

## 3. Operating Cost (OpEx) per Day of Emergency Deployment

When operating at **full 250 GPM (360,000 Gallons/Day)** on off-grid diesel generator power:

| Consumable / Operating Item | Consumption Rate | Unit Cost | Daily Cost (360,000 Gal) | Cost per 1,000 Gal |
| :--- | :--- | :---: | :---: | :---: |
| **Off-Road Diesel Fuel** (21.7 kW avg load) | 1.85 gal/hr (44.4 gal/day) | $3.80 / gal | $168.72 | $0.47 |
| **12.5% Sodium Hypochlorite (NaOCl)** (2.0 mg/L dose) | 5.76 gal/day | $3.25 / gal | $18.72 | $0.05 |
| **PACl Coagulant** (If raw turbidity > 5 NTU) | 4.50 gal/day | $4.50 / gal | $20.25 | $0.06 |
| **25-Micron Bag Filters & CIP Chemicals** (Amortized) | 2 bags/day avg | $6.50 / bag | $13.00 | $0.04 |
| **Membrane, UV Lamp & Carbon Reserve** (5-yr amortization) | — | — | $38.00 | $0.11 |
| **TOTAL OPERATING COST (Off-Grid Diesel)** | — | — | **$258.69 / day** | **$0.72 / 1,000 Gal** |
| **TOTAL OPERATING COST (On Shore Power)** | — | — | **$89.97 / day** | **$0.25 / 1,000 Gal** |

> [!NOTE]
> Producing **360,000 gallons of hospital-grade pressurized potable water** costs only **$0.72 per 1,000 gallons** (0.07 cents per gallon) including diesel generator fuel—compared to **$1.50 to $3.00 per gallon** for emergency bottled water or bulk potable water tanker deliveries (> $500,000/day for the same volume).
