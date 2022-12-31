import React, {useState,useEffect} from 'react'
import {FaBars} from 'react-icons/fa'
import Logo from '../../assets/logo.png'
import{Nav,NavbarContainer,NavLogo,MobileIcon,NavMenu,NavItem,NavLinks,NavBtn,NavBtnLink} from './NavbarElements'
import { animateScroll as scroll } from 'react-scroll'


const Navbar = ({toggle}) => {

  const [scrollNav, setScrollNav]=useState(false);
  const changeNav=()=>{
    if(window.scrollY>=80){
        setScrollNav(true)
    }else{
        setScrollNav(false)
    }
  }
  useEffect(()=>{
    window.addEventListener('scroll',changeNav)
  },[]);

  const toggleHome=()=>{
    scroll.scrollToTop();
  }

  return (
    <>
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <NavLogo src={Logo} alt='Logo' onClick={toggleHome}/>
                <MobileIcon onClick={toggle}>
                    <FaBars></FaBars>
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to='about' smooth={true} duration={500} spy={true} exact='true' offset={-70}>A propos</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='vision' smooth={true} duration={500} spy={true} exact='true' offset={-70}>Vision</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='solutions' smooth={true} duration={500} spy={true} exact='true' offset={-70}>Solutions</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/contactus'>Contactez-Nous</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
    </>
  )
}

export default Navbar
