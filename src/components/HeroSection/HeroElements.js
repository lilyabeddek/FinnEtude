import styled from 'styled-components'
import{MdArrowForward} from 'react-icons/md';

export const HeroContainer=styled.div`
  background:#060606;
  display:flex;
  justify-content:center;
  flex-direction:column;
  align-items:center;
  padding:5% 10%;
  height:100vh;

`;

export const H1=styled.h1`
  margin:1rem;
  font-weight: 900;
  text-align:center;
`;

export const WhiteSpan=styled.span`
  font-size:3rem;
  color:#fff;
  @media screen and (max-width:768px){
    font-size:2rem;
  }

`;

export const ColorfulSpan=styled.span`
  background:conic-gradient(#B786A0,#507BEC,#3F92E7,#4E81D1,#715A9B,#C0326A,#BB4D66,#ED715C,#E39082);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size:3rem;
  @media screen and (max-width:768px){
    font-size:2rem;
  }

`;


export const Shadow=styled.div`
  z-index:2;
  display:flex;
  justify-content:center;
  align-items:center;

  &::before {
    content: "";
    background: linear-gradient(-45deg, #ff3d00 0%, #0400ff 100% );
    position: absolute;
    height: 5%;
    width: 30%;
    z-index: -1;
    filter: blur(60px);
  }
`;

export const HeroLastReleaseElement=styled.div`
  display:flex;
  width:fit-content;
  justify-content:space-between;
  align-items:center;
  padding: 1rem 1rem;
  background:#0B0B0C;
  border-radius:8px;
  margin:3rem;

`;



export const ImageLogo=styled.img`
  height:1.5rem;
  margin-right:1rem;
  object-fit:cover;

`;

export const LastReleaseContent=styled.div`
  display:flex;
  width:fit-content;
  justify-content:space-between;
  align-items:center;
`;

export const LastReleaseText=styled.p`
  color:#fff;
  font-size:1rem;
  white-space:nowrap;
  width:fit-content;
  margin-right: 1rem;
`;

export const LastReleaseLine=styled.div`
  min-width:1px;
  height:20px;
  object-fit:cover;
  background:#333333;
  margin-right: 1rem;
`;

export const LastReleaseButton=styled.p`
  width:fit-content;
  font-weight:500;
  font-size:1rem;
  white-space:nowrap;
  color:#465EB7;
  margin-right: 1rem;
`;

export const ArrowForwardLR=styled(MdArrowForward)`
  color:#465EB7;
  font-size:1.2rem;
`;