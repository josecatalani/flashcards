import React, { FC, useState, useEffect } from "react";
import { Col, Container, Row } from "styled-bootstrap-grid";
import styled from "styled-components";

const Card = styled.div`
  width: calc(100% - 32px);
  background-color: white;
  border-radius: 24px;
  padding: 24px;
  height: 362px;
  position: relative;
  z-index: 3;


  &:before {
    content: '';
  }
`;

const ChancesWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

const ChancesShape = styled.div<{ disabled: boolean }>(({ disabled }) => `
  width: 24px;
  height: 24px;
  background-color: #B7B7B7;
  border-radius: 50%;
  opacity: ${disabled ? 0.2 : 1};
  margin: 0 4px;
`);

const CardOptions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
  width: calc(100% - 32px);
`;

const OptionShape = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
`;

const FlashcardWrapper = styled.div`
  width: 100%;
`;

export interface ICardItem {
  chances: number;
  question: string;
  answer: string;
}

interface IPropsFlashcard {
  cardList: ICardItem[];
}

const Flashcard: FC<IPropsFlashcard> = ({ cardList }) => {
  const [chancesRemaining, setChancesRemaining] = useState<number>(0);
  const [currentItem, setCurrentItem] = useState<number>(0);

  useEffect(() => {
    setChancesRemaining(cardList[currentItem].chances);
  }, [currentItem, cardList])

  const { chances } = cardList[currentItem];
  return (
    <FlashcardWrapper>
      <Card>
        <ChancesWrapper>
          {Array(chances).fill(undefined).map((_, i) => <ChancesShape key={i} disabled={chancesRemaining <= i} />)}
        </ChancesWrapper>
      </Card>
      <CardOptions>
        <OptionShape />
        <div>
          <OptionShape />

          <OptionShape />
        </div>
        <OptionShape />
      </CardOptions>
    </FlashcardWrapper>
  );
};

export default Flashcard;
