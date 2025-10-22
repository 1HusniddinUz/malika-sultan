// HeroSection.jsx (responsive fix)
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import "../../assets/HeroSection.css"; // updated styles below
import { useTranslation } from "react-i18next";

const HeroSection = () => {
    useEffect(() => {
        AOS.init({ duration: 1200, easing: "ease-in-out", once: true });
    }, []);

    const { t } = useTranslation();

    return (
        <div id="HeroSection">

            {/* 🎥 YouTube video bo‘limi */}

            <div className="video_section" data-aos="fade-up">
                <div className="video_container">
                    <iframe
                        src="https://www.youtube.com/embed/GLP0i6AS2pI?autoplay=0&mute=0&controls=1&loop=1&modestbranding=1&rel=0"
                        title="Malika Sulton Fashion Video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    />
                </div>
            </div>


            <div className="container" id="AboutUs">
                <div className="hero_overlay" />
                <div className="company_about" data-aos="fade-up">
                    <h1 data-aos="fade-down">{t("quotes")}</h1>
                    <p className="about_text" data-aos="fade-up">{t("aboutUs")}</p>
                </div>
            </div>


        </div>
    );
};

export default HeroSection;
