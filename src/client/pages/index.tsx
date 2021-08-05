import Head from "next/head";
import React from "react";
import App from "../components/App/App";

export default function Landing() {
  return (
    <App>
      <Head>
        <title>Uma forma de estudar interativa</title>
        <meta
          name="description"
          content="Uma forma de estudar interativamente"
        />
      </Head>
      <main>
        <h1>Home</h1>
      </main>
    </App>
  );
}
