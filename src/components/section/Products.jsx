import { useEffect, useState } from "react";
import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../assets/Products.css";

import img1 from "../../assets/images/bardoviy1.jpg";
import img2 from "../../assets/images/bardoviy2.jpg";
import img3 from "../../assets/images/erkaklarchoponi1.jpg";
import img4 from "../../assets/images/erkaklarchoponi2.jpg";
import img5 from "../../assets/images/kok1.jpg";
import img6 from "../../assets/images/kok2.jpg";
import img7 from "../../assets/images/naqsh1.jpg";
import img8 from "../../assets/images/naqsh2.jpg";
import img9 from "../../assets/images/oq1.jpg";
import img10 from "../../assets/images/qizg'ish1.jpg";
import img11 from "../../assets/images/yashil1.jpg";

const Products_data = [
    { id: 1, front: img1, back: img2, name: "Bardoviy Dress", sum: "230$", desc: "Cradle wedding collection" },
    { id: 2, front: img3, back: img4, name: "Erkaklar Choponi", sum: "190$", desc: "Premium Uzbek design" },
    { id: 3, front: img5, back: img6, name: "Ko‘k Dress", sum: "215$", desc: "Unique handmade tailoring" },
    { id: 4, front: img7, back: img8, name: "Naqshli Dress", sum: "265$", desc: "Rich tradition + elegance" },
    { id: 5, front: img9, back: img10, name: "Oq Dress", sum: "210$", desc: "Light and modern look" },
    { id: 6, front: img11, back: img2, name: "Yashil Dress", sum: "220$", desc: "Fresh and elegant design" },
];

// Custom Arrows
const NextArrow = ({ onClick }) => (
    <div className="arrow next" onClick={onClick}>
        <i className="fa-solid fa-chevron-right"></i>
    </div>
);
const PrevArrow = ({ onClick }) => (
    <div className="arrow prev" onClick={onClick}>
        <i className="fa-solid fa-chevron-left"></i>
    </div>
);

const Products = () => {
    const [showCatalog, setShowCatalog] = useState(false);

    useEffect(() => {
        AOS.init({ duration: 1200, easing: "ease-in-out", once: true });
    }, []);

    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3500,
        speed: 900,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 2 } },
            { breakpoint: 768, settings: { slidesToShow: 1 } },
        ],
    };

    const topProducts = Products_data.slice(0, 4);
    const catalogProducts = Products_data.slice(4);

    return (
        <div id="Products">
            <div className="container">
                <div className="section-header" data-aos="fade-down">
                    <button>Liboslar kolleksiyasi</button>
                    <h3>Mashhur liboslar</h3>
                    <p>
                        Qo'lda ishlangan milliy liboslar — har bir asar an'ana va zamonaviy nafosat haqida hikoya qiladi.
                    </p>
                </div>

                {/* === Carousel === */}
                <Slider {...settings} className="product-slider">
                    {topProducts.map((item) => (
                        <div key={item.id} className="product-card" data-aos="zoom-in-up">
                            <div className="card-img">
                                <img src={item.front} alt={item.name} className="front" />
                                <img src={item.back} alt={item.name} className="back" />
                                <div className="overlay">
                                    <button className="view-btn">View Details</button>
                                </div>
                            </div>
                            <div className="card-info">
                                <h4>{item.name}</h4>
                                <p>{item.desc}</p>
                                <span className="price">{item.sum}</span>
                            </div>
                        </div>
                    ))}
                </Slider>

                {/* === See More / Less Button === */}
                {!showCatalog && catalogProducts.length > 0 && (
                    <button className="see-more" onClick={() => setShowCatalog(true)}>
                        See More
                    </button>
                )}

                {/* === Catalog Section === */}
                {showCatalog && (
                    <>
                        <div className="catalog-grid" data-aos="fade-up">
                            {catalogProducts.map((item) => (
                                <div key={item.id} className="catalog-card">
                                    <img src={item.front} alt={item.name} />
                                    <div className="catalog-info">
                                        <p>{item.desc}</p>
                                        <span className="price">{item.sum}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Elegant bottom See Less button */}
                        <div className="see-less-wrapper" data-aos="fade-up">
                            <div className="see-less-gradient"></div>
                            <button className="see-less" onClick={() => setShowCatalog(false)}>
                                See Less
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Products;
