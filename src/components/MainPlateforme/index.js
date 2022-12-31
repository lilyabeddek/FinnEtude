import React,{useState} from 'react'
import alpha from '../../assets/mainPlateforme.png'
import { Container,MainContent,Image,ImageBg,Bg,ImageShadow} from './MainPlateformeElements'
import {GradientButton,BtnWrapper,ArrowForward,ArrowRight} from '../SharedComponents'
import grid from '../../assets/grid.png'

const MainPlateforme = () => {
  const  [hover,setHover]=useState(false)
  const onHover=()=>{
    setHover(!hover)
  }

  return (
    <Container>
      <MainContent>
        <Bg>
            <ImageBg src={grid} alt="grid"></ImageBg>
        </Bg>
        <ImageShadow>
            <Image src={alpha} alt='Alpha+'></Image>    
        </ImageShadow>
      </MainContent>
      <BtnWrapper>      
              <GradientButton to="/contactus" onMouseEnter={onHover} onMouseLeave={onHover}>
                  Contactez Nous { hover? <ArrowRight/>:<ArrowForward/>}
              </GradientButton>
      </BtnWrapper>

    </Container>
    

  )
}

export default MainPlateforme
