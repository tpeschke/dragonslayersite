import React, { Component } from 'react'
import './about.css'
import { Link, withRouter } from 'react-router-dom'

class About extends Component {
    render() {
        return (
            <div className="aboutShell">
                <div className="innerShell">
                    <div className="colorStrikeAboutTop"></div>
                    <div className="colorStrikeAboutMiddle"></div>
                    <div className="colorStrikeAboutBottom"></div>
                    <div className="box">
                        <h2>About</h2>
                        <p className="quote">“The books I write because I want to read them, the games because I want to play them, and stories I tell because I find them exciting personally.”</p>
                        <p className="quote">- Gary Gygax</p>
                        <p>DragonSlayer Games was created by two brothers that love games and wanted to share them with others.</p>
                        <p>Our aim is to marry new school mechanics with an old school feel to bring back the thrill of discovery, adventure, and problem solving.</p>
                        <p>We truly love our work and love sharing it with others.</p>
                    </div>
                    <div className="box">
                        <h2>Contact</h2>
                        <p>We're happy to hear from you, whether it's compliments, complaints, or thoughts</p>
                        <p>You can contact us directly on our Discord <a href="https://discord.gg/G8GVTME">here.</a></p>
                        <p>or by email at [PLACEHOLD_EMAIL]</p>
                        <p>If you'd like to get in contact with us for freelance or more permenant work, please review our terms and restrictions on the <Link to="/careers">Careers & Freelance Work</Link> page.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(About)