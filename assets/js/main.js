// =========================================================
// MOBILE NAV
// =========================================================
const navToggle = document.getElementById("navToggle");
const nav = document.querySelector(".ps-nav");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
}

// =========================================================
// THEME TOGGLE
// =========================================================
const themeBtn = document.getElementById("themeBtn");
const html = document.documentElement;

// Load theme from saved preference
let savedTheme = localStorage.getItem("theme");
if (!savedTheme) {
  savedTheme = "dark";
  localStorage.setItem("theme", "dark");
}
html.setAttribute("data-theme", savedTheme);

// Update button label
updateThemeIcon(savedTheme);

// Toggle theme on click
themeBtn.addEventListener("click", () => {
  let current = html.getAttribute("data-theme");
  let next = current === "dark" ? "light" : "dark";

  html.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);

  updateThemeIcon(next);
});

// Icon update function
function updateThemeIcon(theme) {
  if (theme === "light") {
    themeBtn.textContent = "🌙"; // moon for dark mode switch
  } else {
    themeBtn.textContent = "☀️"; // sun for light mode switch
  }
}

// =========================================================
// SCROLL REVEAL
// =========================================================
const reveals = document.querySelectorAll(".reveal");
function checkReveal() {
  const windowHeight = window.innerHeight;
  reveals.forEach((el) => {
    const top = el.getBoundingClientRect().top;
    if (top < windowHeight - 90) el.classList.add("visible");
  });
}
window.addEventListener("scroll", checkReveal);
window.addEventListener("load", checkReveal);
