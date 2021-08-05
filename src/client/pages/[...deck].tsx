import { useRouter } from "next/router";
import React from "react";
import App from "../components/App";
import Jumbotron from "../components/ThemePage/Jumbotron";

const Decks = () => {
  const router = useRouter();
  const { deck }: any = router.query;
  const [theme, deckId, deckFriendlyName] = deck || [];

  const renderTheme = theme && !deckId && !deckFriendlyName;
  const renderDeck = theme && deckId && deckFriendlyName;

  const renderThemePage = () => {
    return (
      <>
        <h1>Raiz dos temas</h1>
        <Jumbotron />
      </>
    );
  };

  const renderDeckPage = () => {
    return (
      <>
        <h1>Detalhe do tema</h1>
        <Jumbotron />
      </>
    );
  };

  return (
    <App>
      {renderTheme ? renderThemePage() : renderDeck ? renderDeckPage() : null}
    </App>
  );
};

export default Decks;
