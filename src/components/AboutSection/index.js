import React,{useState} from 'react'
import { GradientButton,BtnWrapper,ArrowForward,ArrowRight,H1} from '../SharedComponents'
import { AboutContainer,AboutP,Span,WhiteSpan,GreySpan,GreenSpan} from './AboutElements'

const AboutSection = () => {
    const  [hover,setHover]=useState(false)
    const onHover=()=>{
        setHover(!hover)
    }
    return (
    <AboutContainer id="about">
        <H1 center={0}>Qui sommes-nous :</H1>
        <AboutP>
            <Span>Le succès de </Span>
            <WhiteSpan>FINNETUDE </WhiteSpan>
            <Span>repose sur ses développeurs, ses experts, son large réseau de consultants et sur la confiance de ses partenaires. </Span>
            <WhiteSpan>FINNETUDE </WhiteSpan>
            <Span>est une entreprise labélisé « </Span>
            <GreenSpan>Startup </GreenSpan>
            <Span>» pionnière et spécialisée dans le secteur de la finance et de l’assurance.</Span>
        </AboutP>
        <AboutP>
            <Span>Elle offre des produits et de solutions digitales basés sur la nouvelle technologie au service des </Span>
            <GreySpan>banques, assurances</GreySpan>
            <Span> et des </Span>
            <Span>entreprises.</Span>
        </AboutP>
        <AboutP>
            <Span>Nos équipes vous aident à diriger et à conduire vos projets de transformation Digitale, en travaillant avec des technologies de pointes, des méthodologies et pratiques très tendances.</Span>
        </AboutP>
        <BtnWrapper>      
            <GradientButton to="/contactus" onMouseEnter={onHover} onMouseLeave={onHover}>
                Contactez Nous { hover? <ArrowRight/>:<ArrowForward/>}
            </GradientButton>
        </BtnWrapper>
    </AboutContainer>
   
  )
}

export default AboutSection
