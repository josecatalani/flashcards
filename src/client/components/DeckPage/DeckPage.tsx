import React, { FC } from "react";
import Footer from "../Footer";
import Jumbotron from "./Jumbotron";
import DeckSection from "./DeckSection";

const DeckPage: FC = () => {
  return (
    <>
      <Jumbotron />
      <DeckSection />
      <Footer />
    </>
  );
};

export default DeckPage;
