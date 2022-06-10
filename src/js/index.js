/* global document */
// eslint-disable-next-line import/no-unresolved
import '@/scss/index.scss';

const array = document.querySelectorAll('.footer-copyright');
// eslint-disable-next-line unicorn/no-array-for-each
array.forEach(element => {
  element.append(document.createTextNode(new Date().getFullYear()));
});
