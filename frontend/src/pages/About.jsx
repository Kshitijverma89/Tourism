

import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import "../styles/about.css";
import Aboutsection from '../Shared/Aboutsection';



const About = () => {
  return <>
  <Aboutsection title={""} />
  <section>
  
  <Container>
    <Row>
        <Col lg="12">
            
           <div className="container">
            
                <div className='heading'>
                    <h2>About us</h2>
                </div>
                
                <div className='content'>
                    <p>Welcome to our tourism website! We are dedicated to providing unforgettable travel experiences to our customers.
                        Whether you're an adventure seeker, a history buff, or simply looking for a relaxing getaway, 
                        we have the perfect destination for you.
                    </p>
                </div>
                
            </div>
        </Col>
        <Col lg="12">
            <div className="container ">
                <div className='heading'>
                    <h2>Our Mission</h2>
                </div>
                <div className='content'>
                    <p>Our mission is to make travel accessible, enjoyable, and hassle-free.
                        We believe in creating memories that last a lifetime, and we strive to offer exceptional service to make your journey extraordinary.
                    </p>
                </div>
            </div>
        </Col>
        <Col lg="12">
            <div className="container ">
                <div className='heading'>
                    <h2>Our Team</h2>
                </div>
                <div className='content'>
                    <p>Meet the passionate individuals who make our tourism company possible.
                    From travel experts to customer service professionals, our team is committed to making your travel dreams a reality.
                    </p>
                </div>
                
            </div>
        </Col>
    </Row>
  </Container>
  
  </section>
</>
}

export default About;