import Translator from '@andreasremdt/simple-translator';

const translator = new Translator({
  defaultLanguage: 'en',
});

translator
  .add('es', {
    description: 'Desarrollador Sénior',
    keywords: 'full stack, desarrollador, sénior',
    language: 'English',
    resume: 'Currículum',
    cv: 'Currículum vítae',
    contact: 'Contacto',
    senior: 'desarrollador',
    developer: 'sénior',
  })
  .add('en', {
    description: 'Senior Developer',
    keywords: 'full stack, development, senior',
    language: 'Español',
    resume: 'Resume',
    cv: 'Curriculum vitae',
    contact: 'Contact',
    senior: 'senior',
    developer: 'developer',
  });

document.querySelector('.language-toggle')?.addEventListener('click', () => {
  // eslint-disable-next-line no-unused-expressions
  document.documentElement.lang === 'en'
    ? translator.translatePageTo('es')
    : translator.translatePageTo('en');
});
