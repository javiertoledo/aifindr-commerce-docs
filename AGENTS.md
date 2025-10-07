# Repository Guidelines

## Project Structure & Module Organization
AIFindr Commerce docs are delivered via Docusaurus 3 and focus solely on widget installation guidance. All authoring lives under `docs/widget-config`; each folder mirrors a step in the onboarding journey (intro, installation, triggers, personalizacion). Keep front matter slugs stable because they power deep links that partners embed. Reusable React components and layout tweaks belong in `src/components`, with page-level entries in `src/pages` only when the widget onboarding flow needs a bespoke layout. Global styling tweaks stay in `src/css/custom.css`, while icons, fonts, and other assets are served directly from `static/`.

## Build, Test, and Development Commands
Run `yarn install` to sync dependencies (Yarn 1.x). Use `yarn start` for the hot-reloading dev server while editing widget docs. Before sharing work, execute `yarn build` to produce the production bundle and catch broken links or missing assets. Use `yarn serve` to review the built output exactly as end users will see it. When caches get stale after dependency or config changes, run `yarn clear` and restart.

## Coding Style & Naming Conventions
Match the existing 2-space indentation and ESLint-friendly single quotes in React/TypeScript files. Component directories use PascalCase (`src/components/InstallChecklist`) with default exports in `index.js` and scoped styles in `styles.module.css`. Markdown filenames stay kebab-case (`instalacion.md`) and should start with front matter (`title`, `description`, `slug`, `sidebar_position`). Write concise, action-oriented steps, favoring numbered lists for installation sequences and callouts for prerequisites.

## Testing Guidelines
There is no automated test suite. After content edits, stop the dev server and run `yarn build`; treat any warnings as blockers. Manually click through the widget installation flow in both light and dark themes and verify code snippets render with the correct highlighting and language tags. When updating embedded scripts, copy them into a test storefront to confirm the widget installs as written.

## Commit & Pull Request Guidelines
Use short, imperative commit subjects (`clarify trigger setup`, `add dashboard prerequisites`). Group content edits by step so reviewers grasp the scope quickly. Pull requests should summarise the user journey improvements, link any related support tickets, and note whether screenshots or script snippets changed. Include screenshots or GIFs whenever UI instructions reference new toggles or dashboard surfaces, and record the validation commands you ran.
