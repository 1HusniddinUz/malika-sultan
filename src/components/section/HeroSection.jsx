import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import "../../assets/HeroSection.css";
import working_time from "../../assets/images/working_time.png";

const HeroSection = () => {
    useEffect(() => {
        AOS.init({
            duration: 1200, // animatsiya davomiyligi (ms)
            easing: "ease-in-out", // silliq chiqishi
            once: true, // faqat 1 marta ishlasin
        });
    }, []);

    return (
        <div id="HeroSection">
            <div className="container">
                <div className="company_about" data-aos="fade-right">
                    <h1 data-aos="fade-down">Welcome to Restaurant</h1>
                    <p data-aos="fade-up">
                        The people, food and the prime locations make the perfect place good
                        friends & family to come together and have great time.
                    </p>
                    <a href="#">
                        <button data-aos="zoom-in">View Menu</button>
                    </a>
                </div>
                <div className="company_photo" data-aos="fade-left">
                    <img src={working_time} alt="working time" data-aos="zoom-in" />
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
