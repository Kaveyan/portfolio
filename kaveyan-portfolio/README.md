# Kaveyan — Portfolio

Single-page, dependency-free portfolio site (`index.html` — HTML/CSS/JS in one file, no build step).

## Push to GitHub

```bash
cd kaveyan-portfolio
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

## Deploy

Pick whichever's easiest — all are free for a static site like this.

### Option A — GitHub Pages (deploy straight from the repo above)
1. On GitHub: **Settings → Pages**.
2. Under **Build and deployment → Source**, choose **Deploy from a branch**.
3. Branch: `main`, folder: `/ (root)` → **Save**.
4. Your site goes live at `https://<your-username>.github.io/<repo-name>/` in a minute or two.
5. Using a custom domain? Add it under **Settings → Pages → Custom domain**, and add a `CNAME` file to the repo root with the domain in it.

### Option B — Netlify
1. [app.netlify.com](https://app.netlify.com) → **Add new site → Import an existing project** → pick this GitHub repo.
2. Build command: *(leave blank)*, Publish directory: `/` (root).
3. Deploy. Netlify gives you a URL immediately and auto-redeploys on every push.

### Option C — Vercel
1. [vercel.com/new](https://vercel.com/new) → import the GitHub repo.
2. Framework preset: **Other**. Leave build/output settings blank.
3. Deploy.

## Before you go live
- Update `robots.txt` and `sitemap.xml` with your real domain (currently placeholder `kaveyan.dev`).
- Add a `favicon.ico` / `favicon.svg` and link it in `<head>` — none is included yet.
- Update the social links in the footer if any have changed.

## Structure
```
.
├── index.html      # the entire site
├── robots.txt
├── sitemap.xml
└── .gitignore
```
