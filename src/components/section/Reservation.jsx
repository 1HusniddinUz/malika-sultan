import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../assets/Reservation.css";

const Reservation = () => {
    useEffect(() => {
        AOS.init({
            duration: 1200,
            easing: "ease-in-out",
            once: true,
            offset: 100,
        });
    }, []);

    return (
        <section id="Reservation">
            <div className="overlay_res"></div>

            <div className="reservation-box" data-aos="zoom-in">
                <button className="res-label" data-aos="fade-down" data-aos-delay="200">
                    RESERVATION
                </button>
                <h2 className="res-title" data-aos="fade-up" data-aos-delay="400">
                    To order clothes
                </h2>

                <form className="res-form" data-aos="fade-up" data-aos-delay="600">
                    <div className="input-row">
                        <input
                            type="text"
                            placeholder="Name"
                            required
                            data-aos="fade-right"
                            data-aos-delay="800"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            required
                            data-aos="fade-left"
                            data-aos-delay="1000"
                        />
                    </div>

                    <button
                        type="submit"
                        className="res-btn"
                        data-aos="fade-up"
                        data-aos-delay="1200"
                    >
                        Book A Table
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Reservation;
