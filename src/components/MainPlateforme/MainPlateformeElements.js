import styled from "styled-components";

export const Container= styled.div`
    width:auto;
    height:fit-content;
    display:flex;
    padding:10% 0;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    background: #060606;
`;

export const MainContent= styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    height:100vh;
    width:100%;
    position:relative;
    z_index:1;

`;

export const ImageShadow=styled.div`
  
  z-index:2;
  position:absolute;
  display:flex;
  justify-content:center;
  align-items:center;

  &::before {
    content: "";
    background: linear-gradient(-45deg, #ff3d00 0%, #0400ff 100% );
    position: absolute;
    height: 80%;
    width: 100%;
    z-index: -1;
    filter: blur(200px);
  }

`;

export const Image=styled.img`
    width:80%;
    border-radius:8px;
`;

export const Bg=styled.div`
  position:absolute;
  width:100%;
  height:100%;
  overflow:hidden;
`;

export const ImageBg=styled.img`
  width:100%;
  height:100%;
  -o-object-fit:cover;
  object-fit:cover;

`;
