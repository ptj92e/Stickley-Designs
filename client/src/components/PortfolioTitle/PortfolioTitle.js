import React from "react";
import PortfolioItems from "../PortfolioItems/PortfolioItems";
import "./PortfolioTitle.css";

function PortfolioTitle() {
    return (
        <div id="portfolioTitle">
            <div id="portfolioInfo">
                <h1>Charts:</h1>
                <p>Here are some examples of my work with current clients from Texas, Arkansas, Indiana, and Tennessee.</p>
                <div id="DrillCarousel" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#DrillCarousel" data-slide-to="0" className="active"></li>
                        <li data-target="#DrillCarousel" data-slide-to="1"></li>
                        <li data-target="#DrillCarousel" data-slide-to="2"></li>
                        <li data-target="#DrillCarousel" data-slide-to="4"></li>
                        <li data-target="#DrillCarousel" data-slide-to="5"></li>
                        <li data-target="#DrillCarousel" data-slide-to="6"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="/images/Drill1.png" className="d-block w-100" alt="Drill1" />
                        </div>
                        <div className="carousel-item">
                            <img src="/images/Drill2.png" className="d-block w-100" alt="Drill2" />
                        </div>
                        <div className="carousel-item">
                            <img src="/images/Drill3.png" className="d-block w-100" alt="Drill3" />
                        </div>
                        <div className="carousel-item">
                            <img src="/images/Drill4.png" className="d-block w-100" alt="Drill4" />
                        </div>
                        <div className="carousel-item">
                            <img src="/images/Drill5.png" className="d-block w-100" alt="Drill5" />
                        </div>
                        <div className="carousel-item">
                            <img src="/images/Drill6.png" className="d-block w-100" alt="Drill6" />
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#DrillCarousel" role="button" data-slide="prev">
                        <i class="fas fa-arrow-left fa-2x"/>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#DrillCarousel" role="button" data-slide="next">
                        <i class="fas fa-arrow-right fa-2x"></i>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
            <hr></hr>
            <PortfolioItems />
        </div>
    )
}

export default PortfolioTitle;