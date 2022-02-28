import React from "react"
import IntroductionDirectory from "../components/Introduction-Directory"
import About from "./About"
import Portfolio from "./Portfolio"
import Contact from "./Contact"
import Resume from "./Resume"


function Introduction({ currentPage }) {

  const renderPage = () => {
    switch (currentPage.name) {
      case "about me":
        return <About />
      case "portfolio":
        return <Portfolio />
      case "contact":
        return <Contact />
      case "resume":
        return <Resume />
      default:
        return <About />
    }
  }

  return (
    <section>
      <IntroductionDirectory>{renderPage()}</IntroductionDirectory>
    </section>
  )
}
export default Introduction