import React, { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';
import OrangeSlice from './images/Gajo-de-naranja.png';
import Naranja from './images/Naranja-con-hoja.png';
import Bottle from './images/Orange-Bottle.png';

const moveLeft = keyframes`
  from {
    left: 50%;
  }
  to {
    left: -40%;
  }
`;

const moveRight = keyframes`
  from {
    left: -40%;
  }
  to {
    left: 140%;
  }
`;

const slideBack = keyframes`
  from {
    left: 140%;
  }
  to {
    left: 50%;
  }
`;

const OrangeBottle = () => {
  const [currentState, setCurrentState] = useState('state1');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentState((prev) => {
        if (prev === 'state1') return 'state2';
        if (prev === 'state2') return 'state3';
        if (prev === 'state3') return 'state1';
        return 'state1'; // Fallback value
      });
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <OrangeContainer currentState={currentState}>
      <StyledOrangeSlice src={OrangeSlice} alt="Orange Slice" />
      <StyledNaranja src={Naranja} alt="Naranja" />
      <Image src={Bottle} alt="Orange Bottle" style={{ width: '100%', height: 'auto' }} />
    </OrangeContainer>
  );
};

const OrangeContainer = styled.div`
  position: absolute;
  top: 50%;
  left: ${(props) => {
    if (props.currentState === 'state1') return '50%';
    if (props.currentState === 'state2') return '-20%';
    if (props.currentState === 'state3') return '120%';
    return '50%'; // Fallback value
  }};
  transform: translate(-50%, -50%);
  transition: ${(props) =>
    props.currentState === 'state2' || props.currentState === 'state3'
      ? 'left 0s linear'
      : props.currentState === 'state1'
      ? 'left 1s ease-in-out'
      : 'none'};
  animation: ${(props) =>
    props.currentState === 'state2'
      ? css`
          ${moveLeft} 1s ease-in-out forwards
        `
      : props.currentState === 'state3'
      ? css`
          ${moveRight} 0s linear forwards
        `
      : props.currentState === 'state1'
      ? css`
          ${slideBack} 1s ease-in-out forwards
        `
      : 'none'};
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

const Image = styled.img``;

export default OrangeBottle;