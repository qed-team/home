import React from "react";

import Layout from "../core/Layout";

import Header from "../sections/Header";
import Hero from "../sections/Hero";
import Jobs from "../sections/Jobs";
import Contact from "../sections/Contact";
import Footer from "../sections/Footer";

const JobsPage = () => {
  return (
    <Layout>
      <Header />
      <Hero jobs />
      <Jobs />
      <Contact />
      <Footer />
    </Layout>
  );
};

export default JobsPage;
