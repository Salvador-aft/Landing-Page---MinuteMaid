import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSpring, animated } from 'react-spring';
import styled, { keyframes } from 'styled-components';
import Apple from '../apple/apple';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Bottle from './images/Orange-Bottle.png';
import OrangeSlice from './images/Gajo-de-naranja.png';
import Naranja from './images/Naranja-con-hoja.png';
import Hoja from './images/Leaf.png';


const Orange = () => {
  const [showOrangeBottle, setShowOrangeBottle] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowOrangeBottle((prevShowOrangeBottle) => !prevShowOrangeBottle);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const slideAnimation = useSpring({
    left: showOrangeBottle ? '50%' : '-1000px',
    config: { duration: 1000 },
  });

const StyledBackground = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
z-index: -1;
background-color: #f8cb52;
display: flex;
align-items: center;
justify-content: center;
`;

const StyledText = styled.h1`
  font-family: 'Passion One', sans-serif;
  font-size: 25vw;
  color: white;
  margin-bottom: 50vh;
  user-select: none;
`;

const MainRow = styled(Row)`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MainCol = styled(Col)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const OverlayContainer = styled.div`
  position: relative;
`;

const StyledOrangeSlice = styled(Image)`
  position: absolute;
  top: 0;
  left: 10%;
  width: 50%;
  height: auto;
  z-index: 1;
`;

const StyledNaranja = styled(Image)`
  position: absolute;
  top: 40%;
  left: 45%;
  width: 50%;
  height: auto;
  z-index: 1;
`;

const StyledLeafOne = styled(Image)`
  position: absolute;
  top: 200px;
  left: -100px;
  width: 80%;
  min-width: 50%;
  height: auto;
  transform: rotate(100deg);
`;

const StyledLeafTwo = styled(Image)`
  position: absolute;
  top: -25rem;
  left: 1rem;
  width: 50%;
  height: auto;
  transform: rotate(90deg);
`;

const StyledLeafThree = styled(Image)`
  position: absolute;
  top: -25rem;
  left: 10rem;
  width: 50%;
  height: auto;
  transform: rotate(130deg);
`;

const StyledLeafFour = styled(Image)`
  position: absolute;
  top: 13rem;
  left: 10rem;
  width: 70%;
  height: auto;
  transform: rotate(100deg);
`;

const OrangeContainer = styled.div`
position: 'absolute',
  left: showOrangeBottle ? '50%' : '-1000px',
  transform: 'translateX(-50%)',
  transition: 'left 1s ease-in-out',
`;

  return (
    <StyledBackground>
      <Container fluid>
        <MainRow>
          <StyledText className="position-absolute d-flex align-items-center justify-content-center">
            ORANGE
          </StyledText>
          <Col xs={3}>
            <OverlayContainer>
              <StyledLeafOne src={Hoja} alt="Hoja" fluid />
              <StyledLeafTwo src={Hoja} alt="Hoja" fluid />
            </OverlayContainer>
          </Col>
          <OrangeContainer style={{OrangeContainer}}>
          <MainCol xs={6} className="position-relative d-flex align-items-center justify-content-center">
              <OverlayContainer>
                <StyledOrangeSlice src={OrangeSlice} alt="Orange Slice" />
                <StyledNaranja src={Naranja} alt="Naranja" />
                <Image src={Bottle} alt="Orange Bottle" style={{ width: '100%', height: 'auto' }} />
              </OverlayContainer>
          </MainCol>
          </OrangeContainer>
          <Col xs={3}>
            <StyledLeafThree src={Hoja} alt="Hoja" fluid />
            <StyledLeafFour src={Hoja} alt="Hoja" fluid />
          </Col>
        </MainRow>
      </Container>
    </StyledBackground>
  );
};

export default Orange;