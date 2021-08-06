import React, { FC } from "react";
import styled from "styled-components";
import { Col } from "styled-bootstrap-grid";
import Link from "next/link";
import Image from "next/image";

const StyledCardTitle = styled.h3`
  font-size: 3.2rem;
  margin-bottom: 1.6rem;
  color: #191a1a;
`;
const StyledCardSubTitle = styled.p`
  font-size: 1.6rem;
  color: #636769;
  margin-bottom: 32px;
`;

const StyledIcon = styled(Image)`
  height: auto !important;
`;

const StyledCard = styled.div`
  background: #ffffff;
  border: 2px solid #cacdce;
  box-sizing: border-box;
  border-radius: 24px;
  padding: 40px;
  margin-bottom: 30px;

  a {
    text-decoration: none;
  }
`;

const ClickCard: FC<{
  title: string;
  subtitle: string;
  link: string;
  icon?: StaticImageData;
}> = ({ title, subtitle, link, icon }) => {
  return (
    <Col md={4} key={`card_row_${title}_${subtitle}`}>
      <StyledCard>
        <Link href={link}>
          <a>
            {icon && <StyledIcon src={icon} />}
            <StyledCardTitle>{title}</StyledCardTitle>
            <StyledCardSubTitle>{subtitle}</StyledCardSubTitle>
          </a>
        </Link>
      </StyledCard>
    </Col>
  );
};

export default ClickCard;
