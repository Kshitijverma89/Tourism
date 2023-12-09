import React from "react";
import { Modal, Button } from "react-bootstrap";
import { useState } from "react";


const CustomModal = () => {
    const [show, setState] = useState('false');

    const stateHandler = () => {
        setState("true");
    }
    const handleClose=()=>{
        setState('false');
    }
    return (
        < Modal show={show} onHide={handleClose} >
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>All fields are required</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal >
    );
}

export default CustomModal;