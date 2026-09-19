# Big Hit Games Static Website

Ready for GitHub Pages.

## Pages
- `/` — Home
- `/about/` — About Us
- `/privacypolicy/` — Privacy Policy
- `/contact/` — Contact Us

## Upload to GitHub Pages
1. Create a new GitHub repository.
2. Upload **the contents of this folder** (not the ZIP itself).
3. Open repository **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Select your main branch and `/ (root)`, then save.
6. In **Settings → Pages → Custom domain**, enter `bighitgames.site`.
7. GitHub will show the DNS records you must add at your domain registrar.
8. Enable **Enforce HTTPS** after DNS verification succeeds.

A `CNAME` file for `bighitgames.site` is already included.

## Important before publishing
- The contact email is currently `contact@bighitgames.site`. Replace it in:
  - `contact/index.html`
  - `privacypolicy/index.html`
  - `assets/script.js`
  if you plan to use a different address.
- Review the Privacy Policy and make sure it accurately lists the SDKs/data practices used by each of your games.
