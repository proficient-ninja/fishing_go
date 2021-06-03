import React from 'react';
import Styled from 'styled-components';

const StyledHeader = Styled.header`
display:flex;
justify-content:center;
width: 100%;
height: 50px;
img{
  height:100%;
}
`;

const Header = () => {
  return <StyledHeader></StyledHeader>;
};

export default Header;
