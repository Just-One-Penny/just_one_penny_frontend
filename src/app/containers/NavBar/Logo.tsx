import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components/macro';

import BetaLogo from './assets/BetaLogo.png';
import BetaLogoMobile from './assets/BetaLogoMobile.png';

export function Logo() {
  return (
    <JOPLogo>
      <NavLink to="/">
        <img
          srcSet={`${BetaLogoMobile} 128w, ${BetaLogo} 149w`}
          sizes="(max-width: 650px) 128px, 149px"
          src={BetaLogo}
          alt="Just One Penny"
        />
      </NavLink>
    </JOPLogo>
  );
}

const JOPLogo = styled.div`
  margin-top: 0.75rem;
  margin-bottom: 1rem;

  display: flex;
  justify-content: center;
`;
