import React from 'react';
import styled from 'styled-components/macro';
import { Logo } from './Logo';
import { MobileMenu } from './MobileMenu';
import { StyleConstants } from 'styles/StyleConstants';
import { Nav } from './Nav';

export function NavBar() {
  return (
    <Wrapper>
      <NavWrapper>
        <MobileMenu />
        <Logo />
        <Nav />
      </NavWrapper>
    </Wrapper>
  );
}

const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 62.1875%;

  @media only screen and (max-width: 1024px) {
    width: 75%;
  }

  @media only screen and (max-width: 850px) {
    width: 100%;
    padding: 0 1rem;
  }

  @media only screen and (max-width: 650px) {
    justify-content: space-around;
  }
`;

const Wrapper = styled.header`
  box-shadow: 0 1px 0 0 ${p => p.theme.colors.light};
  height: ${StyleConstants.DESKTOP_NAV_BAR_HEIGHT};
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 5;
  background-color: rgba(255, 255, 255, 0.9);

  @media only screen and (max-width: 600px) {
    height: ${StyleConstants.MOBILE_NAV_BAR_HEIGHT};
    justify-content: flex-start;
  }
`;
