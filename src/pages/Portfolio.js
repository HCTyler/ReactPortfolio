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
            description: "This application is a timed quiz program that uses Javascript fundamentals that stores highscores using local storage.",
            link: "https://hctyler.github.io/Code-Quiz/",
            repo: "https://github.com/HCTyler/Code-Quiz"
        },
        {
            name: "passwordGenerator",
            description: "This application uses javascript fundamentals to generate a random password with some given optional criterias.",
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
            link: "https://notetakerforbootcamp-app.herokuapp.com/",
            repo: "https://github.com/HCTyler/NoteTaker"
        },
        {
            name: "gitCooking",
            description: "A group project using Edamam and Cocktail DB APIs to create a matching cocktain and recipe pairing.",
            link: "https://nmbeilke.github.io/Git-Cooking/",
            repo: "https://github.com/nmbeilke/Git-Cooking"
        },
        {
            name: "WebTheBuilder",
            description: "This is app allows the user to log in, purchase a product and have the product save in a cart. This project uses MongoDB Atlas, React, Express, Node, and Heorku to deploy.",
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