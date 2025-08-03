import React from "react";
import Layout from "../components/layout";
import HeroSlider from "../components/HeroSlider";
import AboutUs from "../components/AboutUs"; 
import Services from "../components/Services"; 
import GaleriaSlider from "../components/GaleriaSlider";
import MarcasConfianza from "../components/MarcasConfianza";
import Contacto from "../components/Contacto";
import Footer from "../components/Footer";


const IndexPage = () => (
  <Layout>
    <HeroSlider />
    <AboutUs />
    <Services/>
    <GaleriaSlider/>
    <Contacto/>
    <MarcasConfianza/>
    <Footer/>
  </Layout>
);

export default IndexPage;
