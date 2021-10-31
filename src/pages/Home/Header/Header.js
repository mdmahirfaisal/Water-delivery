import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';

import './Header.css';

const Header = () => {
    const { logOut, user, setModalShow } = useAuth();


    return (
        <Navbar fixed="top" sticky collapseOnSelect expand="lg" bg="light" variant="light shadow mb-5 ">
            <Container>
                <Navbar.Brand as={HashLink} to="/home#home" className="fs-4 fw-bold text-primary me-4"><i>Freshwater shops</i></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0 d-flex align-items-center"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link as={HashLink} to="/home#about" className="text-dark fs-6 me-4 text-decoration-none">About</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#service" className="text-dark fs-6 me-4 text-decoration-none">Service</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#contact" className="text-dark fs-6 me-4 text-decoration-none">Contact</Nav.Link>
                        {user.email ? <Nav.Link className=" text-dark fs-6 me-4 text-decoration-none" as={Link} to="/manageOrders" style={{ cursor: "pointer" }}>Manege orders</Nav.Link> : ""}

                        {user.email ? <Nav.Link className=" text-dark fs-6 me-4 text-decoration-none" as={Link} to="/addservice" style={{ cursor: "pointer" }}>Add service</Nav.Link> : ""}

                        {user.email ? <Nav.Link className=" text-dark fs-6 me-4 text-decoration-none" as={Link} to="/order" style={{ cursor: "pointer" }}>Orders</Nav.Link>
                            :
                            <Nav.Link as={Link} to="/home" style={{ cursor: "pointer" }} onClick={() => setModalShow(true)} className="text-dark fs-6 me-4 text-decoration-none">Orders</Nav.Link>
                        }
                    </Nav>
                    <Nav>
                        {user.email ?
                            <Nav.Link onClick={logOut} to="/home" style={{ cursor: "pointer" }} className="text-dark fs-6 text-decoration-none me-3"><button className="btn btn-danger rounded-pill">Sign out</button></Nav.Link>
                            :
                            <Nav.Link as={Link} to="/home" style={{ cursor: "pointer" }} onClick={() => setModalShow(true)} className="text-dark fs-6 text-decoration-none"><button className="btn btn-info rounded-pill">Sign up</button></Nav.Link>
                        }


                        {user.email ? <Nav.Link as="span" className="text-dark fw-bold fs-5">{user.displayName || user.email}</Nav.Link> : ""}

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;