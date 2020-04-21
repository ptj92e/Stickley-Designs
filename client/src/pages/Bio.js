import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Biography from "../components/Biography/Biography";
import "./css/Bio.css"

function Bio() {
    return(
        <div id="bio">
            <Navbar />
            <Biography />
            <Footer />
        </div>
    )
}

export default Bio;