import { id } from "date-fns/locale";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
const resources = {
  en: { //translate navbar english
    translation: {
      navbar: { homepage: "Homepage", profiles: "Profiles", news: "News", events: "Events" },
    },
  },
  id: { //translate navbar indo
    translation: {
      navbar: { homepage: "Beranda", profiles: "Profil", news: "Berita", events: "Acara" },
    },
  },
};
i18n
.use(initReactI18next)
.init({
  resources,
  lng:"id",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false
  },
});

export default i18n;