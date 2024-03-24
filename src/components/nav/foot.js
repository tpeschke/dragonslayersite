import React, { Component } from 'react'
import './nav.css'
import { Link } from 'react-router-dom'

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div>
                    <Link to="/about">Contact Us</Link>
                    <h3>|</h3>
                    <Link to="/careers">Careers / Freelance Work</Link>
                </div>
            </div>
        )
    }
}

export default Footer;