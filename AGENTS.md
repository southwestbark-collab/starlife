# AGENTS.md

## Project Context

This is a standard Vite + React app. Treat it as user-owned application code, keep changes focused on the user's request, and preserve existing project conventions.

Start with `README.md` for local setup and project workflow.

## Key Files

- `main.jsx`: application entry point.
- `App.jsx`: top-level app shell.
- `vite.config.js`: Vite configuration.
- `.env.local`: local-only environment values; never commit secrets.

## Working Notes

- Use `npm run dev` for local frontend development.
- Prefer the repo's existing React/Vite setup over adding external platform-specific integration paths.
- Run the relevant checks from `package.json` before finishing code changes.
