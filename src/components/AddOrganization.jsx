import { useState } from "react"
import { Button, Form, Modal, Container, Row, Col } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import '../styles/addOrg.css'

export default function AddOrganization ({setOrganizations, user}) {
  const [orgName, setOrgName] = useState("")
  const [missionStatement, setMissionStatement] = useState("")
  const [logo, setLogo] = useState("")
  const [website, setWebsite] = useState("")
  const [speciesImage, setSpeciesImage] = useState("")
  const [openModal, setOpenModal] = useState(false)

  const handleOpen = () => setOpenModal(true)
  const handleClose = () => setOpenModal(false)
  
  const navigate = useNavigate()
  
  const handleSubmit = (e) => {
    e.preventDefault()
    fetch("https://final-project-conservation.web.app/organizations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({orgName, missionStatement, logo, website, speciesImage})
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
      setLogo("")
      setWebsite("")
      setSpeciesImage("")
      handleClose()
    })
    .catch(alert)
  }
  
  return(
    <>
    <Container fluid className="add-container">
      <Row className="p-3">
        <Col xs={11} md={6} className="organizations-text text-center text-md-start">Organizations<span className="d-none d-md-inline">:</span></Col>
        <Col xs={11} md={6}  className="add-button-col  text-center  text-md-end">
          {!user ? (
            
            <>
            {/* <h2><Link to={'/login'}>Add Organization</Link></h2> */}
            <Button className="notuser-button p-2" size="lg"><Link to={'/login'}>Add Organization</Link></Button>
    
            
            
            </>
          ) : (
            <>
            <Button className="user-button p-2" size="lg" onClick={handleOpen}>Add Organization</Button>
          <Modal className="add-modal" show={openModal} onHide={handleClose}>
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
                <Form.Label>Logo</Form.Label>
                <Form.Control 
                  type="text"
                  value={logo}
                  required={true}
                  placeholder="Enter image link to logo"
                  onChange={e => setLogo(e.target.value)} />
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
              <Form.Group>
                <Form.Label>Website</Form.Label>
                <Form.Control
                  type="text"
                  value={website}
                  required={true}
                  placeholder="Enter link to website"
                  onChange={e => setWebsite(e.target.value)}/>
              </Form.Group>
              <Form.Group>
                <Form.Label>Animal Image</Form.Label>
                <Form.Control 
                  type="text"
                  value={speciesImage}
                  required={true}
                  placeholder="Enter image link to animal"
                  onChange={e => setSpeciesImage(e.target.value)} />
              </Form.Group>
              <Button onSubmit={handleClose} type="submit">Save</Button>
            </Form>

          </Modal>
            </>
            )}
        </Col>
      </Row>
    </Container>

    </>
  )
}