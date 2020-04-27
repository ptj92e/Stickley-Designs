import React, { useRef, useState } from "react";
import "./ContactForm.css";

function ContactForm() {
    const nameRef = useRef();
    const emailRef = useRef();
    const schoolRef = useRef();
    const subjectRef = useRef();
    const locationRef = useRef();
    const studentsRef = useRef();
    const messageRef = useRef();
    const [messageState, setMessageState] = useState({
        name: "",
        email: "",
        subject: "",
        school: "",
        location: "",
        students: "",
        message: ""
    });

    const handleSubmit = e => {
        e.preventDefault();
        console.log("yay");
    };

    return (
        <div id="contactForm">
            <div id="contactTitle">
                <h1>Contact:</h1>
                <p>If you are interested in me being a part of your team, please contact me below!</p>
            </div>
            <hr></hr>
            <div id="contactBottom">
                <div id="emailForm">
                    <form onSubmit={handleSubmit}>
                        <div id="first">
                            <input
                                type="text"
                                placeholder="Name"
                                ref={nameRef}
                            />
                            <input
                                type="email"
                                placeholder="E-Mail"
                                ref={emailRef}
                            />
                        </div>
                        <div id="second">
                            <input
                                type="text"
                                placeholder="Subject"
                                ref={subjectRef}
                            />
                            <input
                                type="text"
                                placeholder="School Name"
                                ref={schoolRef}
                            />
                        </div>
                        <div id="third">
                            <input
                                type="text"
                                placeholder="City, State"
                                ref={locationRef}
                            />
                            <input
                                type="text"
                                placeholder="# of Students"
                                ref={studentsRef}
                            />
                        </div>
                        <div id="textDiv">
                            <textarea
                                placeholder="Message"
                                ref={messageRef}
                            />
                        </div>
                        <div id="buttonDiv">
                            <button className="flipX" type="submit">Submit Message</button>
                        </div>
                    </form>
                </div>
                <div id="contactInfo">
                    <h3>Contact Information:</h3>
                    <p>Phone Number: 423-416-8657</p>
                    <p>E-Mail: ars7stickley@gmail.com</p>
                </div>
            </div>
        </div>
    )
}

export default ContactForm;