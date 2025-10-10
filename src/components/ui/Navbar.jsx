import {useEffect, useState} from "react";
import "../../assets/Navbar.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        AOS.init({
            duration: 1200, // animatsiya davomiyligi (ms)
            once: true,     // faqat 1 marta ishlasin
            easing: "ease-in-out",
        });
    }, []);
    return (
        <nav>
            <div className="container">
                <div className="NavTop">

                    <div className="call_box" data-aos="fade-down">
                        <a href="tel:+998914422266" rel="noopener"><button>Call - +998 91 442 22 66</button></a>
                    </div>

                    <div className="logo_box" data-aos="fade-up">
                        <h1>MALIKA SULTAN</h1>
                    </div>

                    <div className="reservation_box" data-aos="fade-down">
                        <a href="#Reservation"><button>Reservation</button></a>
                    </div>

                    {/* Burger / X toggle */}
                    <div className="burger" onClick={() => setIsOpen(!isOpen)}>
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

                <div className="NavBottom">
                    <div className="tool_bar" data-aos="slide-right">
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#Products">Products</a></li>
                            <li><a href="#Reservation">To Order</a></li>
                            <li><a href="#Contact">Contacts</a></li>
                        </ul>
                    </div>

                    <div className="social_links" data-aos="slide-left">
                        <a href="#"><i className="fa-brands fa-instagram"></i></a>
                        <a href="#"><i className="fa-brands fa-telegram"></i></a>
                        <a href="#"><i className="fa-brands fa-facebook"></i></a>
                        <a href="#"><i className="fa-brands fa-youtube"></i></a>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`mobile-menu ${isOpen ? "active" : ""}`}>
                <ul>
                    <li><a href="#" onClick={() => setIsOpen(false)}>Home</a></li>
                    <li><a href="#" onClick={() => setIsOpen(false)}>About Us</a></li>
                    <li><a href="#" onClick={() => setIsOpen(false)}>Products</a></li>
                    <li><a href="#" onClick={() => setIsOpen(false)}>To Order</a></li>
                    <li><a href="#" onClick={() => setIsOpen(false)}>Contacts</a></li>
                </ul>

                <div className="social_links mobile-only" >
                    <a href="#"><i className="fa-brands fa-instagram"></i></a>
                    <a href="#"><i className="fa-brands fa-telegram"></i></a>
                    <a href="#"><i className="fa-brands fa-facebook"></i></a>
                    <a href="#"><i className="fa-brands fa-youtube"></i></a>
                </div>

                <div className="mobile-buttons">
                    <a href="tel:+998914422266" rel="noopener"><button>Call - +998 91 442 22 66</button></a>
                    <a href="#Reservation"><button>Reservation</button></a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
