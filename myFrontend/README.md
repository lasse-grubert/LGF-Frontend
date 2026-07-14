# Worktime · Productive Flux (React Frontend)

The LGF frontend, restyled to implement the **"Productive Flux"** Stitch design system
(Modern Corporate Minimalism, Indigo primary + Emerald success, Inter typography).

## Stack
- React 19 + Vite 7
- React Router 7
- Tailwind CSS 3 (design tokens from the Stitch `DESIGN.md` live in `tailwind.config.js`)
- Material Symbols icons (loaded in `index.html`)

## Getting started
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
```
The dev server proxies `/time/*` to `http://localhost:8080` for the departure-time
calculation backend (see `vite.config.js`).

## What was implemented from the Stitch design
- **Home** (`/`) – hero, bento feature grid, "Designed for Deep Work" section
- **Worktime Calculator** (`/worktime-calculator`) – calculator card, emerald result bar,
  live countdown until you can leave. Wired to the existing backend call and `addRow`.
- **Timetable** (`/timestable`) – data table with status chips, inline "Add Row" flow
  (worktime auto-calculated), delete, pagination footer.
- **Display Settings** (`/settings/display`) – Light/Dark theme, text scaling and motion
  toggles are **functional** and persist per device (see `context/ThemeContext.jsx`).

## Structure
- `tailwind.config.js` – full Productive Flux token set (colors, spacing, type, radii)
- `src/components/` – `navbar/`, `footer/`, `layout/`, shared `Icon`, `SimplePage`
- `src/context/ThemeContext.jsx` – theme / font scale / animations, applied to `<html>`
- `src/pages/` – one folder per page, business logic unchanged
