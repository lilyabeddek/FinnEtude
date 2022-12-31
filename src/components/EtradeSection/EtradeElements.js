import styled from "styled-components";
import {breatheAnimation} from '../SharedComponents'


export const EtradeOverlapGroup=styled.div`
    position: relative;
    width:100%;
    height:fit-content;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:2rem;
    padding:15% 20%;
    margin:10% 0;
    background:conic-gradient(#B786A0,#807BC3,#6476D4,#507BEC,#3F92E7,#4E81D1,#715A9B,#C0326A,#BB4D66,#ED715C,#E39082);
    animation-name: ${breatheAnimation};
    animation-timing-function: ease;
    animation-duration: 0.75s;
`;

export const EtradeImg=styled.img`
    width:100%;
`;
