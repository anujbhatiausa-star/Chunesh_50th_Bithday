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
