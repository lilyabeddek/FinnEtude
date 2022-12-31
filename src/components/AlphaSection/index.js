import React,{useState} from 'react'
import { GradientButton,BtnWrapper,H1,SubTitle,ArrowForward,ArrowRight} from '../SharedComponents'
import { InfoContainer,InfoColumn,Img, ImageColumn,OverlapGroup } from './InfoElements'
import img from '../../assets/mainPlateforme.png'

const AlphaSection = () => {
  const  [hover,setHover]=useState(false)
  const onHover=()=>{
      setHover(!hover)
  }
  return (
                <InfoContainer imgStart={0}>
                    <InfoColumn>
                        <H1 center={0}>Alpha+</H1>
                        <SubTitle center={0}>ALFA+ est une plateforme de simulation digitale des marchés financiers virtuels destinée à la formation des professionnels, étudiants et particuliers qui veulent renforcer leurs compétences en Finance des Marchés.</SubTitle>
                        <BtnWrapper>      
                            <GradientButton to="/purshace" onMouseEnter={onHover} onMouseLeave={onHover}>
                                Acheter { hover? <ArrowRight/>:<ArrowForward/>}
                            </GradientButton>
                        </BtnWrapper>
                    </InfoColumn>
                    <ImageColumn>
                        <OverlapGroup>
                            <Img src={img} alt='Alpha+'></Img>
                        </OverlapGroup>  
                    </ImageColumn>
    
                </InfoContainer>
  )
}

export default AlphaSection
