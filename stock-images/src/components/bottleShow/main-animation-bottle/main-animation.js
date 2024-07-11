import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import OrangeBottle from '../animation-orange-bottle/orange-bottle';
import AppleBottle from '../animation-apple-bottle/apple-bottle';

function MainAnimation() {
  return (
    <div>
      <OrangeBottle />
      <AppleBottle />
    </div>
  );
}

export default MainAnimation;