import React, { useState } from 'react';
import styled, { css } from 'styled-components/macro';
import { useAuth } from 'context/auth-context';
import { Modal } from 'app/components/Modal';
import { AuthenticationModal } from '../AuthenticationModal';
import { Logo } from './Logo';
import { Button } from 'app/components/Button';
import { ReactComponent as HamburgerIcon } from './assets/ButtonHamburgerMenu.svg';
import { ReactComponent as ButtonClear } from './assets/ButtonClear.svg';
import { NavLink } from 'react-router-dom';

const sharedSVGStyles = css`
  position: absolute;
  // z-index: 6;

  // display: flex;
  // align-items: center:
  // justify-content: center;

  cursor: pointer;
`;

export function MobileMenu() {
  const [show, toggle] = useState(false);

  function _toggleMenu() {
    toggle(!show);
  }
  const { user, logout } = useAuth();

  return (
    <>
      <HamburgerButton onClick={_toggleMenu}>
        <HamburgerIcon title="open menu" />
      </HamburgerButton>

      <MobileNavMenu show={show}>
        <CloseButton onClick={_toggleMenu}>
          <ButtonClear title="close menu" />
        </CloseButton>

        <Logo />

        <NavItems>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/charities">Charities</NavLink>
          <NavLink to="/charities/new">Info for Charities</NavLink>
        </NavItems>

        {user && user.id ? (
          <AuthNavItems>
            <NavLink to="/settings">My Account</NavLink>
            <Button onClick={logout} btnStyle="secondary" width={130}>
              Sign Out
            </Button>
          </AuthNavItems>
        ) : (
          <Modal
            buttonElement={
              <Button width={130} btnStyle="secondary">
                Sign In
              </Button>
            }
            modalBody={<AuthenticationModal isSignup />}
          />
        )}
      </MobileNavMenu>
    </>
  );
}

const HamburgerButton = styled.span`
  ${sharedSVGStyles}

  top: 1.5rem;
  left: 1rem;
  opacity: 1;
`;

const MobileNavMenu = styled.div<{ show: boolean }>`
  display: flex;
  flex-direction: column;

  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  opacity: 0;
  background: #f2f2f2 0% 0% no-repeat padding-box;

  transform: translateX(-100%);
  transition: all 0.3s ease-out;

  ${props =>
    props.show &&
    css`
      opacity: 1;
      transform: translateX(0);
    `}
`;

const CloseButton = styled.span`
  ${sharedSVGStyles}

  top: 1.546875rem;
  left: 1.046875rem;
`;

const NavItems = styled.nav`
  display: flex;
  flex-direction: column;

  margin-top: 1.49562rem;
  margin-bottom: 4.8125rem;
`;

const AuthNavItems = styled.div`
  display: flex;
  flex-direction: column;

  &:first-child {
    margin-bottom: 3.125rem;
  }
`;
