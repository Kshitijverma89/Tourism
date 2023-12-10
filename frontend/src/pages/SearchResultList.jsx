import React, {useState} from 'react';
import CommonSection from "../Shared/CommonSection";
import {Container, Row, Col} from "reactstrap";
import {useLocation} from "react-router-dom";
import TourCard from "../Shared/TourCards";
import Newsletter from "../Shared/Newsletter";

const SearchResultList =()=>{

    const location = useLocation();

    const[data] = useState(location.state);

    console.log(data);

    return (
        <>
            <CommonSection title={"Tour Search result"}/>
            <section>
                <Container>
                    <Row>
                        {
                            data.length===0? (
                            <h4 className="text-center"> No tour found</h4>) : ( data?.map(tour=>(<Col lg="3" className="mb-4" key={tour._id}><TourCard tour={tour}/></Col>))
                        )}
                    </Row>
                </Container>
            </section>
            <Newsletter/>
        </>
    )
};

export default SearchResultList;