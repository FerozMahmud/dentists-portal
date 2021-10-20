import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

import './Header.css'

const Header = () => {
    const activeStyle = {
        fontWeight: "bold",
        color: "red"
    }
    const { user, logOut } = useAuth();
    return (
        <div>

            <Navbar bg="dark" variant="dark">
                <Container >
                    <Navbar.Brand href="/"><strong>Dentist's</strong> <span className="text-info">Portal</span></Navbar.Brand>
                    <Nav>
                        <NavLink activeStyle={activeStyle} className="nav" to="/home">Home</NavLink>
                        <NavLink activeStyle={activeStyle} className="nav" to="/about">About Us</NavLink>
                        <NavLink activeStyle={activeStyle} className="nav" to="/contact">Contact Us</NavLink>
                        {user.email && <span style={{ color: 'white' }}>Hello {user.displayName}</span>}
                        {
                            user.email ?
                                <button onClick={logOut}>Log out</button>
                                :
                                <NavLink activeStyle={activeStyle} className="nav" to="/login">Login</NavLink>
                        }
                    </Nav>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;