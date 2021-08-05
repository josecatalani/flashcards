import React, { FC } from "react";
import styled from "styled-components";
import { Container, Row, Col } from "styled-bootstrap-grid";
import { media } from "styled-bootstrap-grid";

const StyledJumbotron = styled.div`
  background: gray;
  padding: 80px 0%;
`;

const StyledTitle = styled.h1``;
const StyledSubTitle = styled.h2``;

const StyledActionItem = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 100%;
  background: white;
`;

const Jumbotron: FC = () => {
  return (
    <StyledJumbotron>
      <Container>
        <Row mdJustifyContent="between">
          <Col mdAuto>
            <StyledTitle>Title do Jumbotron</StyledTitle>
            <StyledSubTitle>SubTitle do Jumbotron</StyledSubTitle>
          </Col>
          <Col mdAuto>
            <StyledActionItem />
          </Col>
        </Row>
      </Container>
    </StyledJumbotron>
  );
};

export default Jumbotron;
