import React from 'react'
import './App.css'
import "bootstrap-icons/font/bootstrap-icons.css";

import { NavBar } from './components/NavBar/NavBar';
import {Banner} from './components/Banner/Banner';
import {Skills} from './components/Skills/Skills'
import { Projects } from './components/Projects/Projects';
import { Contact } from './components/Contact/Contact';
import { Experience } from './components/Experience/Experience';
import { Achievements } from './components/Achievements/Achievements';
import { Footer } from './components/Footer/Footer';

function App() {

  return (
   <div className = "app-container">
    <NavBar/>
    <Banner/>
    <Skills/>
    <Projects/>
    <Experience/>
    <Achievements/>
    <Contact/>
    <Footer/>
   </div>
  )
}

export default App;
