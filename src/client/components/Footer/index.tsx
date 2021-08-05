import React, { FC } from "react";
import Link from "next/link";
import styled from "styled-components";
import { Col, Container, Row } from "styled-bootstrap-grid";

const FooterWrapper = styled.div(({theme: { colors }}) => `
  background-color: #B7B7B7;
  padding: 100px 0 40px; 
`);

const LogoWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 70px;
`;  

const Header: FC = () => {
  return (
    <FooterWrapper>
      <Container>
        <Row>
          <Col md={3}>
            <h5>Title</h5>
            <p>Ipsum excepteur incididunt ea commodo nisi. Aute nulla pariatur deserunt elit mollit laboris magna cillum occaecat incididunt laborum consequat pariatur veniam. Amet laborum et in reprehenderit et.</p>
          </Col>
          <Col md={3}>
            <h5>Title</h5>
            <p>Ipsum excepteur incididunt ea commodo nisi. Aute nulla pariatur deserunt elit mollit laboris magna cillum occaecat incididunt laborum consequat pariatur veniam. Amet laborum et in reprehenderit et.</p>
          </Col>
          <Col md={3}>
            <h5>Title</h5>
            <p>Ipsum excepteur incididunt ea commodo nisi. Aute nulla pariatur deserunt elit mollit laboris magna cillum occaecat incididunt laborum consequat pariatur veniam. Amet laborum et in reprehenderit et.</p>
          </Col>
          <Col md={3}>
            <h5>Title</h5>
            <p>Ipsum excepteur incididunt ea commodo nisi. Aute nulla pariatur deserunt elit mollit laboris magna cillum occaecat incididunt laborum consequat pariatur veniam. Amet laborum et in reprehenderit et.</p>
          </Col>
          <Col col={12} alignSelf="end">
            <LogoWrapper><a href="http://descomplica.com.br" target="_blank" rel="noreferrer">Descomplica svg</a></LogoWrapper>
          </Col>
        </Row>
      </Container>
    </FooterWrapper>
  );
};

export default Header;
