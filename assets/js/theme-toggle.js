/* ==========================================================================
   ATELIER BESPOKE — THEME & RTL TOGGLE SCRIPT
   Handles persistent dark/light mode and RTL layout state via localStorage
   ========================================================================== */

(function () {
  'use strict';

  const THEME_STORAGE_KEY = 'bespoke_theme_preference';
  const RTL_STORAGE_KEY = 'bespoke_rtl_preference';

  // --- Theme Toggle Logic ---
  function getPreferredTheme() {
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    if (savedTheme) {
      return savedTheme;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function applyTheme(theme) {
    if (theme === 'dark') {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
    updateToggleIcons(theme);
  }

  function updateToggleIcons(theme) {
    const toggleButtons = document.querySelectorAll('.theme-toggle-btn');
    toggleButtons.forEach(btn => {
      if (theme === 'dark') {
        btn.innerHTML = '<i class="bi bi-sun-fill" title="Switch to Light Mode"></i>';
        btn.setAttribute('aria-label', 'Switch to Light Mode');
      } else {
        btn.innerHTML = '<i class="bi bi-moon-stars-fill" title="Switch to Dark Mode"></i>';
        btn.setAttribute('aria-label', 'Switch to Dark Mode');
      }
    });
  }

  // --- RTL Layout Toggle Logic ---
  function applyRTL(isRTL) {
    if (isRTL) {
      document.documentElement.setAttribute('dir', 'rtl');
      document.documentElement.classList.add('rtl-mode');
    } else {
      document.documentElement.setAttribute('dir', 'ltr');
      document.documentElement.classList.remove('rtl-mode');
    }
    updateRTLButtons(isRTL);
  }

  function updateRTLButtons(isRTL) {
    const rtlButtons = document.querySelectorAll('.rtl-toggle-btn');
    rtlButtons.forEach(btn => {
      btn.innerText = isRTL ? 'LTR' : 'RTL';
      btn.setAttribute('aria-label', isRTL ? 'Switch to Left-to-Right Layout' : 'Switch to Right-to-Left Layout');
      btn.setAttribute('title', isRTL ? 'Switch to Left-to-Right Layout' : 'Switch to Right-to-Left Layout');
    });
  }

  // --- Initialization ---
  document.addEventListener('DOMContentLoaded', () => {
    // Theme Init
    const currentTheme = getPreferredTheme();
    applyTheme(currentTheme);

    const themeButtons = document.querySelectorAll('.theme-toggle-btn');
    themeButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const isDark = document.body.classList.contains('dark-theme');
        const newTheme = isDark ? 'light' : 'dark';
        localStorage.setItem(THEME_STORAGE_KEY, newTheme);
        applyTheme(newTheme);
      });
    });

    // RTL Init
    const isRTL = localStorage.getItem(RTL_STORAGE_KEY) === 'true';
    applyRTL(isRTL);

    const rtlButtons = document.querySelectorAll('.rtl-toggle-btn');
    rtlButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const currentRTL = document.documentElement.getAttribute('dir') === 'rtl';
        const newRTL = !currentRTL;
        localStorage.setItem(RTL_STORAGE_KEY, newRTL);
        applyRTL(newRTL);
      });
    });
  });
})();
