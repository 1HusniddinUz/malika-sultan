import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../assets/Reservation.css";
import { useTranslation } from "react-i18next";

const Reservation = () => {
    const { t } = useTranslation();
    // email o‘rniga number ishlatyapmiz, shuning uchun state ham shunga mos
    const [form, setForm] = useState({ name: "", number: "" });

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

    const formatUz = (digits) => {
        const d = (digits || "").split("").filter(ch => ch >= "0" && ch <= "9").join("").slice(0, 9);
        const p1 = d.slice(0,2);
        const p2 = d.slice(2,5);
        const p3 = d.slice(5,7);
        const p4 = d.slice(7,9);
        return `+998 (${p1.padEnd(2, "_")})-${p2.padEnd(3, "_")}-${p3.padEnd(2, "_")}-${p4.padEnd(2, "_")}`;
    };

    const handleNumberChange = (e) => {
        let raw = (e.target.value || "");
        raw = raw.split("").filter(ch => ch >= "0" && ch <= "9").join("");
        if (raw.startsWith("998")) raw = raw.slice(3);
        raw = raw.slice(0, 9);
        setForm((prev) => ({ ...prev, number: raw }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const name = (form.name || "").trim();
        const digits = (form.number || "").trim();
        if (!name || digits.length !== 9) return;

        const fullNumber = `+998 (${digits.slice(0,2)}) ${digits.slice(2,5)}-${digits.slice(5,7)}-${digits.slice(7,9)}`;

        const to = "makhfyza@yahoo.com";
        const subject = "Buyurtma so‘rovi";
        const body = `Assalomu alaykum , liboslaringizdan birini xarid qilish uchun murojaat qilyapman!

Ma’lumotlarim:
Ismim: ${name}
Telefon raqamim: ${fullNumber}

Qayta aloqaga chiqsangiz juda xursand bo'lardim )`;

        const gmailUrl =
            "https://mail.google.com/mail/?view=cm&fs=1" +
            `&to=${encodeURIComponent(to)}` +
            `&su=${encodeURIComponent(subject)}` +
            `&body=${encodeURIComponent(body)}`;

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
                            name="number"
                            type="tel"
                            inputMode="numeric"
                            placeholder="+998 (__)-___-__-__"
                            value={formatUz(form.number)}
                            onChange={handleNumberChange}
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
