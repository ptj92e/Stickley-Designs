import React from "react";
import ServicesBody from "../ServicesBody/ServicesBody";
import "./ServicesTitle.css";

function ServicesTitle() {
    return (
        <div id="servicesTitle">
            <div id="servicesInfo">
                <h1>Services:</h1>
                <p>At Stickley Designs, you can be sure that the needs of your ensemble will be met with the highest attention to detail.</p>
            </div>
            <hr></hr>
            <ServicesBody />
        </div>
    )
}

export default ServicesTitle;