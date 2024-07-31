import React, { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';
import AppleSlice from './images/Apple-Slice.png';
import Apple from './images/Apple-Fruit.png';
import Bottle from './images/Apple-Bottle.png';

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

// Main component for the apple bottle animation
const AppleBottle = () => {
  // useState hook to manage the current state of the animation
  const [currentState, setCurrentState] = useState('state3');

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
      <StyledAppleSlice src={AppleSlice} alt="Apple Slice" />
      <StyledApple src={Apple} alt="Apple" />
      <Image src={Bottle} alt="Apple Bottle" style={{ width: '100%', height: 'auto' }} />
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