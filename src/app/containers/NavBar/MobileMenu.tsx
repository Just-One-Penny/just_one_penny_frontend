import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { useAuth } from 'context/auth-context';
import { Modal } from 'app/components/Modal';
import { AuthenticationModal } from '../AuthenticationModal';

import icon from './assets/hamburger-icon.png';

export function MobileMenu() {
  const [show, toggle] = useState(false);

  function _toggleMenu() {
    toggle(!show);
  }
  const { user, logout } = useAuth();
  return (
    <Div>
      <img src={icon} alt="Menu" onClick={_toggleMenu} />
      {show && (
        <Menu>
          <p onClick={_toggleMenu}>X</p>
          <ul>
            <li key="Info for Charities">
              <a href="/charities/new">Info for Charities</a>
            </li>
            {user && user.id ? (
              <li key="My Account">
                <a href="/settings">My Account</a>
              </li>
            ) : (
              <>
                <li key="Login">
                  <Modal
                    buttonElement="Login"
                    modalBody={<AuthenticationModal />}
                  />
                </li>
                <li key="Sign Up">
                  <Modal
                    buttonElement="Sign Up"
                    modalBody={<AuthenticationModal isSignup />}
                  />
                </li>
              </>
            )}
          </ul>
        </Menu>
      )}
    </Div>
  );
}

const Div = styled.div`
  text-align: center;
  height: 1.5rem;
  img {
    height: 100%;
    margin: 0 auto;
    &:hover {
      opacity: 0.6;
      cursor: pointer;
    }
  }
  @media (min-width: 640px) {
    display: none;
  }
`;

const Menu = styled.div`
  height: 100vh;
  background-color: darkgray;
  width: 60vw;
  max-width: 300px;
  position: fixed;
  top: 0;
  left: 0;
  text-align: left;
  padding-left: 2rem;
  padding-top: 1rem;
  p {
    font-size: 1.5rem;
    font-weight: bold;
    &:hover {
      opacity: 0.6;
      cursor: pointer;
    }
  }
  ul {
    padding-top: 2rem;

    a:hover {
      opacity: 0.6;
    }
  }
`;
