import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    return (
        <div>
            <nav className="uk-navbar-container uk-navbar-transparent">
                <ul className="uk-navbar-nav uk-hidden-small">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/bio">Bio</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="clients">Testimonials</Link></li>
                    <li><Link to="/portfolio">Portfolio</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;