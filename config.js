// Central place for the Stripe Payment Link.
// 1. In your Stripe Dashboard: Payment Links -> New -> create a $9.00 USD,
//    one-time payment link for "The Homepage Outline GPT".
// 2. Set the Payment Link's after-payment redirect to your /success.html URL
//    (Stripe Payment Links redirect on their own, so success.html mainly
//    matters if you link people there directly, e.g. from an email).
// 3. Paste the resulting URL below.
const STRIPE_PAYMENT_LINK_URL = "https://buy.stripe.com/REPLACE_WITH_YOUR_LINK";
