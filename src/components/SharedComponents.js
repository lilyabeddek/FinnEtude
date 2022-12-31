import styled,{ keyframes }from "styled-components";
import {Link} from 'react-router-dom'
import{MdArrowForward, MdKeyboardArrowRight} from 'react-icons/md';

export const Button=styled(Link)`
    border-radius:8px;
    background: ${({gradient})=>(gradient?'conic-gradient(#B786A0,#507BEC,#3F92E7,#4E81D1,#715A9B,#C0326A,#BB4D66,#ED715C,#E39082);':'linear-gradient(to left, #435BAF, #6841D7);')}
    white-space:nowrap;
    padding:0.8rem 2rem;
    color:#fff;
    font-size:1.2rem;
    font-weight: 500;
    text-align:center;
    cursor:pointer;
    text-decoration:none;
    display:flex;
    justify-content:center;
    align-items:center;
    transition:all 0.2s ease-in-out;

    @media screen and (max-width:768px){
      font-size:1.5rem;
    }
  
    @media screen and (max-width:480px){
      font-size:1.2rem;
    }

    &:hover{
        transform: scale(1.1);
    }
`;

export const GradientButton=styled(Link)`
    border-radius:8px;
    background: conic-gradient(#B786A0,#507BEC,#3F92E7,#4E81D1,#715A9B,#C0326A,#BB4D66,#ED715C,#E39082);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-fill-color:transparent;
    font-size:1.8rem;
    font-weight: 700;
    text-align:center;
    white-space:nowrap;
    cursor:pointer;
    display:flex;
    justify-content:center;
    align-items:center;
    transition:all 0.2s ease-in-out;

    @media screen and (max-width:768px){
      font-size:1.5rem;
    }
  
    @media screen and (max-width:480px){
      font-size:1.2rem;
    }

    &:hover{ 
        transform: scale(1.1);
    }
`;

export const ArrowForward=styled(MdArrowForward)`
  margin-left:1rem;
  font-size:2rem;
  color:#fff
`;

export const ArrowRight=styled(MdKeyboardArrowRight)`
  margin-left:1rem;
  font-size:2rem;
  color:#fff
`;

export const BtnWrapper=styled.div`
  margin-top:2rem;
  display:flex;
  justify-content: flex-start;
  align-items:center;

`;

export const Container=styled.div`
    height:fit-content;
    padding:10%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    background: #1C1D1F;

`;

export const H1=styled.h1`

    color:#f7f8fa;
    font-size:2rem;
    font-weight: 900;
    text-align:${({center})=>(center?'center':'left')};
    margin-bottom:1rem;
  
    @media screen and (max-width:768px){
      font-size:1.5rem;
    }
  
    @media screen and (max-width:480px){
      font-size:1.3rem;
    }
  
  `;

  export const SubTitle=styled.p`
    margin-bottom:2rem 0;
    max-width:70%;
    color:#A7A9BE;
    font-size:18px;
    text-align:${({center})=>(center?'center':'left')};
    line-height:1.5;

    @media screen and (max-width:480px){
        font-size:14px
    }

  `;



export const breatheAnimation = keyframes`
  0% {
    opacity: 0;
    filter: brightness(3) saturate(3);
    transform: scale(0.8, 0.8);
  }
  100% {
    opacity: 1;
    filter: brightness(1) saturate(1);
    transform: scale(1, 1);
  }

`;


