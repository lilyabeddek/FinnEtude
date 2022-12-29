import React from 'react'
import { Button } from '../ButtonElement'
import { InfoContainer,InfoWrapper,InfoRow,Column1,TextWrapper,TopLine,Heading,SubTitle,BtnWrap,ImgWrap,Img, Column2 } from './InfoElements'

const InfoSection = ({lightBg,id,imgStart,lightText,darkText,topLine,description,buttonLabel,headline,img,alt,primary,dark}) => {
  return (
    <>
        <InfoContainer lightBg={lightBg} id={id}>
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                    <Column1>
                    <TextWrapper>
                        <TopLine>{topLine}</TopLine>
                        <Heading lightText={lightText}>{headline}</Heading>
                        <SubTitle darkText={darkText}>{description}</SubTitle>
                        <BtnWrap>
                            <Button to="/purshace" smooth={true} duration={500} spy={true} exact="true" offset={-80}  >{buttonLabel}</Button>
                        </BtnWrap>

                    </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img src={img} alt={alt}></Img>
                        </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>

        </InfoContainer>
    </>
  )
}

export default InfoSection
