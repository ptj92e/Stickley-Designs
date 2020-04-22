import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ContactForm from "../components/ContactForm/ContactForm";
import "./css/Contact.css";

function Contact() {
    return(
        <div id="contact">
            <Navbar />
            <ContactForm />
            <Footer />
        </div>
    )
}

export default Contact;