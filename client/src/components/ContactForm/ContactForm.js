import React, { useRef, useState } from "react";
import API from "../../utils/API";
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

    function handleInputChange(event) {
        const { name, value } = event.target;
        setMessageState({ ...messageState, [name]: value });
      };

    const handleSubmit = e => {
        e.preventDefault();
        if (messageState.name) {
            API.sendEmail({
                name: messageState.name,
                email: messageState.email,
                subject: messageState.subject,
                school: messageState.school,
                location: messageState.location,
                students: messageState.students,
                message: messageState.message
            }).then(() => {
                setMessageState({});
            }).then(() => {
                alert("Your message has been sent.");
            }).catch(err => console.log(err));
        }
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
                                onChange={handleInputChange}
                                type="text"
                                name="name"
                                placeholder="Name"
                                ref={nameRef}
                            />
                            <input
                                onChange={handleInputChange}
                                type="email"
                                name="email"
                                placeholder="E-Mail"
                                ref={emailRef}
                            />
                        </div>
                        <div id="second">
                            <input
                                onChange={handleInputChange}
                                type="text"
                                name="subject"
                                placeholder="Subject"
                                ref={subjectRef}
                            />
                            <input
                                onChange={handleInputChange}
                                type="text"
                                name="school"
                                placeholder="School Name"
                                ref={schoolRef}
                            />
                        </div>
                        <div id="third">
                            <input
                                onChange={handleInputChange}
                                type="text"
                                name="location"
                                placeholder="City, State"
                                ref={locationRef}
                            />
                            <input
                                onChange={handleInputChange}
                                type="text"
                                name="students"
                                placeholder="# of Students"
                                ref={studentsRef}
                            />
                        </div>
                        <div id="textDiv">
                            <textarea
                                onChange={handleInputChange}
                                name="message"
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