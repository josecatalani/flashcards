import React, { FC } from "react";
import styled from "styled-components";
import { Container, Row, Col } from "styled-bootstrap-grid";
import { media } from "styled-bootstrap-grid";

const StyledInfo = styled.div``;

const StyledTitle = styled.h1``;
const StyledSubTitle = styled.h2``;

const StyledCardTitle = styled.h3``;
const StyledCardSubTitle = styled.h4``;

const StyledCardCTA = styled.a``;

const StyledGraphItem = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 100%;
  background: gray;

  ${media.desktop`
    width: 300px;
    height: 300px;
  `}
`;

const StyledCard = styled.div`
  border: 1px solid gray;
  padding: 20px;
  border-radius: 20px;
  margin: 0 auto;
`;

const cardsData = [
  {
    title: "Title A",
    subtitle: "Title A",
    link: "http://link.com",
  },
  {
    title: "Title B",
    subtitle: "Title B",
    link: "http://link.com",
  },
  {
    title: "Title C",
    subtitle: "Title C",
    link: "http://link.com",
  },
];

const renderCard = ({
  title,
  subtitle,
  link,
}: {
  title: string;
  subtitle: string;
  link: string;
}) => {
  return (
    <Col md={4}>
      <StyledCard>
        <StyledCardTitle>{title}</StyledCardTitle>
        <StyledCardSubTitle>{subtitle}</StyledCardSubTitle>
        <StyledCardCTA href={link}>Clique aqui</StyledCardCTA>
      </StyledCard>
    </Col>
  );
};

const Cards: FC = () => {
  return (
    <StyledInfo>
      <Container>
        <Row mdJustifyContent="between">
          <Col mdAuto>
            <StyledTitle>Title dos Infos</StyledTitle>
            <StyledSubTitle>SubTitle dos Infos</StyledSubTitle>
          </Col>
          <Col mdAuto>
            <StyledGraphItem />
          </Col>
        </Row>
        <Row>{cardsData.map((card) => renderCard(card))}</Row>
      </Container>
    </StyledInfo>
  );
};

export default Cards;
