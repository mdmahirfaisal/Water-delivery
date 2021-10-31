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
                <Navbar.Brand as={HashLink} to="/home" className="fs-3 fw-bold text-primary me-4"><i>Freshwater shops</i></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id=" " className="d-flex align-items-center">
                    <Nav className="me-auto">
                        {user.email ? <Link className=" text-dark fs-5 me-4 text-decoration-none" to="/dashboard" style={{ cursor: "pointer" }}>Dashboard</Link> : ""}

                        {user.email ? <Link className=" text-dark fs-5 me-4 text-decoration-none" to="/addservice" style={{ cursor: "pointer" }}>Add service</Link> : ""}

                        {user.email ? <Link className=" text-dark fs-5 me-4 text-decoration-none" to="/order" style={{ cursor: "pointer" }}>Orders</Link>
                            :
                            <Link to="/home" style={{ cursor: "pointer" }} onClick={() => setModalShow(true)} className="text-dark fs-5 me-4 text-decoration-none">Orders</Link>
                        }
                    </Nav>
                    <Nav>
                        {user.email ?
                            <Link onClick={logOut} to="/home" style={{ cursor: "pointer" }} className="text-dark fs-5 text-decoration-none me-3"><button className="btn btn-info rounded-pill">Sign out<i className="ms-1 fas fa-sign-out-alt"></i></button></Link>
                            :
                            <Link to="/home" style={{ cursor: "pointer" }} onClick={() => setModalShow(true)} className="text-dark fs-5 text-decoration-none"><button className="btn btn-info rounded-pill">Sign up</button></Link>
                        }


                        {user.email ? <span className="text-primary fs-5">{user.displayName || user.email}</span> : ""}

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;