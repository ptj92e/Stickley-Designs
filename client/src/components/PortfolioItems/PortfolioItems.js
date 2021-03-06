import React from "react";
import "./PortfolioItems.css";

function PortfolioItems() {
    return(
        <div id="portfolioItems">
            <h1>Videos:</h1>
            <div id="videoDiv">
                <div id="video1">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/QOmqKgF9bzw" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                <div id="video2">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/8WcWsX6K2k0" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </div>
        </div>
    )
}

export default PortfolioItems;