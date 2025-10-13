import "../../assets/Contacts.css";
import logo from "../../assets/images/logo.png"
const Contacts = () => {
    return (
        <div id="Contacts">
            <div className="contact-wrapper">
                <div className="contact-info" data-aos="fade-up">
                    <div className="logo_box">
                        <img
                            src={logo}
                            alt="Malika Sulton Logo"
                            className="contact-logo"
                        />
                    </div>
                    <h3 className="brand-name">MALIKA SULTAN</h3>

                    <div className="social_links" data-aos="fade-up" data-aos-delay="200">
                        <a href="https://www.instagram.com/_malika_sultan_" target="_blank" rel="noopener noreffer"><i className="fa-brands fa-instagram"></i></a>
                        <a href="https://t.me/makhfuzasalimova" target="_blank" rel="noopener noreffer"><i className="fa-brands fa-telegram"></i></a>
                        <a href="https://t.me/makhfuzasalimova" target="_blank" rel="noopener noreffer"><i className="fa-brands fa-facebook"></i></a>
                        <a href="https://www.youtube.com/@mahfuzasalim" target="_blank" rel="noopener noreffer"><i className="fa-brands fa-youtube"></i></a>
                    </div>
                </div>

                <div className="map-container" data-aos="fade-up" data-aos-delay="400">
                    <iframe
                        title="map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d191.55146678680578!2d64.43875920688576!3d39.81095143753254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f500f3192a49b83%3A0xe871868d890d6134!2z4oCcU2l0b3JhaSBNb2hpIFhvc2HigJ0gc2FuYXRvcml5c2kgfCDQodCw0L3QsNGC0L7RgNC40LkgwqvQodC40YLQvtGA0LDQuCDQnNC-0YXQuCDQpdC-0YHQsMK7!5e0!3m2!1sru!2s!4v1759816684040!5m2!1sru!2s"
                        width="100%"
                        height="450"
                        style={{
                            border: "none",
                            borderRadius: "16px",
                            boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
                        }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>

            <div className="copyright">
                <p>© 2025 Malika Sultan. All rights reserved.</p>
                <span>
          Designed by{" "}
                    <a
                        href="https://t.me/buxoro_tadbirkorlar_klubi"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
            Buxoro Tadbirkorlari Biznes Klubi
          </a>
        </span>
            </div>
        </div>
    );
};

export default Contacts;