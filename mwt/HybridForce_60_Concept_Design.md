# AmeriPro HybridForce-60 — Mobile Hybrid Power Station

Concept Revision A · November 7, 2026 · Jeff Ricks

**Proposed equipment — ratings, masses and dimensions are design targets pending supplier selection.** Explore the [interactive concept and runtime planner](hybrid-power.html).

## Mission and fleet role

Provide independently deployable temporary AC power with a battery-supported engine-off window and generator-supported supply / charging. Candidate duties include field support, temporary site services and a future external-power DryForce variant. Compatibility with any load requires matching its voltage, phase, steady demand, starting demand and protective requirements.

This concept is distinct from the existing PWR-25 generator trailer described with MWTP-50C. It does not replace that design, qualify as hospital emergency power, or power every fleet unit automatically. MFP-500 remains a diesel-driven pumping candidate. MWTP-250 compatibility is not established by this concept's real-power targets.

**MWTP-50C pairing to study.** The MWTP-50C draws about 7.45 kW average and 9.55 kW peak with HVAC shed, on a 240 V single-phase 50 A inlet. With the 0.8 kW station allowance, the 39.48 kWh usable AC window gives about **4.8 hours engine-off** (39.48 ÷ 8.25), and the 20 kW charger limit refills the 42 kWh DC window in about **2.3 hours** (42 ÷ (20 × 0.92)). That makes quiet overnight running beside a dining room plausible on outage jobs. It requires a 240 V single-phase output (or a transformer), inverter surge capacity for the 50C's VFD and UV starts, and an outdoor placement plan; the PWR-25 remains the baseline. The planner includes an MWTP-50C preset.

## Initial equipment targets

| Tag | Package | Study target / unresolved item |
| --- | --- | --- |
| GEN-1301 | Diesel generator | 45 kW at selected applicable duty and site conditions; kVA, voltage, phase and fuel curve TBD |
| BAT-1301 | Integrated battery system | 60 kWh nominal DC, LFP chemistry candidate; vendor BMS, thermal management and protective system required |
| INV-1301 | Inverter / conversion | 40 kW continuous AC real-power target; voltage, phase, kVA, overload duration and starting behavior TBD |
| CHG-1301 | Dedicated battery charger | 20 kW maximum AC-input target, controllable input limit; compatible battery charge profile required |
| SW-1301 | Interlocked source selector | Generator or inverter source, break-before-make concept; exact transfer behavior and protection to design |
| DIST-1301 | Site distribution | One selected output voltage / phase architecture to be frozen; outlets, transformer needs and branch protection TBD |
| EMS-1301 | Energy management | SOC demand, source permissives, load priority, charge limiting and event logging |
| THM-1301 | Thermal / environmental package | Battery, conversion and engine cooling / ventilation requirements to reconcile |

The battery energy target does not establish a valid continuous discharge power. Vendor DC current, C-rate, temperature, SOC and aging limits must be checked against the inverter and actual load profile.

## Baseline energy architecture

The generator feeds an upstream generator-only charging branch and the generator input of a source selector. The inverter feeds the alternate input of that selector. Site distribution is downstream of the selector. The dedicated charger charges the battery only from a proven generator source; it must not be energized by the inverter output and form an energy loop.

The baseline does **not** assume generator / inverter AC paralleling, grid export, peak shaving, black-start capability or uninterrupted source transfer. Generator and inverter kW cannot be added into an 85 kW output claim. Each source must independently carry the permitted load in its selected mode.

Grid / shore charging, PV inputs and parallel microgrid operation are future architecture options. They require coordinated source controls and protection and are excluded from this revision's calculations. No PV yield or fuel-savings percentage is predicted.

Atlas Copco describes battery storage operating alongside generators and using spare generator capacity for charging. Caterpillar's sizing guidance calls for running and inrush kW / kVA load information. These support the general design approach.

## Constant-load energy calculation

The default study uses DryForce's existing 19.7 kW connected-load allowance as an assumed average demand. Actual connected load and average demand are different quantities: this is a conservative scenario input, not a measured duty cycle. Peak running site demand is separately assumed at 30 kW. That value is not a motor-starting allowance or supplier requirement.

| Input | Default assumption |
| --- | ---: |
| Average site demand | 19.7 kW |
| Peak running site demand | 30.0 kW |
| Station auxiliaries in each mode | 0.8 kW |
| Battery nominal DC energy | 60 kWh |
| Upper / lower operating SOC | 90% / 20% |
| Battery-to-AC efficiency | 94% |
| Charger AC-to-stored-DC efficiency | 92% |
| Generator charge-dispatch target | 80% of 45 kW = 36 kW |
| Charger maximum AC input | 20 kW |

DC energy window = 60 × (0.90 − 0.20) = **42 kWh**. Available AC energy = 42 × 0.94 = **39.48 kWh**. Average load including auxiliaries = **20.5 kW**, producing an idealized **1.93-hour engine-off window**.

At the assumed 36 kW generator dispatch target, charging headroom is 36 − 20.5 = **15.5 kW AC**, below the charger's 20 kW maximum. Stored charging power = 15.5 × 0.92 = **14.26 kW DC**. Replenishing 42 kWh takes approximately **2.95 hours** at constant demand.

The repeated cycle's generator-on equivalent is 24 × 2.9453 ÷ (2.9453 + 1.9259), approximately **14.51 hours per 24-hour equivalent**. This is a long-run cycle fraction, not the first calendar day's actual runtime. Warmup, transfer intervals, cooldown, varying demand, SOC taper, ambient effects, degradation and startup / thermal-control energy are not modeled beyond the fixed auxiliary allowance.

The planner suppresses a repeated-cycle result if either source cannot independently carry peak running real power plus auxiliaries, if charging headroom is zero, or if no positive modeled load exists. It rejects invalid SOC windows and peak demand below average. Starting kVA, phase balance and dynamic voltage performance remain separate checks even when the arithmetic fits.

## General arrangement and loaded mass study

Propose a **22 ft nominal equipment body × 8 ft 6 in external width**. Overall road length, height, running gear and tow connection remain unselected. Six feet is allocated to generator services, nine feet to segregated battery / conversion equipment and seven feet to distribution / cable services.

Thermal separation, enclosure construction, cable routing, access, fuel systems, exhaust and battery event response must be designed around selected packaged equipment. Use integrated supplier battery systems; this concept supplies no cell assembly or high-voltage wiring instructions.

| Loaded group | Proposed allocation, lb |
| --- | ---: |
| Trailer / enclosure | 2,800 |
| Generator package, normal fluids excluding dedicated fuel row | 1,800 |
| Battery package, including vendor enclosure / BMS | 1,700 |
| Inverter / charger package | 700 |
| Full fuel / tank package | 650 |
| Distribution / cable kit | 450 |
| Thermal / environmental package | 500 |
| Integration / mounts / service kit | 600 |
| **Allocated mass** | **9,200** |
| **Reserve to 11,000 lb project mass ceiling** | **1,800** |

Supplier dimensions and masses may require a different body length or mass target. The project ceiling is not a certified GVWR. Axle, tire, hitch, tow vehicle and actual loaded weights require their own review. **Licensing:** the current 9,200 lb allocation would fit a 9,990 lb GVWR with 790 lb of reserve, keeping it non-CDL like the MWTP-50C. Plating it at the 11,000 lb ceiling instead means Class A CDL drivers behind a typical 1-ton pickup (49 CFR 383.91: a towed unit over 10,000 lb GVWR in a combination rated 26,001 lb or more requires a Class A CDL; typical 1-ton pickups carry a manufacturer GCWR above 26,000 lb).

## Functional control modes

| Mode / condition | Candidate intent | Design closure |
| --- | --- | --- |
| Battery mode | Inverter carries permitted loads within SOC and power limits | BMS permissives, actual DC discharge limit, power quality and transfer behavior |
| Recharge demand | Request generator before energy reserve is exhausted | Start threshold, transition energy, failed-start response and load priorities |
| Generator mode | Generator carries load; charger uses bounded spare capacity | Valid source checks, charge-input control and transient response |
| Upper SOC reached | End charging and request a permitted return to battery mode | Minimum run time, thermal needs, transfer sequence and cooldown |
| Site load rises | Curtail charge before exceeding selected generator limits | Measurement, controller response time and source capacity limits |
| Battery / thermal fault | Follow supplier protective state; report locally | DC isolation, BMS control, event response and load implications |
| Inverter or generator fault | No assumed automatic failover until validated | Fault priority, source availability, transfer and restart requirements |
| Remote communications loss | Local protective functions remain effective | Local mode ownership, stale-command rejection and event recovery |

The initial 90% / 20% SOC entries are an energy-study window, not commissioned start / stop setpoints. Engineering must include the time and energy needed to start and transfer before any battery reserve is exhausted.

## DryForce external-power variant

Keep the existing onboard-power DryForce concept intact. Develop a separate variant with its generator removed or omitted only after external power interfaces are defined. Confirm the drying equipment's voltage / phase, motor and heater demand, transient behavior, local protection and allowed interruption.

Do not double-count or automatically credit generator mass / cost savings. External power removes neither battery conversion losses nor the requirement to satisfy DryForce's protective sequences and cooling needs.

## Validation gates

1. Freeze site load profiles, voltage / phase, transfer tolerance, ambient envelope and selected duty duration.
2. Select integrated battery, inverter, charger and generator packages with mutually compatible electrical interfaces and control protocols.
3. Validate real and apparent power, starting demand, DC limits, charging behavior, protection coordination, source isolation and earthing / neutral architecture through qualified electrical design.
4. Reconcile enclosure, thermal separation, ventilation, fuel / exhaust systems, supplier event response, access and approval requirements for the deployment jurisdiction.
5. Close loaded mass, center of gravity, axle / hitch reactions and certified transport limits.
6. Obtain supplier quotes and a revised budget; complete functional, load, transfer, charging, thermal and fault-response acceptance procedures before a build release.

## Primary references

- [Atlas Copco — energy storage systems](https://www.atlascopco.com/en-us/construction-equipment/products-na/energy-storage-systems).
- [Atlas Copco — energy storage systems ebook](https://www.atlascopco.com/content/dam/atlas-copco/construction-technique/portable-energy/documents/pfl-downloads/whitepaper-energy-storage-systems/Energy-Storage-Systems-ebook-English.pdf).
- [Caterpillar — commercial generator sizing](https://www.cat.com/en_US/by-industry/electric-power/electric-power-resources/genset-sizing.html).

References describe general principles.
