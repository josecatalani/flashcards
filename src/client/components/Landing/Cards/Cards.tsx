import React, { FC } from "react";
import styled from "styled-components";
import { Container, Row, Col } from "styled-bootstrap-grid";
import SchoolImg from "../../../public/static/school.png";
import Image from "next/image";
import Button from "../../Button";
import Link from "next/link";

const StyledCards = styled.div`
  padding: 80px 0 50px 0;
`;

const StyledTitle = styled.h2`
  margin-bottom: 64px;
`;

const StyledCardTitle = styled.h3`
  font-size: 3.2rem;
  margin-bottom: 1.6rem;
`;
const StyledCardSubTitle = styled.p`
  font-size: 1.6rem;
  color: #636769;
  margin-bottom: 32px;
`;

const StyledCardCTA = styled(Button)`
  border: 1px solid black;

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const StyledCard = styled.div`
  background: #ffffff;
  border: 2px solid #cacdce;
  box-sizing: border-box;
  border-radius: 24px;
  padding: 40px;
  margin-bottom: 30px;
`;

const cardsData = [
  {
    title: "Ciências Sociais",
    subtitle:
      "Lorem Ipsum has been the industry's standard dummy text since the 1500s",
    link: "/ciencias-sociais",
  },
  {
    title: "Marketing Digital",
    subtitle:
      "Lorem Ipsum has been the industry's standard dummy text since the 1500s",
    link: "/marketing-digital",
  },
  {
    title: "Psicologia",
    subtitle:
      "Lorem Ipsum has been the industry's standard dummy text since the 1500s",
    link: "/psicologia",
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
    <Col md={4} key={`card_row_${title}_${subtitle}`}>
      <StyledCard>
        <Image src={SchoolImg} />
        <StyledCardTitle>{title}</StyledCardTitle>
        <StyledCardSubTitle>{subtitle}</StyledCardSubTitle>
        <StyledCardCTA theme="clean">
          <Link href={link}>Ver tema</Link>
        </StyledCardCTA>
      </StyledCard>
    </Col>
  );
};

const Cards: FC = () => {
  return (
    <StyledCards>
      <Container>
        <Row mdJustifyContent="between">
          <Col md={6}>
            <StyledTitle>Cada novo tema aprendido é uma conquista.</StyledTitle>
          </Col>
        </Row>
        <Row>{cardsData.map((card) => renderCard(card))}</Row>
      </Container>
    </StyledCards>
  );
};

export default Cards;
