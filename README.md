# Vedant Bulbule — Portfolio

A single-page portfolio built with React (Vite) + Tailwind. No backend —
it's a fully static site, so it deploys anywhere in about a minute.

## Design

Editorial/technical "blueprint" theme: dark ink background, a faint grid
backdrop, hairline rules, corner brackets on cards, and monospace coordinate
labels — nodding to the ARGO ocean-data project and to spec-sheet/engineering
notebooks generally, rather than a generic template layout. Sections fade
in as you scroll.

Colors, type and layout tokens live in `tailwind.config.js` and
`src/index.css` — change them there to restyle the whole site.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:5173`.

Build for production:

```bash
npm run build      # outputs to dist/
npm run preview    # preview the production build locally
```

## Editing your content

Everything resume-derived — name, bio, education, skills, experience,
projects, certifications — lives in **`src/data.js`**. Edit that one file to
update the site; no other code changes needed for content updates.

To add a project, add an entry to the `projects` array:

```js
{
  id: 'unique-slug',
  name: 'Project Name',
  coords: '00.00°N 00.00°E',   // cosmetic — any short label works
  summary: 'One or two sentences.',
  details: ['Bullet one.', 'Bullet two.'],
  tech: ['Python', 'FastAPI'],
  repo: 'https://github.com/Vedantbulbule1223/your-repo',
  status: 'shipped', // shipped | active | research
}
```

## Contact form

The form has no backend to submit to, so it uses one of two paths:

1. **Formspree (recommended)** — free, no server needed. Sign up at
   [formspree.io](https://formspree.io), create a form, and copy its ID into
   a `.env` file:
   ```
   VITE_FORMSPREE_ID=your-form-id
   ```
   Submissions land in your Formspree inbox/email. Free tier covers 50
   submissions/month, which is plenty for a portfolio site.
2. **mailto: fallback** — if `VITE_FORMSPREE_ID` isn't set, submitting the
   form opens the visitor's email client pre-filled with their message. Works
   with zero setup, but depends on them having a mail client configured.

## Deploying

The site is a static build (`npm run build` → `dist/`), so any static host
works. A few good options:

### Vercel (recommended — this repo is pre-configured for it)
1. Push this folder to a GitHub repo.
2. Go to [vercel.com/new](https://vercel.com/new), import the repo.
3. Vercel auto-detects Vite; `vercel.json` in this repo sets the build
   command and output directory just in case. Click Deploy.
4. If you're using Formspree, add `VITE_FORMSPREE_ID` under
   Project → Settings → Environment Variables, then redeploy.

### Netlify
1. Push to GitHub, then [app.netlify.com/start](https://app.netlify.com/start)
   → import the repo.
2. Build command: `npm run build`. Publish directory: `dist`.
3. Add `VITE_FORMSPREE_ID` under Site settings → Environment variables.

### GitHub Pages
1. `npm install --save-dev gh-pages`
2. Add to `package.json` scripts: `"deploy": "npm run build && gh-pages -d dist"`
3. Set `base: '/your-repo-name/'` in `vite.config.js` if deploying to
   `username.github.io/repo-name` (not needed for a custom domain).
4. `npm run deploy`

### Cloudflare Pages
1. Connect the GitHub repo at [pages.cloudflare.com](https://pages.cloudflare.com).
2. Build command: `npm run build`. Build output directory: `dist`.

### Firebase Hosting
Since you're already using Firebase elsewhere:
```bash
npm install -g firebase-tools
firebase login
firebase init hosting   # public directory: dist, single-page app: yes
npm run build
firebase deploy
```

All five give you free HTTPS hosting and a custom-domain option — pick
whichever you're most comfortable managing. Vercel or Netlify are the
lowest-friction if you want git-push-to-deploy.
