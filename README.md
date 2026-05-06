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
python -m http.server 3020
```

Then open:

```text
http://localhost:3020/
```
