import React, { useState } from 'react';
import styled from 'styled-components/macro';

import { AuthenticationModal } from '../AuthenticationModal';
import { Modal } from 'app/components/Modal';
import { useAuth } from 'context/auth-context';

import items from './sampleLinks';

import icon from './assets/dropdown-icon.png';

export function Nav() {
  const { user } = useAuth();
  const [show, toggle] = useState(false);

  function _toggleMenu() {
    toggle(!show);
  }

  return (
    <Wrapper>
      <div>
        <a onClick={_toggleMenu} href="www.google.com">
          Charities
          <img className="icon" alt="V" src={icon} />
        </a>
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
      <a href="/">About</a>
      {user ? (
        <a className="button-border" href="/">
          Logout
        </a>
      ) : (
        <>
          <Modal
            buttonElement={<button>Login</button>}
            modalBody={<AuthenticationModal />}
          />
          <Modal
            buttonElement={<button className="button-border">Sign Up</button>}
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
