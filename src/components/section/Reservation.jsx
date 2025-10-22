import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../assets/Reservation.css";
import { useTranslation } from "react-i18next";

const Reservation = () => {
    const { t } = useTranslation();
    const [form, setForm] = useState({ name: "", email: "" });

    useEffect(() => {
        AOS.init({
            duration: 1200,
            easing: "ease-in-out",
            once: true,
            offset: 100,
        });
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const name = form.name.trim();
        const email = form.email.trim();
        if (!name || !email) return;

        const to = "makhfyza@yahoo.com";
        const subject = "Buyurtma so‘rovi";
        const body = `Assalomu alaykum,

Quyidagi ma’lumotlar:
Ism: ${name}
Email: ${email}

Qayta aloqaga chiqsangiz juda xursand bo'lardim )`;

        const gmailUrl =
            "https://mail.google.com/mail/?view=cm&fs=1" +
            `&to=${encodeURIComponent(to)}` +
            `&su=${encodeURIComponent(subject)}` +
            `&body=${encodeURIComponent(body)}`;

        // Faqat yangi tabda ochiladi, joriy oynani ko‘chirmaydi.
        const a = document.createElement("a");
        a.href = gmailUrl;
        a.target = "_blank";
        a.rel = "noopener";
        document.body.appendChild(a);
        a.click();
        a.remove();
    };

    return (
        <section id="Reservation">
            <div className="overlay_res"></div>

            <div className="reservation-box" data-aos="zoom-in">
                <button className="res-label" data-aos="fade-down" data-aos-delay="200">
                    {t("order")}
                </button>

                <h2 className="res-title" data-aos="fade-up" data-aos-delay="400">
                    {t("toOrderP")}
                </h2>

                <form
                    className="res-form"
                    data-aos="fade-up"
                    data-aos-delay="600"
                    onSubmit={handleSubmit}
                >
                    <div className="input-row">
                        <input
                            name="name"
                            type="text"
                            placeholder="Name"
                            value={form.name}
                            onChange={handleChange}
                            required
                            data-aos="fade-right"
                            data-aos-delay="800"
                        />
                        <input
                            name="email"
                            type="email"
                            placeholder="Email"
                            value={form.email}
                            onChange={handleChange}
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
                        {t("toOrderBtn")}
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Reservation;
