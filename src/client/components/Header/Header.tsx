import React, { FC, useState } from "react";
import styled from "styled-components";
import { Col, Container, Row } from "styled-bootstrap-grid";
import Link from "next/link";
import Image from "next/image";
import LogoImg from "../../public/static/logo.svg";
import Button from "../Button/Button";

const StyledHeader = styled.header`
  padding: 26px 0;
`;

const StyledMenuAligner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Header: FC = () => {
  const [isLogged, setIsLogged] = useState(false);

  const doLogin = () => {
    setIsLogged(!isLogged);
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
                  <Button>Pagina Inicial</Button>
                </a>
              </Link>
              <div>Criar</div>
            </StyledMenuAligner>
          </Col>
          <Col auto>
            <input type="text" placeholder="Busque aqui" />
          </Col>
          <Col auto>
            <div>Notificações</div>
            <div>
              <Link href="/perfil">
                <a>Perfil</a>
              </Link>
            </div>
            <div onClick={doLogin}>Sair</div>
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
      {isLogged ? renderLoggedMenu() : renderAnonymousMenu()}
    </StyledHeader>
  );
};

export default Header;
