import React,{useState} from 'react'
import etrade from '../../assets/etarde.png'
import {EtradeOverlapGroup,EtradeImg} from './EtradeElements'
import { GradientButton,BtnWrapper,ArrowForward,ArrowRight,Container,H1,SubTitle} from '../SharedComponents'

const EtradeSection = () => {
  const  [hover,setHover]=useState(false)
  const onHover=()=>{
      setHover(!hover)
  }
  return (
    <Container>
        <H1 center={1}>E-TRADE (Commerce Extérieur)</H1>
        <SubTitle center={1}>La plateforme de E-Trade 100% digitale dédiée exclusivement à la gestion des opérations du commerce extérieur introduites par les opérateurs économiques auprès de leurs banques. E-Trade est une banque à distance qui permet aux banques d’accompagner le quotidien de leurs clients Corporate « entreprises » en leur permettant de gérer en temps réel les opérations d’importation et d’exportation.</SubTitle>
        <EtradeOverlapGroup>
                <EtradeImg src={etrade} alt='etrade'></EtradeImg>
        </EtradeOverlapGroup> 

        <BtnWrapper>      
              <GradientButton to="/purshace" onMouseEnter={onHover} onMouseLeave={onHover}>
                Acheter { hover? <ArrowRight/>:<ArrowForward/>}
              </GradientButton>
        </BtnWrapper>


    </Container>
  )
}

export default EtradeSection
