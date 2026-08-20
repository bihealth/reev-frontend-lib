# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

`@bihealth/reev-frontend-lib` is a **published Vue 3 component library** (not an app) with reusable
UI for the [REEV](https://github.com/bihealth/reev) variant-interpretation platform. It is built
with Vite in library mode (`src/main.ts` → UMD/ES/CJS + CSS in `dist/`), uses Vuetify 3 for UI and
Pinia for stores. There is no dev server for an app — **Storybook is the development environment**.

## Commands

Use the `Makefile` targets; they wrap the npm scripts.

```bash
make deps        # npm install --include=dev
make serve       # Storybook on :6006 — the way to develop/preview components
make lint        # eslint --fix + vue-tsc type-check + prettier --list-different
make format      # prettier --write
make test        # vitest run, with coverage
make test-nocov  # vitest run, no coverage (faster)
make test-w      # vitest watch
make snap        # update snapshots
make ci          # deps + lint + test
```

Run a single test file / single test:

```bash
npm run -- test:unit:nocov --run src/components/GeneClinvarCard/GeneClinvarCard.spec.ts
npm run -- test:unit:nocov --run -t 'renders the GeneClinvarCard'
```

Code generation (network/Docker required, run rarely):

```bash
make proto     # fetch .proto from annonars/mehari main + regenerate src/pbs + format + lint
make openapi   # regenerate the OpenAPI clients under ext/*/src/lib
```

**Before touching npm dependencies**, run `./utils/npm-security-check.sh` (see
`docs/SECURITY-NPM-SUPPLY-CHAIN.md`). Dependabot auto-merge for npm is deliberately disabled.

PR titles must be Conventional Commits (enforced by CI, `validateSingleCommit: true`);
releases are cut by release-please.

## Architecture

Four top-level modules, each re-exported as a namespace from `src/main.ts`
(`api`, `components`, `stores`, `lib`):

- **`src/pbs/`** — *generated* protobuf-ts code from the annonars/mehari `.proto` files. These
  message classes (`Record`, `ClinvarPerGeneRecord`, `Transcript`, …) are the domain data types
  used throughout the library. Never hand-edit; regenerate with `make proto`.
- **`src/api/`** — one hand-written `fetch`-based client class per backend
  (`AnnonarsClient`, `MehariClient`, `VigunoClient`, `DottyClient`, `CadaPrioClient`,
  `VariantValidatorClient`, `PubtatorClient`). Clients parse responses into `pbs` types via
  `X.fromJson(...)` where a proto exists, otherwise into local `types.ts` interfaces.
- **`src/stores/`** — Pinia setup stores (`useGeneInfoStore`, `useSeqvarInfoStore`,
  `useStrucvarInfoStore`, …) that orchestrate several API clients and expose a
  `storeState: StoreState` (`Initial | Loading | Active | Error | Redirect`, `src/stores/types.ts`)
  plus an `initialize()` that early-returns when the query is unchanged.
- **`src/lib/`** — cross-cutting helpers, most importantly:
  - `genomicVars.ts` — the core domain model: `Seqvar` / `Strucvar` (linear, insertion, breakend)
    interfaces, their `*Impl` classes, and the regex-based parsers/validators for user input.
  - `genomeBuilds.ts` — `GenomeBuild` (`grch37`/`grch38`).
  - `urlConfig.ts` — see below.
  - `testUtils.ts` — see below.

### URL configuration (important)

There is no per-call base URL plumbing. `src/lib/urlConfig.ts` exports a **single mutable global
`urlConfig` object**; consumers of the library must populate `baseUrlAnnonars` etc. at startup.
Every API client constructor reads its base URL from it and throws `ConfigError` when it is
`undefined`. Tests get their values from `setupUrlConfigForTesting()`, called in
`src/vitest.setup.ts`.

API errors are the classes in `src/api/common.ts`: `ConfigError` (programming error) and
`CallError` with subclasses `StatusCodeNotOk` and `InvalidResponseContent`.

### Components

`src/components/<CardName>/` holds the exported card plus its private sub-components, its
`.spec.ts`, its `.stories.ts`, and JSON fixtures. Only the top-level card of each directory is
re-exported from `src/components/index.ts`.

Cards are **presentational and props-driven** — they take `pbs` records (`clinvarPerGene`,
`geneInfo`, `transcripts`, `genomeBuild`, …) as props and do not read Pinia stores themselves;
the stores are exported separately so the host app wires them up. Keep new cards that way.

### `ext/`

Generated `@hey-api/openapi-ts` clients for cadaPrio, dotty, variantValidator and viguno.
They are **not currently imported by `src/`** — the hand-written clients in `src/api/` are what is
used. Don't assume changing `ext/` affects runtime behavior.

## Testing conventions

- Vitest + jsdom, `@vue/test-utils`, `@pinia/testing`. Component tests almost always go through
  `setupMountedComponents()` from `src/lib/testUtils.ts`, which builds a Vuetify (md3) instance, a
  testing Pinia (`initialStoreState`), and a router, and returns `{ wrapper, pinia, router }`.
- Fixtures are JSON files next to the test. In **specs** they are read with
  `fs.readFileSync` + `X.fromJsonString(...)`; in **stories** they must be `import`ed and parsed
  with `X.fromJson(json, { ignoreUnknownFields: true })` — `fs`/`process` are unavailable in the
  browser.
- Tests are written as `describe.concurrent(...)` with `test.each(...)` over gene/build
  combinations; several suites use snapshots (`__snapshots__/`, refresh via `make snap`).
- Canvas/plot-heavy components rely on `vitest-canvas-mock` and the `ResizeObserver` stub from
  `src/vitest.setup.ts`.
- Coverage is only collected for `src/lib`, `src/stores`, `src/components`, `src/views`,
  `src/router` — `src/api` and `src/pbs` are excluded, but `src/api` still has its own specs.

## Style

Prettier: no semicolons, single quotes, width 100, no trailing commas, imports sorted and grouped
by `@trivago/prettier-plugin-sort-imports`. `@typescript-eslint/no-explicit-any` and
`ban-ts-comment` are off (the codebase uses `// @ts-ignore` around protobuf-ts JSON parsing);
unused vars prefixed with `_` are allowed. Public functions, props and store members carry JSDoc
comments — follow that.

## Gotchas

- `pinia` itself is not declared in `package.json` (it is only present as a peer of
  `@pinia/testing`), yet `src/stores/` imports it. Vue and Pinia come from the host app.
- `vue` is the only rollup `external` — everything else, including Vuetify, is bundled.
- Imports inside `src/` use relative paths (`../../lib/urlConfig`), not the `@/` alias, even though
  the alias exists in `vite.config.mts`; keep new code relative so the library build stays portable.
