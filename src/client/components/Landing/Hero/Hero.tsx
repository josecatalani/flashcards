import React, { FC, useState } from "react";
import styled, { css, keyframes } from "styled-components";
import { Container, Row, Col } from "styled-bootstrap-grid";
import { media } from "styled-bootstrap-grid";
import ArrowImage from "../../../public/static/arrow.png";
import Image from "next/image";

const StyledHero = styled.div`
  padding-top: 40px;
`;

const StyledTitle = styled.h1`
  font-weight: 800;
  margin-bottom: 24px;
`;

const StyledDescription = styled.p`
  font-size: 2.4rem;
`;

const StyledIcon = styled.div`
  margin: 100px auto 50px auto;
`;

const StyledCardCategory = styled.p`
  color: #969a9c;
  font-size: 1.6rem;
`;

const StyledCardQuestion = styled.p`
  font-size: 3.2rem;
  line-height: 4.2rem;
  font-weight: bold;
  text-align: center;
`;
const StyledCardAnswer = styled.p`
  font-size: 3.2rem;
  line-height: 4.2rem;
  font-weight: bold;
  text-align: center;
`;

const StyledCardContinue = styled.span`
  text-decoration: underline;
  color: #191a1a;
  cursor: pointer;
`;

const StyledCardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  z-index: 1;
`;

const StyledCardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
  background: white;
  border: 1px solid #cacdce;
  padding: 40px 40px 24px 40px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;

const StyledCardBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
  transform: rotateY(180deg);
  background: white;
  border: 1px solid #cacdce;
  padding: 40px 40px 24px 40px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;

const StyledCard = styled.div<{ isActive: boolean; isAnimating: boolean }>(
  ({ isActive, isAnimating }) => css`
    margin: 0 auto;
    position: relative;

    &:first-child {
      opacity: 1;
    }

    ${isActive
      ? css`
          ${StyledCardInner} {
            transform: rotateY(180deg);
          }
        `
      : css`
          opacity: 0;
        `}

    width: 145px;
    height: 145px;

    &::after,
    &::before {
      width: 100%;
      height: 100%;
      background: #f2f2f3;
      border: 2px solid #cacdce;
      box-sizing: border-box;
      border-radius: 24px;
      content: "";
      display: block;
      position: absolute;
      transition: all 200ms ease-in;
    }

    &:after {
      height: 90%;
      right: -18px;
      top: 18px;
    }

    &:before {
      height: 80%;
      right: -34px;
      top: 36px;
    }

    ${media.desktop`
      width: 445px;
      height: 445px;
    `}
  `
);

const StyledHeroCaroussel = styled.div`
  position: relative;
  width: 145px;
  height: 145px;

  ${StyledCard} {
    position: absolute;
  }

  ${media.desktop`
    width: 445px;
    height: 445px;
  `}
`;

const cards = [
  {
    category: "Card de Gen??tica em Biologia",
    question: "A muta????o gen??tica difere da recombina????o g??nica por qu???",
    answer:
      "Enquanto a muta????o corresponde a uma mudan??a heredit??ria no DNA, a recombina????o se d?? pela mistura de genes com seres da mesma esp??cie.",
  },
  {
    category: "Card de Gen??tica em Biologia",
    question: "A muta????o gen??tica difere da recombina????o g??nica por qu???",
    answer:
      "Enquanto a muta????o corresponde a uma mudan??a heredit??ria no DNA, a recombina????o se d?? pela mistura de genes com seres da mesma esp??cie.",
  },
  {
    category: "Card de Gen??tica em Biologia",
    question: "A muta????o gen??tica difere da recombina????o g??nica por qu???",
    answer:
      "Enquanto a muta????o corresponde a uma mudan??a heredit??ria no DNA, a recombina????o se d?? pela mistura de genes com seres da mesma esp??cie.",
  },
];

const Card: FC<{
  category: string;
  question: string;
  answer: string;
  isAnimating: boolean;
}> = ({ answer, category, question, isAnimating }) => {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <StyledCard isActive={isOpened} isAnimating={isAnimating}>
      <StyledCardInner>
        <StyledCardFront>
          <StyledCardCategory>{category}</StyledCardCategory>
          <StyledCardQuestion>{question}</StyledCardQuestion>
          <StyledCardContinue onClick={() => setIsOpened(!isOpened)}>
            Ver resposta
          </StyledCardContinue>
        </StyledCardFront>
        <StyledCardBack>
          <StyledCardCategory>{category}</StyledCardCategory>
          <StyledCardAnswer>{answer}</StyledCardAnswer>
          <StyledCardContinue onClick={() => setIsOpened(!isOpened)}>
            Continuar
          </StyledCardContinue>
        </StyledCardBack>
      </StyledCardInner>
    </StyledCard>
  );
};

const Hero: FC = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  return (
    <StyledHero>
      <Container>
        <Row>
          <Col md={7}>
            <StyledTitle>Domine qualquer mat??ria com o Descoflash</StyledTitle>
            <StyledDescription>
              Voc?? entra com o racioc??nio e n??s entramos com o resto. Flashcards
              s??o cart??es que ajudam voc?? a aprender o que quiser.
            </StyledDescription>
          </Col>
          <Col md={5}>
            <StyledHeroCaroussel>
              {cards.map(({ category, question, answer }) => (
                <Card
                  category={category}
                  question={question}
                  answer={answer}
                  isAnimating={isAnimating}
                />
              ))}
            </StyledHeroCaroussel>
          </Col>
        </Row>
        <Row alignItems="center" justifyContent="center">
          <Col auto>
            <StyledIcon>
              <Image src={ArrowImage} />
            </StyledIcon>
          </Col>
        </Row>
      </Container>
    </StyledHero>
  );
};

export default Hero;
