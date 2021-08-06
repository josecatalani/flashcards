import React, { FC, useState, useEffect } from "react";
import { Col, Container, Row } from "styled-bootstrap-grid";
import styled, { css } from "styled-components";
import Button from "../../Button";

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
    top: 0;
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
    top: 0;
  }
`;

const CardInner = styled.div<{ active: boolean }>(({ active }) => `
    transition: transform 0.8s;
    transform-style: preserve-3d;
    transform: rotateY(${active ? 180 : 0}deg);
    height: 100%;
    width: 100%;
    position: relative;
    z-index: 5;
  `
);

const Card = styled.div`
  width: calc(100% - 32px);
  background-color: white;
  border-radius: 24px;
  padding: 24px;
  height: 100%;
  position: absolute;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
`;

const ChancesWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
`;

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

const ProgressBar = styled.div<{ percentage: number }>(({ percentage, theme: { colors } }) => `
  width: 100%;
  height: 8px;
  margin-right: 33px;
  background-color: #E5E6E7;
  border-radius: 45px;
  position: relative;
  order: 1;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    width: ${percentage}%;
    background-color: ${colors.primary.normal};
    border-radius: 45px;
    transition: ease-in-out 300ms;
  }
`);

const HeartIcon = styled.svg<{ disabled: boolean }>(({ disabled }) => `
  margin: 0 4px;

  ${disabled && css`
    path {
      stroke: #636769;
      fill: white;
    }
  `}
`);

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100% - 24px);
`;

const CustomButton = styled(Button)`
  width: 100%;
  max-width: 170px;
  margin: 0 auto;
`;

const CardAnswer = styled.p`
  text-align: center;
  font-size: 3.2rem;
  line-height: 4.2rem;
  font-weight: 600;
  margin: 40px auto 24px;
  max-width: 600px;
  height: 100%;
  display: flex;
  align-items: center;
`;

const CardBack = styled(Card)`
  transform: rotateY(180deg);
`;

export interface ICardItem {
  question: string;
  answer: string;
}

interface IPropsFlashcard {
  cardList: ICardItem[];
}

const Flashcard: FC<IPropsFlashcard> = ({ cardList }) => {
  const totalChances = 4;
  const [chancesRemaining, setChancesRemaining] = useState<number>(3);
  const [currentItem, setCurrentItem] = useState<number>(0);
  const [showAnswer, setShowAnswer] = useState<boolean>(false);

  const completedPercentage = 100 * currentItem / cardList.length - 1;
  return (
    <FlashcardWrapper>
      <CardWrapper>
        <CardInner active={showAnswer}>
          <Card>
            <ChancesWrapper>
              <ProgressBar percentage={completedPercentage > 0 ? completedPercentage : 0} />
              {Array(totalChances).fill(undefined).map((_, i) => (
                <HeartIcon key={i} disabled={chancesRemaining <= i} width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.6697 2.40115L11 2.69185L11.3303 2.40115L11.545 2.21224C12.6468 1.28599 14.0624 0.75 15.5 0.75C18.7159 0.75 21.25 3.29955 21.25 6.54496C21.25 7.71012 20.9453 8.84167 20.3238 10.0086L20.142 10.3393C19.1467 12.093 17.7808 13.584 14.1425 16.96C14.1422 16.9602 14.142 16.9604 14.1417 16.9607L12.5202 18.4535C12.5199 18.4537 12.5196 18.454 12.5194 18.4543C11.6583 19.2378 10.3416 19.235 9.48374 18.4477L8.14855 17.2218C8.14841 17.2217 8.14827 17.2216 8.14814 17.2215C4.27688 13.648 2.86637 12.1245 1.83945 10.3058L1.68425 10.0234C1.05733 8.8514 0.75 7.71514 0.75 6.54496C0.75 3.29955 3.28407 0.75 6.5 0.75C7.93762 0.75 9.35316 1.28599 10.455 2.21224L10.6697 2.40115Z" fill="#FB5B57" stroke="#FB5B57" />
                </HeartIcon>
              ))}
            </ChancesWrapper>
            <CardContent>
              <CardAnswer>
                {cardList[currentItem].question}
              </CardAnswer>
              <CustomButton theme="primary" onClick={() => setShowAnswer(true)}>
                Ver resposta
              </CustomButton>
            </CardContent>
          </Card>
          <CardBack>
            OI
          </CardBack>
        </CardInner>
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
