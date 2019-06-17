import React from 'react'
import './nav.css'

const Nav = Page => {
    return props =>
        <div>
            <div className="nav">
                <div className="subNav">
                    <h4>DragonSlayer Games</h4>
                    <div>
                        <a>Bonfire RPG</a>
                        <h3>|</h3>
                        <a href="https://discord.gg/G8GVTME">Community</a>
                        <h3>|</h3>
                        <a>About</a>
                    </div>
                </div>
            </div>
            <Page {...props} />
            <div className="footer">
                <div>
                    <p>Contact Us</p>
                    <h3>|</h3>
                    <p>Careers & Freelance Work</p>
                </div>
            </div>
        </div>

}

export default Nav