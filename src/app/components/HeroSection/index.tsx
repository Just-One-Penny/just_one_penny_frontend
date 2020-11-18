/**
 *
 * HeroSection
 *
 */
import React from 'react';
import styled from 'styled-components/macro';
import { StyleConstants } from 'styles/StyleConstants';
import { Button } from '../Button';
import AboutHeroImage1x from './assets/AboutHeroImage1x.png';
import AboutHeroImage2x from './assets/AboutHeroImage2x.png';
import MobileAboutHeroImage1x from './assets/MobileAboutHeroImage1x.png';
import MobileAboutHeroImage2x from './assets/MobileAboutHeroImage2x.png';

interface Props {}

export function HeroSection(props: Props) {
  return (
    <HeroDiv>
      <SearchWrapper>
        <Input name="Charity" id="charity" placeholder="Search Charity Name" />
        <Select name="Categories" id="categories">
          <option value="" hidden>
            Search By category
          </option>
          <option value="1">Animal & Nature</option>
          <option value="2">Arts & Education </option>
          <option value="3">Communities & Religion</option>
          <option value="4">Human Outreach</option>
        </Select>
        <Button btnStyle={'primary'}>Find Charity</Button>
      </SearchWrapper>
    </HeroDiv>
  );
}

const HeroDiv = styled.div`
  width: calc(100% + 4rem);
  margin-left: -2rem;
  height: 150px;
  background-image: url(${MobileAboutHeroImage1x});
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (min-resolution: 192dpi) and (min-width: 320px),
    only screen and (-webkit-min-device-pixel-ratio: 2) and (min-width: 320px) {
    background-image: url(${MobileAboutHeroImage2x});
  }

  @media only screen and (min-width: 476px) {
    margin-top: -${StyleConstants.NAV_BAR_HEIGHT};
    background-image: url(${AboutHeroImage1x});
  }

  @media only screen and (min-resolution: 192dpi) and (min-width: 476px),
    only screen and (-webkit-min-device-pixel-ratio: 2) and (min-width: 476px),
    only screen and (min-width: 1920px) {
    background-image: url(${AboutHeroImage2x});
  }
`;

const SearchWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 70%;
  margin-top: 4rem;
  @media only screen and (max-width: 475px) {
    width: 100%;
  }
`;

const Input = styled.input`
  flex: 3;
  margin-right: 2rem;
  height: 3rem;
  padding: 10px;
  margin-bottom: 10px;
  font: var(--unnamed-font-style-normal) normal
    var(--unnamed-font-weight-normal) var(--unnamed-font-size-16) /
    var(--unnamed-line-spacing-24) var(--unnamed-font-family-avenir);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(---333333-dark);
  text-align: left;
  font: normal normal normal 16px/24px Avenir;
  letter-spacing: 0px;
  color: #333333;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 50px;
  ::placeholder {
    color: #333333;
    opacity: 1;
  }
`;

const Select = styled.select`
  flex: 1;
  margin-right: 2rem;
  height: 3rem;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 25px;
  opacity: 1;
  padding: 0.5rem;
  color: #333333;
  opacity: 1;

  @media only screen and (max-width: 475px) {
    margin: 1rem 0;
    width: 100%;
  }
`;
