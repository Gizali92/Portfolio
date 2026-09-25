# Gizali Ghanchi — Portfolio

Personal portfolio site for Gizali Ghanchi, DevOps Engineer (Linux, Kubernetes, Ansible, CI/CD,
Scripting Automation, Azure). Single-page, static site — no build step, no dependencies besides
a Google Font loaded over CDN.

## Structure

```
index.html      main page (About, Skills, Experience, Education, Contact)
style.css       styling, dark/light theme via CSS variables
script.js       theme toggle, mobile nav, typing effect, scroll-reveal
404.html        fallback page for GitHub Pages
assets/
  resume.pdf    downloadable resume (linked from the hero section)
```

## Run locally

Just open `index.html` in a browser, or serve it:

```bash
python -m http.server 8000
# then visit http://localhost:8000
```

## Deploy to GitHub Pages

1. Push this repo to GitHub (see steps below if not done yet).
2. On GitHub: **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **Deploy from a branch**.
4. Branch: `main`, folder: `/ (root)` → **Save**.
5. Site goes live at `https://<username>.github.io/<repo-name>/` within a minute or two.

### First-time push (if the repo doesn't exist on GitHub yet)

```bash
cd gizali-portfolio
git init
git add .
git commit -m "Initial portfolio site"
git branch -M main
git remote add origin https://github.com/<username>/<repo-name>.git
git push -u origin main
```

Create the empty repo on GitHub first (github.com/new), then run the commands above with your
username and chosen repo name.

## Customize

- Update contact links (GitHub URL placeholder) in `index.html` under `#contact`.
- Swap `assets/resume.pdf` with an updated resume any time — filename must stay `resume.pdf`,
  or update the link in `index.html`.
- Colors/theme: edit CSS variables at the top of `style.css` (`--accent`, `--accent-2`, etc.).
