import React from 'react';
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';
import { AnimatePresence, motion, useAnimation } from 'framer-motion';

const StyledBottleContainer = styled.div`
  overflow: hidden;
  position: relative;
  height: 600px;
  display: flex;
  align-items: center;
  background-color: #f8cb52;
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
  text-align: left;
  margin-left: 20px;
  padding: 20px 20px 20px 480px;
`;

const StyledBottle = styled(motion.img)`
  max-width: 20%;
  position: absolute;
  right: 30%;
  transform: translateY(-10%);
  z-index: 1;
`;

function ProductSection({ title, description, imageUrl }) {
  const controls = useAnimation();

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const newRightValue = 30 - scrollY * 0.2;
    controls.start({ right: `${newRightValue}%` });
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
          alt="Orange Bottle"
          animate={controls}
          initial={{ right: '30%' }}
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

export default ProductSection;