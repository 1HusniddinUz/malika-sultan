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
                        <a href="https://www.youtube.com/@mahfuzasalim" target="_blank" rel="noopener noreffer"><i className="fa-brands fa-youtube"></i></a>
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=makhfyza@yahoo.com&body=Assalomu%20alaykum" target="_blank" rel="noopener noreffer"><i className="fa-solid fa-envelope"></i></a>
                    </div>
                </div>

                <div className="map-container" data-aos="fade-up" data-aos-delay="400">
                    <iframe
                        title="map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d766.6263884891835!2d64.4347589882039!3d39.77320854256017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f5005ebcf65dc4f%3A0xb9c6b9e86bb62434!2sMalika%20Sultan%20Hotel%20jewelry%20boutique!5e0!3m2!1sru!2s!4v1760460606736!5m2!1sru!2s"
                        width="100%"
                        height="450"
                        style={{
                            border: "none",
                            borderRadius: "16px",
                            boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
                        }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer"
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