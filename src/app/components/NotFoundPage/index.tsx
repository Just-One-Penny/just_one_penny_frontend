import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet-async';
import { Search } from '../Search';

import NotFoundImage from './assets/404-Image.svg';
import MobileNotFoundImage from './assets/Mobile404-Image.svg';

export function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title>404 Page Not Found</title>
        <meta name="description" content="Page not found" />
      </Helmet>
      <Wrapper>
        <ImageWrapper>
          <Image />
        </ImageWrapper>

        <Title>Sorry, we can’t find the page you’re looking for.</Title>

        <P>
          Try the navigation above or search for a charity to change the world.
        </P>
        <Search className="mb-3" />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ImageWrapper = styled.div`
  margin-top: 3rem;
  margin-bottom: 1.8rem;
  width: 529.852px;
  height: 121.514px;

  @media only screen and (max-width: 475px) {
    width: 288.615px;
    height: 66.19px;
    margin-top: 4.85rem;
    margin-bottom: 1.25rem;
  }
`;

const Image = styled.div`
  background-image: url(${MobileNotFoundImage});
  background-size: cover;
  width: 100%;
  height: 100%;

  @media only screeen and (min-width: 651px) {
    background-image: url(${NotFoundImage});
  }
`;

const Title = styled.h2`
  font-weight: 900;
  color: #333;
  font-size: 2.25rem;
  margin-bottom: 1rem;
  text-align: center;

  @media only screen and (max-width: 475px) {
    font-size: 1.75rem;
  }
`;

const P = styled.p`
  font-size: 1.25rem;
  color: #333;
  margin-bottom: 3rem;
  text-align: center;

  @media only screen and (max-width: 475px) {
    font-size: 0.875rem;
  }
`;
