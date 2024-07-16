import React, { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';
import AppleSlice from './images/Apple-Slice.png';
import Apple from './images/Apple-Fruit.png';
import Bottle from './images/Apple-Bottle.png';

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

const AppleBottle = () => {
  const [currentState, setCurrentState] = useState('state3');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentState((prev) => {
        if (prev === 'state1') return 'state2';
        if (prev === 'state2') return 'state3';
        if (prev === 'state3') return 'state1';
        return 'state1';
      });
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <OrangeContainer currentState={currentState}>
      <StyledAppleSlice src={AppleSlice} alt="Apple Slice" />
      <StyledApple src={Apple} alt="Apple" />
      <Image src={Bottle} alt="Apple Bottle" style={{ width: '100%', height: 'auto' }} />
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

const Image = styled.img``;

const StyledAppleSlice = styled(Image)`
  position: absolute;
  top: 5%;
  left: 15%;
  width: 40%;
  height: auto;
  z-index: 1;
  transform: rotate(-45deg);
`;

const StyledApple = styled(Image)`
  position: absolute;
  top: 50%;
  left: 60%;
  width: 35%;
  height: auto;
  z-index: 1;
`;

export default AppleBottle;