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
                            Hello World!<br></br>
                            I am front-end developer passionate about creating interactive applications and experiences on the web. After completing my coding bootcamp course at UCSD extension, I’ve found that my specialty and passion lies in creating accessible and responsive websites. 
                        </p>          
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About