import Head from "next/head";
import App from "../components/App/App";
import Footer from "../components/Footer";
import Themes from "../components/Home/Themes/Themes";
import UserResume from "../components/Home/UserResume";

export default function MyHome() {
  return (
    <App>
      <Head>
        <title>Uma forma de estudar interativa</title>
        <meta name="description" content="Uma forma de estudar interativamente" />
      </Head>
      <Themes />
      <UserResume />
      <Footer />
    </App>
  );
}
