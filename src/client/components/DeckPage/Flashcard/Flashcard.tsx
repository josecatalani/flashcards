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
    transform: rotateY(0deg);
    height: 100%;
    width: 100%;
    position: relative;
    z-index: 5;

    ${active ? css`
      transform: rotateY(180deg);
    ` : null}

  `
);

const Card = styled.div`
  width: calc(100% - 32px);
  background-color: white;
  border-radius: 24px;
  padding: 24px;
  height: 100%;
  position: absolute;
  -webkit-backface-visibility: hidden;
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
  background-color: #191A1A;
  border: 1px solid #313435;
`;

const FlashcardWrapper = styled.div`
  width: 100%;
`;

const DotsPlaceholder = styled.div`
  width: 48px;
  height: 24px;
  border-radius: 8px;
  margin: 0 47px;
  color: white;
  text-align: center;
`;

const ProgressBar = styled.div<{ percentage: number; backActive: boolean; }>(({ backActive, percentage, theme: { colors } }) => `
  width: 100%;
  height: 8px;
  margin-right: 33px;
  background-color: #E5E6E7;
  border-radius: 45px;
  position: ${backActive ? 'initial' : 'relative'};
  order: 1;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    width: ${percentage}%;
    background-color: ${colors.primary.normal};
    border-radius: 45px;
    transition: ease-in-out 300ms;
    display: ${backActive ? 'none' : 'block'};
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

const CardQuestion = styled.p`
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

const CardAnswer = styled(CardQuestion)`
  margin: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

const CardBack = styled(Card)`
  transform: rotateY(180deg);
  right: 0;
`;

const AnswerCheck = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  p {
    display: block;
    text-align: center;
    margin-bottom: -10px;
  }
`;

const ButtonsWrapper = styled.div`
    display: flex;

    button {
      margin: 0 10px;
    }
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
  const [chancesRemaining, setChancesRemaining] = useState<number>(totalChances);
  const [currentItem, setCurrentItem] = useState<number>(0);
  const [showAnswer, setShowAnswer] = useState<boolean>(false);
  const [cardsDone, setCardsDone] = useState<number[]>([]);

  useEffect(() => {
    setShowAnswer(false);
  }, [currentItem])

  const handleCorrect = () => {
    setCardsDone(oldArr => [...oldArr, currentItem]);
    setCurrentItem(currentItem === cardList.length - 1 ? 0 : currentItem + 1)
    setShowAnswer(false);
  }

  const handleWrong = () => {
    setChancesRemaining(chancesRemaining - 1);
    setShowAnswer(false);
  }

  const completedPercentage = 100 * cardsDone.length / cardList.length - 1;
  return (
    <FlashcardWrapper>
      <CardWrapper>
        <CardInner active={showAnswer}>
          <Card>
            <ChancesWrapper>
              <ProgressBar backActive={showAnswer} percentage={completedPercentage > 0 ? completedPercentage : 0} />
              {Array(totalChances).fill(undefined).map((_, i) => (
                <HeartIcon key={i} disabled={chancesRemaining <= i} width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.6697 2.40115L11 2.69185L11.3303 2.40115L11.545 2.21224C12.6468 1.28599 14.0624 0.75 15.5 0.75C18.7159 0.75 21.25 3.29955 21.25 6.54496C21.25 7.71012 20.9453 8.84167 20.3238 10.0086L20.142 10.3393C19.1467 12.093 17.7808 13.584 14.1425 16.96C14.1422 16.9602 14.142 16.9604 14.1417 16.9607L12.5202 18.4535C12.5199 18.4537 12.5196 18.454 12.5194 18.4543C11.6583 19.2378 10.3416 19.235 9.48374 18.4477L8.14855 17.2218C8.14841 17.2217 8.14827 17.2216 8.14814 17.2215C4.27688 13.648 2.86637 12.1245 1.83945 10.3058L1.68425 10.0234C1.05733 8.8514 0.75 7.71514 0.75 6.54496C0.75 3.29955 3.28407 0.75 6.5 0.75C7.93762 0.75 9.35316 1.28599 10.455 2.21224L10.6697 2.40115Z" fill="#FB5B57" stroke="#FB5B57" />
                </HeartIcon>
              ))}
            </ChancesWrapper>
            <CardContent>
              <CardQuestion>
                {cardList[currentItem].question}
              </CardQuestion>
              <CustomButton theme="primary" onClick={() => setShowAnswer(true)}>
                Ver resposta
              </CustomButton>
            </CardContent>
          </Card>
          <CardBack>
            <CardContent>
              <CardAnswer>
                {cardList[currentItem].answer}
              </CardAnswer>
              {!cardsDone.includes(currentItem) && !!chancesRemaining && (
                <AnswerCheck>
                  <p>Você acertou a resposta que imaginou?</p><br />
                  <ButtonsWrapper>
                    <CustomButton theme="primary" onClick={() => handleCorrect()}>
                      Sim
                    </CustomButton>
                    <CustomButton theme="primaryRed" onClick={() => handleWrong()}>
                      Não
                    </CustomButton>
                  </ButtonsWrapper>
                </AnswerCheck>
              )}
            </CardContent>
          </CardBack>
        </CardInner>
      </CardWrapper>
      <CardOptions>
        <OptionShape>
          <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.9995 0.25H2.99953C1.48604 0.25 0.259527 1.48503 0.259527 3L0.25 18.2407C0.249569 18.9311 0.808863 19.4911 1.49922 19.4915C1.66877 19.4916 1.83656 19.4572 1.9924 19.3905L7.90105 16.8582C7.96393 16.8312 8.03512 16.8312 8.09801 16.8582L14.0071 19.3907C14.6417 19.6626 15.3765 19.3687 15.6485 18.7341C15.7151 18.5785 15.7495 18.411 15.7495 18.2417V3C15.7495 1.48579 14.5137 0.25 12.9995 0.25ZM14.2495 17.8626L8.68888 15.4795C8.24867 15.2908 7.75038 15.2908 7.31017 15.4795L1.75024 17.8623L1.75953 3.00047C1.75953 2.31115 2.3168 1.75 2.99953 1.75H12.9995C13.6853 1.75 14.2495 2.31421 14.2495 3V17.8626Z" fill="#CACDCE" />
          </svg>
        </OptionShape>
        <OptionsWrapper>
          <OptionShape onClick={() => setCurrentItem(currentItem === 0 ? cardList.length - 1 : currentItem - 1)}>
            <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.46967 0.46967C7.76256 0.176777 8.23744 0.176777 8.53033 0.46967C8.82322 0.762563 8.82322 1.23744 8.53033 1.53033L2.809 7.25H17C17.3797 7.25 17.6935 7.53216 17.7432 7.89823L17.75 8C17.75 8.41421 17.4142 8.75 17 8.75H2.811L8.53033 14.4697C8.7966 14.7359 8.8208 15.1526 8.60295 15.4462L8.53033 15.5303C8.23744 15.8232 7.76256 15.8232 7.46967 15.5303L0.46967 8.53033C0.176777 8.23744 0.176777 7.76256 0.46967 7.46967L7.46967 0.46967Z" fill="white" />
            </svg>
          </OptionShape>
          <DotsPlaceholder>
            {`${currentItem + 1}/${cardList.length}`}
          </DotsPlaceholder>
          <OptionShape onClick={() => setCurrentItem(currentItem === cardList.length - 1 ? 0 : currentItem + 1)} >
            <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.5303 0.46967L17.5303 7.46967C17.8232 7.76257 17.8232 8.23744 17.5303 8.53033L10.5303 15.5303C10.2374 15.8232 9.76256 15.8232 9.46967 15.5303C9.17678 15.2374 9.17678 14.7626 9.46967 14.4697L15.188 8.75H1C0.585786 8.75 0.25 8.41422 0.25 8C0.25 7.58579 0.585786 7.25 1 7.25H15.19L9.46967 1.53033C9.17678 1.23744 9.17678 0.762563 9.46967 0.46967C9.76256 0.176777 10.2374 0.176777 10.5303 0.46967Z" fill="white" />
            </svg>
          </OptionShape>
        </OptionsWrapper>
        <OptionShape>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 12.25C1.41421 12.25 1.75 12.5858 1.75 13V16.25H5C5.41421 16.25 5.75 16.5858 5.75 17C5.75 17.4142 5.41421 17.75 5 17.75H1C0.585786 17.75 0.25 17.4142 0.25 17V13C0.25 12.5858 0.585786 12.25 1 12.25ZM17 12.25C17.4142 12.25 17.75 12.5858 17.75 13V17C17.75 17.4142 17.4142 17.75 17 17.75H13C12.5858 17.75 12.25 17.4142 12.25 17C12.25 16.5858 12.5858 16.25 13 16.25H16.25V13C16.25 12.5858 16.5858 12.25 17 12.25ZM17 0.25C17.4142 0.25 17.75 0.585786 17.75 1V5C17.75 5.41421 17.4142 5.75 17 5.75C16.5858 5.75 16.25 5.41421 16.25 5V1.75H13C12.5858 1.75 12.25 1.41421 12.25 1C12.25 0.585786 12.5858 0.25 13 0.25H17ZM5 0.25C5.41421 0.25 5.75 0.585786 5.75 1C5.75 1.41421 5.41421 1.75 5 1.75H1.75V5C1.75 5.41421 1.41421 5.75 1 5.75C0.585786 5.75 0.25 5.41421 0.25 5V1C0.25 0.585786 0.585786 0.25 1 0.25H5Z" fill="#CACDCE" />
          </svg>
        </OptionShape>
      </CardOptions>
    </FlashcardWrapper>
  );
};

export default Flashcard;
