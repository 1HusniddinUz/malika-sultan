import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css"; // global css
import Header from "../components/layout/Header.jsx";
import Content from "../components/layout/Content.jsx";
import Footer from "../components/layout/Footer.jsx";



function App() {
    useEffect(() => {
        AOS.init({
            duration: 1000, // animatsiya davomiyligi (ms)
            once: true,     // faqat 1 marta ishlasin
            easing: "ease-in-out",
        });
    }, []);
  return (
    <>
      <div>
          <Header />
          <Content />
          <Footer />
      </div>
    </>
  )
}

export default App
