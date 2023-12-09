import React from 'react'
import '../styles/tour-details.css'
import {  Container, Row, Col, Form, ListGroup } from 'reactstrap'
import {userParams} from 'react-router-dom'
import tourDate from '../assets/data/tours'

const ToursDetails = () => {

  const {id} = useParams()
  
   
  const tour = tourData.find(tour => tour.id == id)
  
  
  const {photo, title, desc, price, reviews, city, distance, maxGroupSize} = tour
 
 
  return <>
  
  <section>
    <Container>
      <Row>
        <Col lg='8'>
          <div className="tour__content">
            <img src={photo} alt="" />

            <div className="tour__info">
              <h2>{tittle}</h2>
              <div className="d-flex align-item-center" gap-5 > </div>
              <span className="d-flex align-items-center gap-1">
          <i class="ri-star-s-fill"></i>
          {calculateAvgRating == 0 ? null : avgRating}
          {totalRating ==}
              </span>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
  </>
};

export default ToursDetails