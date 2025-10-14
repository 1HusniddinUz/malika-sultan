import "../../assets/TripleInfo.css";
import AOS from "aos";
import "aos/dist/aos.css";
import {useEffect} from "react";
import {useTranslation} from "react-i18next";


const TripleInfo = () => {
    const {t} = useTranslation();

    const CardsInfo = [
        {
            id: 1,
            name: t("location"),
            location: t("locationData"),
            fonts: <i className="fa-solid fa-location-dot"></i>,
        },
        {
            id: 2,
            name: t("openHour"),
            location: t("openDate"),
            fonts: <i className="fa-solid fa-clock"></i>,
        },
        {
            id: 3,
            name: t("famClothes"),
            location: "malikasultan@gmail.com",
            fonts: <i className="fa-solid fa-table"></i>,
        },
    ];

    useEffect(() => {
        AOS.init({
            duration: 1200, // animatsiya davomiyligi (ms)
            easing: "ease-in-out", // silliq chiqishi
            once: true, // faqat 1 marta ishlasin
        });
    }, []);
    return (
        <div id="TripleInfo">
            <div className="container">
                <div className="Info_cards" >
                    {CardsInfo.map((card) => (
                        <div key={card.id} className="info_item" data-aos="fade-up">
                            <div className="icon_circle">{card.fonts}</div>
                            <div className="text_box">
                                <h3>{card.name}</h3>
                                <p>{card.location}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TripleInfo;
