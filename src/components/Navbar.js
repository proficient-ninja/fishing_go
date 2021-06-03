import React from 'react';
import Styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledNavbar = Styled.nav`
position:fixed;
bottom:0;
left:50%;
transform:translatex(-50%);
display:flex;
justify-content:space-between;
align-items:center;
width: 350px;
height: 60px;
padding: 10px 0;
`;

const Navbar = () => {
  return (
    <StyledNavbar>
      <Link to="/">Home</Link>
      <Link to="/weather">Weather</Link>
      <Link to="/find">Find</Link>
      <Link to="/mypage">Mypage</Link>
    </StyledNavbar>
  );
};

export default Navbar;
