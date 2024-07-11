import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import BackgroundOrange from './background-orange/background-orange';
import BackgroundApple from './background-apple/background-apple';
import BackgroundRaspberry from './background-raspberry/background-raspberry';

function MainBackground() {
  const [backgroundState, setBackgroundState] = useState('state1');

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundState((prev) => {
        if (prev === 'state1') return 'state2';
        if (prev === 'state2') return 'state3';
        if (prev === 'state3') return 'state1';
        return 'state1'; // Fallback value
      });
    }, 10000);

    return () => clearInterval(interval);
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
      <BackgroundOverlay color={getBackgroundColor()} />
      <BackgroundOverlay>
        <BackgroundOrange />
        <BackgroundApple />
        <BackgroundRaspberry />
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

export default MainBackground;