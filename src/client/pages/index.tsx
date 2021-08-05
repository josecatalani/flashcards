import Head from "next/head";
import React from "react";
import App from "../components/App/App";
import Cards from "../components/Home/Cards";
import Footer from "../components/Home/Footer";
import Hero from "../components/Home/Hero";
import Info from "../components/Home/Info";

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
      <Footer />
    </App>
  );
}
