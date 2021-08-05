import Head from "next/head";
import React from "react";
import App from "../components/App/App";
import styled from "styled-components";
import { Info } from "../components/Info";
import { Hero } from "../components/Hero";
import Footer from '../components/Footer';

export default function Landing() {
  return (
    <App>
      <Head>
        <title>Uma forma de estudar interativa</title>
        <meta name="description" content="Uma forma de estudar interativa" />
      </Head>
      <Hero />
      <Info />
      <Footer />
    </App>
  );
}
