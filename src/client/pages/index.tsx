import Head from "next/head";
import { Container, Row, Col } from "styled-bootstrap-grid";



export default function Home() {
  return (
    <>
      <Head>
        <title>Uma forma de estudar interativa</title>
        <meta name="description" content="Uma forma de estudar interativa" />
      </Head>
      <main>

        <Container>
          <Row>
            <Col md={12}>
              <h1>Home</h1>
            </Col>
            <Col md={4}>
              Coluna
            </Col>
            <Col md={4}>
              Coluna
            </Col>
            <Col md={4}>
              Coluna
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
}
