// i18nConfig.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Initialize i18n
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          welcome: 'Welcome',
        },
      },
      fr: {
        translation: {
          welcome: 'Bienvenue',
        },
      },
      ar: {
        translation: {
          welcome: 'أهلا وسهلا',
        },
      },
    },
    lng: 'en', // Default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
