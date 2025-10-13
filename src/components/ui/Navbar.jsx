import { useEffect, useState } from "react";
import "../../assets/Navbar.css";
import AOS from "aos";
import "aos/dist/aos.css";
import logo from "../../assets/images/logo.png"
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        AOS.init({
            duration: 1200,
            once: true,
            easing: "ease-in-out",
        });
    }, []);

    return (
        <nav id="Navbar">
            <div className="container">
                {/* === TOP SECTION === */}
                <div className="NavTop">
                    <div className="call_box" data-aos="fade-down">
                        <a href="tel:+998914422266" rel="noopener">
                            <button>Bog'lanish uchun <br/> +998 91 442 22 66</button>
                        </a>
                    </div>

                    <div className="logo_box" data-aos="fade-up">
                        <img src={logo} alt="Malika Sulton Logo" />
                    </div>

                    <div className="reservation_box" data-aos="fade-down">
                        <a href="#Reservation">
                            <button>Buyurtma qilish</button>
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
                            <li><a href="#">Bosh sahifa</a></li>
                            <li><a href="#HeroSection">Biz haqimizda</a></li>
                            <li><a href="#Products">Liboslar</a></li>
                            <li><a href="#Reservation">Buyurtma qilish</a></li>
                            <li><a href="#Contacts">Bog'lanish uchun</a></li>
                        </ul>
                    </div>

                    <div className="lang-select">
                        <select>
                            <option value="en">EN</option>
                            <option value="ru">RU</option>
                            <option value="uz">UZ</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* === MOBILE MENU === */}
            <div className={`mobile-menu ${isOpen ? "active" : ""}`}>
                <ul>
                    <li><a href="#" onClick={() => setIsOpen(false)}>Home</a></li>
                    <li><a href="#" onClick={() => setIsOpen(false)}>About Us</a></li>
                    <li><a href="#" onClick={() => setIsOpen(false)}>Products</a></li>
                    <li><a href="#" onClick={() => setIsOpen(false)}>To Order</a></li>
                    <li><a href="#" onClick={() => setIsOpen(false)}>Contacts</a></li>
                </ul>

                <div className="social_links mobile-only">
                    <a href="#"><i className="fa-brands fa-instagram"></i></a>
                    <a href="#"><i className="fa-brands fa-telegram"></i></a>
                    <a href="#"><i className="fa-brands fa-facebook"></i></a>
                    <a href="#"><i className="fa-brands fa-youtube"></i></a>
                </div>
                <div className="mobile-buttons">
                    <a href="tel:+998914422266" rel="noopener">
                        <button>Bog'lanish uchun <br/> +998 91 442 22 66</button>
                    </a>
                    <a href="#Reservation">
                        <button>Buyurtma qilish</button>
                    </a>
                </div>

                <div className="mobile-lang">
                    <select>
                        <option value="en">EN</option>
                        <option value="ru">RU</option>
                        <option value="uz">UZ</option>
                    </select>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;