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
        <section className="bg-dark contactpage">
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 mx-auto text-white mb-4">
                        <h1 className="text-center">{capitalizeFirstLetter(currentPage.name)}</h1>
                        <hr className="light my-4" />
                        <h3>Language and Framework</h3>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>Bootstrap</li>
                        </ul>
                        <h3>Additional Skill Proficiencies</h3>
                        <ul>
                            <li>PhotoShop</li>
                            <li>Github</li>
                            <li>Debugging and Testing</li>
                            <li>Teamwork</li>
                        </ul>
                        <p className="text-center">
                            <a href={Pdf} target="_blank" className="text-faded white-link" download>Download my resume</a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Resume