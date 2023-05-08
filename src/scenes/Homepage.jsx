import { useEffect, useState } from "react";
import { Col, Container, Row, Card, Image, Button, Modal } from "react-bootstrap";

export default function Homepage({ organizations, setOrganizations }) {
  const [selectedOrg, setSelectedOrg] = useState(null)
  const [org, setOrg] = useState(false)

  const handleOrg = () => setOrg(true)
  const handleClose = () => setOrg(false)

  useEffect(() => {
    fetch("https://final-project-conservation.web.app/organizations")
      .then((resp) => resp.json())
      .then(setOrganizations)
      .catch(alert);
  }, []);

  return (
    <>
    <div>
      {!organizations
        ? <h1>Loading...</h1>
        :
      <Container fluid>
        <Row>
          {organizations.map((element) => (
            <Col sm={12} key={element._id}>
              <Card>
                <Image src={element.logo} />
                <h2 className="text-center">{element.name}</h2>
                <Button onClick={() => {setSelectedOrg(element); handleOrg(true)}}>More Info</Button>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      }

      {selectedOrg && (
        <Modal org={org} size="xl">
          <Modal.Header>
            <Modal.Title>{selectedOrg.name}</Modal.Title>
          </Modal.Header>

        </Modal>
      )}
    </div>
    </>
  );
}
