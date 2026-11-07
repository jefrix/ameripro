# AmeriPro Reclaim-25 — Mobile Wastewater Recycling Trailer

Concept Revision A · November 7, 2026 · Jeff Ricks

**Proposed process — the 25 GPM rate, treatment selections, dimensions and budget are design targets pending treatability testing and supplier review.** WWR-25 / Reclaim-25 is the working designation. Open the [interactive concept and water-balance planner](wastewater-recycling.html).

## 1. First mission and stream boundaries

Start with captured vehicle / equipment washwater and compatible industrial cleanup streams whose composition is known and accepted through a source-specific review. This fits AmeriPro's fleet-washing and environmental-service work while establishing a defined first application.

The concept does not cover every wastewater stream. Raw sanitary sewage, concentrated grease-trap pumpings, solvents, reactive chemical mixtures, concentrated brines, unknown spill water and other uncharacterized waste require a separate acceptance decision and process design. Do not assume the trailer can accept those streams because it contains a membrane stage.

| Stream / use | Initial design position |
| --- | --- |
| Known fleet / equipment washwater | Candidate after source characterization and treatability testing |
| Compatible industrial washwater | Candidate only with defined feed envelope and end-use criteria |
| Raw sewage / blackwater | Separate biological or other treatment concept; not included here |
| Concentrated grease-trap waste | Separate handling / treatment; not an accepted feed assumption |
| Floodwater / spillwater | No blanket acceptance; characterization and source-specific process review required |
| Recovered water for a defined nonpotable wash stage | Candidate after qualification and applicable site approval |
| Drinking water / food-contact use | Not a proposed product use |
| Storm-drain, surface-water or sewer discharge | No authorization implied; receiver-specific requirements must be resolved |

EPA's vehicle-wash guidance distinguishes basic grit / oil / grease separation from the additional treatment needed for further wash uses. Its washwater BMP emphasizes capture and management. The specific AmeriPro process below is a candidate developed from these principles, not an EPA-approved train.

## 2. Candidate treatment train

Captured feed → screening / grit removal → external equalization → free-oil separation / tested conditioning → candidate dissolved-air flotation → candidate UF → required polishing / disinfection → product hold / qualification → permitted nonpotable reuse.

Screenings, recovered oil, flotation sludge, membrane backwash / concentrate, cleaning wastes and off-spec product have distinct containment / receiving requirements. The diagram's main arrows omit these branch lines.

| Tag | Proposed package | Selection / validation need |
| --- | --- | --- |
| CAP-1401 | Capture / collection kit | Source segregation, capture area, sump and inflow profile |
| STR-1401 | Screen / grit separation | Opening, solids burden, abrasion and cleaning access |
| TK-1401 | External equalization tank | Mixing, working volume, containment and feed variability |
| SEP-1401 | Free-oil separation | Oil condition and emulsion behavior; separation trial |
| CHEM-1401 | Conditioning provision | Test-selected pH / coagulation strategy if needed; no generic recipe |
| DAF-1401 | Dissolved-air flotation candidate | Treatability, loading, recycle / air system, sludge handling and fit |
| UF-1401 | Membrane filtration candidate | Material compatibility, sustainable flux, fouling, backwash and cleaning |
| POL-1401 | Product-specific polishing provision | Whether dissolved contaminants require adsorption, oxidation, other treatment or a different train |
| DIS-1401 | Disinfection provision where required | Validated method, monitoring and source / end-use-specific targets |
| TK-1402 | External product hold | Segregated storage, qualification, release controls and overflow prevention |
| TK-1403 | External liquid residual holding | Working volume, waste compatibility and receiving / haul-off arrangements |
| CP-1401 | Controls / monitoring | Local protections, release permissives, logging and fault behavior |

UF is not assumed to remove dissolved salts or every dissolved chemical. Clarity does not establish microbial or chemical suitability. Dissolved contaminants, detergent accumulation, scaling, corrosion, odor and aerosol exposure may limit the feasible reuse application. The candidate train contains no biological reactor and establishes no BOD, COD, ammonia, nutrient or pathogen-removal guarantee.

A sewage-focused MBR would be a separate fleet variant with a biological load basis, reactor volume, biomass startup / maintenance requirements and different residuals and power budgets. It is not interchangeable with this physicochemical washwater concept.

## 3. Source and product qualification

Before equipment selection, document the wash process, detergent SDS information, prior contaminants, source variability and intended reuse stage. Establish representative sampling with a qualified process reviewer. Potential parameters include flow, temperature, pH, suspended solids, oil / grease condition, organic loading, surfactants, conductivity / dissolved solids and source-specific chemical / microbial concerns. The final sampling list and numerical acceptance limits are not assigned here.

Use jar / separation trials and representative membrane / polishing tests as needed to establish feed compatibility, treatment response, waste production and product quality. Obtain applicable reuse and receiving requirements for the actual site and proposed use. This document supplies no universal treatment targets or discharge limits.

Product stays on hold while qualification is pending. A release permissive must reflect the selected treatment barriers, required monitoring and site criteria. Failed or invalid quality indication inhibits release; specify contained hold or approved reprocessing rather than a bypass to use. Avoid a recycling loop that repeatedly concentrates dissolved contaminants without a validated management strategy.

## 4. Water-balance planner

The planner is a constant-average volume model. Net product recovery is entered by the user, not predicted from treatment performance. The default is a proposed 25 GPM processing rate at 80% effective time over eight elapsed hours:

| Quantity | Full-schedule assumption / result |
| --- | ---: |
| Average processing rate | 20 GPM |
| Scheduled feed capacity | 9,600 gal |
| Net product recovery assumption | 80% |
| Potential product across full schedule | 7,680 gal |
| Net liquid residuals across full schedule | 1,920 gal |
| Collection inflow during schedule | 18 GPM |
| Equalization working / initial inventory | 2,000 / 1,000 gal |
| Product working / initial inventory | 1,000 / 0 gal |
| Liquid residual working / initial inventory | 2,000 / 0 gal |
| Planned reuse demand during schedule | 7,000 gal, uniform only if release is assumed |

**Default hold scenario:** product fills at 16 GPM while release is inhibited. The 1,000-gallon product tank fills after approximately **1.04 hours**. Only **1,250 gallons of feed** are modeled before that first tank intervention at averaged rates. The full-schedule feed and product values are capacity arithmetic, not achievable output without a changed hold / release / storage plan.

**Assumed-qualified-release scenario:** uniform demand draws 7,000 gal during eight hours. Net product accumulation is 680 gal over that schedule; the product tank would fill after approximately 11.76 elapsed operating hours at the same averaged rates. Equalization depletion and residual-tank filling both occur after approximately 8.33 hours. The eight-hour schedule fits those averaged balances; this does not establish actual release qualification or account for surges.

The first intervention can be equalization full, equalization depleted, product full or residual full. Initial inventory beyond capacity is rejected. Zero processing can still fill an equalization tank from continuing collection. Excess reuse demand is reported as unmet, not drawn from an empty product tank. After any intervention the process may need throttling, added storage, residual removal or rescheduling; the model does not simulate that change.

Chemical makeup, evaporation, rainfall, solids mass, density changes, irregular backwash batches and quality failure volumes are outside the model. Net recovery includes internal treatment losses at the stated feed-to-product boundary. Do not infer a sludge concentration or disposal classification from a liquid-volume difference.

## 5. Trailer and tank deployment

Candidate equipment body: **28 ft × 8 ft 6 in external width**. Reserve eight feet for pretreatment, twelve feet for flotation / membrane equipment and eight feet for polishing / service interfaces. Overall road length, height, running gear, tow connection, partitions, access and service clearances require supplier layout review. No rooftop access platform is assumed from the fleet illustration.

External ground tanks provide 2,000 gal equalization, 1,000 gal product and 2,000 gal liquid-residual working capacity in the planner. Those 5,000 gallons would weigh approximately 41,700 lb at 8.34 lb/gal, independently of tank tare and actual wastewater density. Site bearing, support, containment, access and tank compatibility must be resolved. They are not transported full on the equipment trailer.

| Transport group | Allocation, lb |
| --- | ---: |
| Trailer / structure | 4,500 |
| Flotation package, drained transport condition | 2,200 |
| Membrane package, normal preservation / transport fluids included | 1,800 |
| Screen / separator / pretreatment | 800 |
| Pumps / piping | 650 |
| Air system | 450 |
| Controls / electrical | 650 |
| Hoses / stowed accessories | 450 |
| Integration / mounts / limited chemical and field kit allowance | 1,000 |
| **Proposed transport mass** | **12,500** |
| Additional on-board process holdup, 250 gal × 8.34 lb/gal | 2,085 |
| **Proposed on-site equipment mass** | **14,585** |
| **Reserve to 16,000 lb project mass ceiling** | **1,415** |

The 250-gallon operating holdup is an allocation, not verified package volume, and is additional to preservation fluids already in the transport budget. Ground tanks, capture hardware and residual haul-off logistics may require separate transport; they are not all included in the 450 lb stowed-accessory allowance. Confirm the full logistics manifest before purchasing a platform.

The project ceiling is not a certified GVWR. Wet / dry component data, actual residual liquid, chemical cargo, axle / hitch reactions, tires, supports and tow-vehicle ratings must be verified. **Licensing:** even the 12,500 lb transport mass is well over 10,000 lb, so Reclaim-25 needs Class A CDL drivers behind a typical 1-ton pickup (49 CFR 383.91: a towed unit over 10,000 lb GVWR in a combination rated 26,001 lb or more requires a Class A CDL; typical 1-ton pickups carry a manufacturer GCWR above 26,000 lb). Reaching a 9,990 lb plate would take a substantially lighter package or a split across two trailers; otherwise plan staffing around CDL drivers.

## 6. External-power allocation

| Load group | Connected real-power allowance |
| --- | ---: |
| Feed / transfer pumping | 2.0 kW |
| DAF recycle pumping | 3.0 kW |
| Air system | 2.2 kW |
| UF feed / recirculation | 4.0 kW |
| UF backwash package | 2.0 kW |
| Product pumping | 2.0 kW |
| Controls | 0.6 kW |
| Conditioning / dosing | 0.5 kW |
| Polishing / disinfection / auxiliary provision | 1.5 kW |
| **Connected-load allowance** | **17.8 kW** |

No diversity deduction is taken. Supplier selections may change loads or add equipment. Voltage / phase, motor starting, kVA, power factor, protection and permissible interruption remain unresolved. HybridForce-60 is a candidate external supply, not an approved match; its available real power alone cannot establish compatibility. No onboard generator is included in the Reclaim-25 mass or cost base.

## 7. Controls concept

| Condition | Candidate functional response | Required closure |
| --- | --- | --- |
| Low equalization level | Inhibit / limit feed outside approved pump conditions | Sensor validity, thresholds, hysteresis and restart |
| High equalization level | Alarm and manage upstream collection without uncontrolled overflow | Capture limits and site contingency |
| DAF / UF fault or invalid critical signal | Hold product release; follow package protective state | Vendor fault interfaces and contained flow disposition |
| Product qualification pending / failed | Inhibit reuse release | Validated monitoring / sampling and release authority |
| Product or residual tank high level | Inhibit feed / manage flow to prevent overflow | Process holdup, response times, permitted storage and protective independence |
| Cleaning mode | Isolate reuse path and contain cleaning wastes | Supplier cleaning procedure, chemical compatibility and restart qualification |
| Power / communications loss | No assumed reuse permission; retain defined local protections | Valve failure positions, holdup disposition and controlled recovery |

## 8. Next design gates

1. Choose representative washwater sources, demand profiles and intended reuse stages.
2. Characterize feed; establish end-use and receiving requirements with the responsible reviewers / authorities.
3. Complete source-representative separation, flotation and membrane / polishing trials before freezing the train.
4. Select package sizes, service dimensions, chemical inventories, recovery / waste rates and connected loads from vendor data.
5. Close the complete trailer / ground-tank / collection / residual transport arrangement and mass budgets.
6. Issue a coordinated P&ID, valve schedule, electrical single line, controls matrix and supplier-backed BOM; establish acceptance tests before a build release.

## Primary references

- [EPA WaterSense at Work — Vehicle Washes](https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=P1018SSR.TXT).
- [EPA — Municipal Vehicle and Equipment Washing BMP](https://www.epa.gov/system/files/documents/2021-11/bmp-municipal-vehicle-and-equipment-washing.pdf).
- [EPA — Basic Information about Water Reuse](https://www.epa.gov/waterreuse/basic-information-about-water-reuse).

These support general washwater-management and fit-for-purpose principles.
