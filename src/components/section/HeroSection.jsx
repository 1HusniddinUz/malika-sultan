import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import "../../assets/HeroSection.css";
import working_time from "../../assets/images/working_time.png";
import {useTranslation} from "react-i18next";

const HeroSection = () => {
    useEffect(() => {
        AOS.init({
            duration: 1200,
            easing: "ease-in-out",
            once: true,
        });
    }, []);
    const {t} = useTranslation();
    return (
        <div id="HeroSection">
            <div className="container">
                <div className="hero_overlay"></div>
                <div className="company_about" data-aos="fade-right">
                    <h1 data-aos="fade-down">
                        {t(`quotes`)}
                    </h1>
                    <p data-aos="fade-up">
                        {t(`aboutUs`)}
                    </p>
                </div>
            </div>

            {/* 🎥 YouTube video bo‘limi */}
            <div className="video_section" data-aos="fade-up">
                <div className="video_container">
                    <iframe
                        src="https://www.youtube.com/embed/GLP0i6AS2pI?autoplay=0&mute=0&controls=1&loop=1&modestbranding=1&rel=0"
                        title="Malika Sulton Fashion Video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
