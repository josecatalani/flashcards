import Head from "next/head";
import React from "react";
import App from "../components/App/App";
import { Container, Row, Col } from "styled-bootstrap-grid";
import styled from "styled-components";
import Hero from "../components/Hero/Hero";
import Footer from "../components/Footer";

const Card = styled.div(
  ({ theme: { colors } }) => `
    border: 1px solid ${colors.gray.two};
    border-radius: 6px;
    width: 100%;
    padding: 20px;
  `
);

export default function Landing() {
  return (
    <App>
      <Head>
        <title>Uma forma de estudar interativa</title>
        <meta name="description" content="Uma forma de estudar interativa" />
      </Head>

      <main>
        <Hero />
        <Container>
          <Row>
            <Col md={12}>
              <h1>Home</h1>
            </Col>
            <Col md={4}>
              <Card>Coluna</Card>
            </Col>
            <Col md={4}>
              <Card>Coluna</Card>
            </Col>
            <Col md={4}>
              <Card>Coluna</Card>
            </Col>
          </Row>
        </Container>
      </main>
      <Footer />
    </App>
  );
}
