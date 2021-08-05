import React, { FC } from "react";
import styled from "styled-components";
import { Col, Container, Row } from "styled-bootstrap-grid";

const Wrapper = styled.div(({ theme: { colors } }) => `
  padding: 0 0 116px;

  h2 {
    margin-bottom: 40px;
  }
`);

const Placeholder = styled.div(({ theme: { colors } }) => `
  background-color: #F2F2F2;
  border: 2px solid #DBDBDB;
  padding: 116px 0;
  border-radius: 24px;
`);

const UserResume: FC = () => {
  return (
    <Wrapper>
      <Container>
        <Row>
          <Col md={6}>
            <h2>Meu progresso</h2>
            <Placeholder />
          </Col>
          <Col md={6}>
            <h2>Minhas conquistas</h2>
            <Placeholder />
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
};

export default UserResume;
