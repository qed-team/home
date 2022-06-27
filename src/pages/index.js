import React from "react";

import Layout from "../core/Layout";

import Header from "../sections/Header";
import Hero from "../sections/Hero";
import Cards from "../sections/Cards";
import About from "../sections/About";
import Contact from "../sections/Contact";
import Footer from "../sections/Footer";
import Clients from "../sections/Clients";

const HomePage = () => {
  const headline = <>We <em>move</em> startups forward.</>

  return (
    <Layout>
      <Header />
      <Hero headline={headline} />
      <Cards />
      <Clients />
      <About />
      <Contact />
      <Footer />
    </Layout>
  );
};

export default HomePage;
