import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet-async';
import { Search } from '../Search';
import { StyleConstants } from 'styles/StyleConstants';

import NotFoundImage from './assets/404-Image.svg';
import MobileNotFoundImage from './assets/Mobile404-Image.svg';

export function NotFoundPage() {
  return (
    <Wrapper>
      <Helmet>
        <title>404 Page Not Found</title>
        <meta name="description" content="Page not found" />
      </Helmet>
      <ImageWrapper>
        <img
          srcSet={`${MobileNotFoundImage} 289w, ${NotFoundImage} 530w`}
          sizes="(max-width: 650px) 289px, 530px"
          src={NotFoundImage}
          alt="Just One Penny"
        />{' '}
      </ImageWrapper>

      <Title>Sorry, we can’t find the page you’re looking for.</Title>

      <P>
        Try the navigation above or search for a charity to change the world.
      </P>

      <SearchWrapper>
        <Search />
      </SearchWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #333;
  background: #ffffff 0% 0% no-repeat padding-box;
  padding: 0 4rem;

  @media only screen and (max-width: 650px) {
    padding: 0 1rem;
  }
`;

const ImageWrapper = styled.div`
  margin-top: calc(${StyleConstants.DESKTOP_NAV_BAR_HEIGHT} + 6.810625rem);
  margin-bottom: 1.844375rem;

  @media only screen and (max-width: 650px) {
    margin-top: calc(${StyleConstants.MOBILE_NAV_BAR_HEIGHT} + 4.85375rem);
    margin-bottom: 1.259375rem;
  }
`;

const Title = styled.h2`
  font-weight: 900;
  font-size: 2.25rem;
  margin-bottom: 0.9375rem;
  text-align: center;

  @media only screen and (max-width: 650px) {
    font-size: 1.75rem;
    margin-bottom: 0.625rem;
  }
`;

const P = styled.p`
  font-size: 1.25rem;
  margin-bottom: 5.0625rem;
  text-align: center;

  @media only screen and (max-width: 650px) {
    font-size: 0.875rem;
    margin-bottom: 3.375rem;
  }
`;

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 25%;
  margin-bottom: 25rem;

  @media only screen and (max-width: 1440px) {
    width: 37.5%;
  }

  @media only screen and (max-width: 1024px) {
    width: 50%;
  }

  @media only screen and (max-width: 650px) {
    width: 62.5%;
    margin-bottom: 3.5rem;
  }

  @media only screen and (max-width: 475px) {
    width: 100%;
  }
`;
