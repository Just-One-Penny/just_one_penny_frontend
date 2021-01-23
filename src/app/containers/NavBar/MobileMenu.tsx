import React from 'react';
import styled, { css } from 'styled-components/macro';
import { useAuth } from 'context/auth-context';
import { Modal } from 'app/components/Modal';
import { AuthenticationModal } from '../AuthenticationModal';
import { Logo } from './Logo';
import { Button } from 'app/components/Button';
import { ReactComponent as ButtonClear } from './assets/ButtonClear.svg';
import { NavLink } from 'react-router-dom';
import NavTabs from './MobileNavTabs';

const activeLinkStyle = {
  color: '#fff',
  background: '#0a559e 0% 0% no-repeat padding-box',
};

export const MobileMenu = ({ show, toggleMenu }) => {
  const { user, logout } = useAuth();

  return (
    <MobileNavMenu show={show}>
      <CloseButton onClick={toggleMenu}>
        <ButtonClear title="close menu" />
      </CloseButton>

      <Logo />

      <NavItems>
        {NavTabs.map(tab => (
          <NavItem key={tab.text}>
            <StyledLink
              onClick={toggleMenu}
              activeStyle={activeLinkStyle}
              exact
              to={tab.link}
            >
              {tab.text}
            </StyledLink>
          </NavItem>
        ))}

        {user && user.id && (
          <NavItem>
            <StyledLink
              onClick={toggleMenu}
              activeStyle={activeLinkStyle}
              to="/settings"
            >
              My Account
            </StyledLink>
          </NavItem>
        )}
      </NavItems>

      {user && user.id ? (
        <ButtonWrapper>
          <Button onClick={logout} btnStyle="secondary" width={130}>
            Sign Out
          </Button>
        </ButtonWrapper>
      ) : (
        <Modal
          buttonElement={
            <Button noBoxShadow={true} width={130} btnStyle="secondary">
              Sign In
            </Button>
          }
          modalBody={<AuthenticationModal isSignup />}
        />
      )}
    </MobileNavMenu>
  );
};

const MobileNavMenu = styled.div<{ show: boolean }>`
  display: flex;
  flex-direction: column;
  padding: 0 1rem;

  position: absolute;
  z-index: 6;
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
  position: absolute;
  cursor: pointer;

  top: 1.546875rem;
  left: 1.046875rem;
`;

const NavItem = styled.div`
  padding: .5rem 1rem .5rem 1rem;
  color: #333;
  border-bottom 1px solid #9fa2a8;
`;

const StyledLink = styled(NavLink)`
  font-size: 1.25rem;
  font-weight: 900;
  border-radius: 5px;
  display: inline-block;
  width: 100%;
  padding: 0.75rem 0 0.5625rem 1rem;

  &:hover {
    color: #0a559e;
  }
`;

const NavItems = styled.nav`
  display: flex;
  flex-direction: column;

  margin-bottom: 4.8125rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
