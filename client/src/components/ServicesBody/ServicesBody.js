import React from "react";
import "./ServicesBody.css";

function ServicesBody() {
    return (
        <div id="servicesBody">
            <div id="servicesTop">
                <div className="flubber" id="one">
                    <i class="fas fa-laptop fa-2x"></i>
                    <h3>Drill Design</h3>
                    <p>Custom drill design to fit your marching program.</p>
                </div>
                <div className="flubber" id="two">
                    <i class="fas fa-shoe-prints fa-2x"></i>
                    <h3>Choreography</h3>
                    <p>Custom choreography as well as resources on dance terminology and fundamental movement routines all customized for your show.</p>
                </div>
            </div>
            <div id="servicesMiddle">
                <div className="flubber" id="three">
                    <i class="fas fa-chalkboard-teacher fa-2x"></i>
                    <h3>Clinics</h3>
                    <p>For programs that are looking to have me come out to work with your band program.</p>
                </div>
                <div className="flubber" id="four">
                    <i class="fas fa-mobile-alt fa-2x"></i>
                    <h3>Consultation</h3>
                    <p>Show design guidance as well as feedback on design development and execution.</p>
                </div>
            </div>
            <div id="servicesBottom">
                <div className="flubber" id="five">
                    <i class="fas fa-user-friends fa-2x"></i>
                    <h3>Staffing</h3>
                    <p>For programs interested in hiring me to join your instructional staff.</p>
                </div>
                <div className="flubber" id="six">
                    <i class="fas fa-gavel fa-2x"></i>
                    <h3>Judging</h3>
                    <p>Book me to judge any caption at your contest.
</p>
                </div>
            </div>
        </div>
    )
}

export default ServicesBody;