import React from 'react';
import Container from 'react-bootstrap/Container';
import styled, { css } from 'styled-components';
import { motion, useAnimation } from 'framer-motion';

const StyledBottleContainer = styled.div`
  overflow: hidden;
  position: relative;
  height: 600px;
  display: flex;
  align-items: center;
  background-color: #237d50;
  width: 100vw;
  margin: 0;

  @media (max-width: 1000px) {
    background-color: #237d50;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
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
    background-color: #000;
    color: #FFF;
    padding: 10px 20px;
    font-size: 16px;
    margin-top: 10px;
    border-radius: 5px;
  }
`;

const StyledContent = styled.div`
  flex: 1;
  text-align: right;
  margin-left: 20px;
  padding: 20px 530px 20px 20px;
  ${(props) =>
    props.dynamicPadding &&
    css`
      padding-right: ${props.dynamicPadding}px;
    `}

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
  left: -30%;
  transform: translateY(-10%);
  z-index: 1;

  @media (max-width: 1000px) {
    position: relative;
    left: 50%;
    transform: translateX(-50%) translateY(0);
    width: 150px;
    height: 275px;
    border-radius: 10px;
  }
`;

const Title = styled.h2`
  @media (max-width: 1000px) {
    font-size: 1.5em;
    margin: 10px 0;
    color: #000000;
  }
`;

const Description = styled.h5`
  @media (max-width: 1000px) {
    font-size: 1em;
    margin: 10px 0;
    color: #000000;
  }
`;

function AltProductSection({ title, description, imageUrl }) {
  const [dynamicPadding, setDynamicPadding] = React.useState(530);
  const controls = useAnimation();
  const minLeftValue = -30;

  const updateMaxLeftValue = () => {
    const windowWidth = window.innerWidth;
    const maxInitialValue = windowWidth <= 1000 ? 50 : 30;
    if (windowWidth <= 1000) {
      return maxInitialValue
    } else {
      return windowWidth > 1920 ? maxInitialValue : maxInitialValue * Math.pow(windowWidth / 1920, 2);
    }
  };

  const updatePadding = () => {
    const windowWidth = window.innerWidth;
    const newPadding = windowWidth > 1920 ? 530 : 530 * Math.pow(windowWidth / 1920, 4);
    setDynamicPadding(newPadding);
  };

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const startScroll = 50;
    const endScroll = 200;
    const reverseScroll = 700;

    const newMaxLeftValue = updateMaxLeftValue();

    if (scrollY >= startScroll && scrollY <= endScroll) {
      const newLeftValue = Math.min(newMaxLeftValue, Math.max(minLeftValue, minLeftValue + (scrollY - startScroll) * 0.1));
      controls.start({ left: `${newLeftValue}%` });
    } else if (scrollY < startScroll) {
      controls.start({ left: `${minLeftValue}%` });
    } else if (scrollY > endScroll && scrollY <= reverseScroll) {
      controls.start({ left: `${newMaxLeftValue}%` });
    } else if (scrollY > reverseScroll) {
      const newLeftValue = Math.max(minLeftValue, newMaxLeftValue - (scrollY - reverseScroll) * 0.3);
      controls.start({ left: `${newLeftValue}%` });
    }
  };

  React.useEffect(() => {
    const handleResize = () => {
      updatePadding();
      handleScroll();
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    updatePadding();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [controls]);

  return (
    <StyledBottleContainer className='d-flex justify-content-center'>
      <Container fluid>
        <StyledBottle
          src={imageUrl}
          alt="Bottle"
          animate={controls}
          initial={{ left: `${minLeftValue}%` }}
        />
        <StyledContent dynamicPadding={dynamicPadding}>
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

export default AltProductSection;