// BackgroundSwitcher.js
import React, { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';

const switchDuration = 10000;
const transitionSpeed = 2;

const moveLeft = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const moveRight = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

const BackgroundSwitcher = () => {
  const [currentState, setCurrentState] = useState('state1');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentState((prev) => {
        if (prev === 'state1') return 'state2';
        if (prev === 'state2') return 'state3';
        if (prev === 'state3') return 'state1';
        return 'state1'; // Fallback value
      });
    }, switchDuration);

    return () => clearInterval(interval);
  }, []);

  return (
    <StyledSwitcher currentState={currentState}>
      <StyledBackgroundOrange>
        <StyledText>ORANGE</StyledText>
      </StyledBackgroundOrange>
      <StyledBackgroundGreen>
        <StyledText>GREEN</StyledText>
      </StyledBackgroundGreen>
      <StyledBackgroundRaspberry>
        <StyledText>RASPERRY</StyledText>
      </StyledBackgroundRaspberry>
    </StyledSwitcher>
  );
};

const StyledSwitcher = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 300%; /* Ajusta este valor según tus necesidades */
  height: 100%;
  z-index: -1;
  animation: ${(props) =>
    props.currentState === 'state1'
      ? css`
          ${moveLeft} ${transitionSpeed}s linear infinite
        `
      : props.currentState === 'state2'
      ? css`
          ${moveLeft} ${transitionSpeed}s linear infinite
        `
      : props.currentState === 'state3'
      ? css`
          ${moveLeft} ${transitionSpeed}s linear infinite
        `
      : 'none'};
`;

const StyledBackgroundOrange = styled.div`
  flex: 1;
  height: 100%;
  background-color: #f8cb52;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${moveLeft} ${switchDuration / 1000}s linear infinite;
`;

const StyledBackgroundGreen = styled.div`
  flex: 1;
  height: 100%;
  background-color: #237d50;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${moveLeft} ${switchDuration / 1000}s linear infinite;
`;

const StyledBackgroundRaspberry = styled.div`
  flex: 1;
  height: 100%;
  background-color: #c6013b;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${moveLeft} ${switchDuration / 1000}s linear infinite;
`;

const StyledText = styled.h1`
  font-family: 'Passion One', sans-serif;
  font-size: 25vw;
  color: white;
  margin-bottom: 50vh;
  user-select: none;
`;

export default BackgroundSwitcher;