import React from 'react';
import ProductSection from './leftParagraph';
import AltProductSection from './rightParagraph';
import OrangeBottleImage from '../bottleShow/animation-orange-bottle/images/Orange-Bottle.png';
import AppleBottleImage from '../bottleShow/animation-apple-bottle/images/Apple-Bottle.png';
import 'bootstrap/dist/css/bootstrap.min.css'

function Products() {
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
      <div />
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
    </>
  );
}

export default Products;