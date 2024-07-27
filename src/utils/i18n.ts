import i18next from 'i18next';
import enNs1 from '@/locales/en/ns1.json';
import enNs2 from '@/locales/en/ns2.json';
import enFallback from '@/locales/en/fallback.json';
import deNs1 from '@/locales/de/ns1.json';
import deNs2 from '@/locales/de/ns2.json';
import  LanguageDetector from 'i18next-browser-languagedetector';
export const defaultNS = 'ns1';
export const fallbackNS = 'fallback';

i18next
  .use(LanguageDetector)
  .init({
  fallbackLng: 'en',
  lng: "en",
  defaultNS,
  fallbackNS,
  resources: {
    en: {
      ns1: enNs1,
      ns2: enNs2,
      fallback: enFallback,
    },
    de: {
      ns1: deNs1,
      ns2: deNs2,
    },
  },
});

export default i18next;