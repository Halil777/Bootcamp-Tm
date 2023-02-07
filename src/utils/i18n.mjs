import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  ru: {
    translation: {},
  },
  tm: {
    translation: {},
  },

  en: {
    translation: {},
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "tm",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
