import { faFacebook, faInstagram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo_inv from './../assets/images/logo_name_inv.png'

export default function Footer() {
    return (
        <div className="footer p-2" id="footer">
            <Row>
                <Col xs={12} md={4} className="align-items-center justify-content-center d-flex mt-md-0 mt-4">
                    <img
                    src={logo_inv}
                    width="238"
                    height="54"
                    className="d-inline-block align-top"
                    alt="Step Simple logo"
                    />
                </Col>
                <Col xs={12} md={4} className="footer-link text-center text-md-left mt-md-0 mt-4">
                    <h3>Company</h3>
                    <Link to="/">Home</Link>
                    <Link to="/enablement-program">Enablement Program</Link>
                    <Link to="/clients">Corporate Clients</Link>
                    <Link to="/contact">Contact Us</Link>
                    <Link to="/faq">FAQ's</Link>
                </Col>
                <Col xs={12} md={4} className="follow-us text-center text-md-left mt-md-0 mt-4">
                    <h3>Follow Us</h3>
                    <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faWhatsapp}></FontAwesomeIcon>
                </Col>
            </Row>
            <Row>
                <Col className="text-center px-2">
                    <small>All Right Reserved &copy; Step Simple</small>
                </Col>
            </Row>
        </div>
    )
}
