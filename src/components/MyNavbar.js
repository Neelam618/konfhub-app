import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function MyNavbar() {
    return (
        <Navbar>
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        src="/logo.jpg"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                        height="50"
                    />
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default MyNavbar