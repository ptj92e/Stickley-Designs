import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import PortfolioTitle from "../components/PortfolioTitle/PortfolioTitle";
import "./css/Portfolio.css";

function Portfolio() {
    return(
        <div id="portfolio">
            <Navbar />
            <PortfolioTitle />
            <Footer />
        </div>
    )
}

export default Portfolio;