import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';

import en from './locales/en.json';
import fr from './locales/fr.json';
import sw from './locales/sw.json';
import { languageDetector } from './detector';

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v3',
    debug: false,
    defaultNS: 'app',
    fallbackLng: {
      default: ['en'],
      'en-US': ['en'],
      'fr-FR': ['fr'],
    },
    interpolation: {
      escapeValue: false,
    },
    keySeparator: 'false',
    ns: ['app'],
    react: {
      // useSuspense: false, // in case you have any suspense related errors
    },
    resources: {
      en: { app: en },
      fr: { app: fr },
      sw: { app: sw },
    },
    returnEmptyString: false,
  });

export default i18n;
