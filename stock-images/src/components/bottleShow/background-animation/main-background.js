import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled, { createGlobalStyle, keyframes, css } from 'styled-components';
import BackgroundOrange from './background-orange/background-orange';
import BackgroundApple from './background-apple/background-apple';
import BackgroundRaspberry from './background-raspberry/background-raspberry';
import LeafImage from '../LeafOne/images/Leaf.png';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    overflow: hidden;
  }
`;

const animations = {
  state1: keyframes`
    0% {
      transform: rotate(200deg);
    }
    100% {
      transform: rotate(100deg);
    }
  `,
  state2: keyframes`
    0% {
      transform: rotate(100deg);
    }
    100% {
      transform: rotate(150deg);
    }
  `,
  state3: keyframes`
    0% {
      transform: rotate(150deg);
    }
    100% {
      transform: rotate(200deg);
    }
  `,
};

function MainBackground() {
  const [backgroundState, setBackgroundState] = useState('state1');
  const [currentState, setCurrentState] = useState('state1');

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundState((prev) => {
        if (prev === 'state1') return 'state2';
        if (prev === 'state2') return 'state3';
        if (prev === 'state3') return 'state1';
        return 'state1';
      });
    }, 10000);

    const leafInterval = setInterval(() => {
      setCurrentState((prev) => {
        if (prev === 'state1') return 'state2';
        if (prev === 'state2') return 'state3';
        if (prev === 'state3') return 'state1';
        return 'state1';
      });
    }, 10000);

    return () => {
      clearInterval(interval);
      clearInterval(leafInterval);
    };
  }, []);

  const getBackgroundColor = () => {
    switch (backgroundState) {
      case 'state1':
        return '#f8cb52';
      case 'state2':
        return '#237d50';
      case 'state3':
        return '#c6013b';
      default:
        return '#f8cb52';
    }
  };

  return (
    <BackgroundContainer>
      <GlobalStyles />
      <BackgroundOverlay color={getBackgroundColor()} />
      <BackgroundOverlay>
        <BackgroundOrange />
        <BackgroundApple />
        <BackgroundRaspberry />
        <StyledLeaf src={LeafImage} alt="Hoja" animationState={currentState} top="10%" left="80%" height="20%" />
        <StyledLeaf src={LeafImage} alt="Hoja" animationState={currentState} top="90%" left="-7%" height="20%" />
        <StyledLeaf src={LeafImage} alt="Hoja" animationState={currentState} top="-10%" left="185%" height="20%" />
        <StyledLeaf src={LeafImage} alt="Hoja" animationState={currentState} top="93%" left="190%" height="17%" />
      </BackgroundOverlay>
    </BackgroundContainer>
  );
}

const BackgroundContainer = styled.div`
  position: relative;
`;

const BackgroundOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -2;
  background-color: ${(props) => props.color};
`;

const StyledLeaf = styled.img`
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  height: ${(props) => props.height};
  width: auto;
  animation: ${(props) =>
    props.animationState
      ? css`
          ${animations[props.animationState]} 2s forwards
        `
      : 'none'};
`;

export default MainBackground;