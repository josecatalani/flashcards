import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import App from "../components/App";
import DeckPage from "../components/DeckPage";
import ThemePage from "../components/ThemePage/ThemePage";

const Decks = () => {
  const router = useRouter();
  const { deck }: any = router.query;
  const [theme, deckId, deckFriendlyName] = deck || [];

  const renderTheme = theme && !deckId && !deckFriendlyName;
  const renderDeck = theme && deckId && deckFriendlyName;

  const renderThemePage = () => {
    return (
      <>
        <Head>
          <title>Temas | Descoflash</title>
        </Head>
        <ThemePage />
      </>
    );
  };

  const renderDeckPage = () => {
    return (
      <>
        <Head>
          <title>Fenótipo e Genótipo | Descoflash</title>
        </Head>
        <DeckPage />
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
