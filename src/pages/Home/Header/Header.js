import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';

import './Header.css';

const Header = () => {
    const { logOut, user, setModalShow } = useAuth();

    return (
        <Navbar sticky collapseOnSelect expand="lg" bg="light" variant="light shadow mb-5 py-3">
            <Container>
                <Navbar.Brand as={HashLink} to="/home" className="fs-3 fw-bold text-primary me-4">Clean Water</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav " className="d-flex align-items-center">
                    <Nav className="me-auto">
                        {user.email ? <Link className=" text-dark fs-5 me-4 text-decoration-none" to="/dashboard" style={{ cursor: "pointer" }}>Dashboard</Link>
                            :
                            <Link to="/home" style={{ cursor: "pointer" }} onClick={() => setModalShow(true)} className="text-dark fs-5 me-4 text-decoration-none">Dashboard</Link>
                        }

                    </Nav>
                    <Nav>
                        {user.email ?
                            <Link onClick={logOut} to="/home" style={{ cursor: "pointer" }} className="text-dark fs-5 text-decoration-none me-3">Sign out <i className="ms-1 fas fa-sign-out-alt"></i></Link>
                            :
                            <Link to="/home" style={{ cursor: "pointer" }} onClick={() => setModalShow(true)} className="text-dark fs-5 text-decoration-none">Sign up</Link>
                        }

                        {
                            user.email ? <span className="text-primary fs-5">{user.displayName || user.email}</span> : ""
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;