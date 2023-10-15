import {  Footer_Section } from "../../components/Footer";
import Navbar from "../../components/Navbar";
import AboutProduct from "./AboutProduct";
import ContactUs from "./ContactUs";
import Products from "./Products";
import "aos/dist/aos.css";
import AOS from "aos";
import Banner_Bar from "../../components/Banner";

const Home = () => {
  AOS.init();
  return (
    <section>
      <Navbar />
      <Banner_Bar />
      <Products />
      <AboutProduct />
      <ContactUs />
      <Footer_Section />
    </section>
  );
};

export default Home;
