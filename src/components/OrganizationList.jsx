import { useEffect, useState } from "react";
import { Col, Container, Row, Card, Image, Button, Modal, Spinner } from "react-bootstrap";
import DeleteOrganization from "./DeleteOrganization";
import FavoriteButton from "../scenes/favoriteButton";

import '../styles/organizationList.css'

export default function OrganizationList({ organizations, setOrganizations, user, setUser }) {
  const [thisOrg, setThisOrg] = useState()
  const [openModal, setOpenModal] = useState(false)

  const handleOpen = (element) => {
    setOpenModal(true)
    setThisOrg(element) }
  const handleClose = () => setOpenModal(false)

  useEffect(() => {
    fetch("https://final-project-conservation.web.app/organizations")
      .then((resp) => resp.json())
      .then(setOrganizations)
      .catch(alert);
  }, []);


  return (
    <>
    
      {!organizations
        ? <Spinner animation="border" variant="success"> <span className="visually-hidden">Loading...</span></Spinner>
        :
        <Container id="organization" fluid>
        <Row>
        {organizations.map((element) => (
            <Col sm={11} md={6} lg={3} key={element._id} className="org-col">
              <Card className="org-card m-2 p-2">
                <Image variant= "top" src={element.logo} fluid />
                <Button className="moreinfo-button mb-2 mt-2" onClick={() => handleOpen(element)}><strong>More Info</strong></Button>
                <Container className="button-container">
                <Row className="button-row">
                  {/* <Col>
                    <DeleteOrganization setOrganizations={setOrganizations} user={user} orgId={element._id}/>
                  </Col> */}
                  <Col>
                    <FavoriteButton user={user} orgId={element._id} setUser={setUser} />
                  </Col>
                </Row>
                </Container>
              </Card>
            </Col>
          ))}
        </Row>
                <Modal show={openModal} onHide={handleClose} className="modal">
                  
                    <Image src={thisOrg?.speciesImage} fluid/>
                    <div className="p-3">
                      <h3 className="text-center">{thisOrg?.orgName}</h3>                                      
                      <p><strong>Mission Statement:</strong> {thisOrg?.missionStatement}</p>                  
                      <p className="text-center"><a href={thisOrg?.website} target="_blank" rel="noreferrer">Website</a></p>
                      {/* <Button onClick={handleClose}>Close</Button> */}
                      {/* <DeleteOrganization setOrganizations={setOrganizations} orgId={thisOrg._id} user={user} /> */}
                    </div>
                  
                </Modal>
      </Container>
      }
    
    </>
  );
}
