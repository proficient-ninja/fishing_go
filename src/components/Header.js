import React from 'react';
import Styled from 'styled-components';
import logo from '../img/logo-white.png';

const StyledHeader = Styled.header`
display:flex;
justify-content:center;
width: 100%;
height: 70px;
padding: 10px 0;
img{
  height:100%;
}
`;

const Header = () => {
  return (
    <StyledHeader>
      <img src={logo} alt="logo" />
    </StyledHeader>
  );
};

export default Header;
