import React, { FC } from "react";
import styled, { css } from "styled-components";
import { Col, Container, Row } from "styled-bootstrap-grid";
import ColorCard from "../../Shared/ColorCard";

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

const mock: Array<{ title: string; color: string }> = [
  {
    title: "Biologia",
    color: "#FF7878",
  },
  {
    title: "Tecnologia",
    color: "#C497FF",
  },
  {
    title: "Marketing",
    color: "#76C5FF",
  },
  {
    title: "Pedagogia",
    color: "#FFE900",
  },
  {
    title: "Direito",
    color: "#FC9700;",
  },
  {
    title: "Logística",
    color: "#4AFFB1",
  },
];

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
          {mock.map(({ title, color }, index) => (
            <ColorCard
              title={title}
              link=""
              color={color}
            />
          ))}
        </Row>
      </Container>
    </Wrapper>
  );
};

export default Theme;
