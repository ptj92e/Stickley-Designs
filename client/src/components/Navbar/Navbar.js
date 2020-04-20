import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

function Navbar() {
    return (
        <div>
            <nav className="uk-navbar-container uk-navbar-transparent">
                <ul className="uk-navbar-nav">
                    <li><Link className="Nav_link" to="/">Home</Link></li>
                    <li><Link className="Nav_link" to="/bio">Bio</Link></li>
                    <li><Link className="Nav_link" to="/services">Services</Link></li>
                    <li><Link className="Nav_link" to="clients">Testimonials</Link></li>
                    <li><Link className="Nav_link" to="/portfolio">Portfolio</Link></li>
                    <li><Link className="Nav_link" to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;