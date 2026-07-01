import React from 'react'
import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Project from './components/Project'
import Skills from './components/Skills'
import Internship from './components/internship'
import Certifications from "./components/Certification";
import Contact from './components/Contact'
import Footer from './components/Footer'



function App() {
  return (
    <>
      <Preloader />
      <Navbar />
      <Hero />
      <About />
      <Project />
      <Skills />
      <Internship />
      <Certifications/>
      <Contact />
      <Footer />
    </>
  )
}

export default App
