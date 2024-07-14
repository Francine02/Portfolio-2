import i18next from "i18next"
import { initReactI18next } from "react-i18next"
import pt from './locale/pt.json'
import en from './locale/en.json'

i18next.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        ...en
      }
    },
    pt: {
      translation: {
        ...pt
      }
    }
  },
  lng: 'pt', // Idioma padrão
  fallbackLng: 'pt', // Idioma de fallback
  interpolation: {
    escapeValue: false // React já faz a escapação
  }
})

export default i18next
