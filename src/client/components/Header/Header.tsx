import React, { FC, useContext, useState } from "react";
import styled from "styled-components";
import { Col, Container, Row } from "styled-bootstrap-grid";
import Link from "next/link";
import Image from "next/image";
import LogoImg from "../../public/static/logo.svg";
import NotificationImg from "../../public/static/notification.png";
import ProfileImg from "../../public/static/paulinha.png";
import Button from "../Button/Button";
import { Context } from "../../context/Store";

const StyledHeader = styled.header`
  padding: 26px 0;
  position: sticky;
  top: 0;
  z-index: 1;
`;

const StyledMenuAligner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledMenuRightAligner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
`;

const StyledNotification = styled.div`
  border-radius: 25px;
  padding: 8px;
  background: #ffffff;
  border: 1px solid #e5e6e7;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const StyledProfileLink = styled.a``;

const Header: FC = () => {
  const [state, dispatch] = useContext(Context);

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
              <Image src={LogoImg} />
              <Link href="/">
                <a>
                  <Button theme="clean" noHover>
                    Pagina Inicial
                  </Button>
                </a>
              </Link>
              <div>Criar</div>
            </StyledMenuAligner>
          </Col>
          <Col auto>
            <input type="text" placeholder="Busque aqui" />
          </Col>
          <Col auto>
            <StyledMenuRightAligner>
              <StyledNotification>
                <Image src={NotificationImg} />
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
              <Image src={LogoImg} />
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
    <StyledHeader>
      {state.isLogged ? renderLoggedMenu() : renderAnonymousMenu()}
    </StyledHeader>
  );
};

export default Header;
