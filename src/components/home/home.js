import React, { Component } from 'react'
import './home.css'

class Home extends Component {
    render() {
        return (
            <div className="shell">
                <div className="frontPage">
                    <div className="tint"></div>
                    <div className="titleCard">
                        <h1>A Tale Yet Half Told</h1>
                            <button className="bonfireButton"><a href="http://bonfire.stone-fish.com">Learn More About the Bonfire RPG</a></button>
                    </div>
                </div>
                <div className="discordShell">
                    <div className="colorStrike"></div>
                    <div className="discordSquare">
                        <div className="discordIcon"></div>
                        <div className="imageBox">
                            <div className="imageOverlay"></div>
                            <div className="discordImage"></div>
                        </div>
                        <div className="textBox">
                            <h2>Be Heard!</h2>
                            <p>Your opinion counts so share it with us on Discord.</p>
                            <button className="discordButton">
                                <a href="https://discord.gg/G8GVTME">Join Us Here!</a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home