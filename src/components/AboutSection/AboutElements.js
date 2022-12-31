import styled from "styled-components";

export const AboutContainer=styled.div`
    height:fit-content;
    padding:10% 10% ;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:flex-start;
    background: #060606;

`;

  export const AboutP=styled.p`
  font-size:18px;
  @media screen and (max-width:480px){
    font-size:14px
  }
  `;
  export const Span=styled.span`
    color:#A7A9BE;
    font-weight: 400;
  `;
  export const WhiteSpan=styled.span`
    color:#fff;
    font-weight: 500;
  `;
  export const GreenSpan=styled.span`
    color:#10C200;
    font-weight: 400;
  `;
  export const GreySpan=styled.span`
    color:#C4C4C4;
    font-weight: 400;
  `;

  