import Head from "next/head";
import App from "../components/App/App";

export default function Settings() {
  return (
    <App>
      <Head>
        <title>Configurações</title>
        <meta name="description" content="Uma forma de estudar interativamente" />
      </Head>
      <main>
        <h1>Configurações</h1>
      </main>
    </App>
  );
}
