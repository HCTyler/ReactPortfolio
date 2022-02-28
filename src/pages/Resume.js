import React, { useState } from "react"
import { capitalizeFirstLetter } from "../utils/helpers"
import Pdf from "../assets/files/Resume.pdf"

function Resume() {
    const [pages] = useState([
        {
            name: "resume"
        }
    ])
    const [currentPage] = useState(pages[0])
    return (
        <section className="bg-dark">
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 mx-auto text-white mb-4">
                        <h1 className="text-center">{capitalizeFirstLetter(currentPage.name)}</h1>
                        <hr className="light my-4" />
                        <h3>Front-end Proficiencies</h3>
                        <ul>
                            <li>HTML</li>
                        </ul>
                        <h3>Back-end Proficiencies</h3>
                        <ul>
                            <li>##</li>
                        </ul>
                        <h3>Additional Skills</h3>
                        <ul>
                            <li>##</li>
                        </ul>
                        <p className="text-center">
                            Download my <a href={Pdf} className="text-faded white-link" download>resume</a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Resume