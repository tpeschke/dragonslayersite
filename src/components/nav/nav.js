import React, { Component } from 'react'
import './nav.css'
import { Link, withRouter } from 'react-router-dom'

class Nav extends Component {
    constructor() {
        super()

        this.state = {
            open: false
        }
    }

    toggleNav = (title) => {
        if (title && this.state.open) {
            this.setState({ open: !this.state.open })
        } else if (!title) {
            this.setState({ open: !this.state.open })
        }
    }

    render() {
        return (
            <div>
                <div className="nav">
                    <div className="subNav">
                        <Link to="/" onClick={_=>this.toggleNav(true)}><h4>DragonSlayer Games</h4></Link>
                        <div className="expandedNav">
                            <a>Bonfire RPG</a>
                            <h3>|</h3>
                            <a href="https://discord.gg/G8GVTME">Community</a>
                            <h3>|</h3>
                            <Link to="/about"><p>About</p></Link>
                        </div>
                        <div className={this.state.open ? "hamNav rotated" : "hamNav"} onClick={_=>this.toggleNav()}>
                            <div className="leftArrow"></div>
                            <div className="rightArrow"></div>
                        </div>
                    </div>
                    <div className={this.state.open ? "dropdownNav open" : "dropdownNav"} onClick={_=>this.toggleNav()}>
                        <a>Bonfire RPG</a>
                        <a href="https://discord.gg/G8GVTME">Community</a>
                        <Link to="/about"><p>About</p></Link>
                    </div>
                </div>
                <div className={this.state.open ? "navOverlay openOver" : "navOverlay"}></div>
            </div>
        )
    }
}

export default withRouter(Nav)