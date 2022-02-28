import React, { useState } from "react";

function Home() {
    const [pages] = useState([
        {
            name: "home"
        }
    ])
    const [currentPage] = useState(pages[0])

    return(
        <h1>Homescreen</h1>
    )
}

export default Home