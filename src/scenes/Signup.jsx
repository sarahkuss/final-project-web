import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Row, Form } from "react-bootstrap";
import ConservationNavbar from "../components/ConservationNavbar";

export default function Signup ({setUser}) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const handleSignup = (e) => {
    e.preventDefault()
    fetch('https://final-project-conservation.web.app/organizations/signup', {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({email, password})
    })
    .then(res => res.json())
    .then(data => {
      if(data.message) {
        alert(data.message)
        return
      }
      setUser(data)
    })
    .catch(alert)
  }

  return (
    <>
    <ConservationNavbar />
    <Container>
      <Row>
        <Form onSubmit={handleSignup}>
          <Form.Group>
            <Form.Label>Email Address</Form.Label>
            <Form.Control 
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control 
              type="password" 
              value={password}
              onChange={e => setPassword(e.target.value)}/>
          </Form.Group>
          <Button onClick={handleSignup}>Sign Up</Button>
        </Form>
      </Row>
    </Container>
    </>
  )
}