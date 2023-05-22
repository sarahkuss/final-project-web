import { Container, Row, Col } from "react-bootstrap";
import { Github, Linkedin } from "react-bootstrap-icons";

import '../styles/footer.css'

export default function Footer () {
  const currentYear = new Date().getFullYear()
  const githubUrl = "https://www.github.com/sarahkuss"
  const linkedInUrl = "https://www.linkedin.com/in/sarah-kuss/"
  return (
    <footer>
    <Container className="footer-container" fluid>
      <Row>
        <Col className="text-center">
          <p>
          <strong>&copy;{currentYear} Sarah Kuss</strong> &nbsp;
          <a href={githubUrl} target="_blank" rel="noreferrer"><Github /></a>&nbsp; &nbsp;
          <a href={linkedInUrl} target="_blank" rel="noreferrer"><Linkedin /></a>
          </p>
        </Col>
      </Row>
    </Container>
    </footer>
  )
}