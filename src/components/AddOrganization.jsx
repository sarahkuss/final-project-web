import { useState } from "react"
import { Button, Form, Modal, Container, Row, Col } from "react-bootstrap"

export default function AddOrganization ({setOrganizations}) {
  const [orgName, setOrgName] = useState("")
  const [missionStatement, setMissionStatement] = useState("")
  const [openModal, setOpenModal] = useState(false)

  const handleOpen = () => setOpenModal(true)
  const handleClose = () => setOpenModal(false)
  
  const handleSubmit = (e) => {
    e.preventDefault()
    fetch("https://final-project-conservation.web.app/organizations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({orgName, missionStatement})
    })
    .then(resp => resp.json())
    .then(data => {
      if(data.message) {
        alert(data.message)
        return
      }
      setOrganizations(data)
      setMissionStatement("")
      setOrgName("")
    })
    .catch(alert)
  }
  
  return(
    <>
    <Container className="bg-danger">
      <Row>
        <Col className="justify-content-flex-end">

    <Button onClick={handleOpen}>Add Organization</Button>
    <Modal show={openModal} onHide={handleClose}>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Organization Name</Form.Label>
          <Form.Control 
            type="text"
            value={orgName}
            required={true}
            placeholder="Enter Organization"
            onChange={e => setOrgName(e.target.value)} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Mission Statement</Form.Label>
          <Form.Control
            type="text"
            value={missionStatement}
            required={true}
            placeholder="Enter Mission Statement"
            onChange={e => setMissionStatement(e.target.value)}/>
        </Form.Group>
        <Button onClick={handleClose} type="submit">Save</Button>
      </Form>

    </Modal>
        </Col>
      </Row>
    </Container>

    </>
  )
}