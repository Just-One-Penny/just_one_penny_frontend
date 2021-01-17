import React from 'react';
import styled, { css } from 'styled-components/macro';

import { AuthenticationModal } from '../AuthenticationModal';
import { Modal } from 'app/components/Modal';
import { useAuth } from 'context/auth-context';
import { Button } from '../../components/Button';
import { NavLink } from 'react-router-dom';

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

export function Nav() {
  const { user, logout } = useAuth();

  return (
    <Wrapper>
      <StyledLink to="/charities/new">For Charities</StyledLink>

      {/* <StyledLink to="/about">
        <NavLink className="mr-4">About</NavLink>
      </StyledLink> */}

      {user && user.id ? (
        <>
          <StyledLink to="/settings">My Accounts</StyledLink>

          <Button width={138} btnStyle="secondary" onClick={logout}>
            Logout
          </Button>
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
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  display: none;

  > * {
    &:not(:last-child) {
      margin-right: 3.125rem;
    }
  }

  @media (min-width: 651px) {
    display: flex;
    align-items: center;
    max-width: 500px;

    .icon {
      display: inline;
    }
  }
`;

const StyledLink = styled(NavLink)`
  ${sharedCss}

  &:hover,
  &:active,
  &:focus,
  &:link {
    color: #0a559e;
  }
`;

const NavTextLink = styled.span`
  ${sharedCss}

  &:hover,
  &:active {
    color: #0a559e;
  }
`;
