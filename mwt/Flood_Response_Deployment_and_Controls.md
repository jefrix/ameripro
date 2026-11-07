# AmeriPro Flood Response Team — Deployment & Controls

Revision C concept supplement · November 7, 2026 · Jeff Ricks

This supplement continues [Revision B packaging development](Flood_Response_Design_Development.md). Explore the [deployment and controls viewer](flood-deployment.html).

## 1. Site arrangement basis

Treat the two trailers as independently deployable systems with separate water and air boundaries. Positioning, clearances and routes must be established from a site-specific assessment. The site diagram is not to scale.

| Boundary | Proposed arrangement | Evidence required before a site plan is approved |
| --- | --- | --- |
| Water source | Screened intake connected to MFP-500 suction | Source classification, intake access, elevations, debris and suction analysis |
| Water destination | Pump discharge connected to authorized receiver | Receiver acceptance / capacity, route, disposal requirements and hose restraints |
| Drying zone | DryForce supply and return connected to an assessed building zone | Contamination assessment, isolation, moisture survey and airflow plan |
| Regeneration air | Separate outdoor inlet and wet-air outlet | Supplier airflow / pressure limits and termination assessment |
| Engine / power | Dedicated service access and exhaust / cooling arrangement | Selected equipment installation requirements and electrical design |
| Site access | Reserved access route between working areas | Actual clearances, pedestrian / vehicle routes and service / emergency access |

Drying does not automatically start when pumping starts or ends. Establish the permitted sequence, water control, isolation and contamination handling before air circulation. Completion depends on the restoration plan and recorded material conditions.

Where the fleet illustration differs, the Revision B 20 ft / 24 ft bodies and mass ceilings govern.

## 2. Proposed connection schedule

| ID | Service | Candidate basis | Closure responsibility |
| --- | --- | --- | --- |
| W-01 | Pump suction | 6 in nominal study; vacuum-rated assembly to select | Pump / hose supplier and hydraulic reviewer |
| W-02 | Pump discharge | 6 in nominal study; rated and restrained assembly to select | Pump / hose supplier and site discharge authority |
| A-01 | Process return | 20 in nominal space reservation, not a rated airflow | Drying supplier and air-distribution designer |
| A-02 | Dry-air supply | 20 in nominal space reservation, not a rated airflow | Drying supplier and air-distribution designer |
| A-03 | Regeneration air inlet | Separate outdoor-air path; size TBD | Drying supplier and site planner |
| A-04 | Wet regeneration exhaust | Separate outdoor discharge; size / temperature TBD | Drying supplier and site planner |
| PWR-01 | DryForce electrical supply | 19.7 kW connected real-power allowance; voltage / phase TBD | Electrical designer and power supplier |
| MON-01 | Monitoring / telemetry | Optional logging / status interface | Controls designer and AmeriPro operations |

Engine exhaust and fuel-fill interfaces must be added to the selected equipment interface schedule. They are not represented by A-04. A refrigerant alternative would also require a defined condensate path; this revision's illustrated air scheme is the desiccant candidate only.

## 3. Candidate cause-and-effect matrix

This matrix defines review questions and intended functional responses. Setpoints, time delays, signal integrity, independent protections, fault priorities and reset rules remain unresolved. Protective functions are local; telemetry does not replace them.

| Cause | Candidate effect | Recovery question | Verification evidence |
| --- | --- | --- | --- |
| Pump source below allowed level | Inhibit pumping outside the supplier-approved envelope; local alarm / record | What level recovery, hysteresis, off-time and restart permission are required? | Pump limits, level-sensor failure analysis and approved restart test |
| Engine protective fault | Retain OEM shutdown / derating behavior; present local fault | Which faults require inspection and local reset? | OEM engine interface, alarm map and supplier-approved test |
| Regeneration airflow absent or lost | Prevent heater energization or disable heat; alarm | What fan run-on / purge and restart checks are required? | Airflow-proof design, heater protective architecture and failure test |
| Drying package overtemperature | Disable affected heat through supplier-specified protection; alarm | Which cooling / fan functions must remain available, and how is reset authorized? | Limit-device design, priority logic and supplier-approved trip test |
| Invalid / stale humidity signal | Flag invalid demand; no assumed continuation on last value | Is a bounded fallback permitted, or must the affected process stop? | Range / plausibility logic, timeout and signal-failure test |
| Remote communications lost | Local protective functions remain effective; log / indicate loss | Does the selected site require continued local operation or a stop? How are stale commands rejected? | Network-loss and recovery test without unintended restart |

Normal stop, emergency stop, protective trip and complete loss of power must each receive a defined sequence. For a heated drying package, do not assume that cutting all power is interchangeable with disabling heat and providing supplier-required cooldown. The final behavior belongs in a coordinated supplier / controls design.

## 4. Preliminary acceptance evidence register

| Review item | Proposed evidence | Acceptance limit source |
| --- | --- | --- |
| Pump hydraulic duty | Recorded flow, head, suction condition and operating point | Approved supplier curve and mission envelope |
| Intake / discharge assembly | Rating records, inspection and supplier-approved verification method | Hose / coupling / pump supplier specifications |
| DryForce airflow | Measured process and regeneration airflow / pressure | Selected drying package and duct-system design |
| DryForce moisture performance | Inlet / outlet conditions, operating load and time-stamped moisture records | Supplier performance data and approved drying study |
| Electrical package | Documented electrical inspection and load / starting assessment | Completed electrical design and applicable approval requirements |
| Protective controls | Approved fault-injection / signal-loss checks with observed outcomes | Final cause-and-effect matrix and supplier test instructions |
| Transport condition | As-built weigh ticket and axle / hitch load evidence with normal cargo / fuel | Certified trailer, axle, tire, hitch and tow-vehicle limits |
| Restoration handoff | Material-condition record and responsible restoration review | Site-specific drying / restoration plan |

This register does not prescribe test pressures, intentional equipment abuse or energized test methods. Qualified reviewers must define safe test procedures and numerical acceptance criteria for the selected components.

## 5. Next review outputs

Freeze the mission envelope, then issue a supplier-coordinated general arrangement, piping / instrumentation drawing, electrical single line and detailed controls matrix. Replace the current allocations with quoted equipment masses, dimensions, curves and electrical data before committing a trailer platform or build budget.
