import { useEffect, useState } from "react";
import { Col, Container, Row, Card, Image, Button, Modal } from "react-bootstrap";

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
        ? <h1>Loading...</h1>
        :
      <Container fluid>
        <Row>
          {organizations.map((element) => (
            <Col sm={12} md={6} lg={4} key={element._id}>
              <Card className="mb-3">
                <Image src={element.logo} style={{height: 300, width:400}}/>
                <Button className="bg-success" onClick={() => handleOpen(element)}>More Info</Button>
              </Card>
            </Col>
          ))}
        </Row>
                <Modal show={openModal} onHide={handleClose}>
                  <Modal.Header>
                    <Image src={thisOrg?.speciesImage} fluid/>
                  </Modal.Header>
                  <Modal.Title className="text-center">{thisOrg?.name}</Modal.Title>
                  <Modal.Body>{thisOrg?.about}</Modal.Body>
                  <Modal.Footer>
                    <Button onClick={handleClose}>Close</Button>
                  </Modal.Footer>
                </Modal>
      </Container>
      }
    
    </>
  );
}
