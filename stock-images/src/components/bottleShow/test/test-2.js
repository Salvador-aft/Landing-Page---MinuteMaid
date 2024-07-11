import React from 'react';
import styled from 'styled-components';
import OrangeSlice from './images/Gajo-de-naranja.png';
import Naranja from './images/Naranja-con-hoja.png';
import Bottle from './images/Orange-Bottle.png';

const Test2 = () => {
  return (
    <OrangeContainer>
      <StyledOrangeSlice src={OrangeSlice} alt="Orange Slice" />
      <StyledNaranja src={Naranja} alt="Naranja" />
      <Image src={Bottle} alt="Orange Bottle" style={{ width: '100%', height: 'auto' }} />
    </OrangeContainer>
  );
};

const OrangeContainer = styled.div`
  position: absolute;
  top: 50%;
  right: -30%;
  transform: translate(-50%, -50%);
`;

const StyledOrangeSlice = styled.img`
  position: absolute;
  top: 0;
  left: 10%;
  width: 50%;
  height: auto;
  z-index: 1;
`;

const StyledNaranja = styled.img`
  position: absolute;
  top: 40%;
  left: 45%;
  width: 50%;
  height: auto;
  z-index: 1;
`;

const Image = styled.img`

`;

export default Test2;