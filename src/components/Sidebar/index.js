import React from 'react'
import { SidebarContainer,Icon,CloseIcon,SidebarWrapper,SidebarLink,SideBtnWrap,SidebarRoute,SidebarMenu} from './SidebarElements'

const Sidebar=({isOpen,toggle})=> {
  return (
    <SidebarContainer isOpen={isOpen}>
        <Icon onClick={toggle}>
            <CloseIcon/>
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to="about" onClick={toggle}>A propos</SidebarLink>
                <SidebarLink to="vision" onClick={toggle}>Vision</SidebarLink>
                <SidebarLink to="solutions" onClick={toggle}>Solutions</SidebarLink>
                
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to="/contactus" onClick={toggle}>Contactez Nous</SidebarRoute>
            </SideBtnWrap>
        </SidebarWrapper>
      
    </SidebarContainer>
  )
}

export default Sidebar
