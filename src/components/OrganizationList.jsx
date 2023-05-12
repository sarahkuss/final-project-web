import { useEffect, useState } from "react";
import { Col, Container, Row, Card, Image, Button, Modal, Spinner } from "react-bootstrap";
import DeleteOrganization from "./DeleteOrganization";
import '../styles/organizationList.css'

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
        <Container id="organization">
        <Row>
        {organizations.map((element) => (
            <Col sm={12} md={6} lg={3} key={element._id} className="bg-warning m-2">
              <Card className="m-2 p-2">
                <Image variant= "top" src={element.logo} fluid />
                <Button className="bg-success mb-1" onClick={() => handleOpen(element)}>More Info</Button>
                <DeleteOrganization setOrganizations={setOrganizations} orgId={element._id}/>
              </Card>
            </Col>
          ))}
        </Row>
                <Modal show={openModal} onHide={handleClose} className="backdrop-filter">
                  
                    <Image src={thisOrg?.speciesImage} fluid/>
                    <div className="p-3">
                      <h3 className="text-center">{thisOrg?.orgName}</h3>                                      
                      <p><strong>Mission Statement:</strong> {thisOrg?.missionStatement}</p>                  
                      <p><a href={thisOrg?.website} target="_blank" rel="noreferrer">Website</a></p>
                      {/* <Button onClick={handleClose}>Close</Button> */}
                      {/* <DeleteOrganization setOrganizations={setOrganizations} orgId={thisOrg._id} /> */}
                    </div>
                  
                </Modal>
      </Container>
      }
    
    </>
  );
}
