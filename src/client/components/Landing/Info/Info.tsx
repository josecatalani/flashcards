import React, { FC } from "react";
import styled from "styled-components";
import { Container, Row, Col } from "styled-bootstrap-grid";

const StyledInfo = styled.div`
  background: black;
  padding: 80px 0 50px 0;
`;

const StyledTitle = styled.h2`
  color: white;
  text-align: center;
  margin-bottom: 50px;
`;

const StyledCardTitle = styled.p`
  font-size: 3.2rem;
  line-height: 4.4rem;
  letter-spacing: -1px;
  color: white;
  margin-bottom: 24px;
`;

const StyledCardDescription = styled.p`
  font-size: 2.4rem;
  line-height: 3.6rem;
  letter-spacing: -1px;
  color: #cacdce;
`;

const StyledCard = styled.div`
  width: 100%;
  background: #313435;
  border-radius: 20px;
  margin: 0 auto;
  padding: 50px;
  border: 2px solid #636769;
  margin-bottom: 30px;
`;

const cardsData = [
  {
    title: "Lorem Ipsum is simply dummy text of the printing industry",
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    title: "Lorem Ipsum is simply dummy text of the printing industry",
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    title: "Lorem Ipsum is simply dummy text of the printing industry",
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    title: "Lorem Ipsum is simply dummy text of the printing industry",
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
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
    <Col md={6} key={`card_row_${title}_info`}>
      <StyledCard>
        <StyledCardTitle>{title}</StyledCardTitle>
        <StyledCardDescription>{description}</StyledCardDescription>
      </StyledCard>
    </Col>
  );
};

const Info: FC = () => {
  return (
    <StyledInfo>
      <Container>
        <Row mdJustifyContent="center">
          <Col md={8}>
            <StyledTitle>Não se frustre. Faça o que for preciso.</StyledTitle>
          </Col>
        </Row>
        <Row>{cardsData.map((card) => renderCard(card))}</Row>
      </Container>
    </StyledInfo>
  );
};

export default Info;
