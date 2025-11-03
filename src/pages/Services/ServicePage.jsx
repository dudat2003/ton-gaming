import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Contact from "../Home/components/Contact";
import News from "../Home/components/News";
import Provide from "../Services/componentServices/Provide";
const ServicePage = () => {
  return (
    <div className="bg-sky-100">
      <Header />
      <div className="pt-[17%] ">
        <Provide />
        <News />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default ServicePage;
