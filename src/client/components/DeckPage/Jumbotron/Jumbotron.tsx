import React, { FC } from "react";
import { Col, Container, Row } from "styled-bootstrap-grid";
import styled from "styled-components";
import Flashcard, { ICardItem } from "../Flashcard"

const Wrapper = styled.div(({ theme: { colors } }) => `
  background-color: #B7B7B7;
  padding: 60px;
`);

const ShapeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 245px;
  margin: 0 0 0 auto;
  padding-right: 95px;
`;


const PlaceholderShape = styled.button`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-color: #DBDBDB;
  border: none;
`;

const ExitLink = styled.a`
  margin-bottom: 52px;
  display: block;
`;

const FlashcardDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 56px;
  height: 100%;
`;

const FlashcardProfile = styled.div`
  display: flex;
`;

const ProfilePicWrapper = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-color: #DBDBDB;
  margin-right: 15px;
  overflow: hidden;

  img {
    width: 100%;
    object-fit: cover;
  }
`;

const cardList: ICardItem[] = [
  {
    chances: 4,
    question: 'Oi, tudo bem com você?',
    answer: 'Tudo bem! Tchau.',
  },
  {
    chances: 4,
    question: 'Oi, tudo bem com você?',
    answer: 'Tudo bem! Tchau.',
  },
  {
    chances: 4,
    question: 'Oi, tudo bem com você?',
    answer: 'Tudo bem! Tchau.',
  },
  {
    chances: 4,
    question: 'Oi, tudo bem com você?',
    answer: 'Tudo bem! Tchau.',
  },
];

const DeckPage: FC = () => {
  return (
    <Wrapper>
      <Container>
        <Row>
          <Col md={6}>
            <h3>Title</h3>
            <ExitLink href="#" target="_blank">Exit link</ExitLink>
          </Col>
          <Col md={6}>
            <ShapeContainer>
              <PlaceholderShape />
              <PlaceholderShape />
            </ShapeContainer>
          </Col>
        </Row>
        <Row alignItems="stretch">
          <Col md={3}>
            <FlashcardDetails>
              <div>
                <p>Caption</p>
                <p>Subtitle</p>
                <p>Subtitle</p>
                <p>Subtitle</p>
              </div>

              <FlashcardProfile>
                <ProfilePicWrapper>
                  {/*<img src="" alt=""/>*/}
                </ProfilePicWrapper>
                <div>
                  <p>Fulano</p>
                  <p>Analista de dados</p>
                </div>
              </FlashcardProfile>
            </FlashcardDetails>
          </Col>
          <Col md={9}>
            <Flashcard cardList={cardList} />
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
};

export default DeckPage;
