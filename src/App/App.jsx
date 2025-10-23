import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css"; // global css
import Header from "../components/layout/Header.jsx";
import Content from "../components/layout/Content.jsx";
import Footer from "../components/layout/Footer.jsx";

import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import translationsEn from "../locales/translationsEn.js";
import translationsUz from "../locales/translationsUz.js";
import translationsRU from "../locales/translationsRu.js";

i18n.use(initReactI18next).init({
    resources: {
        en: { translation: translationsEn },
        uz: { translation: translationsUz },
        ru: { translation: translationsRU }
    },
    lng: "uz",
    fallbackLng: "uz",
})
function App() {
    const changeLang = (value) => {
        i18n.changeLanguage(value)
    }
    useEffect(() => {
        AOS.init({
            duration: 1000, // animatsiya davomiyligi (ms)
            once: true,     // faqat 1 marta ishlasin
            easing: "ease-in-out",
        });
    }, []);
  return (
    <>
      <div>
          <Header changeLang={changeLang} />
          <Content changeLang={changeLang} />
          <Footer changeLang={changeLang} />
      </div>
    </>
  )
}

export default App
