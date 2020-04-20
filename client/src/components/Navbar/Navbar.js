import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    return (
        <div>
            <nav>
                <ul className="">
                    <li><Link className="Nav_link" to="/">Home</Link></li>
                    <li><Link className="Nav_link" to="/bio">Bio</Link></li>
                    <li><Link className="Nav_link" to="/services">Services</Link></li>
                    <li><Link className="Nav_link" to="/portfolio">Portfolio</Link></li>
                    <li><Link className="Nav_link" to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;