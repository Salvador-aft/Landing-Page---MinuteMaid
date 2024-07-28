import React, { useState, useRef, useEffect } from 'react';
import { Container, Nav, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import { useSwipeable } from 'react-swipeable';

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

const ContentWrapper = styled.div`
  opacity: ${(props) => (props.fade ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;
`;

const getContent = (option, fade) => {
  switch (option) {
    case 'option1':
      return (
        <ContentWrapper fade={fade}>
          <Row>
            <Col md={8} xs={12}>
              <div>
                <h2>Discover the Essence of Minute Maid</h2>
                <p>
                  Minute Maid, a renowned beverage brand, stands as a symbol of refreshment and quality. Since its inception, Minute Maid has been committed to delivering the pure essence of fruits in every sip. With a rich legacy dating back decades, the brand has mastered the art of capturing the natural goodness of fruits, crafting a range of juices that embody the taste of fresh, sun-kissed produce.
                  <br />
                  <br />
                  Our commitment to quality extends to the careful selection of handpicked fruits, ensuring that each bottle reflects the true flavor of nature. Minute Maid believes in providing a wholesome and delightful experience, making every juice a journey into the orchards where the fruits are cultivated. Our dedication to authenticity has made Minute Maid a trusted choice for those seeking a genuine and invigorating beverage.
                </p>
              </div>
            </Col>
            <Col md={4} xs={12}>
            </Col>
          </Row>
        </ContentWrapper>
      );
    case 'option2':
      return (
        <ContentWrapper fade={fade}>
          <Row>
            <Col md={8} xs={12}>
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
            </Col>
            <Col md={4} xs={12}>
            </Col>
          </Row>
        </ContentWrapper>
      );
    case 'option3':
      return (
        <ContentWrapper fade={fade}>
          <Row>
            <Col md={8} xs={12}>
              <div>
                <h2>Our Awards and Recognitions</h2>
                <p>
                  Minute Maid has been honored with numerous awards for its commitment to quality and innovation. Our dedication to delivering the finest juices has been recognized by both consumers and industry experts. We take pride in the accolades that highlight our passion for excellence.
                  <br />
                  <br />
                  Over the years, Minute Maid has received prestigious awards for taste, quality, and sustainability. These recognitions serve as a testament to our unwavering commitment to providing refreshing and nutritious beverages.
                  <br />
                  <br />
                  As we continue to innovate and improve, we remain grateful for the support of our loyal customers and partners. Each award inspires us to uphold the high standards that define Minute Maid, ensuring that every bottle is a celebration of quality and authenticity.
                </p>
              </div>
            </Col>
            <Col md={4} xs={12}>
            </Col>
          </Row>
        </ContentWrapper>
      );
    case 'option4':
      return (
        <ContentWrapper fade={fade}>
          <Row>
            <Col md={8} xs={12}>
              <div>
                <h2>Become a Minute Maid Distributor</h2>
                <p>
                  Joining the Minute Maid family as a distributor opens up a world of opportunities. As a trusted brand with a rich legacy, Minute Maid offers a solid foundation for building a successful distribution business. Our commitment to quality and customer satisfaction ensures that you are partnering with a brand that consumers love and trust.
                  <br />
                  <br />
                  As a distributor, you will have access to our diverse range of high-quality juices, crafted with the finest ingredients. Our support extends beyond providing exceptional products; we offer comprehensive training, marketing resources, and ongoing assistance to help you thrive in the market.
                  <br />
                  <br />
                  We believe in fostering strong, collaborative relationships with our distributors. Your success is our success, and we are dedicated to providing the tools and support needed to achieve your business goals. Become a part of the Minute Maid network and embark on a rewarding journey of growth and success.
                </p>
              </div>
            </Col>
            <Col md={4} xs={12}>
            </Col>
          </Row>
        </ContentWrapper>
      );
    default:
      return (
        <ContentWrapper fade={fade}>
          <Row>
            <Col md={8} xs={12}>
              <div>
                <h2>Discover the Essence of Minute Maid</h2>
                <p></p>
              </div>
            </Col>
            <Col md={4} xs={12}>
            </Col>
          </Row>
        </ContentWrapper>
      );
  }
};

const StyledNav = styled(Nav)`
  @media (max-width: 999px) {
    display: flex;
    overflow-x: auto;
    white-space: nowrap;
    -webkit-overflow-scrolling: touch;
  }
`;

const MenuContainer = styled(Container)`
  @media (max-width: 999px) {
    padding-left: 0;
    padding-right: 0;
    overflow-x: hidden;
  }
`;

const SwipeableNav = styled.div`
  display: flex;
  overflow-x: auto;
  white-space: nowrap;
  cursor: grab;
  margin-bottom: 20px;

  &.active {
    cursor: grabbing;
  }
`;

const MenuComponent = () => {
  const [selectedOption, setSelectedOption] = useState('option1');
  const [fade, setFade] = useState(true);
  const navRef = useRef(null);
  const isTouchDevice = 'ontouchstart' in window || navigator.msMaxTouchPoints > 0;

  const handlers = useSwipeable({
    onSwipedLeft: () => scrollNav(1),
    onSwipedRight: () => scrollNav(-1),
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  const scrollNav = (direction) => {
    if (navRef.current) {
      navRef.current.scrollBy({
        left: direction * 200,
        behavior: 'smooth',
      });
    }
  };

  const handleOptionClick = (option) => {
    setFade(false);
    setTimeout(() => {
      setSelectedOption(option);
      setFade(true);
    }, 500);
  };

  useEffect(() => {
    const navElement = navRef.current;

    const handleTouchStart = (e) => {
      navElement.classList.add('active');
    };

    const handleTouchEnd = (e) => {
      navElement.classList.remove('active');
    };

    if (isTouchDevice) {
      navElement.addEventListener('touchstart', handleTouchStart);
      navElement.addEventListener('touchend', handleTouchEnd);
    }

    return () => {
      if (isTouchDevice) {
        navElement.removeEventListener('touchstart', handleTouchStart);
        navElement.removeEventListener('touchend', handleTouchEnd);
      }
    };
  }, [isTouchDevice]);

  return (
    <MenuContainer>
      <SwipeableNav ref={navRef} {...handlers}>
        <StyledNav activeKey={selectedOption}>
          <Nav.Item>
            <StyledNavLink
              eventKey="option1"
              onClick={() => handleOptionClick('option1')}
            >
              About us
            </StyledNavLink>
          </Nav.Item>
          <Nav.Item>
            <StyledNavLink
              eventKey="option2"
              onClick={() => handleOptionClick('option2')}
            >
              FAQs
            </StyledNavLink>
          </Nav.Item>
          <Nav.Item>
            <StyledNavLink
              eventKey="option3"
              onClick={() => handleOptionClick('option3')}
            >
              Awards
            </StyledNavLink>
          </Nav.Item>
          <Nav.Item>
            <StyledNavLink
              eventKey="option4"
              onClick={() => handleOptionClick('option4')}
            >
              Distributor
            </StyledNavLink>
          </Nav.Item>
        </StyledNav>
      </SwipeableNav>
      {getContent(selectedOption, fade)}
    </MenuContainer>
  );
};

export default MenuComponent;