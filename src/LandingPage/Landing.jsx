import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../components/Home';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import About from '../components/About';
import Header from '../components/Header';
import Gallery from '../components/Gallery';
import Dashboard from '../components/Dashboard';


function Landing() {
  return (
    <>
    <Router>
        <Header/>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        </Routes>
    </Router>
    </>
  )
}

export default Landing
