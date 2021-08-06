import React, { FC } from "react";
import { Col, Container, Row } from "styled-bootstrap-grid";
import CardDrawer from "./CardDrawer";
import Jumbotron from "./Jumbotron";

const cards = [
  {
    title: "Card Title A",
    subtitle: "Sub Title A",
    progress: 10,
    link: "/a/b/c",
  },
  {
    title: "Card Title B",
    subtitle: "Sub Title B",
    progress: 10,
    link: "/a/b/c",
  },
  {
    title: "Card Title C",
    subtitle: "Sub Title C",
    progress: 10,
    link: "/a/b/c",
  },
  {
    title: "Card Title D",
    subtitle: "Sub Title D",
    progress: 10,
    link: "/a/b/c",
  },
  {
    title: "Card Title E",
    subtitle: "Sub Title E",
    progress: 10,
    link: "/a/b/c",
  },
  {
    title: "Card Title F",
    subtitle: "Sub Title F",
    progress: 10,
    link: "/a/b/c",
  },
];

const ThemePage: FC = () => {
  return (
    <>
      <Jumbotron />
      <Container>
        <Row>
          <Col md={9}>
            <CardDrawer title="Decks da Paula" cards={cards} />
            <CardDrawer title="Decks da Descomplica" cards={cards} />
          </Col>
          <Col md={3}>bla</Col>
        </Row>
      </Container>
    </>
  );
};

export default ThemePage;
