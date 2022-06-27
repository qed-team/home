import React from "react";

import Layout from "../core/Layout";

import Header from "../sections/Header";
import Hero from "../sections/Hero";
import Jobs from "../sections/Jobs";
import Contact from "../sections/Contact";
import Footer from "../sections/Footer";

const JobsPage = () => {
  const headline = <>Find your <em>dream</em> job.</>
  return (
    <Layout>
      <Header/>
      <Hero headline={headline}/>
      <Jobs />
      <Contact />
      <Footer />
    </Layout>
  );
};

export default JobsPage;
