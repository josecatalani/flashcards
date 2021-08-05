import Head from "next/head";
import App from "../components/App/App";
import Footer from "../components/Footer";
import UserResume from "../components/Home/UserResume";

export default function MyHome() {
  return (
    <App>
      <Head>
        <title>Uma forma de estudar interativa</title>
        <meta name="description" content="Uma forma de estudar interativamente" />
      </Head>
      <main>
        <h1>Home</h1>
      </main>

      <UserResume />
      <Footer />
    </App>
  );
}
