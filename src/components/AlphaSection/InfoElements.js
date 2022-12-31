import styled from "styled-components";

export const InfoContainer=styled.div`
    background:#060606;
    padding-left:5%;
    padding-top:10%;
    padding-bottom:10%;
    height:fit-content;
    width:100%;
    display:grid;
    grid-auto-columns:minmax(auto,1fr);
    align-items:center;
    justify-content:center;
    grid-template-areas:${({imgStart})=>(imgStart?`'col2 col1'`:`'col1 col2'`)};

    @media screen and (max-width:768px){
        grid-template-areas:${({imgStart})=>(imgStart?`'col1' 'col2'`:`'col1 col1' 'col2 col2'`)};
    }
    
`;


export const InfoColumn=styled.div`
    margin:5% 5%;
    grid-area:col1;
`;

export const ImageColumn=styled.div`
    margin-left: 5%;
    grid-area:col2;

`;


export const OverlapGroup=styled.div`
    border-radius: 2rem 0 0 2rem;
    overflow:hidden;
    height:100%;
    width:100%;
    padding-top: 10%;
    padding-left: 10%;
    background:conic-gradient(#B786A0,#807BC3,#6476D4,#507BEC,#3F92E7,#4E81D1,#715A9B,#C0326A,#BB4D66,#ED715C,#E39082);
    display:flex;
    justify-content:flex-end;
    align-items:flex-end;
   

`;

export const Img=styled.img`
    width:100%;
    height:100%;
    border-radius: 1rem 0 0 0;

`;