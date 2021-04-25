import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function ContactUs() {
    return (
        <div className="container-lg">
            <h2 className="text-primary mb-3">Contact Us</h2>
            <div className="pl-4">
                <p>Please reach out us through</p>
                <a href="mailto:careers@stepsimple.in">
                    <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                    <span className="ml-2">careers@stepsimple.in</span>
                </a>
            </div>
        </div>
    )
}
