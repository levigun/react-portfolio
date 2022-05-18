import Navbar from './Navbar'
import Footer from './Footer'
import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import ProjectPage from './pages/ProjectPage';
import Contact from './pages/Contact';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

export default function PortfolioContainer() {

  return (
  <>
    <BrowserRouter basename='/react-portfolio'>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/projects" element={<ProjectPage/>} />
        <Route exact path="/contact" element={<Contact/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </>
  )
}


