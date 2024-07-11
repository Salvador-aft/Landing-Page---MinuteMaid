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
    left: -20%;
  }
`;

const moveRight = keyframes`
  from {
    left: -20%;
  }
  to {
    left: 120%;
  }
`;

const slideBack = keyframes`
  from {
    left: 120%;
  }
  to {
    left: 50%;
  }
`;

const Test1 = () => {
  const [currentState, setCurrentState] = useState('state1');

  useEffect(() => {
    const timers = [];

    const changeState = (fromState, toState, timeout) => {
      const timer = setTimeout(() => {
        setCurrentState(toState);
      }, timeout);
      timers.push(timer);
    };

    const startLoop = () => {
      changeState('state1', 'state2', 10000);
      changeState('state2', 'state3', 10000);
      changeState('state3', 'state1', 10000);

    
      setTimeout(() => {
        startLoop();
      }, 30000);
    };

 
    startLoop();

    return () => {
      timers.forEach((timer) => clearTimeout(timer));
    };
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
    props.currentState === 'state1' || props.currentState === 'state2' || props.currentState === 'state3'
      ? 'left 1s ease-in-out'
      : 'none'};


  animation: ${(props) =>
    props.currentState === 'state2'
      ? css`
          ${moveLeft} 1s ease-in-out forwards
        `
      : props.currentState === 'state3'
      ? css`
          ${moveRight} 1s ease-in-out forwards
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

const Image = styled.img`

`;

export default Test1;