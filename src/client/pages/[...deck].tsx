import { useRouter } from "next/router";
import React from "react";
import App from "../components/App";

const Decks = () => {
  const router = useRouter();
  const { deck }: any = router.query;
  const [theme, deckId, deckFriendlyName] = deck || [];

  console.log({ theme, deckId, deckFriendlyName });

  return (
    <App>
      <p>Detalhe</p>
    </App>
  );
};

export default Decks;
