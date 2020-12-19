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

////////////////////////////////////////////////////////////////////
// HeroText
// This is for the button but will be commented out when Mobile Category select goes live
// margin-bottom: 15rem;
//
// This property to be uncommented when Mobile Category select goes live
// margin-bottom: 17.125rem;
////////////////////////////////////////////////////////////////////

const HeroSection = styled.header`
  width: 100%;
  height: 600px;

  background-image: url(${MobileHeroImage1x});
  background-size: cover;
  background-position: center;

  display: flex;
  align-items: flex-end;

  position: relative;

  @media only screen and (min-resolution: 192dpi) and (min-width: 0px),
    only screen and (-webkit-min-device-pixel-ratio: 2) and (min-width: 0px) {
    background-image: url(${MobileHeroImage2x});
  }

  @media only screen and (min-width: 476px) {
    background-image: url(${HeroImage1x});
    height: 600px;
    // height: 450px;
  }

  @media only screen and (min-resolution: 192dpi) and (min-width: 476px),
    only screen and (-webkit-min-device-pixel-ratio: 2) and (min-width: 476px),
    only screen and (min-width: 1920px) {
    background-image: url(${HeroImage2x});
  }

  @media only screen and (max-width: 1024px) {
    // padding: 1.5rem 0;
  }
`;

const HeroText = styled.div`
  padding-left: 20.8333vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 12rem;

  @media only screen and (max-width: 1440px) {
    // padding-left: 18.75rem;
  }

  @media only screen and (max-width: 1024px) {
    padding-left: 10.416665vw;
  }

  @media only screen and (max-width: 475px) {
    padding-left: 0;
    padding: 0 1rem;
    align-items: center;

    // This is original when mobile select text goes lives
    // margin-bottom: 17.125rem;

    // Temporary for the bottom until select text goes live
    margin-bottom: 15rem;
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
  margin: 0;

  @media only screen and (max-width: 475px) {
    font-size: 1.75rem;
    text-align: center;
    margin-bottom: 0.75rem;
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
    margin-bottom: 1.0625rem;
    text-align: center;
  }
`;
