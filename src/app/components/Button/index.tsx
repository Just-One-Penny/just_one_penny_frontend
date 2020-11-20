/**
 *
 * Button
 *
 */
import React from 'react';
import styled from 'styled-components/macro';

interface ButtonProps {
  btnStyle: string;
}

export function Button(props) {
  return <StyleButton {...props}></StyleButton>;
}

const handleButtonType = (btnStyle = 'primary') => {
  switch (btnStyle) {
    case 'primary':
      return `
        color: #fff;
        background: transparent linear-gradient(0deg, #11569B 0%, #54AECC 100%, #6CCDDD 100%, #7AE0E8 100%) 0% 0% no-repeat padding-box;

        &:hover,
        &:active {
          background: #0A559E 0% 0% no-repeat padding-box;
        }

        &:focus {
          text-decoration: underline;
        }
    `;

    case 'secondary':
      return `
        color: #0A559E;
        background: transparent;
        border: 2px solid #0A559E;
        &:hover,
        &:active {
          border-color: #0C4379;
          color: #0C4379;
        }

        &:focus,
        &:active {
          text-decoration: underline;
        }
        `;

    default:
      return '';
  }
};

export const StyleButton = styled.button<ButtonProps>`
  ${props => handleButtonType(props.btnStyle)}

  width: 170px;
  height: 44px;
  font-weight: 900;
  box-shadow: 0px 2px 6px #0000005a;
  border-radius: 50px;
  opacity: 1;
  text-align: center;
  font: normal normal 900 16px/22px;
  .icon {
    margin-right: 0.25rem;
  }
`;
