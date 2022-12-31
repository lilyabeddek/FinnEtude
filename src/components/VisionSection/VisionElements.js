import styled from "styled-components";
import {breatheAnimation} from '../SharedComponents'
import {BsFillHeartFill,BsFillPeopleFill} from 'react-icons/bs'
import{HiShare} from 'react-icons/hi'
import{FaLocationArrow} from 'react-icons/fa'


export const VisionWrapper=styled.div`
    
    margin:2rem auto;
    display:grid;
    grid-template-columns: 1fr 1fr;
    align-items:center;
    grid-gap:2rem;

    @media screen and (max-width:768px){
        grid-template-columns: 1fr;
    }
`;
export const VisionCard=styled.div`
    background:#27272A;
    color:#fff;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:flex-start;
    border-radius:16px;
    max-height:270px;
    padding:52px;
    box-shadow:0 8px 16px rgba(0,0,0,0.2);
    transition: all 0.2 ease-in-out;
    animation-name: ${breatheAnimation};
    animation-timing-function: ease;
    animation-duration: 0.75s;
   

    &:hover{
        transform: scale(1.02);
        transition: all 0.2 ease-in-out;
        cursor:pointer;
    }
`;
export const CardIconHeart=styled(BsFillHeartFill)`
    height:1.5rem;
    width:1.5rem;
    margin-bottom:1.5rem;
    color:#5E6AD2;

`;
export const CardIconPeople=styled(BsFillPeopleFill)`
    height:1.5rem;
    width:1.5rem;
    margin-bottom:1.5rem;
    color:#5E6AD2;

`;
export const CardIconShare=styled(HiShare)`
    height:1.5rem;
    width:1.5rem;
    margin-bottom:1.5rem;
    color:#5E6AD2;

`;
export const CardIconArrow=styled(FaLocationArrow)`
    height:1.5rem;
    width:1.5rem;
    margin-bottom:1.5rem;
    color:#5E6AD2;

`;

export const CardH2=styled.h2`
    font-size:1rem;
    margin-bottom:10px;

`;
export const CardP=styled.p`
    font-size:1rem;
    text-align:start;
    line-height: 1.5;
`;



