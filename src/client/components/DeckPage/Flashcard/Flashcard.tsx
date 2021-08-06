import React, { FC, useState, useEffect } from "react";
import { Col, Container, Row } from "styled-bootstrap-grid";
import styled from "styled-components";

const CardWrapper = styled.div`
  display: block;
  width: 100%;
  position: relative;
  height: 362px;

  &::before {
    content: '';
    width: calc(100% - 32px);
    height: 100%;
    background-color: #D2D2D2;
    border-radius: 24px;
    transform: scale(0.967);
    position: absolute;
    z-index: 2;
    inset-inline-end: 4px;
  }

  &::after {
    content: '';
    width: calc(100% - 32px);
    height: 100%;
    background-color: #C6C6C6;
    border-radius: 24px;
    transform: scale(0.897);
    position: absolute;
    z-index: 1;
    inset-inline-end: -37px;
  }
  `;

const Card = styled.div`
  width: calc(100% - 32px);
  background-color: white;
  border-radius: 24px;
  padding: 24px;
  height: 100%;
  position: absolute;
  z-index: 3;
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

const OptionsWrapper = styled.div`
  display: flex;
  align-items: center;
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

const DotsPlaceholder = styled.div`
  width: 48px;
  height: 24px;
  border-radius: 8px;
  margin: 0 47px;
  background-color: #DBDBDB;
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
      <CardWrapper>
        <Card>
          <ChancesWrapper>
            {Array(chances).fill(undefined).map((_, i) => <ChancesShape key={i} disabled={chancesRemaining <= i} />)}
          </ChancesWrapper>
        </Card>
      </CardWrapper>
      <CardOptions>
        <OptionShape />
        <OptionsWrapper>
          <OptionShape onClick={() => setCurrentItem(currentItem === 0 ? cardList.length - 1 : currentItem - 1)} />
          <DotsPlaceholder />
          <OptionShape onClick={() => setCurrentItem(currentItem === cardList.length - 1 ? 0 : currentItem + 1)} />
        </OptionsWrapper>
        <OptionShape />
      </CardOptions>
    </FlashcardWrapper>
  );
};

export default Flashcard;
