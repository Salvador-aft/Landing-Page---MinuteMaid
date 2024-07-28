import React from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import HorizontalMenu from './components/horizontalMenu';

function About() {
  return (
    <div>
      <Container className='mt-5 mb-5'>
        <div>
          <h2>About Us</h2>
        </div>
      </Container>
      <HorizontalMenu/>
    </div>
  );
}

export default About;