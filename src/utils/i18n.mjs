import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  ru: {
    translation: {
      home: "Глаvnaya",
      courses: "Kursy",
      enroll: "Enroll",
      videoCourses: "Video Kursy",
      about: "About",
      contactUs: "Contact Us",
    },
  },
  tm: {
    translation: {
      home: "Bash sahypa",
      courses: "Kurslar",
      enroll: "Enroll",
      videoCourses: "Video Kurslar",
      about: "Barada",
      contactUs: "Habarlashmak",
    },
  },

  en: {
    translation: {
      home: "Home",
      courses: "Courses",
      enroll: "Enroll",
      videoCourses: "Video Courses",
      about: "About",
      contactUs: "Contact Us",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
