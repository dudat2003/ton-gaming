import About from "./components/About";
import Banner from "./components/Banner";
import Header from "../../components/Header";
import Overview from "./components/Overview";
import bg_home from "@assets/Home/bg_home.png";
import Service from "./components/Service";
import Partners from "./components/Partners";
import Testimonials from "./components/Testimonials";
import FAQs from "./components/FAQs";
import News from "./components/News";
import TonMedia from "./components/TonMedia";
import Contact from "./components/Contact";
import Footer from "../../components/Footer";
const HomePage = () => {
  return (
    <>
      <div
        className="  "
        style={{
          backgroundImage: `url(${bg_home})`,
        }}
      >
        <Header />
        <Banner />
        <Overview />
        <About />
        <Service />
        <Partners />
        <Testimonials />
        <FAQs />
        <News />
        <TonMedia />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
