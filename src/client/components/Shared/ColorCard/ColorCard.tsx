import React, { FC } from "react";
import styled, { css } from "styled-components";
import { Col } from "styled-bootstrap-grid";
import Link from "next/link";

const FlashcardIcon = "/static/card.png";
const FriendsIcon = "/static/friends.png";

const StyledCardTitle = styled.h3`
  font-size: 3.2rem;
  margin-bottom: 1.6rem;
  color: #191a1a;
  font-weight: 600;
  font-size: 32px;
  line-height: 32px;
  letter-spacing: -1px;
  color: #191a1a;
`;

const StyledIcon = styled.div`
  display: flex;
  align-items: center;
`;

const StyledImage = styled.img``;

const StyledCard = styled.div(
  ({ color = "#ffffff" }) => css`
    background: ${color};
    box-sizing: border-box;
    border: 2px solid #191a1a;
    border-radius: 24px;
    padding: 32px 32px 24px 32px;
    margin-bottom: 30px;

    a {
      color: #191a1a;
      text-decoration: none;
    }

    ul {
      padding: 0;

      li {
        padding: 0;
        display: flex;
        align-items: center;
        margin-bottom: 5px;

        ${StyledIcon} {
          margin-right: 5px;
        }
      }
    }
  `
);

const ColorCard: FC<{
  title: string;
  link: string;
  color: string;
  participants: number;
  flashcards: number;
}> = ({ title, link = "/", color, participants, flashcards }) => {
  return (
    <Col sm={6} md={4} key={`card_row_${title}_colored_${color}`}>
      <StyledCard color={color}>
        <Link href={link}>
          <a>
            <StyledCardTitle>{title}</StyledCardTitle>
            <ul>
              <li>
                <StyledIcon>
                  <StyledImage src={FlashcardIcon} />
                </StyledIcon>
                {flashcards} Flashcards
              </li>
              <li>
                <StyledIcon>
                  <StyledImage src={FriendsIcon} />
                </StyledIcon>
                {participants} Participantes
              </li>
            </ul>
          </a>
        </Link>
      </StyledCard>
    </Col>
  );
};

export default ColorCard;
