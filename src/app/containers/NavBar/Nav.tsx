import React from 'react';
import styled from 'styled-components/macro';

import { AuthenticationModal } from '../AuthenticationModal';
import { Modal } from 'app/components/Modal';
import { useAuth } from 'context/auth-context';

export function Nav() {
  const { user } = useAuth();
  return (
    <Wrapper>
      <a href="/">Charities</a>
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
            buttonElement={<button className="button-border">Signup</button>}
            modalBody={<AuthenticationModal isSignup />}
          />
        </>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  display: none;
  a:hover,
  button:hover {
    opacity: 0.6;
  }
  a:active,
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
  }
`;
