import { Button, Container, Row, Col } from "react-bootstrap"
import { Trash3Fill } from "react-bootstrap-icons"
import '../styles/deleteButton.css'
import { useNavigate } from "react-router-dom"


export default function DeleteOrganization ({setOrganizations, orgId, user}) {
  const navigate = useNavigate()
  // const token = localStorage.getItem("token")
  
  const handleDelete = (e) => {
    if(!user) {
      navigate('/login')
    } else {

      e.preventDefault()
      fetch(`https://final-project-conservation.web.app/organizations/${orgId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "check": localStorage.getItem("check")
          // "Authorization": token
        }
      })
      .then(res => res.json())
      .then(data => {
        if(data.message) {
          alert(data.message)
          return
        }
        setOrganizations(data)})
      .catch(alert)
    }
    }
  
  return (
    <>
    {/* {!user ? (
      <></>
    ): ( */}
      <Container>
        <Row>
          <Col id="trash-button">
    <Button  onClick={handleDelete}>
      <Trash3Fill />
    </Button>
          </Col>
        </Row>
      </Container>
    {/* )} */}
    </>
  )
}