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

const CardWithTools = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ToolShape = styled.div`
  min-width: 40px;
  min-height: 40px;
  margin-bottom: 15px;
  background-color: #DBDBDB;
  border-radius: 50%;
`

const ToolsWrapper = styled.div`
  margin-left: 25px;
`;

const cardList: ICardItem[] = [
  {
    chances: 2,
    question: 'Oi, tudo bem com você?',
    answer: 'Tudo bem! Tchau.',
  },
  {
    chances: 3,
    question: 'Oi, tudo bem com você?',
    answer: 'Tudo bem! Tchau.',
  },
  {
    chances: 4,
    question: 'Oi, tudo bem com você?',
    answer: 'Tudo bem! Tchau.',
  },
  {
    chances: 5,
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
            <CardWithTools>
              <Flashcard cardList={cardList} />
              <ToolsWrapper>
                <ToolShape />
                <ToolShape />
                <ToolShape />
                <ToolShape />
              </ToolsWrapper>
            </CardWithTools>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
};

export default DeckPage;
