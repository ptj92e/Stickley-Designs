import React from "react";
import Welcome from "../components/Welcome/Welcome";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import "./css/Home.css";

function Home() {
    return (
        <div>
            <Navbar />
            <div id="home">
                <Welcome />
            </div>
            <Footer />
        </div>
    )
}

export default Home;