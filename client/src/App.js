import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Bio from "./pages/Bio";
import Clients from "./pages/Clients";
import Portfolio from "./pages/Portfolio";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/bio" component={Bio} />
            <Route exact path="/services" component={Services} />
            <Route exact path="/clients" component={Clients} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/contact" component={Contact} />
          </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
