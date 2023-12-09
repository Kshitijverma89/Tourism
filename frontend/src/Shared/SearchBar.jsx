import React from "react";
import { useRef } from "react";
import { Col, Form, FormGroup } from "reactstrap";
import "./search_bar.css";

const SearchBar = () => {
   
    const locationRef = useRef("");
    const distanceRef = useRef(0);
    const maxGroupSizeRef = useRef(0);

    const searchHandler = () => {
        const location = locationRef.current.value;
        const distance = distanceRef.current.value;
        const maxGroupSize = maxGroupSizeRef.current.value;

        if (location === '' || distance === '' || maxGroupSize === '') {
            return alert("All fields ae required");
        }
    }
    return (
        <>
            <Col lg='12'>
                <div className="search__bar">
                    <Form className="d-flex align-items-center gap-4">
                        <FormGroup className="d-flex gap-3 form__group form__group-fast">
                            <span><i class="ri-map-pin-line"></i></span>
                            <div>
                                <h6>Location</h6>
                                <input type="text" placeholder="Where are you going?" ref={locationRef} />
                            </div>
                        </FormGroup>
                        <FormGroup className="d-flex gap-3 form__group form__group-fast">
                            <span><i class="ri-pin-distance-line" ></i></span>
                            <div>
                                <h6>Distance</h6>
                                <input type="text" placeholder="Distance Km" ref={distanceRef} />
                            </div>
                        </FormGroup>
                        <FormGroup className="d-flex gap-3 form__group form__group-fast">
                            <span><i class="ri-group-line"></i></span>
                            <div>
                                <h6>Max People</h6>
                                <input type="number" placeholder="0" ref={maxGroupSizeRef} />
                            </div>
                        </FormGroup>
                        <span className="search__icon" type="submit" onClick={searchHandler}><i class="ri-search-line"></i></span>
                    </Form>
                </div>
            </Col>
        </>
    )
}

export default SearchBar;