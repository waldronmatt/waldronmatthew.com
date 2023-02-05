const initAnimation = () => {
  const root = document.documentElement;
  const style = getComputedStyle(root);
  document
    .querySelectorAll("[class^='d-square']:not(.skip-class)")
    .forEach(element => {
      element.classList.add('init-animate');
    });
  root.style.setProperty(
    '--lightbulb-color',
    `${style.getPropertyValue('--color-yellow')}`
  );
  root.style.setProperty(
    '--lightbulb-color-hover',
    `${style.getPropertyValue('--color-yellow')}`
  );
};

const clearAnimation = () => {
  const root = document.documentElement;
  const style = getComputedStyle(root);
  document
    .querySelectorAll("[class^='d-square']:not(.skip-class)")
    .forEach(element => {
      element.classList.remove('init-animate');
    });
  root.style.setProperty(
    '--lightbulb-color',
    `${style.getPropertyValue('--color-fg')}`
  );
  root.style.setProperty(
    '--lightbulb-color-hover',
    `${style.getPropertyValue('--color-bg')}`
  );
};

const storageKey = 'animation-preference';

const getPreference = () => {
  if (localStorage.getItem(storageKey)) {
    return localStorage.getItem(storageKey);
  }
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ? 'disabled'
    : 'enabled';
};

const animation = {
  value: getPreference(),
};

const reflectPreference = () => {
  document.firstElementChild.dataset.animation = animation.value;
  document
    .querySelector('.animation-toggle')
    .setAttribute('aria-label', `animation ${animation.value}`);

  if (animation.value === 'enabled') {
    initAnimation();
  } else {
    clearAnimation();
  }
};

const setPreference = () => {
  localStorage.setItem(storageKey, animation.value);
  reflectPreference();
};

window.addEventListener('load', () => {
  // set on load so screen readers can see latest value on the button
  reflectPreference();
  // now this script can find and listen for clicks on the control
  document.querySelector('.animation-toggle')?.addEventListener('click', () => {
    // flip current value
    animation.value = animation.value === 'enabled' ? 'disabled' : 'enabled';
    setPreference();
  });
});

// sync with system changes
window
  .matchMedia('(prefers-reduced-motion: reduce)')
  .addEventListener('change', ({ matches: isReduce }) => {
    animation.value = isReduce ? 'disabled' : 'enabled';
    setPreference();
  });
