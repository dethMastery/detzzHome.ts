import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enLocale from '../locales/en/locale'
import thLocale from '../locales/th/locale'

const instance = i18n.createInstance()

const resources = {
  en: {
    translation: enLocale(),
  },
  th: {
    translation: thLocale(),
  },
}

console.log(resources.en);


instance
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    detection: {
      order: ['localStorage'],
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  })

export default instance
