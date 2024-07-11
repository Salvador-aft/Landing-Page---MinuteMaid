import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Bottle from './images/Apple-Bottle.png';
import AppleSlice from './images/Apple-Slice.png';
import AppleFruit from './images/Apple-Fruit.png';

const StyledBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-color: #237d50;
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
  top:  50%;
  left: 60%;
  width: 35%;
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

const AppleContainer = styled(animated.div)`
  position: relative;
  width: 100%;
`;

const Apple = ({ toggle }) => {
  const props = useSpring({
    transform: toggle ? 'translateX(0%)' : 'translateX(100%)',
    config: { duration: 10000 },
    reset: true,
    onRest: () => toggle(!toggle),
  });

  return (
    <StyledBackground>
      <Container fluid>
        <MainRow>
          <StyledText className="position-absolute d-flex align-items-center justify-content-center">
            APPLE
          </StyledText>
          <Col xs={3}>
            <OverlayContainer></OverlayContainer>
          </Col>
          <MainCol xs={6} className="position-relative d-flex align-items-center justify-content-center">
            <AppleContainer style={props}>
              <OverlayContainer>
                <Image src={Bottle} alt="Apple Bottle" fluid />
                <StyledAppleSlice src={AppleSlice} alt="Apple Slice" />
                <StyledApple src={AppleFruit} alt="Apple" />
              </OverlayContainer>
            </AppleContainer>
          </MainCol>
          <Col xs={3}>
            <OverlayContainer>
            </OverlayContainer>
          </Col>
        </MainRow>
      </Container>
    </StyledBackground>
  );
};

export default Apple;