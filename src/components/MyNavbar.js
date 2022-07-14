import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function MyNavbar() {
    return (
        <Navbar>
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        src="/images/logo.jpg"
                        className="d-inline-block align-top"
                        alt="Logo"
                        height="50"
                    />
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default MyNavbar