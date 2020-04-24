import React from "react";
import "./PortfolioItems.css";

function PortfolioItems() {
    return(
        <div id="portfolioItems">
            <h1>Videos:</h1>
            <p>Here, I have some full videos of some of the best work I have done.</p>
            <div id="videoDiv">
                <div id="video1">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/QOmqKgF9bzw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <h3>Batesville High School 2019 Mvt. III</h3>
                </div>
                <div id="video2">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/8WcWsX6K2k0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <h3>Greene County Tech High School 2019 Mvt. I</h3>
                </div>
            </div>
        </div>
    )
}

export default PortfolioItems;