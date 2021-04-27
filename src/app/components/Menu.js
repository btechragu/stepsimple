import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { withRouter } from 'react-router'
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
                <Nav className="ml-auto" activeKey={'#'+location.pathname}>
                <Nav.Link href="#/">Home<span></span></Nav.Link>
                <Nav.Link href="#/enablement-program">Enablement Program<span></span></Nav.Link>
                <Nav.Link href="#/clients">Corporate Clients<span></span></Nav.Link>
                <Nav.Link href="#/contact">Contact Us<span></span></Nav.Link>
                <Nav.Link href="#/faq">FAQ's<span></span></Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
    )
}

export default withRouter(Menu);
