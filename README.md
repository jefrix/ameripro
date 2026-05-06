# Ameripro Local Operations

Static local operations map for Ameripro Environmental Services.

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
