import React from 'react'
import {SubTitle,Container,H1} from '../SharedComponents'
import { VisionCard,CardIconHeart,VisionWrapper,CardH2,CardP, CardIconPeople, CardIconShare, CardIconArrow} from './VisionElements'


const Vision = () => {
  return (
    <Container id="vision">
        <H1 center={1}>Travailler avec des experts, la garantie d’être le meilleur dans le domaine</H1>
        <SubTitle center={1}>Tu vas devenir l’un de nous</SubTitle>
        <VisionWrapper>
            <VisionCard>
                <CardIconHeart></CardIconHeart>
                <CardH2>Partenaire</CardH2>
                <CardP>Développer un partenariat solide qui s’inscrit sur le long terme.</CardP>
            </VisionCard>
            <VisionCard>
                <CardIconPeople></CardIconPeople>
                <CardH2>Culture</CardH2>
                <CardP>S’approprier davantage la culture de nos clients pour mieux comprendre leurs besoins.</CardP>
            </VisionCard>
            <VisionCard>
                <CardIconShare></CardIconShare>
                <CardH2>Partage</CardH2>
                <CardP>Partager notre expertise du digital avec nos clients afin de leurs permettre d’atteindre leurs objectifs.</CardP>
            </VisionCard>
            <VisionCard>
                <CardIconArrow></CardIconArrow>
                <CardH2>Numériser</CardH2>
                <CardP>Digitaliser leurs process afin que le numérique leur devient un atout de progression et de performances.</CardP>
            </VisionCard>
        </VisionWrapper>


    </Container>
  )
}

export default Vision
