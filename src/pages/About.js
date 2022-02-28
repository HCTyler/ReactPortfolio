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
                            ##
                        </p>
                       
                        <p className="text-faded mb-5">
                            ##
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About