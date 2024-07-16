import React, { useState, useEffect } from 'react';
import styled, { createGlobalStyle, keyframes, css } from 'styled-components';
import LeafImage from './images/Leaf.png';

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

const LeafOne = () => {
  const [currentState, setCurrentState] = useState('state1');

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
    <>
      <GlobalStyles />
      <StyledLeaf
        src={LeafImage}
        alt="Hoja"
        fluid
        animationState={currentState}
      />
    </>
  );
};

const StyledLeaf = styled.img`
  position: absolute;
  top: 10vh;
  left: 8vw;
  width: 100px;
  height: 100px;
  animation: ${(props) =>
    props.animationState
      ? css`
          ${animations[props.animationState]} 2s forwards
        `
      : 'none'};
`;

export default LeafOne;