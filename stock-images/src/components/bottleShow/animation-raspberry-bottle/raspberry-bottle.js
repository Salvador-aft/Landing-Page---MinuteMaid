import React, { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';
import Cranberry from './images/Cranberry.png';
import Raspberry from './images/Raspberry.png';
import Bottle from './images/Raspberry-bottle.png';

// Define keyframe animations for different states
// Animation to move the bottle left
const moveLeft = keyframes`
  from {
    left: 50%;
  }
  to {
    left: -40%;
  }
`;

// Animation to move the bottle right
const moveRight = keyframes`
  from {
    left: -40%;
  }
  to {
    left: 140%;
  }
`;

// Animation to slide the bottle back to the center
const slideBack = keyframes`
  from {
    left: 140%;
  }
  to {
    left: 50%;
  }
`;

// Main component for the raspberry bottle animation
const RaspberryBottle = () => {
  // useState hook to manage the current state of the animation
  const [currentState, setCurrentState] = useState('state2');

  // useEffect hook to set up an interval that cycles through the states
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentState((prev) => {
        if (prev === 'state1') return 'state2';
        if (prev === 'state2') return 'state3';
        if (prev === 'state3') return 'state1';
        return 'state1'; // Fallback value
      });
    }, 10000); // Change state every 10 seconds

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <OrangeContainer currentState={currentState}>
      <StyledOrangeSlice src={Cranberry} alt="Cranberry" />
      <StyledNaranja src={Raspberry} alt="Raspberry" />
      <Image src={Bottle} alt="Raspberry Bottle" style={{ width: '100%', height: 'auto' }} />
    </OrangeContainer>
  );
};

// Styled component for the container, changes position and animation based on the current state
const OrangeContainer = styled.div`
  position: absolute;
  top: 50%;

  // Dynamically set the left position based on the current state
  left: ${(props) => {
    if (props.currentState === 'state1') return '50%';
    if (props.currentState === 'state2') return '-20%';
    if (props.currentState === 'state3') return '120%';
    return '50%'; // Fallback value
  }};
  
  transform: translate(-50%, -50%);

  // Transition logic for position changes
  transition: ${(props) =>
    props.currentState === 'state2' || props.currentState === 'state3'
      ? 'left 0s linear' // Immediate transition for state 2 and 3
      : props.currentState === 'state1'
      ? 'left 1s ease-in-out' // Smooth transition for state 1
      : 'none'};

  // Apply keyframe animations based on the current state
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

// Styled component for the cranberry image
const StyledOrangeSlice = styled.img`
  position: absolute;
  top: 0%;
  left: 10%;
  width: 65%;
  height: auto;
  z-index: 1;
  transform: rotate(-15deg);
`;

// Styled component for the raspberry image
const StyledNaranja = styled.img`
  position: absolute;
  top: 40%;
  left: 45%;
  width: 50%;
  height: auto;
  z-index: 1;
  transform: rotate(0deg);
`;

// General styled component for images
const Image = styled.img``;

export default RaspberryBottle;