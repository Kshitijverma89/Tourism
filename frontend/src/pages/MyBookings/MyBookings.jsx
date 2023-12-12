import { useEffect, useState } from "react";
import { Container, Modal } from "react-bootstrap";
import { Header } from "./Header";
import { fetchBookings, deleteData } from "./BookingServices";
import { Table, Button } from "react-bootstrap"
import {useNavigate} from "react-router-dom";


export default function MyBookings() {

    const [Bookings, setBookings] = useState([]);
    const [modalState, setModalState]= useState();
    const [id, setId]= useState();

    const openModal=()=>{
        setModalState(true);
    }
    const closeModal=()=>{
        setModalState(false);
    }
    
    const navigate=useNavigate();


    async function populateBookings() {
        try {
            const data = await fetchBookings();
            setBookings(data);
        } catch (error) {
            console.log(error);
        }
    }

    const handleDelete = async () => {
        console.log(id)
        await deleteData(id);
        closeModal();
        populateBookings();
    }
    useEffect(() => {
        populateBookings();
    }, [])
    return (
        <Container>
            <Header text="List of all the Bookings"></Header>
            {Bookings.length === 0 ? <p>No Data available!!!</p> :
                <Table className="mt-4">
                    <thead>
                        {/* <tr>
                            <th>Place</th>
                            <th>City</th>
                            <th>Distance</th>
                            <th>Price</th>
                            <th>People</th>
                            <th>Modify</th>
                        </tr> */}
                        <tr>
                            <th>Tour Id</th>
                            <th>Booked At</th>
                            <th>Guest Size</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Modify</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Bookings.map((s) => {
                                return (
                                    <tr>
                                        <td>{s._id}</td>
                                        <td>{s.createdAt}</td>
                                        <td>{s.guestSize}</td>
                                        <td>{s.phone}</td>
                                        <td>{s.userEmail}</td>
                                        <td>
                                            <Button variant="danger" onClick={() => {
                                                openModal();
                                                setId(s._id);
                                            }}>Delete</Button>&nbsp;&nbsp;&nbsp;&nbsp;
                                            <Button variant="primary" onClick={()=>{
                                                // navigate(`/edit/${s.roll}`);
                                            }}>Edit</Button>
                                        </td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </Table>
            }
            <Modal show={modalState} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are your sure you want to delete ?</Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleDelete}>
                        Yes
                    </Button>
                    <Button variant="success" onClick={closeModal}>
                        No
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>

    );
}