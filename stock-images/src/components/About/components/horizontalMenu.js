import React, { useState, useEffect } from 'react';
import { Container, Nav, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled, { keyframes } from 'styled-components';
import RecruitMenu from './recruitMenu';

const StyledNavLink = styled(Nav.Link)`
  position: relative;
  padding-bottom: 8px;
  color: #000;
  font-weight: 300;
  font-size: 1.5rem;

  &:before {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 50%;
    background-color: #000;
    transition: all 0.3s ease-in-out;
  }

  &:hover:before {
    width: 100%;
    left: 0;
  }

  &.active {
    background-color: transparent !important;
    color: #000 !important;
  }

  &.active:before {
    width: 100%;
    left: 0;
  }
`;

const fadeInOut = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const AnimatedDiv = styled.div`
  opacity: 0;
  animation: ${({ playAnimation }) => (playAnimation ? fadeInOut : 'none')} 0.5s ease-in-out;
  animation-fill-mode: forwards;
`;

const FixedContent = () => (
  <Col md={4}>
    <div>
      <RecruitMenu />
    </div>
  </Col>
);

const getContent = (option, playAnimation) => {
  switch (option) {
    case 'option1':
      return (
        <Row>
          <Col md={8}>
            <AnimatedDiv playAnimation={playAnimation}>
              <div>
                <h2>Discover the Essence of Minute Maid</h2>
                <p>
                  Minute Maid, a renowned beverage brand, stands as a symbol of refreshment and quality. Since its inception, Minute Maid has been committed to delivering the pure essence of fruits in every sip. With a rich legacy dating back decades, the brand has mastered the art of capturing the natural goodness of fruits, crafting a range of juices that embody the taste of fresh, sun-kissed produce.
                  <br />
                  <br />
                  Our commitment to quality extends to the careful selection of handpicked fruits, ensuring that each bottle reflects the true flavor of nature. Minute Maid believes in providing a wholesome and delightful experience, making every juice a journey into the orchards where the fruits are cultivated. Our dedication to authenticity has made Minute Maid a trusted choice for those seeking a genuine and invigorating beverage.
                </p>
              </div>
            </AnimatedDiv>
          </Col>
          <FixedContent />
        </Row>
      );
    case 'option2':
      return (
        <div>
          <Row>
            <Col md={8}>
              <AnimatedDiv playAnimation={playAnimation}>
                <div>
                  <h2>Your Juice-Related Queries Resolved</h2>
                  <br />
                  <p>
                    <b>Where do the fruits used in Minute Maid juices come from?</b>
                    <br />
                    At Minute Maid, we are dedicated to selecting the freshest and most delicious fruits. Our fruits come from various regions, and we work closely with farmers committed to quality.
                    <br />
                    <br />
                    <b>How does Minute Maid ensure the freshness and authenticity of its juices?</b>
                    <br />
                    Freshness is our priority. We use advanced processing technologies that keep the nutrients and natural flavor of the fruits intact. Additionally, our bottling process ensures authenticity in every sip.
                    <br />
                    <br />
                    <b>Are there Minute Maid juice options for people with specific diets?</b>
                    <br />
                    Yes, we understand the importance of catering to diverse dietary needs. We offer options such as juices without added sugar and without artificial preservatives to accommodate everyone's preferences.
                    <br />
                    <br />
                    <b>Does Minute Maid engage in sustainable efforts in juice production?</b>
                    <br />
                    Absolutely. At Minute Maid, we are committed to sustainable practices. We work to minimize our environmental impact, from ingredient selection to waste management. Our goal is to provide delicious juices responsibly.
                  </p>
                </div>
              </AnimatedDiv>
            </Col>
            <FixedContent />
          </Row>
        </div>
      );
    case 'option3':
      return (
        <div>
          <Row>
            <Col md={8}>
              <AnimatedDiv playAnimation={playAnimation}>
                <div>
                  <h2>Discover the Essence of Minute Maid</h2>
                  <p>
                    Minute Maid, a renowned beverage brand, stands as a symbol of refreshment and quality. Since its inception, Minute Maid has been committed to delivering the pure essence of fruits in every sip. With a rich legacy dating back decades, the brand has mastered the art of capturing the natural goodness of fruits, crafting a range of juices that embody the taste of fresh, sun-kissed produce.
                    <br />
                    <br />
                    Our commitment to quality extends to the careful selection of handpicked fruits, ensuring that each bottle reflects the true flavor of nature. Minute Maid believes in providing a wholesome and delightful experience, making every juice a journey into the orchards where the fruits are cultivated. Our dedication to authenticity has made Minute Maid a trusted choice for those seeking a genuine and invigorating beverage.
                  </p>
                </div>
              </AnimatedDiv>
            </Col>
            <FixedContent />
          </Row>
        </div>
      );
    case 'option4':
      return (
        <div>
          <Row>
            <Col md={8}>
              <AnimatedDiv playAnimation={playAnimation}>
                <div>
                  <h2>Discover the Essence of Minute Maid</h2>
                  <p>
                    Minute Maid, a renowned beverage brand, stands as a symbol of refreshment and quality. Since its inception, Minute Maid has been committed to delivering the pure essence of fruits in every sip. With a rich legacy dating back decades, the brand has mastered the art of capturing the natural goodness of fruits, crafting a range of juices that embody the taste of fresh, sun-kissed produce.
                    <br />
                    <br />
                    Our commitment to quality extends to the careful selection of handpicked fruits, ensuring that each bottle reflects the true flavor of nature. Minute Maid believes in providing a wholesome and delightful experience, making every juice a journey into the orchards where the fruits are cultivated. Our dedication to authenticity has made Minute Maid a trusted choice for those seeking a genuine and invigorating beverage.
                  </p>
                </div>
              </AnimatedDiv>
            </Col>
            <FixedContent />
          </Row>
        </div>
      );
    default:
      return (
        <div>
          <Row>
            <Col md={8}>
              <div>
                <h2>Discover the Essence of Minute Maid</h2>
                <p></p>
              </div>
            </Col>
            <FixedContent />
          </Row>
        </div>
      );
  }
};

function HorizontalMenu() {
  const [selectedOption, setSelectedOption] = useState('option1');
  const [playAnimation, setPlayAnimation] = useState(true);

  const handleSelect = (option) => {
    setPlayAnimation(false);

    setTimeout(() => {
      setSelectedOption(option);
      setPlayAnimation(true);
    }, 100);
  };

  const content = getContent(selectedOption, playAnimation);

  return (
    <Container>
      <Nav className="justify-content-lg-between" variant="pills" onSelect={handleSelect}>
        <StyledNavLink eventKey="option1" active={selectedOption === 'option1'}>
          ABOUT Minute Maid
        </StyledNavLink>
        <StyledNavLink eventKey="option2" active={selectedOption === 'option2'}>
          FAQ
        </StyledNavLink>
        <StyledNavLink eventKey="option3" active={selectedOption === 'option3'}>
          AWARDS
        </StyledNavLink>
        <StyledNavLink eventKey="option4" active={selectedOption === 'option4'}>
          BECOME A DISTRIBUTOR
        </StyledNavLink>
      </Nav>
      <div className="mt-5">{content}</div>
    </Container>
  );
}

export default HorizontalMenu;