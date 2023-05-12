import { useEffect, useState } from "react";
import { Col, Container, Row, Card, Image, Button, Modal, Spinner } from "react-bootstrap";
import DeleteOrganization from "./DeleteOrganization";

export default function OrganizationList({ organizations, setOrganizations }) {
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
        <Container fluid>
        <Row>
        {organizations.map((element) => (
            <Col sm={12} md={6} lg={4} key={element._id}>
              <Card className="mb-3">
                <Card.Img variant= "top" src={element.logo} style={{height: 300, width:360}}/>
                <Button className="bg-success" onClick={() => handleOpen(element)}>More Info</Button>
                <DeleteOrganization setOrganizations={setOrganizations} orgId={element._id}/>
              </Card>
            </Col>
          ))}
        </Row>
                <Modal show={openModal} onHide={handleClose}>
                  <Modal.Header>
                    <Image src={thisOrg?.speciesImage} fluid/>
                  </Modal.Header>
                  <Modal.Title className="text-center">{thisOrg?.orgName}</Modal.Title>
                  <Modal.Body>
                    <h2>Mission Statement:</h2>
                    {thisOrg?.missionStatement}</Modal.Body>
                    <Modal.Body>
                      <a href={thisOrg?.website} target="_blank" rel="noreferrer">Website</a></Modal.Body>
                  <Modal.Footer>
                    <Button onClick={handleClose}>Close</Button>
                  </Modal.Footer>
                </Modal>
      </Container>
      }
    
    </>
  );
}
