import React from 'react'
import './about-section.css'
import { Container, Row , Col} from 'reactstrap';

const AboutSection = ({title}) => {
  return (
    <section className="about_section">
        <Container>
            <Row>
                <Col lg="12">
                    <h1>{title}</h1>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default AboutSection;