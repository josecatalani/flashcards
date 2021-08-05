import React, { FC } from "react";
import styled from "styled-components";
import { Col, Container, Row } from "styled-bootstrap-grid";

const Wrapper = styled.div`
  background-color: #EBEBEB;
  padding: 116px 0;
`;

const CTAWrapper: FC = () => {
  return (
    <Wrapper>
      <Container>
        <Row>
          <Col md={6}>
            <h2>Magna magna nisi aliquip proident excepteur commodo proident.</h2>
          </Col>
          <Col md={6}>
            <button>CTA</button>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
};

export default CTAWrapper;
