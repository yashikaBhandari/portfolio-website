import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Footer from './components/Footer'
import PortFolio from './components/Projects'
import Experiance from './components/Skills'
import Contact from './components/Contact'
import { Toaster } from "react-hot-toast";
export default function App() {
  return (
    <>
    <div className="" 
    
    
     >
      <Navbar/>
      <Home/>
      <About/>
      <PortFolio/>
      <Experiance/>
      <Contact/>
      <Footer/>
    </div>
    <Toaster />
    </>
  )
}
