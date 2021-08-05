import React, { FC, useState } from "react";
import styled from "styled-components";
import { Col, Container, Row } from "styled-bootstrap-grid";

const StyledHeader = styled.header``;

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
            <div>Logo</div>
            <div>Pagina Inicial</div>
            <div>Criar</div>
          </Col>
          <Col auto>
            <input type="text" placeholder="Busque aqui" />
          </Col>
          <Col auto>
            <div>Notificações</div>
            <div>Perfil</div>
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
          <Col auto>Logo</Col>
          <Col auto>
            <div onClick={doLogin}>SignIn</div>
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
