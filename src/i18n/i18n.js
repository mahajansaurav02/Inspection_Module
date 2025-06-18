import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-http-backend'

const savedLanguage = localStorage.getItem('language')
// const getInitialLanguage = () => {
//   const savedLanguage = localStorage.getItem('language')
//   return savedLanguage || 'en' // Default to 'en' if no language is saved
// }

i18n
  // .use(LanguageDetector)
  .use(initReactI18next)
  .use(Backend)
  .init({
    // lng: getInitialLanguage(),
    lng: savedLanguage ? savedLanguage : 'en',
    debug: true,
    fallbackLng: 'en',
    returnObjects: true,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  })

export default i18n
