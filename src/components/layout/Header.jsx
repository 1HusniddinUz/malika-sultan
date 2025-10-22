import Navbar from "../ui/Navbar.jsx";
import HeroSection from "../section/HeroSection.jsx";
import HeroVideoSec from "../section/HeroVideoSec.jsx";

const Header = () => {
    return (
        <header>
            <Navbar />
            <HeroVideoSec />
            <HeroSection />
        </header>
    )
}
export default Header