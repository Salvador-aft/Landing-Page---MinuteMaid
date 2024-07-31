import React from 'react';
import { Container, Grid, Box, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faClock, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import styled from '@emotion/styled';

// Data for the stores
const stores = [
  {
    name: "New York",
    address: "123 Main St, New York, NY",
    hours: "Mon-Fri: 9am - 9pm",
    phone: "(123) 456-7890",
    email: "ny@example.com",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.714505964888!2d-74.00594198459493!3d40.712755379329864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDQyJzQ2LjAiTiA3NMKwMDBNJw!5e0!3m2!1sen!2sus!4v1617776561557!5m2!1sen!2sus"
  },
  {
    name: "Los Angeles",
    address: "456 Elm St, Los Angeles, CA",
    hours: "Mon-Fri: 9am - 9pm",
    phone: "(987) 654-3210",
    email: "la@example.com",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3301.532904778252!2d-118.24368348459317!3d34.052234979330875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDAzJzA3LjgiTiAxMTjCsDE0JzM3LjYiVw!5e0!3m2!1sen!2sus!4v1617776675482!5m2!1sen!2sus"
  },
  {
    name: "Chicago",
    address: "789 Oak St, Chicago, IL",
    hours: "Mon-Fri: 9am - 9pm",
    phone: "(555) 123-4567",
    email: "chicago@example.com",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.700522179529!2d-87.62979838459317!3d41.87811327933209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDUyJzQxLjIiTiA4N8KwMzcnNDkuOSJX!5e0!3m2!1sen!2sus!4v1617776760156!5m2!1sen!2sus"
  }
];

// Styled-components for custom styles
const StoreContainer = styled(Grid)`
  margin-bottom: 2rem;
`;

const StoreInfo = styled(Grid)`
  padding-right: 2rem;

  @media (max-width: 768px) {
    padding-right: 0;
    padding-bottom: 1rem;
  }
`;

const InfoBox = styled(Box)`
  display: flex;
  align-items: center;
  margin-bottom: 2.5rem;

  @media (max-width: 768px) {
    margin-bottom: 1rem; 
  }
`;

const StoreMap = styled(Grid)`
  iframe {
    width: 100%;
    height: 400px;
    border: 0;
    margin-bottom: 1rem;
    padding: 0 1rem;
  
    @media (max-width: 768px) {
      padding: 0;
    }
  }
`;

function Shop() {
  return (
    <Container className='mt-5'>
      <Typography variant="h2" gutterBottom>Our Stores</Typography>
      {stores.map((store, index) => (
        <StoreContainer container spacing={4} key={index}>
          <StoreInfo item xs={12} md={6}>
            <Typography variant="h4">{store.name}</Typography>
            <InfoBox className='mt-5'>
              <FontAwesomeIcon icon={faLocationDot} />
              <Typography variant="body1" ml={1}>{store.address}</Typography>
            </InfoBox>
            <InfoBox>
              <FontAwesomeIcon icon={faClock} />
              <Typography variant="body1" ml={1}>{store.hours}</Typography>
            </InfoBox>
            <InfoBox>
              <FontAwesomeIcon icon={faPhone} />
              <Typography variant="body1" ml={1}>{store.phone}</Typography>
            </InfoBox>
            <InfoBox>
              <FontAwesomeIcon icon={faEnvelope} />
              <Typography variant="body1" ml={1}>{store.email}</Typography>
            </InfoBox>
          </StoreInfo>
          <StoreMap item xs={12} md={6}>
            <iframe
              src={store.mapSrc}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </StoreMap>
        </StoreContainer>
      ))}
    </Container>
  );
}

export default Shop;