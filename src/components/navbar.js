import React, { useState } from 'react'
import { Container, Menu, LogoContainer, MenuItem, MenuItemLink, Wrapper, MobileIcon } from './navbar.style'
import { FaBars, FaHome, FaTimes, FaUserAlt } from "react-icons/fa";
import { IconContext } from 'react-icons/lib';

export const Navbar = () => {
    const [ showMenu, setShowMenu] = useState(false);
  return (
    <Container>
        <Wrapper>
            <IconContext.Provider value={{style:{fontSize:"2em"}}}>
            <LogoContainer>
                <img src='./bandera.png' alt=''/>
                <p>Diógenes Club</p>
            </LogoContainer>
            <MobileIcon onClick={()=> setShowMenu(!showMenu)}>
                {
                    showMenu ? <FaTimes/> : <FaBars/>
                }
            </MobileIcon>
            <Menu open={showMenu}>
                <MenuItem onClick={()=> setShowMenu(!showMenu)}>
                    <MenuItemLink to="/"
                  
                    >
                        <div>
                            <FaHome/>
                            Home
                        </div>
                    </MenuItemLink>
                </MenuItem>
                <MenuItem onClick={()=> setShowMenu(!showMenu)}>
                    <MenuItemLink to="/about">
                        <div>
                            <FaUserAlt/>
                            About
                        </div>
                    </MenuItemLink>
                </MenuItem>
            </Menu>
            </IconContext.Provider>
        </Wrapper>
    </Container>
  )
}
