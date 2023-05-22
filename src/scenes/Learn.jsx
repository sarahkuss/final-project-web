import { Container, Row, Col } from 'react-bootstrap'
import '../styles/learn.css'

export default function Learn () {
  return (
    <>
    <Container className='learn-container' fluid>
      <section className='content-section' fluid>
      <Row className='learn-row'>
      <h1 className='text-center'>Learn More</h1>
        <Col className='aboutCC-col'>
          <h2>About Conservation Connect:</h2>
          <p>This website's goal is to connect people to lesser-known conservation organizations.</p>
          <p> Many people want to get involved, but most don't know how; that's where Conservation Connect comes in. By showcasing these organizations, the hope is to inspire people to volunteer or donate, and help these organizations that are doing great work.</p>
        </Col>
      </Row>
      <Row>
        <Col className='whatis-col'>
          <h2>What is Conservation?</h2>
          <p>Animal conservation is the practice of protecting and preserving animals and their habitats. It is an important aspect of environmental conservation as it helps to maintain the balance of nature and ensures the survival of endangered species. Animal conservation is essential for the well-being of our planet, and it is important that we understand its significance.</p>
        </Col>
      </Row>
      <Row>
        <Col className='why-col'>
          <h2>Why is Conservation important?</h2>
          <p>The world is home to millions of animal species, each playing a unique role in the ecosystem. These species are interconnected, and the extinction of one species can have a ripple effect on the entire ecosystem. Animal conservation helps to maintain the balance of nature by protecting the biodiversity of our planet. It is also important for the following reasons:</p>
          <p><strong>1. Preservation of Natural Resources:</strong> Animals play a vital role in the ecosystem by pollinating plants, dispersing seeds, and controlling pests. Without them, our natural resources would be affected, leading to a decline in crop production and an increase in disease.</p>
          <p><strong>2. Economic Benefits:</strong> Animal conservation helps to support local economies through ecotourism, which provides employment opportunities and generates income for local communities.</p>
          <p><strong>3. Medicinal Value:</strong> Many animals and plants have medicinal value, and their loss would be a great loss to the medical industry.</p>
          <p><strong>4. Ethical Responsibility:</strong> As human beings, we have a moral obligation to protect and conserve animals and their habitats.</p>
        </Col>
      </Row>
      <Row>
        <Col className='how-col'>
          <h2>How can we conserve animals?</h2>
          <p>There are several ways in which we can conserve animals and their habitats. Some of them are:</p>
          <p><strong>1. Protection of Habitats:</strong> The first step in animal conservation is the protection of their natural habitats. This includes the preservation of forests, wetlands, and other ecosystems.</p>
          <p><strong>2. Wildlife Management:</strong> Wildlife management practices such as controlled hunting, habitat restoration, and captive breeding can help to protect endangered species and prevent their extinction.</p>
          <p><strong>3. Education and Awareness:</strong> Educating people about the importance of animal conservation and raising awareness about endangered species can help to promote conservation efforts.</p> 
          <p><strong>4. Sustainable Development:</strong> Sustainable development practices such as eco-friendly tourism, use of renewable energy, and reduction of waste can help to minimize the impact of human activities on the environment.</p>
          <p><strong>5. Support for Conservation Organizations:</strong> Supporting conservation organizations financially or through volunteer work can help to fund conservation projects and promote animal conservation efforts.</p>
        </Col>
      </Row>
        </section>
    </Container>
    </>
  )
}