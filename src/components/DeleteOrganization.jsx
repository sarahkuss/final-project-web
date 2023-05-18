import { Button, Container, Row, Col } from "react-bootstrap"
import { Trash3Fill } from "react-bootstrap-icons"
import '../styles/deleteButton.css'


export default function DeleteOrganization ({setOrganizations, orgId, user}) {
  
  const handleDelete = (e) => {
    e.preventDefault()
    fetch(`https://final-project-conservation.web.app/organizations/${orgId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(res => res.json())
    .then(setOrganizations)
    .catch(alert)
  }
  
  return (
    <>
    {!user ? (
      <></>
    ): (
      <Container>
        <Row>
          <Col id="trash-button">
    <Button  onClick={handleDelete}>
      <Trash3Fill />
    </Button>
          </Col>
        </Row>
      </Container>
    )}
    </>
  )
}