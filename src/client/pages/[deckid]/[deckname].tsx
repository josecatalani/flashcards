import { useRouter } from "next/router";
import App from "../../components/App/App";

const Decks = () => {
  const router = useRouter();
  const { deckname, deckid } = router.query;

  return (
    <App>
      <p>Deck Name: {deckname}</p>
      <p>Deck Id: {deckid}</p>
    </App>
  );
};

export default Decks;
