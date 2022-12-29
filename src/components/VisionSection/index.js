import React from 'react'
import { VisionCard,VisionContainer,VisionIcon,VisionWrapper,VisionH1,VisionH2,VisionP } from './VisionElements'
import Icon1 from '../../assets/icon1.png'
import Icon2 from '../../assets/icon2.png'
import Icon3 from '../../assets/icon3.png'

const Vision = () => {
  return (
    <VisionContainer id="vision">
        <VisionH1>Our Services</VisionH1>
        <VisionWrapper>
            <VisionCard>
                <VisionIcon src={Icon1}></VisionIcon>
                <VisionH2>Reduce Expences</VisionH2>
                <VisionP>we help you reduce your expences</VisionP>
            </VisionCard>
            <VisionCard>
                <VisionIcon src={Icon2}></VisionIcon>
                <VisionH2>Reduce Expences</VisionH2>
                <VisionP>we help you reduce your expences</VisionP>
            </VisionCard>
            <VisionCard>
                <VisionIcon src={Icon3}></VisionIcon>
                <VisionH2>Reduce Expences</VisionH2>
                <VisionP>we help you reduce your expences</VisionP>
            </VisionCard>
        </VisionWrapper>


    </VisionContainer>
  )
}

export default Vision
