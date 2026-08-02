# Homepage Fix Kit — Sales Page

Static site (plain HTML/CSS/JS, no build step). No Node.js or npm required to run or deploy.

## Structure

```
index.html      Main sales page
success.html    Post-purchase page
cancel.html     Cancelled-checkout page
css/styles.css  All styling
js/script.js    FAQ accordion + wires CTA buttons to the Stripe Payment Link
config.js       Single place to set your Stripe Payment Link URL
images/         Founder photo, testimonial screenshots
```

## Before going live

1. **Create a Stripe Payment Link**
   Stripe Dashboard → Payment Links → New → one-time payment, $49.00 USD, product "Homepage Fix Kit".
   Set the after-payment redirect to your deployed `/success.html` URL.

2. **Paste the link into `config.js`**
   Replace `STRIPE_PAYMENT_LINK_URL` with the real `https://buy.stripe.com/...` URL. All 7 CTA buttons on the page pick this up automatically.

3. **Add real images**
   - `images/founder.jpg` — your headshot
   - Testimonial screenshots (DMs, emails, Slack) — drop into `images/` and uncomment the `<img>` line in the Results section of `index.html`

## Running locally

No install needed. From this folder:

```bash
python3 -m http.server 4321
```

Then open `http://localhost:4321`.

## Deploying (Vercel)

Static sites deploy on Vercel with zero config:

```bash
npm install -g vercel   # only if you don't have the Vercel CLI
vercel
```

Or without any CLI: push this folder to a GitHub repo, then in the Vercel dashboard choose "Import Project" → select the repo → deploy. No framework preset or environment variables needed since there's no backend.

Any other static host works too (Netlify, GitHub Pages, Cloudflare Pages) — just point it at this folder.

## Domain

Point your chosen subdomain (e.g. `outline.gaelvanheijst.nl`) at wherever you deploy, per that host's custom domain instructions.
