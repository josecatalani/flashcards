import React, { FC } from "react";
import styled from "styled-components";
import { Row, Col } from "styled-bootstrap-grid";
import ClickCard from "../../Shared/ClickCard";

const StyledCardDrawer = styled.div`
  padding: 40px 0;
`;
const StyledCardsWrapper = styled.div``;

const StyledTitle = styled.h6`
  border-bottom: 2px solid #cacdce;
  margin-bottom: 20px;
`;

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
          <Row>
            {cards.map(({ title, subtitle, link }) => (
              <ClickCard title={title} subtitle={subtitle} link={link} />
            ))}
          </Row>
        </StyledCardsWrapper>
      )}
      <Row alignItems="end">
        <Col>Ver mais</Col>
      </Row>
    </StyledCardDrawer>
  );
};

export default CardDrawer;
