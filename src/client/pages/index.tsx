import Head from "next/head";
import React from "react";
import App from "../components/App/App";
import { Info } from "../components/Home/Info";
import { Hero } from "../components/Home/Hero";
import { Cards } from "../components/Home/Cards";

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
    </App>
  );
}
