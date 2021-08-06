import React, { FC } from "react";
import { Col, Container, Row } from "styled-bootstrap-grid";
import styled from "styled-components";
import Button from "../../Button";

const Wrapper = styled.div(({ theme: { colors } }) => `
  padding: 72px 0 100px;
`);

const PlaceholderButton = styled(Button)`
  width: 100%;
  margin-bottom: 40px;
`;

const CardPlaceholder = styled.div`
  border: 2px solid #DBDBDB;
  padding: 40px;
  margin-bottom: 16px;
  border-radius: 24px;
`;

const DeckPage: FC = () => {
  return (
    <Wrapper>
      <Container>
        <Row>
          <Col md={6}>
            <h4>Title</h4>
          </Col>
          <Col md={6}>
            <PlaceholderButton theme="primary">
              Filtro
            </PlaceholderButton>
          </Col>
        </Row>

        <Row>
          <Col md={12}>
            <CardPlaceholder />
            <CardPlaceholder />
            <CardPlaceholder />
            <CardPlaceholder />
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
};

export default DeckPage;
