import React, { useState } from 'react';
import styled from 'styled-components/macro';

import icon from './assets/hamburger-icon.png';

export function Hamburger() {
  const [show, toggle] = useState(false);

  function _toggleMenu() {
    toggle(!show);
  }
  return (
    <Div>
      <img src={icon} alt="Menu" onClick={_toggleMenu} />
      {show && (
        <Menu>
          <p onClick={_toggleMenu}>X</p>
          <ul>
            <a href="/">dummy link</a>
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
  }
`;
