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
            description: "A timed quiz program using javascript",
            link: "https://hctyler.github.io/Code-Quiz/",
            repo: "https://github.com/HCTyler/Code-Quiz"
        },
        {
            name: "gitCooking",
            description: "A group project using Edamam and Cocktail DB APIs",
            link: "https://nmbeilke.github.io/Git-Cooking/",
            repo: "https://github.com/nmbeilke/Git-Cooking"
        },
        {
            name: "shadeMarketPlace",
            description: "A group project with a complete front-end,backend, and database",
            link: "https://e-commerce-store-w-stripe-2022.herokuapp.com/",
            repo: "https://github.com/DavisRansom/E-Commerce-Marketplace"
        },

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