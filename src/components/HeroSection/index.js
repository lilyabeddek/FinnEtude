import React,{useState} from 'react'
import WhiteLogo from '../../assets/LogoBlanc.png'
import { HeroContainer,H1,WhiteSpan,ColorfulSpan,ArrowForwardLR,HeroLastReleaseElement,ImageLogo,LastReleaseContent,LastReleaseText,LastReleaseLine,LastReleaseButton,Shadow} from './HeroElements'
import { Button,SubTitle,BtnWrapper,ArrowForward,ArrowRight} from '../SharedComponents'


const HeroSection=()=> {
  const  [hover,setHover]=useState(false)
  const onHover=()=>{
    setHover(!hover)
  }
  return (
    <HeroContainer>
          <Shadow>
            <HeroLastReleaseElement>
                <ImageLogo src={WhiteLogo} alt='white Logo'/>
                <LastReleaseContent>
                  <LastReleaseText>Fin&Etude Last Release</LastReleaseText>
                  <LastReleaseLine></LastReleaseLine>
                  <LastReleaseButton>Contactez Nous</LastReleaseButton>
                  <ArrowForwardLR/>

                </LastReleaseContent>
              </HeroLastReleaseElement>
          </Shadow>
            
      
          <H1>
            <WhiteSpan>Finnetude Plus Qu’un </WhiteSpan>
            <ColorfulSpan>Partenaire.</ColorfulSpan>
          </H1>
          <SubTitle center={1}>Faire du Digital un levier de croissance pour le développement de son Business</SubTitle>
          <BtnWrapper>
            <Button to="/contactus" gradient={0} onMouseEnter={onHover} onMouseLeave={onHover}>
              Contacter Nous { hover? <ArrowRight/>:<ArrowForward/>}
            </Button>
          </BtnWrapper>
      
    </HeroContainer>
  )
}

export default HeroSection
