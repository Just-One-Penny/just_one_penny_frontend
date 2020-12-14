import React from 'react';
import styled from 'styled-components/macro';

import { AuthenticationModal } from '../AuthenticationModal';
import { Modal } from 'app/components/Modal';
import { useAuth } from 'context/auth-context';
import { Link } from 'react-router-dom';

export function Nav() {
  const { user, logout } = useAuth();

  return (
    <Wrapper>
      <Link to="/charities/new">
        <NavLink className="mr-4">Info for Charities</NavLink>
      </Link>
      {user && user.id ? (
        <Link to="/">
          <Link to="/settings">
            <NavLink className="mr-4">My Account</NavLink>
          </Link>
          <NavLink className="button-border" onClick={logout}>
            Logout
          </NavLink>
        </Link>
      ) : (
        <>
          <Modal
            buttonElement={<NavLink className="mr-4">Login</NavLink>}
            modalBody={<AuthenticationModal />}
          />
          <Modal
            buttonElement={<NavLink className="button-border">Sign Up</NavLink>}
            modalBody={<AuthenticationModal isSignup />}
          />
        </>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  display: none;
  > a:hover,
  > div > a:hover,
  button:hover {
    opacity: 0.6;
  }
  > a:active,
  button:active {
    opacity: 0.4;
  }

  & > button {
    all: unset;
  }
  & > button:hover {
    all: unset;
  }
  .button-border {
    color: #0a559e;
    border: 2px solid;
    border-radius: 20px;
    padding: 5px 15px;
  }

  @media (min-width: 640px) {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    max-width: 500px;
    .icon {
      display: inline;
    }
  }
`;

const NavLink = styled.span`
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
