import React from 'react'
import { Col, Row } from 'react-bootstrap'
import modus_logo from './../assets/images/modus-logo.png'
import techurate_logo from './../assets/images/techurate-logo.png'

export default function Clients() {
    const clients = [
        {
            id:1,
            logo:modus_logo,
            alt:'Modus',
            site:'https://www.modussystems.com/'
        },
        {
            id:2,
            logo:techurate_logo,
            alt:'Techurate',
            site:'http://techurate.com/'
        }
    ]

    const openUrl=(site)=>{
        window.open(site);
    }
    return (
        <div className="container-lg">
            <h2 className="text-primary mb-3">Corporate Clients</h2>
            <Row>
                {
                    clients.map(({id,logo,alt,site})=>{
                        return (<Col xs={6} md={3} key={id}>
                            <div className="shadow text-center p-2 my-3 client cursor-pointer" onClick={()=>openUrl(site)}>
                                <img src={logo} alt={alt}>
                                </img>
                            </div>
                        </Col>)
                    })
                }
            </Row>
        </div>
    )
}
