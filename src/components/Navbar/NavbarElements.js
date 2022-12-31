import styled from "styled-components";
import {Link} from 'react-router-dom'
import {Link as LinkScroll} from 'react-scroll'

export const Nav = styled.nav`
    background: ${({scrollNav})=>(scrollNav? '#000':'transparent')};
    height:70px;
    margin-top:-70px;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:1rem;
    position:sticky;
    top:0;
    z-index:10;

    @media screen and (max-width: 960px){
        transition:0.8 all ease;
    }

`;

export const NavbarContainer=styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    height:70px;
    z-index:1;
    width:100%;
    padding:0 24px;
    max-width:1100px;
`;

export const NavLogo=styled.img`
    justify-self:flex-start;
    cursor:pointer;
    display:flex;
    align-items:center;
    height:59px;
    width:122px;

`;

export const MobileIcon=styled.div`
    display:none;
    @media screen and (max-width:768px){
        justify-self:flex-start;
        cursor:pointer;
        display:flex;
        align-items:center;
        position:absolute;
        right:8%;
        color:#fff;

    }
`;

export const NavMenu=styled.ul`
    display:flex;
    aligh-items:center;
    list-style:none;
    text-align:center;
    margin-right:-22px;

    @media screen and (max-width:768px){
        display:none;
    }
`;
export const NavItem=styled.li`
    height:70px;
`;

export const NavLinks=styled(LinkScroll)`
    color:#fff;
    display:flex;
    align-items:center;
    text-decoration:none;
    padding:0 1rem;
    height:100%;
    cursor:pointer;

    &.active{
        border-bottom:3px solid #435BAF;
    }

`;

export const NavBtn=styled.nav`
    display:flex;
    align-items:center;
    @media screen and (max-width:768px){
        display:none;
    }
`;

export const NavBtnLink=styled(Link)`
    border-radius:80px;
    background:linear-gradient(to left, #435BAF, #6841D7);
    white-space: nowrap;
    padding: 10px 22px;
    color: #fff;
    font-size:1rem;
    outline:none;
    border:none;
    cursor:pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover{
        transition: all 0.2s ease-in-out;
        background:#fff;
        color:#435BAF;
    }

`;

