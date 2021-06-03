import React from 'react';
import Styled from 'styled-components';

const StyledHeader = Styled.header`
display:flex;
justify-content:center;
width: 100%;
height: 60px;
padding: 10px 0;
img{
  height:100%;
}
`;

const Header = () => {
  return (
    <StyledHeader>
      {/* public 폴더에있는 로고사진 */}
      <img src={process.env.PUBLIC_URL + '/logo-white.png'} alt="logo" />
    </StyledHeader>
  );
};

export default Header;
