import React from 'react';
import styled from 'styled-components/macro';
import { Logo } from './Logo';
import { MobileMenu } from './MobileMenu';
import { StyleConstants } from 'styles/StyleConstants';
import { Nav } from './Nav';
import { PageWrapper } from '../../components/PageWrapper';

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
  background-color: #f2f2f2;
  @media (min-width: 640px) {
    display: flex;
    justify-content: space-around;
  }
`;

const Wrapper = styled.header`
  box-shadow: 0 1px 0 0 ${p => p.theme.borderLight};
  height: ${StyleConstants.NAV_BAR_HEIGHT};
  display: flex;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: ${p => p.theme.background};
  z-index: 2;
  @supports (backdrop-filter: blur(10px)) {
    backdrop-filter: blur(10px);
    background-color: ${p =>
      p.theme.background.replace(
        /rgba?(\(\s*\d+\s*,\s*\d+\s*,\s*\d+)(?:\s*,.+?)?\)/,
        'rgba$1,0.75)',
      )};
  }
  ${PageWrapper} {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const Box = styled.div`
  @media (min-width: 640px) {
    display: none;
  }
`;
