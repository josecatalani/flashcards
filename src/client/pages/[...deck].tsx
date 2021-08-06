import { useRouter } from "next/router";
import React from "react";
import App from "../components/App";
import DeckPage from "../components/DeckPage";
import Footer from "../components/Footer";
import ThemePage from "../components/ThemePage/ThemePage";

const Decks = () => {
  const router = useRouter();
  const { deck }: any = router.query;
  const [theme, deckId, deckFriendlyName] = deck || [];

  const renderTheme = theme && !deckId && !deckFriendlyName;
  const renderDeck = theme && deckId && deckFriendlyName;

  const renderThemePage = () => {
    return <ThemePage />;
  };

  const renderDeckPage = () => {
    return <DeckPage />;
  };

  return (
    <App>
      {renderTheme ? renderThemePage() : renderDeck ? renderDeckPage() : null}
      <Footer />
    </App>
  );
};

export default Decks;
