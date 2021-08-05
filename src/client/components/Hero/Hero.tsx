import React, { FC } from "react";
import styled from "styled-components";
import { Container, Row, Col } from "styled-bootstrap-grid";

const StyledHero = styled.div``;

const StyledTitle = styled.h1``;

const StyledDescription = styled.p``;

const StyledCard = styled.div`
  width: 300px;
  height: 300px;
`;

const Hero: FC = () => {
  return (
    <StyledHero>
      <Container>
        <Row>
          <Col>
            <StyledTitle>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              ultrices suscipit neque, in egestas tellus varius eu. Integer
              consequat ac orci at semper. Fusce lacinia enim et elementum
              tristique
            </StyledTitle>
            <StyledDescription>
              Cras quis commodo turpis. Ut rhoncus, dolor sed suscipit
              vulputate, turpis lorem euismod nulla, id eleifend lorem augue nec
              felis. In a aliquet leo. Aliquam interdum purus id ipsum euismod
              blandit. Vivamus luctus tincidunt felis, sit amet lobortis urna
              eleifend in. Mauris id erat at mauris dictum finibus ut in libero.
              Sed nec volutpat nisl. Vestibulum felis mi, fermentum ac gravida
              nec, convallis ut odio. Cras eros turpis, ultricies sit amet
              gravida vel, volutpat eget ligula. Nunc vitae semper justo, a
              malesuada urna. Quisque egestas vehicula sem in ornare. Maecenas
              vulputate pretium orci, quis tempor ligula feugiat sit amet.
              Praesent venenatis ex at eros cursus, id porttitor risus laoreet.
            </StyledDescription>
          </Col>
          <Col>
            <StyledCard />
          </Col>
        </Row>
      </Container>
    </StyledHero>
  );
};

export default Hero;
