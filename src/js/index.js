// eslint-disable-next-line import/no-unresolved
import '@/scss/index.scss';
import './year';
import './theme';

document
  .querySelector('.language-toggle')
  ?.addEventListener('click', async () => {
    const translator = await import(
      /* webpackChunkName: "translation" */ './translation'
    )
      .then(module => {
        return module.translator;
      })
      // eslint-disable-next-line unicorn/prefer-top-level-await
      .catch(error => {
        return error;
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
    // eslint-disable-next-line no-unused-expressions
    document.documentElement.lang === 'en'
      ? translator.translatePageTo('es')
      : translator.translatePageTo('en');
  });
