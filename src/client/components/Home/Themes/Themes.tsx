import React, { FC } from "react";
import styled, { css } from "styled-components";
import { Col, Container, Row } from "styled-bootstrap-grid";
import ClickCard from "../../Shared/ClickCard";
import LawImg from "../../../public/static/law.png";

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

const mock: Array<{ title: string; subtitle: string; icon: StaticImageData }> =
  [
    {
      icon: LawImg,
      title: "Biologia",
      subtitle: "Morbi sit amet ligula mauris. Sed non euismod nisi",
    },
    {
      icon: LawImg,
      title: "Tecnologia",
      subtitle:
        "Nunc velit metus, condimentum dignissim arcu at, rutrum rhoncus arcu.",
    },
    {
      icon: LawImg,
      title: "Marketing",
      subtitle:
        "Suspendisse interdum nunc quis odio condimentum, eu convallis eros luctus.",
    },
    {
      icon: LawImg,
      title: "Pedagogia",
      subtitle: "Nullam a orci rutrum, pulvinar ante et, pretium risus.",
    },
    {
      icon: LawImg,
      title: "Direito",
      subtitle: "In dictum orci sem, nec elementum neque consectetur a.",
    },
    {
      icon: LawImg,
      title: "Logística",
      subtitle: "Maecenas posuere tincidunt finibus. Proin sed purus nunc.",
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
          {mock.map(({ title, subtitle, icon }, index) => (
            <ClickCard title={title} subtitle={subtitle} link="" icon={icon} />
          ))}
        </Row>
      </Container>
    </Wrapper>
  );
};

export default Theme;
