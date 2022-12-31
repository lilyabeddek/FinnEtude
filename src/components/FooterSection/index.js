import React,{useState} from 'react'
import { Button,BtnWrapper,ArrowForward,ArrowRight,Container,H1,SubTitle} from '../SharedComponents'
import logo from '../../assets/logo.png'
import {FooterLogo } from './FooterElements'

const FooterSection = () => {
    const  [hover,setHover]=useState(false)
    const onHover=()=>{
        setHover(!hover)
    }
    return (
      <Container>
          <FooterLogo src={logo} alt='Logo'></FooterLogo>
          <H1 center={1}>Commencez avec Finnetude aujourd’hui.</H1>
          <SubTitle center={1}>Faire du Digital un levier de croissance pour le développement de son Business</SubTitle>
          <BtnWrapper>
                <Button to="/purshace" gradient={1} onMouseEnter={onHover} onMouseLeave={onHover}>
                  Acheter { hover? <ArrowForward/>:<ArrowRight/>}
                </Button>
          </BtnWrapper>
  
  
      </Container>
    )
}

export default FooterSection
