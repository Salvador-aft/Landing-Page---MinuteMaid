import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled, { createGlobalStyle, keyframes, css } from 'styled-components';
import BackgroundOrange from './background-orange/background-orange';
import BackgroundApple from './background-apple/background-apple';
import BackgroundRaspberry from './background-raspberry/background-raspberry';
import LeafImage from '../../../assets/Leaf.png';

// Global styles to reset some default browser styles
const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    overflow: hidden;
  }
`;

// Keyframe animations for different states of the leaves
const animations = {
  // Orange Bottle
  state1: keyframes`
    0% {
      transform: rotate(200deg);
    }
    100% {
      transform: rotate(100deg);
    }
  `,
  // Apple Bottle
  state2: keyframes`
    0% {
      transform: rotate(100deg);
    }
    100% {
      transform: rotate(150deg);
    }
  `,
  // Raspberry Bottle
  state3: keyframes`
    0% {
      transform: rotate(150deg);
    }
    100% {
      transform: rotate(200deg);
    }
  `,
};

// Main component for handling background and leaf animations
function MainBackground() {
  // useState hooks to manage the current state of the background and leaves
  const [backgroundState, setBackgroundState] = useState('state1');
  const [currentState, setCurrentState] = useState('state1');

  // useEffect hook to set up intervals that cycle through the states
  useEffect(() => {
    // Interval to cycle background states
    const interval = setInterval(() => {
      setBackgroundState((prev) => {
        if (prev === 'state1') return 'state2';
        if (prev === 'state2') return 'state3';
        if (prev === 'state3') return 'state1';
        return 'state1'; // Fallback value
      });
    }, 10000); // Change state every 10 seconds

    // Interval to cycle leaf animation states
    const leafInterval = setInterval(() => {
      setCurrentState((prev) => {
        if (prev === 'state1') return 'state2';
        if (prev === 'state2') return 'state3';
        if (prev === 'state3') return 'state1';
        return 'state1'; // Fallback value
      });
    }, 10000); // Change state every 10 seconds

    // Cleanup function to clear the intervals when the component unmounts
    return () => {
      clearInterval(interval);
      clearInterval(leafInterval);
    };
  }, []);

  // Function to get the background color based on the current state
  const getBackgroundColor = () => {
    switch (backgroundState) {
      case 'state1':
        return '#f8cb52';
      case 'state2':
        return '#237d50';
      case 'state3':
        return '#c6013b';
      default:
        return '#f8cb52'; // Fallback color
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
        <StyledLeaf src={LeafImage} alt="Leaf" animationState={currentState} variant="leaf1" />
        <StyledLeaf src={LeafImage} alt="Leaf" animationState={currentState} variant="leaf2" />
        <StyledLeaf src={LeafImage} alt="Leaf" animationState={currentState} variant="leaf3" />
        <StyledLeaf src={LeafImage} alt="Leaf" animationState={currentState} variant="leaf4" />
      </BackgroundOverlay>
    </BackgroundContainer>
  );
}

const BackgroundContainer = styled.div`
  position: relative;
`;

// Styled component for the background overlay, changes color based on the current state
const BackgroundOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -2;
  background-color: ${(props) => props.color};
`;

// Styled component for the leaf images, applies different animations based on the current state
const StyledLeaf = styled.img`
  position: absolute;
  height: ${(props) => props.height};
  width: auto;
  animation: ${(props) =>
    props.animationState
      ? css`
          ${animations[props.animationState]} 2s forwards
        `
      : 'none'};

  // Different styles based on the leaf variant
  ${(props) =>
    props.variant === 'leaf1' &&
    css`
      top: 5%;
      left: 82%;
      width: 300px;
      height: auto;

      @media (max-width: 1400px) {
        top: 10%;
        left: 85%;
        width: 200px;
      }

      @media (max-width: 1200px) {
        top: 15%;
        left: 80%;
        width: 200px;
      }

      @media (max-width: 992px) {
        top: 20%;
        left: 83%;
        width: 150px;
      }

      @media (max-width: 768px) {
        top: 25%;
        left: 85%;
        width: 100px;
      }

      @media (max-width: 576px) {
        top: 26%;
        left: 82%;
        width: 100px;
      }
    `}

  ${(props) =>
    props.variant === 'leaf2' &&
    css`
      top: 10%;
      left: 0%;
      width: 200px;
      height: auto;

      @media (max-width: 1400px) {
        top: 12%;
        left: 5%;
        width: 150px;
      }

      @media (max-width: 1200px) {
        top: 15%;
        left: 5%;
        width: 125px;
      }

      @media (max-width: 992px) {
        top: 17%;
        left: 5%;
        width: 100px;
      }

      @media (max-width: 768px) {
        top: 23%;
        left: 5%;
        width: 75px;
      }

      @media (max-width: 576px) {
        top: 27%;
        left: 7%;
        width: 50px;
      }
    `}

  ${(props) =>
    props.variant === 'leaf3' &&
    css`
      top: 80%;
      left: -5%;
      width: 300px;
      height: auto;

      @media (max-width: 1400px) {
        top: 80%;
        left: -5%;
        width: 250px;
      }

      @media (max-width: 1200px) {
        top: 82%;
        left: -7%;
        width: 250px;
      }

      @media (max-width: 992px) {
        top: 85%;
        left: -7%;
        width: 200px;
      }

      @media (max-width: 768px) {
        top: 87%;
        left: -8%;
        width: 200px;
      }

      @media (max-width: 576px) {
        top: 87%;
        left: -8%;
        width: 200px;
      }
    `}

  ${(props) =>
    props.variant === 'leaf4' &&
    css`
      top: 80%;
      left: 90%;
      width: 250px;
      height: auto;

      @media (max-width: 1400px) {
        top: 80%;
        left: 85%;
        width: 250px;
      }

      @media (max-width: 1200px) {
        top: 80%;
        left: 83%;
        width: 250px;
      }

      @media (max-width: 992px) {
        top: 82%;
        left: 80%;
        width: 225px;
      }

      @media (max-width: 768px) {
        top: 84%;
        left: 78%;
        width: 200px;
      }

      @media (max-width: 576px) {
        top: 84%;
        left: 72%;
        width: 200px;
      }
    `}
`;

export default MainBackground;