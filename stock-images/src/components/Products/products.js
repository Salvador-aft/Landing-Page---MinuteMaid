import React, { useEffect } from 'react';
import ProductSection from './leftParagraph';
import AltProductSection from './rightParagraph';
import LastProductSection from './lastParagraph';
import OrangeBottleImage from '../bottleShow/animation-orange-bottle/images/Orange-Bottle.png';
import AppleBottleImage from '../bottleShow/animation-apple-bottle/images/Apple-Bottle.png';
import RaspberryBottleImage from '../bottleShow/animation-raspberry-bottle/images/Raspberry-bottle.png';
import LogoImage from '../bottleShow/menu/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';

const globalStyles = {
  body: {
    padding: 0,
    margin: 0,
    width: '100%',
    overflowX: 'hidden'
  }
};

function applyGlobalStyles() {
  for (const [element, styles] of Object.entries(globalStyles)) {
    Object.assign(document.querySelector(element).style, styles);
  }
}

const StyledLogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
  background-color: white;
  margin: 0;
`;

const StyledLogo = styled.img`
  max-width: 100px;
`;

function Products() {
  useEffect(() => {
    applyGlobalStyles();
  }, []);

  return (
    <>
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
      <StyledLogoContainer>
        <StyledLogo src={LogoImage} alt="Logo" />
      </StyledLogoContainer>
    </>
  );
}

export default Products;