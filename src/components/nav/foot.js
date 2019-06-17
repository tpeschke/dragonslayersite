import React, { Component } from 'react'
import './nav.css'
import { Link } from 'react-router-dom'

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div>
                    <p>Contact Us</p>
                    <h3>|</h3>
                    <Link to="/about">Careers & Freelance Work</Link>
                </div>
            </div>
        )
    }
}

export default Footer;