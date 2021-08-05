import Head from "next/head";
import React from "react";
import App from "../components/App/App";
import Cards from "../components/Landing/Cards";
import Footer from "../components/Footer";
import Hero from "../components/Landing/Hero";
import Info from "../components/Landing/Info";
import CTAWrapper from "../components/Landing/CTAWrapper";

export default function Landing() {
  return (
    <App>
      <Head>
        <title>Uma forma de estudar interativa</title>
        <meta name="description" content="Uma forma de estudar interativa" />
      </Head>
      <Hero />
      <Info />
      <Cards />
      <CTAWrapper />
      <Footer />
    </App>
  );
}
