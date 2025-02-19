import React from 'react'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


function Navbar() {
  return (
    <NavbarStyled>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/profile'>Profile</NavLink>
      <button>Sign In / Sign Up</button>
    </NavbarStyled>
  );
}

const NavbarStyled = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 3%;
  border-style: solid;
  border-width: 5px;
  border-color: black;
`

export default Navbar;