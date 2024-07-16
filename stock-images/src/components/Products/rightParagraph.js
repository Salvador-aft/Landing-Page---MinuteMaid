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
  background-color: #237d50;
  width: 100vw;
  margin: 0;
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
`;

const StyledContent = styled.div`
  flex: 1;
  text-align: right;
  margin-left: 20px;
  padding: 20px 530px 20px 20px;
`;

const StyledBottle = styled(motion.img)`
  max-width: 20%;
  position: absolute;
  left: -30%;
  transform: translateY(-10%);
  z-index: 1;
`;

function AltProductSection({ title, description, imageUrl }) {
  const controls = useAnimation();
  const minLeftValue = -30;
  const maxLeftValue = 30;

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const startScroll = 50;
    const endScroll = 200;
    const reverseScroll = 700;

    if (scrollY >= startScroll && scrollY <= endScroll) {
      const newLeftValue = Math.min(maxLeftValue, Math.max(minLeftValue, minLeftValue + (scrollY - startScroll) * 0.1));
      controls.start({ left: `${newLeftValue}%` });
    } else if (scrollY < startScroll) {
      controls.start({ left: `${minLeftValue}%` });
    } else if (scrollY > endScroll && scrollY <= reverseScroll) {
      controls.start({ left: `${maxLeftValue}%` });
    } else if (scrollY > reverseScroll) {
      const newLeftValue = Math.max(minLeftValue, maxLeftValue - (scrollY - reverseScroll) * 0.3);
      controls.start({ left: `${newLeftValue}%` });
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
          alt="Apple Bottle"
          animate={controls}
          initial={{ left: `${minLeftValue}%` }}
        />
        <StyledContent>
          <h2>{title}</h2>
          <h5 className='mt-5'>{description}</h5>
          <div className='mt-5 ml-2'>
            <StyledButton>Shop Now</StyledButton>
          </div>
        </StyledContent>
      </Container>
    </StyledBottleContainer>
  );
}

export default AltProductSection;