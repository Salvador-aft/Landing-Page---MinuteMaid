import React, { useEffect } from 'react';
import styled from 'styled-components';
import ProductSection from './leftParagraph';
import AltProductSection from './rightParagraph';
import LastProductSection from './lastParagraph';
import OrangeBottleImage from '../bottleShow/animation-orange-bottle/images/Orange-Bottle.png';
import AppleBottleImage from '../bottleShow/animation-apple-bottle/images/Apple-Bottle.png';
import RaspberryBottleImage from '../bottleShow/animation-raspberry-bottle/images/Raspberry-bottle.png';
import LogoImage from '../bottleShow/menu/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';

// Define global styles for the body element
const globalStyles = {
  body: {
    padding: 0,
    margin: 0,
    width: '100%',
    overflowX: 'hidden',
  }
};

// Apply the global styles to the document body
function applyGlobalStyles() {
  // Iterate over each element and its associated styles
  for (const [element, styles] of Object.entries(globalStyles)) {
    // Apply each style to the corresponding element in the document
    Object.assign(document.querySelector(element).style, styles);
  }
}

// Styled components for layout and styles
const StyledProductContainer = styled.div`
  width: 100vw;
  overflow-x: hidden;
`;

const ProductSectionContainer = styled.div`
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledLogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 400px;
  background-color: white;
  margin: 0;
`;

const StyledLogo = styled.img`
  max-width: 100px;
  cursor: pointer;
`;

const BackToTopText = styled.h4`
  margin-top: 20px;
  cursor: pointer;
  color: blue;
  text-decoration: underline;
  font-family: sans-serif;
  max-width: 150px;
`;

function Products() {
  // useEffect to apply global styles when the component mounts
  useEffect(() => {
    applyGlobalStyles();
  }, []);

  // Function to scroll to the top of the page smoothly
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <StyledProductContainer>
      <ProductSectionContainer>
        <ProductSection
          className="p-0"
          title="Experience the classic taste"
          description={
            <>
              Indulge in the vibrant burst of citrus goodness with our <br />
              Orange Bottle, capturing the essence of sun-kissed oranges <br />
              in every sip.
            </>
          }
          imageUrl={OrangeBottleImage}
        />
      </ProductSectionContainer>
      <ProductSectionContainer>
        <AltProductSection
          className="p-0"
          title="Try the new flavor"
          description={
            <>
              Immerse yourself in the pure essence of nature with our <br />
              premium apple juice, crafted from handpicked, succulent <br />
              apples for a delightful and wholesome experience
            </>
          }
          imageUrl={AppleBottleImage}
        />
      </ProductSectionContainer>
      <ProductSectionContainer>
        <LastProductSection
          className="p-0"
          title="Discover the richness of raspberry"
          description={
            <>
              Enjoy the luscious taste of ripe raspberries with our <br />
              raspberry juice, offering a sweet and tangy flavor <br />
              that invigorates your senses.
            </>
          }
          imageUrl={RaspberryBottleImage}
        />
      </ProductSectionContainer>
      <StyledLogoContainer>
        <a href="/">
          <StyledLogo src={LogoImage} alt="Logo" />
        </a>
        <BackToTopText onClick={scrollToTop}>Back to top</BackToTopText>
      </StyledLogoContainer>
    </StyledProductContainer>
  );
}

export default Products;