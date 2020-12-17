/**
 *
 * HeroSection
 *
 */
import { CATEGORIES } from 'app/constants';
import React, { useState } from 'react';
import { Form, Field } from 'react-final-form';
import { useHistory } from 'react-router-dom';
import Select from 'react-select';
import styled, { css } from 'styled-components/macro';
import { StyleConstants } from 'styles/StyleConstants';
import { Button } from '../Button';
import { CategorySelect } from '../CategorySelect';
import AboutHeroImage1x from './assets/AboutHeroImage1x.png';
import AboutHeroImage2x from './assets/AboutHeroImage2x.png';
import MobileAboutHeroImage1x from './assets/MobileAboutHeroImage1x.png';
import MobileAboutHeroImage2x from './assets/MobileAboutHeroImage2x.png';

import { DesktopCategory } from './DesktopCategory';
import { MobileCategory } from './MobileCategory';

const categoryOptions = CATEGORIES.map(category => ({
  value: category.toLowerCase(),
  label: category,
}));

interface Props {}

export function HeroSection(props: Props) {
  const [showMobile, toggleMobile] = useState(false);

  const _toggleMobile = () => {
    toggleMobile(!showMobile);
  };

  const history = useHistory();

  const handleSearch = values => {
    const searchValues = { ...values };
    if (searchValues.categories) {
      searchValues.categories = searchValues.categories.map(
        category => category.value,
      );
    }
    const search = new URLSearchParams(searchValues);
    history.push(`/charities?${search}`);
  };

  return (
    <HeroDiv>
      <Form
        onSubmit={handleSearch}
        render={({ handleSubmit }) => (
          <>
            <MobileSelectBG showMobile={showMobile} />

            <DesktopCategory
              onSubmit={handleSubmit}
              _toggleMobile={_toggleMobile}
            />

            <MobileCategory
              showMobile={showMobile}
              _toggleMobile={_toggleMobile}
              onSubmit={handleSubmit}
            />
          </>
        )}
      />
    </HeroDiv>
  );
}

const HeroDiv = styled.div`
  // height: calc(192px - ${StyleConstants.NAV_BAR_HEIGHT});
  height: 192px;
  background-image: url(${MobileAboutHeroImage1x});
  background-size: cover;
  background-position: center bottom;

  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: relative;

  @media only screen and (min-resolution: 192dpi) and (min-width: 320px),
    only screen and (-webkit-min-device-pixel-ratio: 2) and (min-width: 320px) {
    background-image: url(${MobileAboutHeroImage2x});
  }

  @media only screen and (min-width: 476px) {
    background-image: url(${AboutHeroImage1x});
    // height: calc(152px - ${StyleConstants.NAV_BAR_HEIGHT});
    height: 152px;
    // background-position: center;
  }

  @media only screen and (min-resolution: 192dpi) and (min-width: 476px),
    only screen and (-webkit-min-device-pixel-ratio: 2) and (min-width: 476px),
    only screen and (min-width: 1920px) {
    background-image: url(${AboutHeroImage2x});
  }
`;

const MobileSelectBG = styled.div<{ showMobile: boolean }>`
  width: 0;
  height: 100vh;
  position: fixed;
  top: ${StyleConstants.NAV_BAR_HEIGHT};
  right: 0;
  z-index: 2;
  background-color: #d9d9d9;
  opacity: 0;

  transition: all 0.4s;

  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);

  ${props =>
    props.showMobile &&
    css`
      width: 100vw;
      opacity: 0.85;
    `};
`;
