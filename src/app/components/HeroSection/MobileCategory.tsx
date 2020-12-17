import React from 'react';
import styled, { css } from 'styled-components/macro';
import { ReactComponent as ButtonClear } from './assets/ButtonClear.svg';
import { Button } from '../Button';
import { StyleConstants } from 'styles/StyleConstants';
import { CategorySelect } from '../CategorySelect';

export const MobileCategory = ({ showMobile, _toggleMobile, onSubmit }) => {
  return (
    <MobileSelectContainer onSubmit={onSubmit} showMobile={showMobile}>
      <ButtonClearContainer onClick={() => _toggleMobile()}>
        <ButtonClear />
      </ButtonClearContainer>

      <MobileSelect>
        <CategorySelect />
      </MobileSelect>

      <ButtonContainer>
        <Button btnStyle={'primary'}>Find Charities</Button>
      </ButtonContainer>
    </MobileSelectContainer>
  );
};

const MobileSelectContainer = styled.form<{
  showMobile: boolean;
  onSubmit: object;
}>`
  display: flex;
  flex-direction: column;

  position: absolute;
  height: 100vh;
  width: 100vw;
  // top: -2rem;
  top: 0;
  right: 0;
  transform: translateX(100%);

  opacity: 0;
  z-index: 3;
  transition: all 0.4s;

  ${props =>
    props.showMobile &&
    css`
      // width: 100vw;
      opacity: 1;
      transform: translateX(0);
    `};
`;

// ----------------------------------------------------

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

const ButtonClearContainer = styled.span`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  margin-top: calc(1.046875rem + ${StyleConstants.NAV_BAR_HEIGHT});
  margin-left: 1.296875rem;

  margin-bottom: 12.04125rem;
`;

const MobileSelect = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 12.5rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
