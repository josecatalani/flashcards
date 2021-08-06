import React, { FC } from "react";
import styled, { css } from "styled-components";
import { Col, Container, Row } from "styled-bootstrap-grid";
import SocialsImage from "../../public/static/social.png";
import LogoFooterImg from "../../public/static/logo-footer.png";
import Image from "next/image";

const FooterWrapper = styled.footer(
  ({ theme: { colors } }) => css`
    background-color: ${colors.black.normal};
    padding: 80px 0;
  `
);

const LogoWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 70px;
`;

const FooterTitle = styled.div`
  font-size: 1.6rem;
  line-height: 2.8rem;
  letter-spacing: -0.4px;
  color: #ffffff;
  margin-bottom: 10px;
`;

const FooterList = styled.ul`
  margin-bottom: 30px;

  li {
    list-style: none;
    font-size: 1.6rem;
    line-height: 2.8rem;
    letter-spacing: -0.4px;

    a {
      color: #bbb;
    }
  }
`;

const Footer: FC = () => {
  return (
    <FooterWrapper>
      <Container>
        <Row justifyContent="between">
          <Col mdAuto>
            <FooterTitle>Cursos de graduação online</FooterTitle>
            <FooterList>
              <li>
                <a>Administração de Empresas</a>
              </li>
              <li>
                <a>Recursos Humanos</a>
              </li>
              <li>
                <a>Ciências Contábeis</a>
              </li>
              <li>
                <a>Pedagogia</a>
              </li>
            </FooterList>
          </Col>
          <Col mdAuto>
            <FooterTitle>Portal do Aluno</FooterTitle>
            <FooterList>
              <li>
                <a>WhatsApp</a>
              </li>
              <li>
                <a>Dúvidas</a>
              </li>
              <li>
                <a>Manual do Aluno</a>
              </li>
              <li>
                <a>Edital Vestibular 2021</a>
              </li>
            </FooterList>
          </Col>
          <Col mdAuto>
            <FooterTitle>Sobre o Descomplica</FooterTitle>
            <FooterList>
              <li>
                <a>Política de Privacidade</a>
              </li>
              <li>
                <a>Pós Graduação</a>
              </li>
            </FooterList>
          </Col>
          <Col mdAuto>
            <FooterTitle>Siga-nos</FooterTitle>
            <Image src={SocialsImage} />
          </Col>
        </Row>
        <Row>
          <Col col={12} alignSelf="end">
            <LogoWrapper>
              <a
                href="http://descomplica.com.br"
                target="_blank"
                rel="noreferrer"
              >
                <Image src={LogoFooterImg} />
              </a>
            </LogoWrapper>
          </Col>
        </Row>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
