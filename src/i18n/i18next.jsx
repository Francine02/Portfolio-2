import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from '@i18n/locale/en.json';
import pt from '@i18n/locale/pt.json';

i18next.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        ...en,
      },
    },
    pt: {
      translation: {
        ...pt,
      },
    },
  },
  lng: 'pt', // Idioma padrão
  fallbackLng: 'pt', // Idioma de fallback
  interpolation: {
    escapeValue: false, // React já faz a escapação
  },
});

export default i18next;
