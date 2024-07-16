import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './logo.png';
import './main-menu.css';

const StyledComponent = styled.div`
  font-family: 'Bebas Neue', sans-serif;
  margin-top: 5px;
`;

const StyledNavbar = styled(Navbar)`
`;

const StyledNav = styled(Nav)`
  margin-left: 5px;
`;

const StyledNavLink = styled(Nav.Link)`
  margin-right: 30px !important;
  text-decoration: none !important;
  color: inherit !important;

  &:hover,
  &:active,
  &:visited {
    color: inherit !important;
    transform: scale(1.2);
    transition: transform 0.3s ease-in-out;
  }
`;

function Header() {
  return (
    <StyledNavbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <StyledComponent>
            <img src={logo} alt="Logo" className="logo-image" />
          </StyledComponent>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggler" />
        <Navbar.Collapse id="basic-navbar-nav">
          <StyledNav className="mx-auto">
            <StyledNavLink as={Link} to="/products">
              <h3>PRODUCTS</h3>
            </StyledNavLink>
            <StyledNavLink as={Link} to="/about">
              <h3>ABOUT US</h3>
            </StyledNavLink>
            <StyledNavLink as={Link} to="/faqs">
              <h3>FAQs</h3>
            </StyledNavLink>
          </StyledNav>
        </Navbar.Collapse>
      </Container>
    </StyledNavbar>
  );
}

export default Header;