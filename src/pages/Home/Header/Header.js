import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';

import './Header.css';

const Header = () => {
    const { logOut, user } = useAuth();

    return (
        <Navbar sticky collapseOnSelect expand="lg" bg="light" variant="light shadow mb-5 py-3">
            <Container>
                <Navbar.Brand as={HashLink} to="/home">Clean Water</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav " className="d-flex align-items-center">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>

                    </Nav>
                    <Nav>
                        {user.email ?
                            <Nav.Link onClick={logOut}>Sign out</Nav.Link>
                            :
                            <Nav.Link as={HashLink} to="/login">Sign in</Nav.Link>
                        }
                        {user.email ?
                            <Nav.Link as={HashLink} to="/" className="text-danger fw-bold">{user.displayName || user.email}</Nav.Link>
                            : ""}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;