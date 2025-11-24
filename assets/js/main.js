/* ================================
   PAGE FADE TRANSITIONS
================================= */
body.page-enter {
  opacity: 0;
  transition: opacity .6s ease;
}
body.page-exit {
  opacity: 0;
}
body.page-enter.page-exit {
  opacity: 0;
}
body.page-enter {
  opacity: 1;
}

/* ================================
   MOBILE NAV
================================= */
.ps-nav.nav-open {
  display: flex !important;
  flex-direction: column;
  background: rgba(255,255,255,0.04);
  padding: 14px;
  border-radius: 12px;
  backdrop-filter: blur(8px);
  margin-top: 12px;
}

/* toggle animation */
.nav-toggle.open {
  transform: rotate(90deg);
  transition: .3s;
}

/* ================================
   AUTO-HIDE HEADER
================================= */
.hide-header {
  transform: translateY(-120%);
  transition: transform .4s ease;
}

/* ================================
   SCROLL TOP BUTTON
================================= */
.scroll-top-btn {
  position: fixed;
  bottom: 22px;
  right: 22px;
  padding: 10px 14px;
  border-radius: 10px;
  border: none;
  background: linear-gradient(90deg,var(--accent),var(--accent-2));
  color: #02111a;
  font-weight: 800;
  cursor: pointer;
  opacity: 0;
  pointer-events: none;
  transition: opacity .3s ease;
}
.scroll-top-btn.show {
  opacity: 1;
  pointer-events: auto;
}
