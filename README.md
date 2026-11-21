# Misalignment Platform website

This React + Vite repository builds an exploratory public presentation and browser-side prototypes. The demos use local logic and bundled mock JSON. They do not establish a deployed platform API, operational monitoring, validated scoring, or production governance.

## SMB Owner Explorer

`#/explorer` is an exploratory walkthrough for small-business owners. It sorts the visitor's own answers into Intent, Behavior, Context, and Environment and lists questions and unknowns derived only from those answers. Entries stay in browser memory; nothing is submitted, stored, scored, or analyzed by a platform engine.

## Local development

```bash
npm ci
npm run dev
```

## Build and deploy

```bash
npm run build
npm run preview
```

The GitHub Pages workflow builds the repository root and publishes `dist/`. Deployment configuration and a successful build do not establish that the custom domain is reachable or that a platform service is deployed.

See [WEBSITE-REPAIR-REPORT.md](WEBSITE-REPAIR-REPORT.md) for the claim review, evidence boundaries, verification results, and remaining unknowns.
