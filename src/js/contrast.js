import { translator } from './translation';

const storageKey = 'contrast-preference';
const toggleElement = document
  .querySelector('.contrast-toggle')
  .querySelector('p');

const getPreference = () => {
  if (localStorage.getItem(storageKey)) {
    return localStorage.getItem(storageKey);
  }
  return window.matchMedia('(prefers-color-scheme: more)').matches
    ? 'more'
    : 'less';
};

const contrast = {
  value: getPreference(),
};

const reflectPreference = () => {
  document.firstElementChild.dataset.contrast = contrast.value;
  // text should indicate 'opposite' setting so as to switch to it
  toggleElement.dataset.i18n = contrast.value === 'more' ? 'less' : 'more';
};

const setPreference = () => {
  localStorage.setItem(storageKey, contrast.value);
  reflectPreference();
};

// set early so no page flashes / CSS is made aware
reflectPreference();

window.addEventListener('load', () => {
  // set on load so screen readers can see latest value on the button
  reflectPreference();
  // now this script can find and listen for clicks on the control
  document
    // eslint-disable-next-line sonarjs/no-duplicate-string
    .querySelector('.contrast-toggle')
    .addEventListener('click', () => {
      // flip current value
      contrast.value = contrast.value === 'more' ? 'less' : 'more';
      toggleElement.textContent = translator.translateForKey(
        contrast.value === 'more' ? 'less' : 'more',
        document.documentElement.lang
      );
      setPreference();
    });
});

// sync with system changes
window
  .matchMedia('(prefers-contrast: more)')
  .addEventListener('change', ({ matches: isMore }) => {
    contrast.value = isMore ? 'more' : 'less';
    toggleElement.textContent = translator.translateForKey(
      // text should indicate 'opposite' setting so as to switch to it
      contrast.value === 'more' ? 'less' : 'more',
      document.documentElement.lang
    );
    setPreference();
  });
