import React, { useState } from 'react';
import styled from 'styled-components/macro';

import { AuthenticationModal } from '../AuthenticationModal';
import { Modal } from 'app/components/Modal';
import { useAuth } from 'context/auth-context';

import items from './sampleLinks';

import icon from './assets/dropdown-icon.png';

export function Nav() {
  const { user, logout } = useAuth();
  const [show, toggle] = useState(false);

  function _toggleMenu() {
    toggle(!show);
  }

  return (
    <Wrapper>
      <div>
        <NavLink onClick={_toggleMenu}>
          Charities
          <img className="icon" alt="V" src={icon} />
        </NavLink>
        {show && (
          <Dropdown>
            {items.map((item, i) => (
              <a href={item.link} key={item.text}>
                {item.text}
              </a>
            ))}
          </Dropdown>
        )}
      </div>
      <NavLink href="/about">About</NavLink>
      {user.id ? (
        <NavLink className="button-border" href="/" onClick={logout}>
          Logout
        </NavLink>
      ) : (
        <>
          <Modal
            buttonElement={<NavLink>Login</NavLink>}
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
  opacity: 0.7;
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
    width: 40vw;
    max-width: 400px;
    .icon {
      display: inline;
    }
  }
`;

const Dropdown = styled.ul`
  margin-top: 0.5rem;
  background-color: darkgray;
  position: absolute;
  width: fit-content;
  display: flex;
  flex-direction: column;
  a {
    padding: 0.25rem 0.5rem;
    opacity: 0.8;
    :hover {
      opacity: 1;
      background-color: grey;
    }
  }
`;

const NavLink = styled.a`
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-900)
    var(--unnamed-font-size-16) / 22px var(--unnamed-font-family-avenir);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(---333333-dark);
  text-align: left;
  font: normal normal 900 16px/22px Avenir;
  letter-spacing: 0px;
  color: #333333;
`;
