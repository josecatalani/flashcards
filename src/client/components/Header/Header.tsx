import React, { FC, useContext, useState } from "react";
import styled, { css } from "styled-components";
import { Col, Container, Row } from "styled-bootstrap-grid";
import Link from "next/link";
import Image from "next/image";
const NotificationImg = "/static/notification.png";
import ProfileImg from "../../public/static/paulinha.png";
import Button from "../Button/Button";
import { Context } from "../../context/Store";
import { useRouter } from "next/router";
import Input from "../Input";
import { route } from "next/dist/next-server/server/router";

const LogoImg = "/static/logo.svg";
const LogoWhiteImg = "/static/logo-white.png";

const StyledHeader = styled.header<{ isBlackTheme: boolean }>(
  ({ isBlackTheme }) => css`
    padding: 26px 0;
    position: sticky;
    top: 0;
    z-index: 9999;
    ${isBlackTheme
      ? css`
          background: #313435;
          color: white;
        `
      : css`
          background: white;
        `}
  `
);

const StyledMenuAligner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledMenuRightAligner = styled.div<{ isBlackTheme: boolean }>(
  ({ isBlackTheme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
    ${isBlackTheme
      ? css`
          background: #313435;
        `
      : css``}
  `
);

const StyledNotification = styled.div<{ isBlackTheme: boolean }>(
  ({ isBlackTheme }) => css`
    border-radius: 25px;
    padding: 8px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    ${isBlackTheme
      ? css`
          background: #191a1a;
        `
      : css`
          background: #ffffff;
          border: 1px solid #e5e6e7;
        `}
  `
);

const StyledProfileLink = styled.a``;

const Header: FC = () => {
  const router = useRouter();
  // @ts-ignore
  const [state, dispatch] = useContext(Context);

  const isBlackTheme = router?.query?.deck?.length === 3 || false;
  const isHome = router && router.route === "/home";

  const doLogin = () => {
    dispatch({ type: "DO_LOGIN" });
  };
  const doLogout = () => {
    dispatch({ type: "DO_LOGOUT" });
  };

  const renderLoggedMenu = () => {
    return (
      <Container>
        <Row smJustifyContent="between">
          <Col auto>
            <StyledMenuAligner>
              <img src={isBlackTheme ? LogoWhiteImg : LogoImg} />
              <Link href="/">
                <a>
                  <Button theme={isBlackTheme ? "black" : "clean"} noHover>
                    Pagina Inicial
                  </Button>
                </a>
              </Link>
              <div>Criar</div>
            </StyledMenuAligner>
          </Col>
          <Col auto>
            <Input
              type="text"
              placeholder="Busque aqui"
              isBlackTheme={isBlackTheme}
            />
          </Col>
          <Col auto>
            <StyledMenuRightAligner isBlackTheme={isBlackTheme}>
              <StyledNotification isBlackTheme={isBlackTheme}>
                <img src={NotificationImg} />
              </StyledNotification>
              <div>
                <Link href="/perfil">
                  <StyledProfileLink>
                    <Image src={ProfileImg} />
                  </StyledProfileLink>
                </Link>
              </div>
              <div onClick={doLogout}>Sair</div>
            </StyledMenuRightAligner>
          </Col>
        </Row>
      </Container>
    );
  };

  const renderAnonymousMenu = () => {
    return (
      <Container>
        <Row smJustifyContent="between">
          <Col auto>
            <Link href="/">
              <img src={LogoImg} />
            </Link>
          </Col>
          <Col auto>
            <div onClick={doLogin}>
              <Button theme="clean">Entrar</Button>
              <Button theme="primary">Crie uma conta</Button>
            </div>
          </Col>
        </Row>
      </Container>
    );
  };

  return (
    <StyledHeader isBlackTheme={isBlackTheme}>
      {state.isLogged || isBlackTheme || isHome
        ? renderLoggedMenu()
        : renderAnonymousMenu()}
    </StyledHeader>
  );
};

export default Header;
