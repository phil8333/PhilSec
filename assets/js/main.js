// PhilSec small UI behaviours: nav toggle, theme toggle, reveal
document.addEventListener('DOMContentLoaded', () => {
  // mobile nav
  const navToggle = document.getElementById('navToggle');
  const nav = document.querySelector('.ps-nav');
  navToggle && navToggle.addEventListener('click', () => {
    if (!nav) return;
    nav.style.display = (nav.style.display === 'flex') ? 'none' : 'flex';
    nav.style.flexDirection = 'column';
    nav.style.position = 'absolute';
    nav.style.right = '20px';
    nav.style.top = '70px';
    nav.style.background = 'rgba(0,0,0,0.55)';
    nav.style.padding = '12px';
    nav.style.borderRadius = '10px';
  });

  // theme toggle (light/dark)
  const themeBtn = document.getElementById('themeBtn');
  const root = document.documentElement;
  const stored = localStorage.getItem('philsec-theme');
  if (stored === 'light') root.classList.add('light-mode');
  themeBtn && themeBtn.addEventListener('click', () => {
    const isLight = root.classList.toggle('light-mode');
    localStorage.setItem('philsec-theme', isLight ? 'light' : 'dark');
    themeBtn.setAttribute('aria-pressed', String(isLight));
  });

  // reveal
  document.querySelectorAll('.reveal').forEach((el, i) => {
    setTimeout(()=> el.classList.add('show'), 120 * i);
  });
});
