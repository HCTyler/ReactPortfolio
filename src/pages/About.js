import React, { useState } from "react"
import { capitalizeFirstLetter } from "../utils/helpers"

function About() {
    const [pages] = useState([
        {
            name: "about me"
        }
    ])
    const [currentPage] = useState(pages[0])

    return (
        <div className="masthead text-center text-white d-flex">
            <div className="container my-auto">
                <div className="row">
                    <div className="col-lg-10 mx-auto">
                        <h1>{capitalizeFirstLetter(currentPage.name)}</h1>
                        <hr />
                        <p className="text-faded mb-5">
                            I’m currently attending a Coding Bootcamp program through <a href="https://bootcamp.extension.ucsd.edu/" target="_blank">Coding Bootcamp program at USCD Extension</a>.<hr></hr>
                            Right now, I've been working on trying to understand the material. <br></br>
                            Even though I am still in the bootcamp, I am eager to learn more. <br></br>
                            Contact me for any project ideas so that I can grow my skills!
                        </p>          
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About