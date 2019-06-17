import React, { Component } from 'react'
import './nav.css'
import { Link, withRouter } from 'react-router-dom'

class Nav extends Component {
    render() {
        return (
                <div className="nav">
                    <div className="subNav">
                    <Link to="/"><h4>DragonSlayer Games</h4></Link>
                        <div>
                            <a>Bonfire RPG</a>
                            <h3>|</h3>
                            <a href="https://discord.gg/G8GVTME">Community</a>
                            <h3>|</h3>
                            <Link to="/about"><p>About</p></Link>
                        </div>
                    </div>
                </div>
        )
    }
}

export default withRouter(Nav)