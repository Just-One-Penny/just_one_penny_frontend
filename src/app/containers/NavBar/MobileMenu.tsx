import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { useAuth } from 'context/auth-context';
import { Modal } from 'app/components/Modal';
import { AuthenticationModal } from '../AuthenticationModal';
import { Logo } from './Logo';
import icon from './assets/hamburger-icon.png';
import { Button } from 'app/components/Button';

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
          <Row>
            <p onClick={_toggleMenu}>X</p>
            <Logo />
          </Row>
          <ul>
            <li key="Home">
              <a href="/">Home</a>
            </li>
            <Hr />
            {/*<li key="About">
              <a href="/about">About</a>
      </li>
      <Hr /> */}
            <li key="Charities">
              <a href="/charities">Charities</a>
            </li>
            <Hr />
            <li key="Info for Charities">
              <a href="/charities/new">Info for Charities</a>
            </li>
            <Hr />
            {user && user.id ? (
              <>
                <li key="My Account">
                  <a href="/settings">My Account</a>

                  <Hr />
                </li>
                <Li key="Sign Out">
                  <MyButton btnStyle="secondary" onClick={logout}>
                    Sign Out
                  </MyButton>
                </Li>
              </>
            ) : (
              <>
                <Li key="Sign Up">
                  <Modal
                    buttonElement={
                      <MyButton btnStyle="secondary">Sign In</MyButton>
                    }
                    modalBody={<AuthenticationModal isSignup />}
                  />
                </Li>
              </>
            )}
          </ul>
        </Menu>
      )}
    </Div>
  );
}

const Li = styled.li`
  display: flex;
  justify-content: center;
`;

const Hr = styled.hr`
  margin: 10px 40px 0 0;
  border-top: 0.5px solid #bbb;
`;

const MyButton = styled(Button)`
  box-shadow: none;
  border: 3px solid #0a559e;
  font-size: 0.85em;
`;

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
  li {
    color: #333333;
    margin-top: 20px;
    font-size: 1.25em;
    font-weight: 600;
  }
  @media (min-width: 651px) {
    display: none;
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;

  img {
    height: 40px;
  }

  p {
    margin-right: 50px;
    color: #9fa2a8;
    font-weight: lighter;
  }
`;

const Menu = styled.div`
  height: 100vh;
  background-color: #f2f2f2;
  width: 70vw;
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
