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
            name: "portfolio",
            description: "My first portfolio using HTML and CSS",
            link: "https://hctyler.github.io/Portfolio/",
            repo: "https://github.com/HCTyler/Portfolio"
        },
        {
            name: "codingQuiz",
            description: "A timed quiz program using JavaScript",
            link: "https://hctyler.github.io/Code-Quiz/",
            repo: "https://github.com/HCTyler/Code-Quiz"
        },
        {
            name: "passwordGenerator",
            description: "An application that generates random passwords using JavaScript.",
            link: "https://hctyler.github.io/PasswordGenerator/",
            repo: "https://github.com/HCTyler/PasswordGenerator"
        },
        {
            name: "weatherApplication",
            description: "An application that uses a weather API that allows users to search for a city and recieve the current weather.",
            link: "https://nmbeilke.github.io/Git-Cooking/",
            repo: "https://github.com/nmbeilke/Git-Cooking"
        },
        {
            name: "NoteTaker",
            description: "This application uses express.js as the backen to save and retrieve note data from a JSON file.",
            link: "https://hctyler.github.io/Portfolio/",
            repo: "https://github.com/HCTyler/Portfolio"
        },
        {
            name: "gitCooking",
            description: "A group project using Edamam and Cocktail DB APIs to create a matching cocktain and recipe pairing.",
            link: "https://nmbeilke.github.io/Git-Cooking/",
            repo: "https://github.com/nmbeilke/Git-Cooking"
        },
        {
            name: "WebTheBuilder",
            description: "A group project using MongoDB, React, Express, Node, and Heroku to create a website.",
            link: "https://pacific-sands-33682.herokuapp.com/",
            repo: "https://github.com/HCTyler/Web-the-Builder"
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