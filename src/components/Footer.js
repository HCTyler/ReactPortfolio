import React from "react"
import Dobie from "../assets/projects/Dobie_big.jpg"

function Footer() {
    var backgroundStyle ={
        width: "100%",
        height:"100%",
        backgroundImage: "url("+{Dobie}+")",
        zIndex:1
    }
    const icons = [
        {
            name: "fab fa-github",
            link: "https://github.com/HCTyler"
        },
        {
            name: "fab fa-linkedin",
            link: "https://www.linkedin.com/in/edgarvf/"
        },
        {
            name: "fab fa-stack-overflow",
            link: "https://stackoverflow.com/users/16498935/hctyler"
        }
    ]

    return (
        <section style={backgroundStyle}>
            <footer className="container">
                <div className="row">
                    <div className="col-lg-8 mx-auto text-center">
                        {icons.map(icon =>
                            (
                                <a href={icon.link} key={icon.name} target="_blank" rel="noopener noreferrer"><i className={icon.name}></i></a>
                            )
                        )}
                    </div>
                </div>
            </footer>
        </section>
    )
}

export default Footer