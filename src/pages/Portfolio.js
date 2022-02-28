import React, { useState } from "react"
import ProjectDetails from "../components/Project"
import { capitalizeFirstLetter } from '../utils/helpers'

function Portfolio() {
    const [pages] = useState([
        {
            name: "portfolio"
        }
    ])
    const [currentPage] = useState(pages[0])
    const [projects] = useState([
        {
            name: "codingQuiz",
            description: "HTML CSS",
            link: "https://hctyler.github.io/Portfolio/",
            repo: "https://github.com/HCTyler/Portfolio"
        }
    ])

    return (
        <section className="p-0">
            <div className="container-fluid p-0">
                <h1 className="text-center margin-top">{capitalizeFirstLetter(currentPage.name)}</h1>
                <hr className="my-4" />
                <div className="row no-gutters popup-gallery">
                   
                        {projects.map((project, idx) => (
                            <ProjectDetails
                                project={project}
                                key={"project" + idx}
                            />
                        ))}
                    </div>
                
            </div>
        </section>
    )
}

export default Portfolio