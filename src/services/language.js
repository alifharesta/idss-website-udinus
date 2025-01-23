import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
const resources = {
  en: { //translate navbar english
    translation: {
      navbar: { homepage: "Homepage", profiles: "Profiles", news: "News", events: "Events" },
      hero: { title: "IDSS", subtitle: "Intelligent Distributed Surveillance and Security" },
      about: { title: "About Us", content: "Committed to being a pioneer in the research and development of distributed artificial intelligence-based surveillance and security technologies." },
      aboutUs: {title: "IDSS", title2: "Intelligent Distributed Surveillance & Security", content: "Committed to being a pioneer in the research and development of distributed artificial intelligence-based surveillance and security technologies.", content1: "Established in 2022, the IDSS is a research center within the Faculty of Computer Science at Dian Nuswantoro University. The center is dedicated to advancing AI methods and applications across six key areas:"},
      latest: {title: "Latest News", buttonView: "View More"},
      events: {title: "Events", button1: "View More"},  
    },
  },
  id: { //translate navbar indo
    translation: {
      navbar: { homepage: "Beranda", profiles: "Profil", news: "Berita", events: "Acara" },
      hero: { title: "IDSS", subtitle: "" },
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
