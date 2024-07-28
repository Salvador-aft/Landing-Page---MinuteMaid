import React from 'react';
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';

const StyledBottleContainer = styled.div`
  overflow: hidden;
  position: relative;
  height: 600px;
  display: flex;
  align-items: center;
  background-color: #c6013b;
  width: 100vw;
  margin: 0;

  @media (max-width: 1000px) {
    height: 100vh;
    flex-direction: column;
    justify-content: center;
    scroll-snap-align: start;
  }
`;

const StyledButton = styled.button`
  background-color: #21130d;
  color: white;
  border: none;
  padding: 10px 30px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #42261a;
  }

  @media (max-width: 1000px) {
    font-size: 1em;
    padding: 10px 20px;
  }
`;

const StyledContent = styled.div`
  flex: 1;
  text-align: left;
  margin-left: 20px;
  padding: 20px 20px 20px 480px;

  @media (max-width: 1000px) {
    text-align: center;
    margin-left: 0;
    padding: 0;
  }
`;

const StyledBottle = styled(motion.img)`
  max-width: auto;
  height: auto;
  position: absolute;
  right: -20%;
  transform: translateY(-10%);
  z-index: 1;

  @media (max-width: 1000px) {
    width: 150px;
    height: 275px;
    position: relative;
    right: -50%;
    transform: translateX(50%) translateY(0);
  }
`;

const Title = styled.h2`
  font-size: 2.5em;

  @media (max-width: 1000px) {
    font-size: 1.5em;
  }
`;

const Description = styled.h5`
  font-size: 1.25em;

  @media (max-width: 1000px) {
    font-size: 1em;
  }
`;

function LastProductSection({ title, description, imageUrl }) {
  const controls = useAnimation();
  const triggerPoint = 700;
  const triggerPointMobile = 700;

  const handleScroll = () => {
    const scrollY = window.scrollY;

    if (window.innerWidth <= 1000) {
      if (scrollY > triggerPointMobile) {
        controls.start({ right: '-25%' });
      } else {
        controls.start({ right: '-100%' });
      }
    } else {
      if (scrollY > triggerPoint) {
        const newRightValue = (scrollY - triggerPoint) * 0.2;
        controls.start({ right: `${newRightValue > 30 ? 30 : newRightValue}%` });
      } else {
        controls.start({ right: '-50%' });
      }
    }
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [controls]);

  return (
    <StyledBottleContainer className='d-flex justify-content-center'>
      <Container fluid>
        <StyledBottle
          src={imageUrl}
          alt="Raspberry Bottle"
          animate={controls}
          initial={{ right: window.innerWidth <= 1000 ? '-50%' : '-20%' }}
        />
        <StyledContent>
          <Title>{title}</Title>
          <Description className='mt-5'>{description}</Description>
          <div className='mt-5 ml-2'>
            <StyledButton>Shop Now</StyledButton>
          </div>
        </StyledContent>
      </Container>
    </StyledBottleContainer>
  );
}

export default LastProductSection;