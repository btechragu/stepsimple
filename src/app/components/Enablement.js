import { faCalendarAlt, faMoneyBillAlt } from '@fortawesome/free-regular-svg-icons'
import { faArrowRight, faAward, faCheck, faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import course_img from './../assets/images/course.jpg'
import eligi_img from './../assets/images/eligibility.jpeg'
import benefits_img from './../assets/images/benefits.jpg'

export default function Enablement() {
    return (
        <div className="container-lg enable-image">
            <h2 className="text-primary mb-4">Industry Standard Enablement Program with confirmed Placement</h2>
            <div className="shadow p-3">
                <Row>
                    <Col className="p-3">
                        <h3 className="text-subheader mb-3"><FontAwesomeIcon icon={faGraduationCap} className="mr-2"></FontAwesomeIcon>About the Course</h3>
                        <ul className="pl-4 list-type-none enable-ul">
                            <li><FontAwesomeIcon icon={faArrowRight} className="mr-2 text-muted"></FontAwesomeIcon>Training on latest Software Technologies</li>
                            <li><FontAwesomeIcon icon={faArrowRight} className="mr-2 text-muted"></FontAwesomeIcon>Training on Banking fundamentals</li>
                            <li><FontAwesomeIcon icon={faArrowRight} className="mr-2 text-muted"></FontAwesomeIcon>Soft skill training</li>
                            <li><FontAwesomeIcon icon={faArrowRight} className="mr-2 text-muted"></FontAwesomeIcon>Placement in Software services companies</li>
                            <li><FontAwesomeIcon icon={faArrowRight} className="mr-2 text-muted"></FontAwesomeIcon>Three months part / full time training</li>
                        </ul>
                    </Col>
                    <Col className="d-none d-md-flex justify-content-center align-items-center">
                        <img src={course_img} alt="Course"></img>
                    </Col>
                </Row>
            </div>

            <div className="shadow p-3 mt-3">
                <Row>
                    <Col className="d-none d-md-flex justify-content-center align-items-center">
                        <img src={eligi_img} alt="Course"></img>
                    </Col>
                    <Col>
                    <h3 className="text-subheader mb-3"><FontAwesomeIcon icon={faCheck} className="mr-2"></FontAwesomeIcon>Eligibility</h3>
                    <div className="pl-3">
                        <h4>Educational Qualification</h4>
                        <ul className="pl-4 list-type-none enable-ul">
                            <li><FontAwesomeIcon icon={faArrowRight} className="mr-2 text-muted"></FontAwesomeIcon>Engineering (or) Science (or) Business Management Discipline</li>
                            <ul className="enable-ul">
                                <li>2020 or earlier pass out for Graduates</li>
                                <li>2020 or earlier pass out for Post-graduates</li>
                            </ul>
                        </ul>
                        <h4>Additional advantage</h4>
                        <ul className="pl-4 list-type-none">
                            <li><FontAwesomeIcon icon={faArrowRight} className="mr-2 text-muted"></FontAwesomeIcon>Any course completed on Java / PLSQL / Full Stack</li>
                        </ul>
                    </div>
                    <h3 className="text-subheader mb-3"><FontAwesomeIcon icon={faMoneyBillAlt} className="mr-2"></FontAwesomeIcon>Fees</h3>
                    <ul className="pl-4 list-type-none">
                        <li><FontAwesomeIcon icon={faArrowRight} className="mr-2 text-muted"></FontAwesomeIcon>&#8377; 45,000 (exclusive of GST)</li>
                    </ul>
                    </Col>
                </Row>
            </div>
            <div className="shadow p-3 mt-3">
                <Row>
                    <Col>
                        <h3 className="text-subheader mb-3"><FontAwesomeIcon icon={faAward} className="mr-2"></FontAwesomeIcon>Benefits</h3>
                        <ul className="pl-4 list-type-none enable-ul">
                            <li><FontAwesomeIcon icon={faArrowRight} className="mr-2 text-muted"></FontAwesomeIcon>Dedicated mentor for each training batch</li>
                            <li><FontAwesomeIcon icon={faArrowRight} className="mr-2 text-muted"></FontAwesomeIcon>Special sessions from experienced Industry Senior Consultants</li>
                            <li><FontAwesomeIcon icon={faArrowRight} className="mr-2 text-muted"></FontAwesomeIcon>Opportunity to work on world class Core Banking Solutions</li>
                            <li><FontAwesomeIcon icon={faArrowRight} className="mr-2 text-muted"></FontAwesomeIcon>Onsite travel implementation opportunity</li>
                        </ul>
                        <h3 className="text-subheader mb-3"><FontAwesomeIcon icon={faCalendarAlt} className="mr-2"></FontAwesomeIcon>Training Start Date</h3>
                        <ul className="pl-4 list-type-none">
                            <li><FontAwesomeIcon icon={faArrowRight} className="mr-2 text-muted"></FontAwesomeIcon>May 2021</li>
                        </ul>
                    </Col>
                    <Col className="d-none d-md-flex justify-content-center align-items-center">
                        <img src={benefits_img} alt="Course"></img>
                    </Col>
                </Row>
            </div>
            <div className="mt-2">
                <small><sup>*</sup>To qualify for the program, you need to pass the screening test.</small>
            </div>
        </div>
    )
}
