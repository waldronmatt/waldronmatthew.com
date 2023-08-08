import { initAnimation, clearAnimation } from './animation';

const syncAnimation = () => {
  const root = document.documentElement;
  if (document.firstElementChild.dataset.animation === 'disabled') {
    root.style.removeProperty('--lightbulb-color');
    root.style.removeProperty('--lightbulb-color-hover');
  } else {
    clearAnimation();
    initAnimation();
  }
};

const storageKey = 'theme-preference';

const getPreference = () => {
  if (localStorage.getItem(storageKey)) {
    return localStorage.getItem(storageKey);
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
};

const theme = {
  value: getPreference(),
};

const reflectPreference = () => {
  document.firstElementChild.dataset.theme = theme.value;
  document.querySelectorAll('.theme-toggle').forEach(toggle => {
    toggle?.setAttribute('aria-label', theme.value);
  });
};

const setPreference = () => {
  localStorage.setItem(storageKey, theme.value);
  reflectPreference();
};

// set early so no page flashes / CSS is made aware
reflectPreference();

window.addEventListener('load', () => {
  // set on load so screen readers can see latest value on the button
  reflectPreference();
  document.querySelectorAll('.theme-toggle').forEach(toggle => {
    toggle?.addEventListener('click', () => {
      // flip current value
      theme.value = theme.value === 'light' ? 'dark' : 'light';
      if (window.matchMedia('(min-width: 768px)')) {
        // update lightbulb color to match current theme
        // and restart animation if present
        syncAnimation();
      }
      setPreference();
    });
  });
});

// sync with system changes
window
  .matchMedia('(prefers-color-scheme: dark)')
  .addEventListener('change', ({ matches: isDark }) => {
    theme.value = isDark ? 'dark' : 'light';
    if (window.matchMedia('(min-width: 768px)')) {
      // update lightbulb color to match current theme
      // and restart animation if present
      syncAnimation();
    }
    setPreference();
  });
