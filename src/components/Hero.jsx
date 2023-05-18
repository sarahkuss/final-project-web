import { Container, Row, Col } from "react-bootstrap";
import '../styles/hero.css'

export default function Hero () {
  return(
    <>
    <Container className="hero-container" fluid >
      <Row>
        <Col>
         <h1 className="mb-0 pb-0">Connecting you with Conservation</h1>
        </Col>
      </Row>
      {/* <Row>
        <Col>
        <h2></h2>
        </Col>
        <Col></Col>
      </Row> */}
    </Container>
    </>
  )
}