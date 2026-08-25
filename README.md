# Misalignment Platform site

React + Vite frontend for the Misalignment Platform. The site presents AI governance evidence, continuous monitoring, decision-support scoring, provenance, the Ata-Cont doctrine, Conscio, and V12.

## Local development

```bash
npm install
npm run dev
```

## Build and deploy

```bash
npm run build
npm run preview
```

The production bundle is emitted to `dist/` and is compatible with Cloudflare Pages and GitHub Pages. Set the build command to `npm run build` and the output directory to `dist`. Client-side navigation uses hash routes, so no server rewrite configuration is required.
