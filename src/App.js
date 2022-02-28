import React, { useState } from "react"
import Header from "./components/Header"
import Introduction from "./pages/Introduction"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

function App() {
    const [pages] = useState([
        { name: "about me" },
        { name: "portfolio" },
        { name: "contact" },
        { name: "resume" },
        { name: "home"}
    ])

    const [currentPage, setCurrentPage] = useState(pages[0])

    return (
        <div>
            <Header>
                <Navbar
                    pages={pages}
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage}
                ></Navbar>
            </Header>
            <main>
                <Introduction currentPage={currentPage}></Introduction>
            </main>
            <Footer />
        </div>
    )
}

export default App