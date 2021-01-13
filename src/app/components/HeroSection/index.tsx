/**
 *
 * HeroSection
 *
 */
import React, { useState } from 'react';
import { Form } from 'react-final-form';
import { useHistory } from 'react-router-dom';
import styled, { css } from 'styled-components/macro';
import { StyleConstants } from 'styles/StyleConstants';
import AboutHeroImage1x from './assets/AboutHeroImage1x.png';
import AboutHeroImage2x from './assets/AboutHeroImage2x.png';
import MobileAboutHeroImage1x from './assets/MobileAboutHeroImage1x.png';
import MobileAboutHeroImage2x from './assets/MobileAboutHeroImage2x.png';

import { DesktopCategory } from './DesktopCategory';
import { MobileCategory } from './MobileCategory';

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
        render={({ handleSubmit, values }) => (
          <>
            {/* To be uncommented when MobileSelect goes live */}
            {/* <MobileSelectBG showMobile={showMobile} /> */}

            <DesktopCategory
              onSubmit={handleSubmit}
              _toggleMobile={_toggleMobile}
              values={values}
            />

            {/* To be uncommented when MobileSelect goes live */}
            {/* <MobileCategory
              showMobile={showMobile}
              _toggleMobile={_toggleMobile}
              onSubmit={handleSubmit}
            /> */}
          </>
        )}
      />
    </HeroDiv>
  );
}

const HeroDiv = styled.div`
  height: 192px;
  background-image: url(${MobileAboutHeroImage1x});
  background-size: cover;
  background-position: center bottom;

  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: relative;

  @media only screen and (min-resolution: 192dpi) and (min-width: 0px),
    only screen and (-webkit-min-device-pixel-ratio: 2) and (min-width: 0px) {
    background-image: url(${MobileAboutHeroImage2x});
  }

  @media only screen and (min-width: 476px) {
    background-image: url(${AboutHeroImage1x});
    height: 152px;
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
  top: 0;
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
