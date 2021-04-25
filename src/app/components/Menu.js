import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom';
import logo from './../assets/images/logo.png'

function Menu(props) {
    const {location} = props;
    return (
        <Navbar id="header" bg="white" expand="lg" variant="light" className="shadow sticky-top">
            <Navbar.Brand href="/">
            <img
                src={logo}
                width="238"
                height="54"
                className="d-inline-block align-top"
                alt="Step Simple logo"
            />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto" activeKey={location.pathname}>
                <Nav.Link as={Link} to="/">Home<span></span></Nav.Link>
                <Nav.Link as={Link} to="/enablement-program">Enablement Program<span></span></Nav.Link>
                <Nav.Link as={Link} to="/clients">Corporate Clients<span></span></Nav.Link>
                <Nav.Link as={Link} to="/contact">Contact Us<span></span></Nav.Link>
                <Nav.Link as={Link} to="/faq">FAQ's<span></span></Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
    )
}

export default withRouter(Menu);
