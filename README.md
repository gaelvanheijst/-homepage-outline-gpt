# Gaël van Heijst — Product Sites

Static site (plain HTML/CSS/JS, no build step). No Node.js or npm required to run or deploy.

## Structure

```
index.html              Hub page — profile + tiles linking to both products
fix-kit.html            Homepage Fix Kit sales page ($49)
first-aid.html          Homepage First Aid sales page ($9)
success.html            Fix Kit post-purchase page
first-aid-success.html  First Aid post-purchase page
cancel.html             Cancelled-checkout page (Fix Kit)
css/styles.css          All styling, shared across every page
js/script.js            FAQ accordion + wires every CTA button to its link
config.js               Every external link in one place (Stripe, booking, GPT)
images/                 Founder photo, product mockups/illustrations
```

## Before going live

1. **Create the Stripe Payment Links**
   One for each product, in Stripe Dashboard → Payment Links:
   - Homepage Fix Kit — one-time payment, $49.00 USD
   - Homepage First Aid — one-time payment, $9.00 USD

   Set each Payment Link's after-payment redirect to its matching success page
   (`/success.html` for the Fix Kit, `/first-aid-success.html` for First Aid).

2. **Paste the links into `config.js`**
   `STRIPE_PAYMENT_LINK_URL` (Fix Kit) and `FIRST_AID_STRIPE_PAYMENT_LINK_URL`
   (First Aid). Every CTA button on each page picks up its own link
   automatically via `data-checkout-button` / `data-firstaid-checkout-button`.

3. **Paste the GPT links into `config.js`**
   `GPT_LINK_URL` and `FIRST_AID_GPT_LINK_URL` — these are what buyers land
   on after payment (wired via `data-gpt-button` / `data-firstaid-gpt-button`
   on the success pages).

4. **Add real images**
   - `images/founder.png` — your headshot (used on the hub, both product
     pages, and both founder bio sections)
   - Any product mockups/illustrations — drop into `images/`

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
