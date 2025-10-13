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
                    <h1 data-aos="fade-down">Sharqona go‘zallik — zamonaviy ayol uchun qayta yaratilgan.</h1>
                    <p data-aos="fade-up">
                        MALIKA SULTON liboslari — bu an’ana va zamonaviylikning betakror ittifoqi.
                        Ularni kiygan har bir ayol, o‘zini shunchaki chiroyli emas, malikadek qudratli his qiladi.
                        Chunki har bir libos — bu qo‘l mehnati, yurak harorati va milliy g‘ururdan to‘qilgan san’at asari.
                    </p>
                    <a href="#Products">
                        <button data-aos="zoom-in">Liboslar kolleksiyasi</button>
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
