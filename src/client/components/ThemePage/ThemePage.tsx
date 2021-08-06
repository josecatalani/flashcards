import { useRouter } from "next/router";
import React, { FC } from "react";
import { Col, Container, Row } from "styled-bootstrap-grid";
import { decks } from "../../data/cards";
import CardDrawer from "./CardDrawer";
import Jumbotron from "./Jumbotron";

const ThemePage: FC = () => {
  const router = useRouter();
  const path = router!.query!.deck![0];

  const title = decks[path].title
  const subtitle = decks[path].subtitle;

  return (
    <>
      <Jumbotron title={title} subtitle={subtitle} />
      <Container>
        <Row>
          <Col md={9}>
            <CardDrawer title="Decks da Paula" cards={decks[path].userDecks} />
            <CardDrawer
              title="Decks da Descomplica"
              cards={decks[path].descomplicaDecks}
            />
          </Col>
          <Col md={3}>bla</Col>
        </Row>
      </Container>
    </>
  );
};

export default ThemePage;
