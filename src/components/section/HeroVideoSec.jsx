import "../../assets/HeroVideoSec.css";
import heroVideo_bg from "../../assets/videos/hero_bg_video.mp4";
import logo from "../../assets/images/logo_w.png";

const HeroVideoSec = () => {
    return (
        <div id="HeroVideoSec" aria-label="Hero video section">
            <video
                className="hero__video"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-hidden="true"
            >
                <source src={heroVideo_bg} type="video/mp4" />
                {/* Brauzer video qo‘llamasa, fon bo‘sh qolmasin */}
            </video>

            <div className="hero__overlay" aria-hidden="true"></div>

            <img
                className="hero__logo"
                src={logo}
                alt="MALIKA SULTAN logo"
                loading="lazy"
            />
        </div>
    );
};

export default HeroVideoSec;
