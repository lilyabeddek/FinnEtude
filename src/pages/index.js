import React from 'react'
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import HeroSection from '../components/HeroSection'
import AlphaSection from '../components/AlphaSection';
import EtradeSection from '../components/EtradeSection';
import Vision from '../components/VisionSection';
import MainPlateforme from '../components/MainPlateforme'
import FooterSection from '../components/FooterSection';
import AboutSection from '../components/AboutSection';

const Home=()=> {
  const [isOpen, setIsOpen]=useState(false)

  const toggle=()=>{
    setIsOpen(!isOpen)
  }

  return (
    <>
        <Sidebar isOpen={isOpen} toggle={toggle}></Sidebar>
        <Navbar toggle={toggle}></Navbar>
        <HeroSection></HeroSection>
        <MainPlateforme></MainPlateforme>
        <Vision></Vision>
        <div id='solutions'>
          <AlphaSection></AlphaSection>
          <EtradeSection></EtradeSection>
        </div> 
        <AboutSection></AboutSection>
        <FooterSection></FooterSection>
        
    </>
  )
}

export default Home;
