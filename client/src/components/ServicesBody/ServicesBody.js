import React from "react";
import "./ServicesBody.css";

function ServicesBody() {
    return (
        <div id="servicesBody">
            <div id="servicesTop">
                <div className="flubber" id="one">
                    <i class="fas fa-laptop fa-2x"></i>
                    <h3>Drill Design</h3>
                </div>
                <div className="flubber" id="two">
                    <i class="fas fa-shoe-prints fa-2x"></i>
                    <h3>Choreography</h3>
                </div>
            </div>
            <div id="servicesBottom">
                <div className="flubber" id="three">
                    <i class="fas fa-chalkboard-teacher fa-2x"></i>
                    <h3>Clinics</h3>
                </div>
                <div className="flubber" id="four">
                    <i class="fas fa-mobile-alt fa-2x"></i>
                    <h3>Consultation</h3>
                </div>
            </div>
        </div>
    )
}

export default ServicesBody;