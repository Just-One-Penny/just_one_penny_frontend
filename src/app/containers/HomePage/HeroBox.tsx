import React from 'react';
import styled from 'styled-components/macro';

import { Search } from '../../components/Search';
import HeroImage2x from './assets/HeroImage-2x.jpg';
import HeroImage1x from './assets/HeroImage-1x.jpg';
import MobileHeroImage1x from './assets/MobileHeroImage-1x.png';
import MobileHeroImage2x from './assets/MobileHeroImage-2x.png';

export const HeroBox = () => {
  return (
    <HeroSection>
      <HeroText>
        <H1>A micro-giving platform for the 21st century</H1>

        <H3>See how your spare change can change the world</H3>

        <Search />
      </HeroText>
    </HeroSection>
  );
};

const HeroSection = styled.header`
  // width: calc(100% + 4rem);
  // margin-left: -2rem;
  width: 100%;
  height: 450px;
  padding: 3rem 0;
  background-image: url(${HeroImage1x});
  background-size: cover;
  background-position: center;

  display: flex;
  align-items: flex-start;

  @media only screen and (max-width: 475px) {
    background-image: url(${MobileHeroImage1x});
  }

  @media only screen and (min-resolution: 192dpi) and(max-width: 475px),
    only screen and (-webkit-min-device-pixel-ratio: 2) and (max-width: 475px) {
    background-image: url(${MobileHeroImage2x});
    height: 600px;
    padding: 1rem 0;
  }

  @media only screen and (min-resolution: 192dpi) and (min-width: 769px),
    (-webkit-min-device-pixel-ratio: 2) and (min-width: 769px) {
    background-image: url(${HeroImage2x});
  }

  @media only screen and (max-width: 1024px) {
    padding: 1.5rem 0;
  }
`;

const HeroText = styled.div`
  padding-left: 10rem;

  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 1024px) {
    padding-left: 5rem;
  }

  @media only screen and (max-width: 1024px) {
    padding-left: 2.5rem;
  }

  @media only screen and (max-width: 475px) {
    padding-left: 0;
    padding: 0 1rem;
    text-align: center;
  }
`;

const H1 = styled.h1`
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-900)
    var(--unnamed-font-size-36) / 49px var(--unnamed-font-family-avenir);
  letter-spacing: var(--unnamed-character-spacing-0);
  text-align: left;
  font: normal normal 900 36px/49px Avenir;
  letter-spacing: 0px;
  color: #ffffff;

  @media only screen and (max-width: 475px) {
    font-size: 1.75rem;
  }
`;

const H3 = styled.h3`
  font: var(--unnamed-font-style-normal) normal
    var(--unnamed-font-weight-medium) var(--unnamed-font-size-20) / 27px
    var(--unnamed-font-family-avenir);
  letter-spacing: var(--unnamed-character-spacing-0);
  text-align: left;
  font: normal normal medium 20px/27px Avenir;
  letter-spacing: 0px;
  color: #ffffff;
  font-size: 20px;
  margin-bottom: 2rem;

  @media only screen and (max-width: 475px) {
    font-size: 0.75rem;
  }
`;
