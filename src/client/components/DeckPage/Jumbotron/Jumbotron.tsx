import React, { FC } from "react";
import { Col, Container, Row } from "styled-bootstrap-grid";
import styled, { css } from "styled-components";
import Flashcard, { ICardItem } from "../Flashcard";
const RepeatImg = "/static/repeat.png";
const ShareImg = "/static/share.png";
const ReportImg = "/static/report.png";
const OdaImg = "/static/oda.png";

const Wrapper = styled.div(
  ({ theme: { colors } }) => css`
    background: #191a1a;
    padding: 60px;
  `
);

const ExitLink = styled.a`
  margin-bottom: 52px;
  display: block;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.4px;
  text-decoration-line: underline;
  color: #969a9c;
`;

const FlashcardDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 56px;
  height: 100%;

  > div > p {
    font-size: 14px;
    line-height: 16px;
    letter-spacing: -0.4px;
    text-transform: uppercase;
    color: #969a9c;
    text-transform: uppercase;
    margin-bottom: 24px;
  }
`;

const FlashCardSidebarButton = styled.a`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 24px;
  background: #313435;
  border-radius: 32px;
  color: white;
  cursor: pointer;
  margin-bottom: 13px;
  flex: 0;

  > img {
    margin-right: 9px;
  }

  &:hover {
    background: #aaaaaa;
  }
`;

const FlashcardProfile = styled.div`
  display: flex;
`;

const ProfilePicWrapper = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-color: #dbdbdb;
  margin-right: 15px;
  overflow: hidden;

  img {
    width: 100%;
    object-fit: cover;
  }
`;

const CardWithTools = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TeacherName = styled.p`
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: -0.8px;
  color: #ffffff;
`;

const cardList: ICardItem[] = [
  {
    chances: 2,
    question: "Oi, tudo bem com você?",
    answer: "Tudo bem! Tchau.",
  },
  {
    chances: 3,
    question: "Oi, tudo bem com você?",
    answer: "Tudo bem! Tchau.",
  },
  {
    chances: 4,
    question: "Oi, tudo bem com você?",
    answer: "Tudo bem! Tchau.",
  },
  {
    chances: 5,
    question: "Oi, tudo bem com você?",
    answer: "Tudo bem! Tchau.",
  },
];

const StyledMainTitle = styled.h1`
  font-size: 56px;
  line-height: 64px;
  letter-spacing: -1.2px;
  color: #ffffff;
`;

const StyledMainTitleCategory = styled.small`
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.4px;
  color: #969a9c;
  font-weight: 400;
`;

const TeacherTeam = styled.p`
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.4px;
  color: #969a9c;
`;

const TeacherWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const DeckPage: FC = () => {
  return (
    <Wrapper>
      <Container>
        <Row>
          <Col md={6}>
            <StyledMainTitle>
              Title{" "}
              <StyledMainTitleCategory>em Biologia</StyledMainTitleCategory>
            </StyledMainTitle>
            <ExitLink href="#" target="_blank">
              Exit link
            </ExitLink>
          </Col>
        </Row>
        <Row alignItems="stretch">
          <Col md={3}>
            <FlashcardDetails>
              <div />
              <div>
                <p>FLASHCARD</p>
                <FlashCardSidebarButton>
                  <img src={RepeatImg} />
                  Repetir
                </FlashCardSidebarButton>
                <FlashCardSidebarButton>
                  <img src={ShareImg} />
                  Compartilhar
                </FlashCardSidebarButton>
                <FlashCardSidebarButton>
                  <img src={ReportImg} />
                  Denunciar
                </FlashCardSidebarButton>
              </div>

              <FlashcardProfile>
                <ProfilePicWrapper>
                  <img src={OdaImg} />
                </ProfilePicWrapper>
                <TeacherWrapper>
                  <TeacherName>Flyn Ridder</TeacherName>
                  <TeacherTeam>Aluno do Descomplica</TeacherTeam>
                </TeacherWrapper>
              </FlashcardProfile>
            </FlashcardDetails>
          </Col>
          <Col md={9}>
            <CardWithTools>
              <Flashcard cardList={cardList} />
            </CardWithTools>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
};

export default DeckPage;
