import React from 'react';
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';

// Styled components for layout and styles
const StyledBottleContainer = styled.div`
  overflow: hidden;
  position: relative;
  height: 600px;
  display: flex;
  align-items: center;
  background-color: #f8cb52;
  width: 100vw;
  margin: 0;

  @media (max-width: 1000px) {
    height: 100vh;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
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
    border-radius: 5px;
    margin-top: 20px;
  }
`;

const StyledContent = styled.div`
  flex: 1;
  text-align: left;
  margin-left: 20px;
  padding: 20px 20px 20px 480px;

  @media (max-width: 1000px) {
    position: relative;
    transform: translateX(0%) translateY(50%);
    text-align: center;
    margin-left: 0;
    padding: 0px 20px 0px 20px;
  }
`;

const StyledBottle = styled(motion.img)`
  max-width: auto;
  height: auto;
  position: absolute;
  right: 30%;
  transform: translateY(-10%);
  z-index: 1;

  @media (max-width: 1000px) {
    right: 50%;
    transform: translateX(50%) translateY(-50%);
    max-width: 150px; 
    height: 275px;
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

function ProductSection({ title, description, imageUrl }) {
  // useState hooks to manage dynamic padding and max right value
  const [dynamicPadding, setDynamicPadding] = React.useState(480);
  const controls = useAnimation(); // useAnimation hook for controlling the animation

  // Function to update dynamic padding based on window width
  const updatePadding = () => {
    const windowWidth = window.innerWidth;
    // Calculate new padding using a power function to create a smooth scaling effect
    const newPadding = windowWidth > 1920 ? 480 : 480 * Math.pow(windowWidth / 1920, 4);
    setDynamicPadding(newPadding);
  };

  // Function to update the maximum right value based on window width
  const updateMaxRightValue = () => {
    const windowWidth = window.innerWidth;
    if (windowWidth <= 1000) {
      return 50; // Fixed max right value for mobile screens
    }
    const maxInitialValue = 30; // Initial max right value for larger screens
    // Adjust the max right value using a power function for a smoother scaling effect on larger screens
    return windowWidth > 1920 ? maxInitialValue : maxInitialValue * Math.pow(windowWidth / 1920, 4);
  };

  // Function to handle scroll events and update animation based on scroll position
  const handleScroll = () => {
    const scrollY = window.scrollY;
    const newMaxRightValue = updateMaxRightValue();
    // Calculate the new right position based on scroll distance
    const newRightValue = window.innerWidth <= 1000 ? 50 - scrollY * 0.2 : 30 - scrollY * 0.2;
    // Ensure the right value doesn't exceed the maximum allowed value
    controls.start({ right: `${newRightValue > newMaxRightValue ? newMaxRightValue : newRightValue}%` });
  };

  // useEffect hook to set up event listeners for scroll and resize
  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', updatePadding);

    updatePadding(); // Initial call to set padding

    // Cleanup function to remove event listeners when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updatePadding);
    };
  }, [controls]);

  return (
    <StyledBottleContainer className='d-flex justify-content-center'>
      <Container fluid>
        <StyledBottle
          src={imageUrl}
          alt="Orange Bottle"
          animate={controls}
          initial={{ right: window.innerWidth <= 1000 ? '50%' : '30%' }} // Initial animation state
        />
        <StyledContent style={{ paddingLeft: dynamicPadding }}>
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

export default ProductSection;