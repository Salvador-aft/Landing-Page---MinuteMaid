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
      transform: rotate(240deg);
    }
    100% {
      transform: rotate(130deg);
    }
  `,
  state2: keyframes`
    0% {
      transform: rotate(130deg);
    }
    100% {
      transform: rotate(170deg);
    }
  `,
  state3: keyframes`
    0% {
      transform: rotate(170deg);
    }
    100% {
      transform: rotate(240deg);
    }
  `,
};

const LeafThree = ({ style }) => {
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
      <div>
        <StyledLeaf
          src={LeafImage}
          alt="Hoja"
          animationState={currentState}
          style={style}
        />
      </div>
    );
  };
  
  const StyledLeaf = styled.img`
  position: fixed;
  top: -100px;
  left: 1850px;
  width: 20%;
  height: auto;
  animation: ${(props) =>
    props.animationState
      ? css`
          ${animations[props.animationState]} 2s forwards
        `
      : 'none'};
`;

export default LeafThree;