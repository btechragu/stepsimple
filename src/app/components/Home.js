import React from 'react'
import { Button } from 'react-bootstrap'

export default function Home({minHeight}) {
    const minStyle = {
        minHeight:minHeight
    };
    const btnStyle = {
        fontSize:20
    };
    const divStyle = {
        marginTop:100
    };
    const ansStyle = {
        color:'#f1f1f1'
    }
    return (
        <div className="home-page" style={minStyle}>
            <div className="home-bg">
            </div>
            <div className="text-bg">
                <div className="text-center" style={divStyle}>
                    <h2 className="mb-5 text-subheader">Do You Want To Learn?</h2>
                    <h3 className="mb-4" style={ansStyle}>Latest Technologies</h3>
                    <h3 className="mb-4" style={ansStyle}>Office Work Culture</h3>
                    <h3 className="mb-4" style={ansStyle}>Organization Structure</h3>
                    <Button className="mt-5" style={btnStyle} href="/contact">Contact Us</Button>
                </div>
            </div>
        </div>
    )
}
