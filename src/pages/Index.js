import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Menu from "../components/Menu";
import Specials from "../components/Specials";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";
import Chefs from "../components/Chefs";
import ScrollButton from "../components/ScrollButton";
import Footer from "../components/Footer";

export default function Index() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Specials />
      <Chefs />
      <Gallery />
      <Contact />
      <ScrollButton />
      <Footer />
    </div>
  );
}
