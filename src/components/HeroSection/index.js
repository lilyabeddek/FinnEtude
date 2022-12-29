import React,{useState} from 'react'
import Video from '../../assets/video.mp4'
import { HeroContainer,HeroBg,VideoBg,HeroContent,HeroBtnWrapper,HeroH1,HeroP,ArrowForward,ArrowRight} from './HeroElements'
import { Button } from '../ButtonElement'

const HeroSection=()=> {
  const  [hover,setHover]=useState(false)
  const onHover=()=>{
    setHover(!hover)
  }
  return (
    <HeroContainer id="about">
        <HeroBg>
            <VideoBg autoplay loop muted src={Video} type='video/mp4'></VideoBg>
        </HeroBg>
        <HeroContent>
          <HeroH1>Finnetude Plus Qu’un Partenaire.</HeroH1>
          <HeroP>
            Faire du Digital un levier de croissance pour 
            le développement de son Business</HeroP>
          <HeroBtnWrapper>
            <Button to="/contactus" onMouseEnter={onHover} onMouseLeave={onHover}>
              Contacter Nous { hover? <ArrowForward/>:<ArrowRight/>}
            </Button>
          </HeroBtnWrapper>
        </HeroContent>
      
    </HeroContainer>
  )
}

export default HeroSection
