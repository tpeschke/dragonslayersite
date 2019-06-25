import React, { Component } from 'react'
import './careers.css'

class Careers extends Component {
    render() {
        return (
            <div className="careersShell">
                <div className="innerCareersShell">
                    <div className="colorStrikeCareersTop"></div>
                    <div className="colorStrikeCareersBottom"></div>
                    <div className="careerBox">
                        <div className="careersImageBox">
                            <div className="careersImage"></div>
                        </div>
                        <div className="careersTextBox">
                            <div>
                                <h2>Freelance Work</h2>
                                <p>Dragon Slayer RPGs believes in the creator and so offers highly competive pricing for any freelance work done.</p>
                                <p>Currently we're looking mainly for modules and adventures but we're happy to look at campaign settings, supplemental materials, or new games.</p>
                                <p>We're not currently looking for just pitches: please be ready to submit a sample of your work upon request.</p>
                            </div>
                            <div>
                                <h2>Careers</h2>
                                <p>If you'd like to work with us as a full time game dev, please submit your resume at the email below.</p>
                                <p>If you're going to do a cover letter, please provide a blurb about your favorite game instead. That will tell us a lot more about you than a spaghetti of corporate buzz words will.</p>
                            </div>
                        </div>
                        <div className="careersEmail">
                            <p>support@dragon-slayer.net</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Careers