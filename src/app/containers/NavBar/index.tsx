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
        <Box>&nbsp;</Box>
      </NavWrapper>
    </Wrapper>
  );
}

const NavWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 6fr 1fr;
  padding: 0 1.5rem;
  width: 100%;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.9);
  @media (min-width: 640px) {
    display: flex;
    justify-content: space-around;
  }
`;

const Wrapper = styled.header`
  box-shadow: 0 1px 0 0 ${p => p.theme.colors.light};
  height: ${StyleConstants.DESKTOP_NAV_BAR_HEIGHT};
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 5;
  ${NavWrapper} {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @media only screen and (max-width: 475px) {
    height: ${StyleConstants.MOBILE_NAV_BAR_HEIGHT};
  }
`;

const Box = styled.div`
  @media (min-width: 640px) {
    display: none;
  }
`;
