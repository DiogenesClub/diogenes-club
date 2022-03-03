import React, { useState } from 'react'
import { Container, Menu, LogoContainer, MenuItem, MenuItemLink, Wrapper, MobileIcon } from './navbar.style'
import { FaBars, FaHome, FaTimes, FaUserAlt, FaRegCalendar, FaBlog, FaArchway, FaBook } from "react-icons/fa";
import { IconContext } from 'react-icons/lib';
import Imagen from './../assets/bandera.png';

export const Navbar = () => {
    const [ showMenu, setShowMenu] = useState(false);
  return (
    <Container>
        <Wrapper>
            <IconContext.Provider value={{style:{fontSize:"2em"}}}>
            <LogoContainer>
                <img src={Imagen} alt=''/>
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
                    <MenuItemLink to="/publications">
                        <div>
                            <FaBook/>
                            Scientific Publications
                        </div>
                    </MenuItemLink>
                </MenuItem>
                <MenuItem onClick={()=> setShowMenu(!showMenu)}>
                    <MenuItemLink to="/academy">
                        <div>
                            <FaArchway/>
                            Academy
                        </div>
                    </MenuItemLink>
                </MenuItem>
                <MenuItem onClick={()=> setShowMenu(!showMenu)}>
                    <MenuItemLink to="/devblog">
                        <div>
                            <FaBlog/>
                            Dev Blog
                        </div>
                    </MenuItemLink>
                </MenuItem>
                <MenuItem onClick={()=> setShowMenu(!showMenu)}>
                    <MenuItemLink to="/events">
                        <div>
                            <FaRegCalendar/>
                            Events
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
