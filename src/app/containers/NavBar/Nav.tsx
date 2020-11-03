import React from 'react';
import styled from 'styled-components/macro';
import { ReactComponent as DocumentationIcon } from './assets/documentation-icon.svg';
// import { ReactComponent as GithubIcon } from './assets/github-icon.svg';
import { AuthenticationModal } from '../AuthenticationModal';
import { Modal } from 'app/components/Modal';
import { useAuth } from 'context/auth-context';

export function Nav() {
  const { user } = useAuth();

  return (
    <Wrapper>
      {user?.email ? (
        user?.email
      ) : (
        <>
          <Modal
            buttonElement={
              <>
                <DocumentationIcon />
                Login
              </>
            }
            modalBody={<AuthenticationModal />}
          />
          <Modal
            buttonElement={
              <>
                <DocumentationIcon />
                Sign Up
              </>
            }
            modalBody={<AuthenticationModal isSignup />}
          />
        </>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  display: flex;
  margin-right: -1rem;
`;

const Button = styled.button`
  background-color: ${p => p.theme.primary};
  cursor: pointer;
  text-decoration: none;
  display: flex;
  padding: 0.25rem 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  align-items: center;
  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.4;
  }
  .icon {
    margin-right: 0.25rem;
  }
`;
