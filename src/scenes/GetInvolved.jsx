import { Col, Container, Row } from "react-bootstrap";
import '../styles/getInvolved.css'


export default function GetInvolved () {
  return (
    <>
    <Container className="getinvolved-container" fluid>
      <Row>
        <h1 className="text-center">Ways to Get Involved</h1>
        <Col className="ways-col">
          <h3>There are several ways you can make a difference:</h3>
          <p><strong>1. Join a local conservation organization:</strong> There are many conservation groups at the local, regional, and national levels that you can join. These organizations work towards protecting and restoring natural habitats, educating the public on environmental issues, and advocating for policies that support conservation efforts. Some examples include the Sierra Club, The Nature Conservancy, and the World Wildlife Fund.</p>
          <p><strong>2. Volunteer:</strong> Many conservation organizations offer volunteer opportunities that allow you to get hands-on experience in environmental conservation. You can participate in activities such as planting trees, cleaning up litter, and monitoring wildlife populations. Volunteering not only helps you gain valuable skills and knowledge, but also helps you connect with like-minded individuals who share your passion for conservation.</p>
          <p><strong>3. Reduce your ecological footprint:</strong> One of the simplest ways to get involved in conservation is by reducing your own ecological footprint. This can be done by using energy-efficient appliances, conserving water, reducing your use of plastic, and recycling. By making small changes in your daily life, you can help protect the environment and reduce the impact of human activities on natural resources.</p>
          <p><strong>4. Support conservation initiatives:</strong> There are many conservation initiatives that rely on public support to make a difference. You can support these initiatives by donating money or time, signing petitions, or attending events that promote conservation efforts. You can also spread awareness by sharing information on social media and encouraging others to get involved.</p>
          <p><strong>5. Educate yourself: </strong> It's important to stay informed about environmental issues and conservation efforts. You can do this by reading books, attending seminars and workshops, or watching documentaries on conservation. This knowledge will help you understand the challenges facing the environment and empower you to take action.</p>

        </Col>
      </Row>

      <Row>
        <Col className="home-col">
          <h3>Ways to help at home:</h3>
          <p><strong>1. Conserve Water:</strong> Conserving water is essential to reducing your ecological footprint. Simple measures like fixing leaking taps, taking shorter showers, and installing low-flow showerheads and toilets can significantly reduce water consumption.</p>
          <p><strong>2. Use energy-efficient appliances:</strong> Use energy-efficient appliances such as LED light bulbs, smart thermostats, and Energy Star-rated appliances. These appliances use less energy and can significantly reduce your electricity bills.</p>
          <p><strong>3. Reduce, reuse, recycle:</strong> Waste generation is a significant contributor to environmental pollution. Reduce the amount of waste you generate by using reusable bags, water bottles, and containers. Recycle paper, glass, metal, and plastic waste.</p>
          <p><strong>4. Reduce your carbon footprint:</strong> Your carbon footprint is the amount of greenhouse gas emissions released by your activities. You can reduce your carbon footprint by using public transport, cycling, or walking instead of driving. When driving is necessary, choose an energy-efficient vehicle or carpool with friends and coworkers.</p>
          <p><strong>5. Choose eco-friendly products:</strong> Choose eco-friendly products such as organic food, natural cleaners, and personal care products. These products are safer for you and the environment.</p>
          <p><strong>6. Support sustainable practices:</strong>  Support sustainable practices by choosing products that are produced and sourced sustainably. This means products that are produced in a way that minimizes environmental impact and preserves natural resources.</p>
          <p><strong>7. Plant trees and support reforestation efforts:</strong> Trees are essential to the environment as they absorb carbon dioxide from the atmosphere and produce oxygen. Planting trees in your community or supporting reforestation efforts can significantly reduce your ecological footprint.</p>
        </Col>
      </Row>
    </Container>
    </>
  )
}