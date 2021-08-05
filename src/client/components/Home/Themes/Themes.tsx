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

const Card = styled.div(({ theme: { colors } }) => `
  padding: 30px;
  border: 2px solid #DBDBDB;
  border-radius: 24px;
  margin-bottom: 30px;
`);

const Subtitle = styled.p`
  font-size: 3.2rem;
  font-weight: 400;
  letter-spacing: -1px;
`;

const mock: Array<{ title: string; subtitle: string; }> = [
  {
    title: 'Title ',
    subtitle: 'Subtitle'
  },
  {
    title: 'Title',
    subtitle: 'Subtitle'
  },
  {
    title: 'Title',
    subtitle: 'Subtitle'
  },
  {
    title: 'Title',
    subtitle: 'Subtitle'
  },
  {
    title: 'Title',
    subtitle: 'Subtitle'
  },
  {
    title: 'Title',
    subtitle: 'Subtitle'
  },
  {
    title: 'Title',
    subtitle: 'Subtitle'
  },
  {
    title: 'Title',
    subtitle: 'Subtitle'
  },
];

const Theme: FC = () => {
  return (
    <Wrapper>
      <Container>
        <Row>
          <Col col={12}>
            <h2>Tema</h2>
            <Subtitle>Subtitle</Subtitle>
          </Col>
        </Row>
        <Row>
          {mock.map((item, index) => (
            <Col md={3} key={index}>
              <Card>
                <h4>{item.title}</h4>
                <Subtitle>{item.subtitle}</Subtitle>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Wrapper>
  );
};

export default Theme;
