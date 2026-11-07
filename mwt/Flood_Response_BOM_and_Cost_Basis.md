# AmeriPro Flood Response Team — Preliminary BOM & Cost Basis

Revision A · November 7, 2026

**Planning allowances in USD, to be replaced with comparable supplier quotations once the design envelope is set.**

## MFP-500 allowance schedule

| Functional package | Quantity basis | Placeholder allowance |
| --- | --- | ---: |
| Trailer platform, enclosure / guarding and service provisions | 1 concept platform | $18,000 |
| Pump, drive and priming package | 1 functional set; final architecture open | $38,000 |
| Suction / discharge hoses, screen and couplings | 1 mission kit; diameters / lengths TBD | $12,000 |
| Controls, instruments and optional telemetry allowance | 1 package | $7,000 |
| Hose storage, containment and accessories | 1 package | $5,000 |
| Integration labor and acceptance testing | 1 allowance | $15,000 |
| **MFP-500 subtotal** | | **$95,000** |

## DryForce allowance schedule

| Functional package | Quantity basis | Placeholder allowance |
| --- | --- | ---: |
| Trailer platform, enclosure and service provisions | 1 concept platform | $22,000 |
| Dehumidification package | 1 allowance; module count / technology TBD | $50,000 |
| Power provision and electrical distribution | 1 allowance; architecture / rating TBD | $28,000 |
| Ducts, distribution fans and air movers | 1 mission kit; quantities TBD | $15,000 |
| Temperature / humidity / material-moisture instrumentation | 1 field kit | $5,000 |
| Integration labor and acceptance testing | 1 allowance | $25,000 |
| **DryForce subtotal** | | **$145,000** |

## Combined concept budget

| Item | Calculation | Allowance |
| --- | --- | ---: |
| Base pair | $95,000 + $145,000 | $240,000 |
| Concept contingency | 20% × $240,000 | $48,000 |
| **Illustrative pair capital** | Base + contingency | **$288,000** |

Contingency covers unresolved design. Taxes, freight, tow vehicles, licensing / registration, financing charges, working capital, spare fleet capacity, special contamination equipment and site-specific work are excluded. Engineering / certification beyond the integration allowances requires separate pricing.

The companion planner starts at $288,000 but accepts a replacement capital figure. Changing it does not change this underlying schedule. Scenario JSON downloads preserve the entered assumptions and units for review.

## Illustrative annual operating scenario

| Assumption / output | Value | Basis |
| --- | ---: | --- |
| Pair revenue | $3,500 / billable day | Planning value |
| Variable operating cost | $1,600 / billable day | Planning value for the pair |
| Contribution per billable day | $1,900 | Revenue less variable cost |
| Annual billable pair days | 45 | Assumed utilization, not a forecast |
| Annual fixed operating costs | $36,000 | Planning value |
| Annual gross revenue | $157,500 | $3,500 × 45 |
| Annual operating surplus | $49,500 | $1,900 × 45 − $36,000 |
| Operating break-even | 19 billable pair days / year | Round up $36,000 ÷ $1,900 |
| Simple capital payback | Approximately 5.82 years | $288,000 ÷ $49,500 |

Operating break-even covers fixed operating costs, not the purchase price. The surplus is before financing, taxes, depreciation and replacement capital. With a nonpositive daily contribution there is no positive-margin break-even; with nonpositive annual surplus there is no simple payback.

For the model, one billable day means a charged day for the pair. Pump-only, drying-only, standby and mobilization pricing require separate scenarios; do not multiply a single trailer's days into pair revenue.

## Quote and operating-cost checklist

Obtain matched-duty pump quotes and drying quotes for the intended site conditions. Require written inclusion lists for controls, power, hoses, ducts, freight, commissioning, warranty and service support. Identify exclusions and compare duty points before comparing prices.

Replace the daily-cost allowance with labor hours and burden, fuel / electricity, maintenance reserve, consumables, disposal and subcontractor costs. Allocate mobilization / demobilization and nonbillable setup explicitly. Replace annual fixed costs with storage, insurance, administration and other recurring costs, avoiding double counting against daily costs. Show debt service and working capital separately if financing is pursued.

Proceed to procurement only after the [concept validation gates](Flood_Response_Concept_Design.md#validation-before-procurement) close and management approves a supplier-backed budget.
