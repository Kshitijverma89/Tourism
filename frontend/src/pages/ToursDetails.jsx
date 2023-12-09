import React, {useRef, useState} from 'react' ;
import '../styles/tour-details.css' ;
import {  Container, Row, Col, Form, ListGroup, ListGroupItemHeading } from 'reactstrap';
import {userParams} from 'react-router-dom';
import tourDate from '../assets/data/tours';
import calculateAvgRating from './..utils/avgRating';
import avatar from "../assets/images/avatar.jpg";

const ToursDetails = () => {
  const {id} = useParams()
  const reviewMsgRef = useRef('')
  const [tourRating, setTourRating]=useState(null)
   
  const tour = tourData.find(tour => tour.id == id)
  
  
  const {
     photo,
     title, 
     desc, 
     price,
     address,
      reviews,
      city, 
      distance,
       maxGroupSize
  } = tour;
 
  const {totalRating, avgRating}  = calculateAvgRating(review)

  const options = {day: 'numeric', month: 'long' , year:'numeric'}

  const submitHandler = e=>{
    e.prevemtDefault()
    const reviewText = reviewMsgRef.current.value;
  };

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
          <i class="ri-star-s-fill" 
            style={{'color' : "var(--secondary-color)"}} 
            ></i>
          {calculateAvgRating == 0 ? null : avgRating}
          {totalRating == 0 ? (
            "Not rated"
            )  : (
              <span>({reviews ?.lwngth})</span>
            )} 
              </span>
                <span>
                  <i> class="ri-map-pin-user-fill"</i> {address}
                </span>
            </div>

            <div className="tour__extra-detail">
              <span>
                <i class="ri-map-pin-2-line"></i> {City} 
                </span>
              <span>
                <i class="ri-money-dollar-circle-line"></i> ${price} per person 
                </span>
              <span>
              <span>
                <i class="ri-map-pin-time--line"></i> ${distance} k/m
                </span>
              <span>
                <i class="ri-group-line"></i> {maxGroupSize}
                 </span>
            </div>
            <h5>Description</h5>
            <p>{desc}</p>
          </div>
            {/* ======= tour review section ======= */}
             <div className="tour_reviews mt-4">
              <h4>Reviews ({reviews?. length} review)</h4>

              <form onSubmit = {submitHandler}>
                <div>className="d-flex align-items-center gap-3 mb-4 rating__group"
                  <span onClick={()=> setTourRating(1) } >
                   1 <i class="ri-star-s-fill"></i>
                  </span>
                  <span onClick={()=> setTourRating(2) } >
                   2 <i class="ri-star-s-fill"></i>
                    </span>
                    <span onClick={()=> setTourRating(3) } >
                   3 <i class="ri-star-s-fill"></i>
                    </span>
                    <span onClick={()=> setTourRating(4) } >
                   4 <i class="ri-star-s-fill"></i>
                    </span>
                    <span onClick={()=> setTourRating(5) } >
                    5 <i class="ri-star-s-fill"></i>
                    </span>
                </div>
                <div className="review__input">
                  <input type="text" ref={reviewMsgRef} placeholder="share your thoughts" required />
                  <button className="btn primary__btn text-white" type="sumit">

                  </button>
                </div>
              </form>
              <ListGroup className="user__reviews">
                {
                  reviews?. map(review=>(
                    <div className="review__item">
                      <img src={avatar} alt="" />
                      <div className="w-100">
                        <div className="d-flex align-item-center justify-content-between">
                          <div>
                            <h5>muhib</h5>
                            <p>
                              {new Data("01-18-2023") .tolocaleDataString("en-US" , options) 
                              }
                            </p>
                          </div>
                          <span className="d-flex align-item-center">
                            5<i class="ri-star-s-fill"></i>
                          </span>
                        </div>

                        <h6>Amazing tour</h6>
                      </div>
                    </div>
                  ))
                }
              </ListGroup>
             </div>
            {/* ======= tour review section end ======= */}

        </Col>
      </Row>
    </Container>
  </section>
  </>
};

export default ToursDetails