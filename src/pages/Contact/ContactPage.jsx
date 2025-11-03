 import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Contact from "../Home/components/Contact";
import ContactUs from "../Contact/componentContact/ContactUs";
const ContactPage = () => {
  return (
    <>
      <div className="bg-[#e7ffff]">
        <Header />
        <ContactUs />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default ContactPage;
