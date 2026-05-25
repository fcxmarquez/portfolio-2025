# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev        # start dev server
pnpm build      # production build
pnpm lint       # Biome lint
pnpm format     # Biome format (write)
pnpm check      # Biome lint + format + import sort (write)
```

Package manager is **pnpm**. There are no tests configured.

## Architecture

**Next.js 16 App Router** portfolio site. All personal/resume data lives in a single file: `src/data/resume.tsx` — edit this to change any content on the site (name, work, education, skills, projects, social links, navbar items).

### Key data flows

- `DATA` (from `src/data/resume.tsx`) is imported by `src/app/layout.tsx` (metadata), `src/app/page.tsx` (all sections), and `src/components/navbar.tsx` (dock links).
- Blog posts are `.mdx` files in `content/` at the repo root, processed at request time by `src/data/blog.ts` using a unified/remark/rehype pipeline (no MDX component rendering — plain HTML output via `dangerouslySetInnerHTML`).

### Navbar SSR quirk

`src/components/navbar.tsx` is a server-compatible component but is wrapped in `src/components/navbar-client.tsx` with `dynamic(..., { ssr: false })` to avoid hydration mismatches from the Magic UI Dock and theme-aware styles.

### Component layers

- `src/components/ui/` — shadcn/ui primitives
- `src/components/magicui/` — Magic UI animations (BlurFade, BlurFadeText, Dock)
- `src/components/` — composed components (Navbar, ProjectCard, ResumeCard, etc.)

### Path alias

`@/` resolves to `src/`.

## Development guidelines

### Git Workflow

- Follows @commitlint/config-conventional standards
- The commit doesn't have to have a body. Has to be brief. Don't mention you as co-author in the commit message.
- Don't push commits at least the user explicitly asks for it.