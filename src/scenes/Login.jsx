import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Form, Row, Col } from "react-bootstrap";
import ConservationNavbar from "../components/ConservationNavbar";


export default function Login ({setUser}) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()
    fetch('https://final-project-conservation.web.app/login', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({email, password})
    })
    .then(res => res.json())
    .then(data => {
      if(data.message) {
        alert(data.message)
        return
      }
      setUser(data.user)
      localStorage.setItem("token", data.token)
      navigate('/')
    })
    .catch(error => alert(`Error: ${error.message}`))
  }

  return (
    <>
    <ConservationNavbar />
    <Container>
      <Row lg={2} className="justify-content-center m-3">
          <Form onSubmit={handleLogin}>
            <Form.Group>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={e => setEmail(e.target.value)} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control 
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={e => setPassword(e.target.value)}/>
            </Form.Group>
            <Button onClick={handleLogin} className="mt-2">Submit</Button>
          </Form>
      </Row>
    </Container>
    </>
  )
}