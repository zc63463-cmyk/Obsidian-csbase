# Quartz + GitHub + Cloudflare Pages

This repository is wired so that:

- source notes live in the repo root `Content/`
- Quartz lives in `quartz/`
- Cloudflare Pages builds from the `quartz/` directory

## Local setup

1. Install Node.js 22 and npm 10+.
2. Open a terminal in `D:\Notes\obsidian-temp\Obsidian-csbase\quartz`.
3. Install dependencies:

```powershell
npm install
```

4. Run a local preview:

```powershell
npm run dev:wiki
```

Quartz reads Markdown from `../Content` and writes the generated site to `public/`.

## GitHub setup

1. Push this repository to GitHub.
2. Keep the deployment branch as `main` unless you intentionally switch branches.
3. Commit both note changes and Quartz config changes to this same repository.

## Cloudflare Pages setup

Create a new Pages project and connect it to this GitHub repository with these settings:

| Option | Value |
| --- | --- |
| Production branch | `main` |
| Framework preset | `None` |
| Root directory | `quartz` |
| Build command | `npm install && npm run build:cf` |
| Build output directory | `public` |

`build:cf` runs a Node-based build helper so the same command works in Cloudflare Linux and on local Windows machines. It fetches full git history when Cloudflare performs a shallow clone so Quartz can keep git-based modified dates.

## Custom domain

After you bind a custom domain in Cloudflare:

1. Add the custom domain in the Pages project.
2. Update `baseUrl` in [quartz.config.ts](/D:/Notes/obsidian-temp/Obsidian-csbase/quartz/quartz.config.ts).
3. Redeploy once so RSS, sitemap, and canonical links use the correct URL.

## Content conventions

- Put publishable Markdown in `Content/`
- Keep raw reference assets in folders such as `00-Raw素材/`
- Quartz currently ignores `.obsidian/`, `_archive/`, `_templates/`, and `00-Raw素材/`
