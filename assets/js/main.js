// PhilSec main.js
// Handles nav toggle, theme switching, and reveal animations

// =======================
// NAV TOGGLE
// =======================
const navToggle = document.getElementById("navToggle");
const navMenu = document.querySelector(".ps-nav");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("open");
  });
}

// =======================
// THEME TOGGLE
// =======================
const themeBtn = document.getElementById("themeBtn");

if (themeBtn) {
  themeBtn.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("light-mode");
    themeBtn.setAttribute("aria-pressed", isDark);
  });
}

// =======================
// SCROLL REVEAL ANIMATIONS
// =======================
const revealItems = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const triggerPoint = window.innerHeight * 0.85;

  revealItems.forEach((item) => {
    const rect = item.getBoundingClientRect();

    if (rect.top < triggerPoint) {
      item.classList.add("show");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// =======================
// DEMO SUBSCRIBE HANDLER
// =======================
const subscribeForm = document.getElementById("subscribeForm");

if (subscribeForm) {
  subscribeForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Subscribed — this is a demo!");
  });
}
