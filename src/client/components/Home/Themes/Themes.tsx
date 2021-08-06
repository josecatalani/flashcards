import React, { FC } from "react";
import styled, { css } from "styled-components";
import { Col, Container, Row } from "styled-bootstrap-grid";
import ColorCard from "../../Shared/ColorCard";
import { homeLoggedData } from "../../../data/loggedHome";

const Wrapper = styled.div(
  ({ theme: { colors } }) => css`
    padding: 80px 0 80px;

    h2 {
      margin-bottom: 25px;
    }
  `
);

const Subtitle = styled.p`
  font-size: 2.4rem;
  font-weight: 400;
  letter-spacing: -1px;
  color: #636769;
  margin-bottom: 30px;
`;

const Theme: FC = () => {
  return (
    <Wrapper>
      <Container>
        <Row>
          <Col col={12}>
            <h2>Temas</h2>
            <Subtitle>
              O Descoflash separou temas incríveis pra você aprender.
            </Subtitle>
          </Col>
        </Row>
        <Row>
          {homeLoggedData.map(
            ({ title, color, participants, flashcards, link }) => (
              <ColorCard
                title={title}
                link={link}
                color={color}
                participants={participants}
                flashcards={flashcards}
              />
            )
          )}
        </Row>
      </Container>
    </Wrapper>
  );
};

export default Theme;
