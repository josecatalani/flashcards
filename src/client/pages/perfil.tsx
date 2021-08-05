import Head from "next/head";
import App from "../components/App/App";

export default function MyProfile() {
  return (
    <App>
      <Head>
        <title>Perfil</title>
        <meta name="description" content="Uma forma de estudar interativamente" />
      </Head>
      <main>
        <h1>Perfil</h1>
      </main>
    </App>
  );
}
