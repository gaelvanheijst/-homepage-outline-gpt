// FAQ accordion
document.querySelectorAll(".faq-item").forEach((item) => {
  const question = item.querySelector(".faq-question");
  question.addEventListener("click", () => {
    const isOpen = item.classList.contains("open");
    document
      .querySelectorAll(".faq-item.open")
      .forEach((openItem) => {
        if (openItem !== item) {
          openItem.classList.remove("open");
          openItem.querySelector(".faq-icon").textContent = "+";
        }
      });
    item.classList.toggle("open", !isOpen);
    item.querySelector(".faq-icon").textContent = isOpen ? "+" : "−";
  });
});

// Wire every $9 Workshop CTA to the Stripe Payment Link (see config.js)
document.querySelectorAll("[data-checkout-button]").forEach((button) => {
  button.setAttribute("href", STRIPE_PAYMENT_LINK_URL);
});

// Wire every Strategy Session CTA to the booking link (see config.js)
document.querySelectorAll("[data-booking-button]").forEach((button) => {
  button.setAttribute("href", STRATEGY_SESSION_BOOKING_URL);
});
