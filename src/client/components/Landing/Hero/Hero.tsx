import React, { FC } from "react";
import styled from "styled-components";
import { Container, Row, Col } from "styled-bootstrap-grid";
import { media } from "styled-bootstrap-grid";

const StyledHero = styled.div``;

const StyledTitle = styled.h1`
  font-weight: 800;
  margin-bottom: 24px;
`;

const StyledDescription = styled.p`
  font-size: 2.4rem;
`;

const StyledCard = styled.div`
  height: 445px;
  background: gray;
  border-radius: 20px;
  margin: 0 auto;

  ${media.desktop`
    width: 445px;
  `}
`;

const Hero: FC = () => {
  return (
    <StyledHero>
      <Container>
        <Row>
          <Col md={6}>
            <StyledTitle>Domine qualquer matéria com o Descoflash</StyledTitle>
            <StyledDescription>
              Você entra com o raciocínio e nós entramos com o resto. Flashcards
              são cartões que ajudam você a aprender o que quiser.
            </StyledDescription>
          </Col>
          <Col md={6}>
            <StyledCard />
          </Col>
        </Row>
      </Container>
    </StyledHero>
  );
};

export default Hero;
