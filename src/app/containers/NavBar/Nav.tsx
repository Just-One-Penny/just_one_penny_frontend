import React from 'react';
import styled, { css } from 'styled-components/macro';

import { AuthenticationModal } from '../AuthenticationModal';
import { Modal } from 'app/components/Modal';
import { useAuth } from 'context/auth-context';
import { Button } from '../../components/Button';
import { NavLink } from 'react-router-dom';
import { ReactComponent as HamburgerIcon } from './assets/ButtonHamburgerMenu.svg';
import { Logo } from './Logo';

const sharedCss = css`
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-900)
    var(--unnamed-font-size-16) / 22px var(--unnamed-font-family-avenir);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(---333333-dark);
  text-align: left;
  font: normal normal 900 16px/22px Avenir;
  letter-spacing: 0px;
  color: #333333;
  cursor: pointer;
`;

export const DesktopMenu = ({ toggleMenu }) => {
  const { user, logout } = useAuth();

  return (
    <>
      <HamburgerButton onClick={toggleMenu}>
        <HamburgerIcon title="open menu" />
      </HamburgerButton>

      <Logo />

      <DesktopNav>
        <StyledLink activeStyle={{ color: '#0a559e' }} to="/charities/new">
          For Charities
        </StyledLink>

        {/* <StyledLink to="/about">
        <NavLink className="mr-4">About</NavLink>
      </StyledLink> */}

        {user && user.id ? (
          <>
            <StyledLink activeStyle={{ color: '#0a559e' }} to="/settings">
              My Account
            </StyledLink>

            <Button width={138} btnStyle="secondary" onClick={logout}>
              Logout
            </Button>

            <Text>Hi {user.fullName}</Text>
          </>
        ) : (
          <>
            <Modal
              buttonElement={<NavTextLink>Login</NavTextLink>}
              modalBody={<AuthenticationModal />}
            />

            <Modal
              buttonElement={
                <Button noBoxShadow={true} width={138} btnStyle="secondary">
                  Sign Up
                </Button>
              }
              modalBody={<AuthenticationModal isSignup />}
            />
          </>
        )}
      </DesktopNav>
    </>
  );
};

const HamburgerButton = styled.span`
  display: none;
  position: absolute;
  cursor: pointer;

  top: 1.5rem;
  left: 1rem;

  @media only screen and (max-width: 650px) {
    display: flex;
  }
`;

const DesktopNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  > * {
    &:not(:last-child) {
      margin-right: 3.125rem;
    }
  }

  @media only screen and (max-width: 650px) {
    display: none;
  }
`;

const StyledLink = styled(NavLink)`
  ${sharedCss}
`;

const NavTextLink = styled.span`
  ${sharedCss}

  &:hover,
  &:active {
    color: #0a559e;
  }
`;

const Text = styled.p`
  ${sharedCss};

  cursor: text;
`;
