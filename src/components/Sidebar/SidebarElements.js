import styled from "styled-components";
import {Link} from 'react-router-dom'
import {Link as LinkScroll} from 'react-scroll'

export const SidebarContainer=styled.aside`
    position:fixed;
    z-index:999;
    width:100%;
    height:100%;
    background:#0d0d0d;
    align-items:center;
    top:0;
    left:0;
    transition:0.3 ease-in-out;
    opacity: ${({isOpen})=>(isOpen? '100%':'0')};
    display: ${({isOpen})=>(isOpen? 'grid':'none')};
    top:${({isOpen})=>(isOpen? '0':'-100%')};

`;

export const Icon=styled.div`
    justify-self:flex-start;
    display:flex;
    align-items:center;
    color:#fff;
    position:absolute;
    top:1.5rem;
    right:1.5rem;
    background:transparent;
    cursor:pointer;
    outline:none;

`;

export const SidebarWrapper=styled.div`
    color:#fff;
`;
export const SidebarMenu=styled.ul`
    display:grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6,180px);
    text-align:center;

    @media screen and (max-width:768px){
        grid-template-rows:repeat(6,50px);
    }

`;

export const SidebarLink=styled(LinkScroll)`
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:1.5rem;
    text-decoration:none;
    list-style:none;
    transition:0.2s ease-in-out;
    text-decoratation:none;
    color:#fff;
    cursor:pointer;
    
    &:hover{
        color:#6841D7;
        transition:0.2s ease-in-out;

    }
`;

export const SideBtnWrap=styled.div`
    display:flex;
    justify-content:center;
`;

export const SidebarRoute=styled(Link)`
    border-radius:50px;
    background:linear-gradient(to left, #435BAF, #6841D7);
    white-space: nowrap;
    padding: 16px 32px;
    color: #fff;
    font-size:16px;
    outline:none;
    border:none;
    cursor:pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover{
        transition: all 0.2s ease-in-out;
        background:#fff;
        color:#6841D7;
    }
`;