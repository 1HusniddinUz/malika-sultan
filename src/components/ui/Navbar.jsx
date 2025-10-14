import { useEffect, useState } from "react";
import "../../assets/Navbar.css";
import AOS from "aos";
import "aos/dist/aos.css";
import logo from "../../assets/images/logo.png"
import {useTranslation} from "react-i18next";
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        AOS.init({
            duration: 1200,
            once: true,
            easing: "ease-in-out",
        });
    }, []);
    const {t, i18n} = useTranslation();
    return (
        <nav id="Navbar">
            <div className="container">
                {/* === TOP SECTION === */}
                <div className="NavTop">
                    <div className="call_box" data-aos="fade-down">
                        <a href="tel:+998914422266" rel="noopener">
                            <button>{t(`contact`)}<br/> +998 91 442 22 66</button>
                        </a>
                    </div>

                    <div className="logo_box" data-aos="fade-up">
                        <img src={logo} alt="Malika Sulton Logo" />
                    </div>

                    <div className="reservation_box" data-aos="fade-down">
                        <a href="#Reservation">
                            <button>{t(`order`)}</button>
                        </a>
                    </div>

                    {/* Burger Icon */}
                    <div
                        className={`burger ${isOpen ? "open" : ""}`}
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {!isOpen ? (
                            <>
                                <span></span>
                                <span></span>
                                <span></span>
                            </>
                        ) : (
                            <span className="close-btn">✕</span>
                        )}
                    </div>
                </div>

                {/* === BOTTOM SECTION === */}
                <div className="NavBottom">
                    <div className="tool_bar" data-aos="slide-right">
                        <ul>
                            <li><a href="#">{t(`headersec`)}</a></li>
                            <li><a href="#HeroSection">{t(`about`)}</a></li>
                            <li><a href="#Products">{t(`products`)}</a></li>
                            <li><a href="#Reservation">{t(`order`)}</a></li>
                            <li><a href="#Contacts">{t(`contact`)}</a></li>
                        </ul>
                    </div>

                    <div className="lang-select">
                        <select
                            id="select"
                            onChange={(e) => i18n.changeLanguage(e.target.value)}
                            defaultValue="en"
                        >
                            <option value="en">🇬🇧 English</option>
                            <option value="ru">🇷🇺 Русский</option>
                            <option value="uz">🇺🇿 O'zbek</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* === MOBILE MENU === */}
            <div className={`mobile-menu ${isOpen ? "active" : ""}`}>
                <ul>
                    <li><a href="#" onClick={() => setIsOpen(false)}>{t(`headersec`)}</a></li>
                    <li><a href="#HeroSection" onClick={() => setIsOpen(false)}>{t(`about`)}</a></li>
                    <li><a href="#Products" onClick={() => setIsOpen(false)}>{t(`products`)}</a></li>
                    <li><a href="#Reservation" onClick={() => setIsOpen(false)}>{t(`order`)}</a></li>
                    <li><a href="#Contacts" onClick={() => setIsOpen(false)}>{t(`contact`)}</a></li>
                </ul>

                <div className="social_links mobile-only">
                    <a href="#"><i className="fa-brands fa-instagram"></i></a>
                    <a href="#"><i className="fa-brands fa-telegram"></i></a>
                    <a href="#"><i className="fa-brands fa-facebook"></i></a>
                    <a href="#"><i className="fa-brands fa-youtube"></i></a>
                </div>
                <div className="mobile-buttons">
                    <a href="tel:+998914422266" rel="noopener">
                        <button>{t(`contact`)}<br/> +998 91 442 22 66</button>
                    </a>
                    <a href="#Reservation">
                        <button>{t(`order`)}</button>
                    </a>
                </div>

                <div className="mobile-lang">
                    <select
                        id="select"
                        onChange={(e) => i18n.changeLanguage(e.target.value)}
                        defaultValue="en"
                    >
                        <option value="en">🇬🇧 English</option>
                        <option value="ru">🇷🇺 Русский</option>
                        <option value="uz">🇺🇿 O'zbek</option>
                    </select>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;