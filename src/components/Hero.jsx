import { Container, Row, Col } from "react-bootstrap";
import '../styles/hero.css'

export default function Hero () {
  const videoUri = process.env.PUBLIC_URL + '/images/CCvideo.mp4';
  return(
    <>
    <Container fluid >
      <Row className="d-flex justify-content-center">
        <Col xs={11}
            md={{offset:6, span:5}}
            lg={{offset:7, span:4}}>.
          
            <div className="video-container">
                <video autoPlay muted loop>
                  <source src={videoUri} type="video/mp4" /> 
                </video>
            </div>
          
          <div className="video-content">
            <h1 className="mb-0 pb-0">Connecting you with Conservation</h1>
          </div>
        
        </Col>
      </Row>
    </Container>
    </>
  )
}