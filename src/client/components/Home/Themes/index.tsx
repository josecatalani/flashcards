import React, { FC } from "react";
import styled from "styled-components";
import { Col, Container, Row } from "styled-bootstrap-grid";

const Wrapper = styled.div(({ theme: { colors } }) => `
  padding: 100px 0 80px;

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

const mock = [
  {
    title: 'Administração',
    subtitle: 'Subtitle'
  },
  {
    title: 'Administração',
    subtitle: 'Subtitle'
  },
  {
    title: 'Administração',
    subtitle: 'Subtitle'
  },
  {
    title: 'Administração',
    subtitle: 'Subtitle'
  },
  {
    title: 'Administração',
    subtitle: 'Subtitle'
  },
  {
    title: 'Administração',
    subtitle: 'Subtitle'
  },
  {
    title: 'Administração',
    subtitle: 'Subtitle'
  },
  {
    title: 'Administração',
    subtitle: 'Subtitle'
  },
];

const UserResume: FC = () => {
  return (
    <Wrapper>
      <Container>
        <Row>
          <Col md={12}>
            <h2>Meu progresso</h2>
            <Placeholder />
          </Col>
        </Row>
        <Row>
        </Row>
      </Container>
    </Wrapper>
  );
};

export default UserResume;
