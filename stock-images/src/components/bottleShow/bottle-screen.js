import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import MainBackground from './background-animation/main-background';
import OrangeBottle from './animation-orange-bottle/orange-bottle';
import AppleBottle from './animation-apple-bottle/apple-bottle';
import RaspberryBottle from './animation-raspberry-bottle/raspberry-bottle';
import LeafOne from './LeafOne/leaf-one';
import LeafTwo from './LeafTwo/leaf-two';
import LeafThree from './LeafThree/leaf-three';
import LeafFour from './LeafFour/leaf-four';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    overflow: hidden;
  }
`;

const BottleScreen = () => {
  return (
    <>
      <GlobalStyles />
      <MainBackground />
      <OrangeBottle />
      <AppleBottle />
      <RaspberryBottle />
      <LeafOne/>
      <LeafTwo/>
      <LeafThree/>
      <LeafFour/>
    </>
  );
};

export default BottleScreen;