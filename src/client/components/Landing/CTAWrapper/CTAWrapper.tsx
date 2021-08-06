import React, { FC } from "react";
import styled, { css } from "styled-components";
import { Col, Container, media, Row } from "styled-bootstrap-grid";
import Button from "../../Button";

const Wrapper = styled.div`
  padding: 116px 0;
`;

const Title = styled.div(
  ({ theme: { colors } }) =>
    css`
      background: ${colors.primary.normal};
      padding: 64px;
      border-top-left-radius: 20px;
      border-bottom-left-radius: 20px;

      h3 {
        margin-bottom: 32px;
      }
    `
);

const Media = styled.div(
  ({ theme: { colors } }) =>
    css`
      width: 100%;
      height: 100%;
      border-top-right-radius: 20px;
      border-bottom-right-radius: 20px;
      background: #ebebeb;

      ${media.desktop`
        width: calc(100% + 30px);
        margin-left: -30px;
        padding-right: 30px;
        padding-left: 30px;
      `}
    `
);

const CTAWrapper: FC = () => {
  return (
    <Wrapper>
      <Container>
        <Row>
          <Col md={6}>
            <Title>
              <h3>
                Crie uma conta e aprenda assuntos e tópicos pra desenvolver seus
                estudos.
              </h3>
              <Button theme="clean">Crie uma conta</Button>
            </Title>
          </Col>
          <Col md={6}>
            <Media>hehe</Media>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
};

export default CTAWrapper;
