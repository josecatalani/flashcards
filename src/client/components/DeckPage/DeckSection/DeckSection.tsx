import React, { FC } from "react";
import { Col, Container, Row } from "styled-bootstrap-grid";
import styled, { css } from "styled-components";
const IconImg = "/static/icon-lista.png";

const Wrapper = styled.div(
  ({ theme: { colors } }) => css`
    padding: 72px 0 100px;
    background: #313435;
  `
);

const CardPlaceholder = styled.div`
  background: #191a1a;
  border: 2px solid #313435;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 28px;
  display: flex;
  justify-content: space-between;
  margin-top: 16px;

  &::first-child {
    margin-top: 0;
  }
`;

const StyledTitle = styled.h6`
  color: white;
  font-weight: 600;
  margin-bottom: 40px;
`;

const StyledCardTitle = styled.p`
  color: white;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: -0.8px;
  color: #ffffff;
`;

const StyledCardDescription = styled.p`
  color: white;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: -0.8px;
  color: #ffffff;
`;

const DeckPage: FC = () => {
  return (
    <Wrapper>
      <Container>
        <Row>
          <Col>
            <StyledTitle>Termos nessa lista (16)</StyledTitle>
          </Col>
        </Row>

        <Row>
          <Col md={12}>
            <CardPlaceholder>
              <StyledCardTitle>A mutação genética difere da...</StyledCardTitle>
              <StyledCardDescription>
                Enquanto a mutação corresponde a uma mudança heredi...
              </StyledCardDescription>
              <img src={IconImg} />
            </CardPlaceholder>
            <CardPlaceholder>
              <StyledCardTitle>Que seleção genética não...</StyledCardTitle>
              <StyledCardDescription>
                Seleção dimensional.
              </StyledCardDescription>
              <img src={IconImg} />
            </CardPlaceholder>
            <CardPlaceholder>
              <StyledCardTitle>Por que Gregor Mendel usou...</StyledCardTitle>
              <StyledCardDescription>
                O Androceu e o Gineceu estão presentes numa mesma fl...
              </StyledCardDescription>
              <img src={IconImg} />
            </CardPlaceholder>
            <CardPlaceholder>
              <StyledCardTitle>A mutação genética difere da...</StyledCardTitle>
              <StyledCardDescription>
                Enquanto a mutação corresponde a uma mudança heredi...
              </StyledCardDescription>
              <img src={IconImg} />
            </CardPlaceholder>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
};

export default DeckPage;
