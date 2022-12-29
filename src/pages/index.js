import React from 'react'
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/AlphaSection';
import {alphaobj,etradeobj} from '../components/AlphaSection/Data';
import Vision from '../components/VisionSection';

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
        <div id='solutions'>
          <InfoSection {...alphaobj}></InfoSection>
          <InfoSection {...etradeobj}></InfoSection>
        </div> 
        <Vision></Vision>
    </>
  )
}

export default Home;
