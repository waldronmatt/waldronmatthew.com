import Translator from '@andreasremdt/simple-translator';

const translator = new Translator({
  defaultLanguage: 'en',
});

translator
  .add('es', {
    description: 'Desarrollador Full Stack',
    keywords: 'full stack, desarrollador',
    language: 'English',
    resume: 'Currículum',
    cv: 'Currículum vítae',
    contact: 'Contacto',
    fullstack: 'desarrollador',
    developer: 'full stack',
  })
  .add('en', {
    description: 'Full Stack Developer',
    keywords: 'full stack, development',
    language: 'Español',
    resume: 'Resume',
    cv: 'Curriculum vitae',
    contact: 'Contact',
    fullstack: 'full stack',
    developer: 'developer',
  });

document.querySelector('.language-toggle')?.addEventListener('click', () => {
  // eslint-disable-next-line no-unused-expressions
  document.documentElement.lang === 'en'
    ? translator.translatePageTo('es')
    : translator.translatePageTo('en');
});
