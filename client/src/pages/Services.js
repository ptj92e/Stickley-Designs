import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ServicesTitle from "../components/ServicesTitle/ServicesTitle";
import "./css/Services.css";

function Services() {
    return(
        <div id="services">
            <Navbar />
            <ServicesTitle />
            <Footer />
        </div>
    )
}

export default Services;