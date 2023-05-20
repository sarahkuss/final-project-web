import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Container, Form, Row, Col } from "react-bootstrap";
import '../styles/login.css'



export default function Login ({user, setUser}) {
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
      localStorage.setItem("user", JSON.stringify(user))
      navigate('/')
    })
    .catch(error => alert(`Error: ${error.message}`))
  }

  return (
    <>
    <Container className="login-container" fluid>
      <Row lg={2} md={2} className="form-row ">
        <Col className="form-col">
          <h2>Login</h2>
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
            <Button onClick={handleLogin} className="login-button">Submit</Button>
          </Form>
          <br /><p>Not a member? <Link to={'/signup'}>Signup!</Link></p>
        </Col>
      </Row>
    </Container>
    </>
  )
}