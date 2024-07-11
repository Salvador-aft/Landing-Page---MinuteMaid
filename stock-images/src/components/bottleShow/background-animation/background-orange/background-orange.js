import React, { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';

const moveLeft = keyframes`
  from {
    left: 0%;
  }
  to {
    left: -100%;
  }
`;

const moveRight = keyframes`
  from {
    left: -100%;
  }
  to {
    left: 200%;
  }
`;

const slideBack = keyframes`
  from {
    left: 200%;
  }
  to {
    left: 0%;
  }
`;

const BackgroundOrange = () => {
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
    <StyledBackground currentState={currentState}>
      <StyledText>ORANGE</StyledText>
    </StyledBackground>
  );
};

const StyledBackground = styled.div`
  position: fixed;
  top: 0;
  left: ${(props) => {
    if (props.currentState === 'state1') return '0%';
    if (props.currentState === 'state2') return '-100%';
    if (props.currentState === 'state3') return '100%';
    return '0%'; // Fallback value
  }};
  width: 100%;
  height: 100%;
  z-index: -1;
  background-color: #f8cb52;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: left 1s ease-in-out;
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

const StyledText = styled.h1`
  font-family: 'Passion One', sans-serif;
  font-size: 25vw;
  color: white;
  margin-bottom: 25vh;
  user-select: none;
`;

export default BackgroundOrange;