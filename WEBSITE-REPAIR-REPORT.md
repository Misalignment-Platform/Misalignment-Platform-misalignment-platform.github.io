# Website recovery and repair report

## Scope and preflight

- **Repository:** `Misalignment-Platform/Misalignment-Platform-misalignment-platform.github.io`
- **Remote:** `origin` fetch/push: `https://github.com/Misalignment-Platform/Misalignment-Platform-misalignment-platform.github.io.git`
- **Base:** `main` at `197e2d255cbb6aff0c710217be36474fb65c7f29`; worktree was clean before edits.
- **Repair branch:** `website/evidence-boundary-repair`
- **Working directory:** `/root/.copilot/session-state/5cc02b9a2d38481e9cfb2aebe43c6c44/website`
- **Pages:** `.github/workflows/pages.yml` builds the Vite repository root and uploads `dist/`; `CNAME` is `misalignmentplatform.com`. The supplied deployment evidence identifies GitHub Pages as the publisher and Cloudflare as authoritative DNS, with apex A records `185.199.108.153`–`185.199.111.153` and `www` CNAMEd to `misalignment-platform.github.io`. The Pages API returned `main`/`/` source metadata; this was recorded, not changed or treated as authority to reconfigure Pages.
- **Evidence handoff:** the supplied `EVIDENCE-REPORT.md`, `TIMELINE.md`, `VERIFIED-CONTEXT.md`, `GITPILOT-CLEAN-HANDOFF.md`, and extracted source files were used. Checksums in `HANDOFF-SHA256SUMS.txt` passed. The original `.doc` referenced by `SHA256SUMS.txt` was not present at its recorded `/home/...` path, so its raw-file hash could not be independently recomputed in this session.

## Provenance and limits of reconstruction

The bounded reconstruction below uses the supplied `TIMELINE.md` and `VERIFIED-CONTEXT.md`, checked against repository and PR state. It preserves their status labels rather than promoting the chronology to canon:

- **FOUNDER_TESTIMONY — starting repository:** the website-help conversation began in `Misalignment-Platform/misalignment-platform` by Founder choice. The starting repository was not an accidental target selection.
- **EVIDENCE — repository-local reconciliation:** PR #73, **“Reconcile and reframe the repository front door,”** is open and unmerged in that repository. Its README/evidence reconciliation is valid local work and was not a website deployment.
- **EVIDENCE — website authority:** the later repair target is the separate `.github.io` repository. The supplied deployment record documents GitHub Pages and the Cloudflare DNS chain. A successful deployment of this website does not establish deployment of the Platform services.
- **EVIDENCE (as recorded in the supplied recovery packet) — stall:** the prior session was reported as running for 13+ hours and nonresponsive to Founder questions. The original `.doc` was not attached, so the raw source cannot be independently rechecked here.
- **INFERENCE — failure class:** the record is consistent with a cross-repository handoff/control-channel stall after a legitimate Platform-repository task, not a wrong initial repository choice or an invalid PR #73. This is a bounded inference, not a proven root cause.
- **UNKNOWN:** exact session/task IDs; the exact point the `.github.io` repository was introduced; messages/actions around that transition; background work and outcomes; last meaningful response; whether the elapsed counter represented active execution or stale state; and any artifacts created by the earlier session outside PR #73.

The website's Git history remains intact. Recent source history on 2026-08-25 includes positioning clarification (`8d1a9b7`), responsive demo behavior (`21addbe`), About-page expansion (`818208b`), restricted demo scenarios (`08fc99d`), engine-suite routing (`925000a`), and the base's Rephrase card (`197e2d2`). This records source evolution, not proof of product deployment. The present repair branch and PR #1 are new artifacts from this recovery, separate from the earlier stalled session. No history was rewritten.

## Public-claim classifications

These classifications describe the evidence reviewed, not universal facts about the project.

| Classification | Claim or presentation | Evidence and boundary |
|---|---|---|
| **VERIFIED — historical implementation** | The Platform repository retains an earlier local Conscio runtime and drift-verification harness under `runtime-v010`, with code for spawning agents and exercising aligned, drift, policy, and failure scenarios. | `runtime-v010/run_local.py`, `runtime-v010/verify_drift.py`, and `runtime-v010/MANIFEST.md`. This verifies versioned implementation artifacts, not a current service, successful deployment, or production history. |
| **VERIFIED — current prototype** | The repository's `CURRENT_STATE.md` lists implemented Tier 0 artifacts: Conscio session and heuristic endpoints, SQLite events, Smith async orchestration proof, Rephrase advisory, static browser UI, Cloudflare Worker gateway, backend bearer-token scopes, and the Triad runtime. | `CURRENT_STATE.md:1-26` at Platform revision `757817b1e5360148a621142497028b0cf01174af`. Specific implementations remain experimental and vary in validation; the list is not evidence that they are wired to this website or deployed as a production suite. |
| **VERIFIED — current tested prototype** | Standalone Triad `prototype-rules-v1` runs through AthenaSentinel, with eight bounded high-severity rule categories, a local tamper-evident hash chain, authenticated routes, and fail-closed persistence. Its report records 46 passing tests. Where no rule matches, the score derives from caller-supplied confidence. | `triad_runtime.py`, `reports/triad_runtime_validation_report.md:1-83` (validated 2026-10-08), and `governance/p3_governance_prototype_snapshot.md`. This verifies the tested prototype behavior and its reported limits, not canonical scoring, comprehensive detection, or downstream delivery. |
| **VERIFIED — website deployment chain** | The `.github.io` repository publishes a website through GitHub Pages; the supplied evidence identifies `misalignmentplatform.com` and Cloudflare-to-Pages DNS. | `.github/workflows/pages.yml`, `CNAME`, Pages deployment evidence in `VERIFIED-CONTEXT.md`, and successful run `32884377223` on 2026-08-25. This is evidence of website hosting, not Platform-service production deployment. |
| **PROTOTYPE** | This website's interactive walkthrough uses a local keyword heuristic; engine details, event and ledger views, and the console use local code or static JSON. | `src/demo/analyzeObservation.js`, `src/portal/Console.jsx`, and `public/mock/`. They are intentionally not represented as the separate Platform services' outputs. |
| **CLAIM_ONLY / CONCEPTUAL** | Conscio as a platform-wide evidence-grounded interpreter and Smith as an independent deterministic enforcement authority are integrated guarantees; all named engine roles are implemented end to end. | PR #73's `docs/public-face-reconciliation.md` and the implementation boundaries in Platform `CURRENT_STATE.md`. Some related prototypes exist, but the roles do not establish an integrated guarantee; Triad's tested gate is AthenaSentinel. |
| **CONTRADICTED / NOT IMPLEMENTED** | Canonical alignment scoring, production-grade authentication and tenant isolation, externally anchored immutable audit, production deployment, or governed autonomy are current Platform capabilities. | Platform `CURRENT_STATE.md:15-26`, `README.md` prototype limitations, and the Triad validation report. These explicitly mark the capabilities as not implemented or limited. |
| **CONTRADICTED** | The reviewed website's “live,” “operational,” public API/SDK, calibrated confidence, traceable evidence, active access intake, or partner-program UI proved those product capabilities. | At base SHA `197e2d2`, those outputs were local UI state, mock data, or placeholders; they did not call a Platform backend. The old copy is preserved as history, not treated as evidence. |
| **HISTORICAL** | The prior public website copy at base SHA `197e2d2` made broader live-service, scoring, API, provenance, and access/partner claims. | Preserved by Git history and documented here; historical publication is not verification of the claim's truth. |
| **UNKNOWN** | The exact content currently served at the custom domain, Founder biography details, customers, partnerships, certifications, and adoption. | The supplied handoff verifies the deployment/DNS chain, but the live fetch in this environment failed DNS resolution; current rendered content and unsupported external claims remain unverified. |

## Changes and rationale

- `README.md`, `index.html`, `public/index.html`, `public/manifest.json`, and `src/layouts/SiteLayout.jsx`: describe this website's scope accurately and distinguish its local samples from service prototypes in the separate Platform repository.
- `src/pages/index.jsx` and `about.jsx`: add an evidence-backed status inventory that separates verified historical implementation, verified current prototypes, conceptual roles, and unimplemented production capabilities. Link to the corresponding repository records and code.
- `src/pages/academy.jsx`, `doctrine.jsx`, `engines.jsx`, `partners.jsx`, `early-access.jsx`, `developers.jsx`, `demo.jsx`, `audit.jsx`, and `ledger.jsx`: retain concept and research material while distinguishing it from implemented controls, live services, access intake, or established programs.
- `src/components/index.jsx`, `src/components/AuditEventViewer.jsx`, `src/components/LedgerChainViewer.jsx`, `src/engines/EngineDetail.jsx`, `src/engines/engineCatalog.js`, and `src/portal/Console.jsx`: replace operational/live status and API wording with concept/sample labels; constrain the console to local fixture choices.
- `src/demo/DemoAwareness.jsx`, `DemoDoctrine.jsx`, `DemoInput.jsx`, `DemoMisalignment.jsx`, `DemoPacket.jsx`, `DemoPipeline.jsx`, `DemoV12.jsx`, `analyzeObservation.js`, and `scenarios.js`: describe the browser-side keyword heuristic accurately, remove mock confidence/recommendation/provenance claims, and label scenarios and outputs as illustrative.
- `WEBSITE-REPAIR-REPORT.md`: preserve the evidence review, source boundaries, provenance limitations, and remaining unknowns.

The legacy `sections/*.html` files were not edited: the Pages workflow builds the repository-root Vite app into `dist/`, and those files are outside both the Vite entry point and `public/`. Their current reachability was not independently tested.

## Validation

- `npm ci`: passed; npm reported **2 high-severity dependency audit findings**. Dependencies were not upgraded as part of this content repair.
- `npm run build`: passed with Vite 8.2.2 (47 modules transformed).
- Local source link check: 9 hash-route links checked, no unresolved routes; 4 console fixture paths checked, all present.
- `git diff --check`: passed.
- `package.json` provides no test, lint, or dedicated link-check script.
- Live-site fetch: blocked because DNS resolution for `misalignmentplatform.com` failed in this environment. The supplied evidence verifies the GitHub Pages/DNS hosting chain, but the currently rendered page could not be compared to source here; no claim is made that this repair has been deployed.

## Remaining unknowns and review boundary

The exact currently served page, direct custom-domain resolution from this environment, the Pages API `main`/`/` metadata versus the workflow artifact path, legacy `sections/` reachability, and the precise cause/timing of the earlier session stall remain unresolved. The attached timeline, deployment context, and extracted-evidence checksums were used; the original Word document itself was unavailable for re-hashing. No merge, production deployment, Pages/custom-domain change, DNS change, or other infrastructure mutation was performed. Founder review is required before any merge or deployment.
