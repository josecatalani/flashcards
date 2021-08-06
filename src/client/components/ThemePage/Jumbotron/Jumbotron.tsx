import React, { FC } from "react";
import styled, { css } from "styled-components";
import { Container, Row, Col } from "styled-bootstrap-grid";

const StyledJumbotron = styled.div`
  padding: 0px 0 0;
`;

const StyledTitle = styled.h1`
  margin-bottom: 25px;
  font-size: 5.6rem;
`;

const StyledSubTitle = styled.h2`
  font-size: 2.4rem;
  font-weight: 400;
  letter-spacing: -1px;
  color: #636769;
  margin-bottom: 30px;
`;

const StyledBanner = styled.img(
  ({ theme: { colors } }) => css`
    width: 100%;
    height: 40vh;
    object-fit: cover;
    border-bottom: 2px solid ${colors.primary.normal};
    margin-bottom: 20px;
  `
);

const Jumbotron: FC = () => {
  return (
    <StyledJumbotron>
      <StyledBanner src={"/static/advogado.jpg"} />
      <Container>
        <Row mdJustifyContent="between">
          <Col>
            <StyledTitle>Ciências Sociais</StyledTitle>
            <StyledSubTitle>
              Ciências Sociais são uma área que trabalha com a investigação e a
              pesquisa sobre aspectos relacionados ao comportamento humano. Por
              isso, para estudar essa disciplina, é importante compreender o
              funcionamento da sociedade e fenômenos sociais atuais.
            </StyledSubTitle>
          </Col>
        </Row>
      </Container>
    </StyledJumbotron>
  );
};

export default Jumbotron;
