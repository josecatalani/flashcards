import React, { FC } from "react";
import styled from "styled-components";
import { Container, Row, Col } from "styled-bootstrap-grid";
import { media } from "styled-bootstrap-grid";

const StyledInfo = styled.div``;

const StyledTitle = styled.h1``;
const StyledSubTitle = styled.h2``;

const StyledCard = styled.div`
  height: 445px;
  background: gray;
  border-radius: 20px;
  margin: 0 auto;

  ${media.desktop`
    width: 445px;
  `}
`;

const cardsData = [
  {
    title: "Title A",
    description: "Title A",
  },
  {
    title: "Title B",
    description: "Title B",
  },
  {
    title: "Title C",
    description: "Title C",
  },
  {
    title: "Title D",
    description: "Title D",
  },
];

const renderCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <Col md={6} key={`card_row_${title}`}>
      <StyledCard>
        {title} e {description}
      </StyledCard>
    </Col>
  );
};

const Info: FC = () => {
  return (
    <StyledInfo>
      <Container>
        <Row mdJustifyContent="center">
          <Col mdAuto>
            <StyledTitle>Title dos Infos</StyledTitle>
            <StyledSubTitle>SubTitle dos Infos</StyledSubTitle>
          </Col>
        </Row>
        <Row>{cardsData.map((card) => renderCard(card))}</Row>
      </Container>
    </StyledInfo>
  );
};

export default Info;
