import React, { FC } from "react";
import styled from "styled-components";
import Link from "next/link";
import { Container, Row, Col } from "styled-bootstrap-grid";

const StyledCardDrawer = styled.div`
  padding: 40px 0;
`;
const StyledCardsWrapper = styled.div``;

const StyledCard = styled.div`
  padding: 20px;
  border-radius: 20px;
  border: 1px solid gray;
`;
const StyledCardTitle = styled.h4``;
const StyledCardSubTitle = styled.h4``;

const StyledTitle = styled.h1``;

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
    <Col md={4} key={`card_row_${title}_carddrawer`}>
      <StyledCard>
        <Link href={link}>
          <a>
            <StyledCardTitle>{title}</StyledCardTitle>
            <StyledCardSubTitle>{subtitle}</StyledCardSubTitle>
          </a>
        </Link>
      </StyledCard>
    </Col>
  );
};

const CardDrawer: FC<{
  title: string;
  cards: Array<{
    title: string;
    subtitle: string;
    link: string;
    progress: number;
  }>;
}> = ({ title, cards }) => {
  return (
    <StyledCardDrawer>
      {title && <StyledTitle>{title}</StyledTitle>}
      {cards && (
        <StyledCardsWrapper>
          <Row>{cards.map((card) => renderCard(card))}</Row>
        </StyledCardsWrapper>
      )}
      <Row alignItems="end">
        <Col>Ver mais</Col>
      </Row>
    </StyledCardDrawer>
  );
};

export default CardDrawer;
