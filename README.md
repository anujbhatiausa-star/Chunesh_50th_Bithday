# Chunesh's 50th Birthday Celebration

A single-page celebration website for Chunesh Bhatia's 50th birthday on September 12th.

## Structure
- `index.html` — page content (hero, countdown, message, photo gallery, footer)
- `css/style.css` — styling (navy & gold theme, responsive layout)
- `js/script.js` — live countdown timer + subtle sparkle animation
- `assets/photos/` — drop real photos here, then update the gallery in `index.html`

## Adding real photos
1. Copy image files into `assets/photos/`.
2. In `index.html`, replace a placeholder block like:
   ```html
   <div class="gallery-item placeholder"><span>📷</span><p>Add Photo</p></div>
   ```
   with:
   ```html
   <div class="gallery-item"><img src="assets/photos/your-photo.jpg" alt="Chunesh"></div>
   ```

## Viewing locally
Open `index.html` directly in a browser, or serve the folder with any static file server.

## Enabling the birthday wishes form
The "Leave a Birthday Wish" section posts to [Formspree](https://formspree.io) so any
visitor can submit a wish with no login — submissions arrive in your email / Formspree
dashboard (there's no live public wall of wishes on the page itself).

1. Sign up at https://formspree.io (free tier).
2. Create a new form and copy its endpoint, e.g. `https://formspree.io/f/abcd1234`.
3. In `js/script.js`, replace the placeholder:
   ```js
   const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";
   ```
   with your real endpoint.
4. Commit and push — the form will start delivering submissions to you.

## Deployment
This site auto-deploys to GitHub Pages via `.github/workflows/pages.yml` on every push
to this branch (requires Settings → Pages → Source: GitHub Actions, set once).
