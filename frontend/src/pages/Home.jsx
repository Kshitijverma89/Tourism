import React from 'react';
import "../styles/Home.css"
import {Container, Row, Col} from "reactstrap";
import heroImg from "../assets/images/hero-img01.jpg";
import heroImg02 from "../assets/images/hero-img02.jpg";
import heroVideo from "../assets/images/hero-video.mp4";
import worldImg from "../assets/images/world.png";
import experienceImg from "../assets/images/experience.png";
import Subtitle from "../Shared/Subtitles";
import SearchBar from '../Shared/SearchBar';
import ServiceList from '../Services/ServiceList';
import FeaturedTourList from "../Components/FeaturedTourList/Featured-tours";
import MasonryImagesGallery from '../Components/Image-gallery/MasonryImagesGallery';
import Testimonials from '../Components/Testimonial/Testimonial';
import Newsletter from '../Shared/Newsletter';

const Home =()=>{
    return (
        <>
        <section>
            <Container>
                <Row>
                    <Col lg='6'>
                        <div className='hero__content'>
                            <div className="hero__subtitles d-flex align-items-center">
                                <Subtitle subtitle={'Know Before you go'}/>
                                <img src={worldImg} alt="" />
                            </div>
                            <h1>Traveling opens the door to create <span className="highlight">memories</span></h1>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore, ea eveniet. Ad deserunt doloribus accusantium nulla quae sed recusandae maxime, esse incidunt rem dolorem illum delectus deleniti vel magni eos.
                            </p>
                        </div>
                    </Col>
                    <Col lg="2">
                        <div className="hero__img-box">
                            <img src={heroImg} alt=""/>
                        </div>
                    </Col>
                    <Col lg="2">
                        <div className="hero__img-box mt-4">
                            <video src={heroVideo} alt="" controls/>
                        </div>
                    </Col>
                    <Col lg="2">
                        <div className="hero__img-box mt-5">
                            <img src={heroImg02} alt=""/>
                        </div>
                    </Col>
                    <SearchBar/>
                </Row>
            </Container>
            </section>
            <section>
                <Container>
                    <Row>
                        <Col lg='3'>
                            <h5 className="services__subtitle">What we server</h5>
                            <h2 className="services__title">Our Best Services</h2>
                        </Col>
                        <ServiceList/>
                    </Row>
                </Container>
        </section>
        
        <section>
            <Container>
                <Row>
                    <Col lg="12" className="mb-5">
                        <Subtitle subtitle={"Explore"}/>
                        <h2 className="featured__tour-title">Our feature tours</h2>
                    </Col>
                    <FeaturedTourList/>
                </Row>
            </Container>
        </section>

        {/******************* Featured tour section end**************/}
        {/******************* Experience section start**************/}
        <section>
            <Container>
                <Row>
                    <Col lg="6">
                        <div className="experience_content">
                            <Subtitle subtitle={'Experience'}/>
                            <h2>With all our experience <br /> We will server you</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, quibusdam.
                            <br />
                            Lorem ipsum dolor sit amet.
                            </p>
                        </div>

                        <div className="counter__wrapper d-flex align-items-center gap-5">
                            <div className="counter__box">
                                <span>12k+</span>
                                <h6>Successful Trips</h6>
                            </div>
                            <div className="counter__box">
                                <span>2k+</span>
                                <h6>Robust clinetele</h6>
                            </div>
                            <div className="counter__box">
                                <span>15</span>
                                <h6>Years experience</h6>
                            </div>
                        </div>
                    </Col>
                    <Col lg="6">
                        <div className="experience__img">
                            <img src={experienceImg} alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
        {/******************* Experience section end**************/}
        
        {/******************* Gallery section start**************/}
        <section>
            <Container>
                <Row>
                    <Col lg="12">
                        <Subtitle subtitle={'Gallery'}></Subtitle>
                        <h2 className="gallery__title">Visit our customer tour gallery</h2>
                    </Col>
                    <Col lg="12">
                        <MasonryImagesGallery></MasonryImagesGallery>
                    </Col>
                </Row>
            </Container>
        </section>
        {/******************* Gallery section end**************/}

        {/******************* testimonial section start**************/}
        <section>
            <Container>
                <Row>
                    <Col lg="12">
                        <Subtitle subtitle={'Customers Love'}/>
                        <h2 className="testimonial__title">What our customers say about us</h2>
                    </Col>
                    <Col lg="12">
                        <Testimonials/>
                    </Col>
                </Row>
            </Container>
        </section>
        {/******************* testimonial section end**************/}
        <Newsletter/>




        </>
    );
};

export default Home;