import React from 'react';
import {Navbar} from 'react-bootstrap';



export default function Nav() {
    return (
        <Navbar>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav"> 
                <Navbar.Link href="#Home">Home</Navbar.Link>
                <Navbar.Link href="#About">About</Navbar.Link>
                <Navbar.Link href="#Contact">Contact Us</Navbar.Link>
                <Navbar.Link href="#Apply">Apply</Navbar.Link>
            </Navbar.Collapse>
        </Navbar>

        
    )
}

