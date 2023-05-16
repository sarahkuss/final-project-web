import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Row, Form } from "react-bootstrap";
import ConservationNavbar from "../components/ConservationNavbar";

export default function Signup ({setUser}) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  const navigate = useNavigate()

  const handleSignup = (e) => {
    e.preventDefault()
    fetch('https://final-project-conservation.web.app/signup', {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({email, password, firstName, lastName})
    })
    .then(res => res.json())
    .then(data => {
      if(data.message) {
        alert(data.message)
        return
      }
      setUser(data)
      navigate('/')
      
    })
    .catch(error => alert(`Error: ${error.message}`))
  }

  return (
    <>
    <Container>
      <Row className="justify-content-center m-2" lg={2}>
        <Form onSubmit={handleSignup}>
          <Form.Group>
            <Form.Label>First Name</Form.Label>
            <Form.Control 
              type="text"
              placeholder="Enter First Name"
              value={firstName}
              onChange={e => setFirstName(e.target.value)}/>
          </Form.Group>
          <Form.Group>
            <Form.Label>Last Name</Form.Label>
            <Form.Control 
              type="text"
              placeholder="Enter Last Name"
              value={lastName}
              onChange={e => setLastName(e.target.value)}/>
          </Form.Group>
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
          <Button onClick={handleSignup} className="mt-2">Sign Up</Button>
        </Form>
      </Row>
    </Container>
    </>
  )
}