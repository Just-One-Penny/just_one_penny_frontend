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

export const StyleButton = styled.button<ButtonProps>`
  width: 170px;
  // testing props;
  // width: ${props => (props.btnStyle === 'primary' ? '500px;' : '170px;')}
  height: 44px;
  background: transparent
     linear-gradient(0deg, #11569b 0%, #54aecc 100%, #6ccddd 100%, #7ae0e8 100%)
    0% 0% no-repeat padding-box;
  box-shadow: 0px 2px 6px #0000005a;
  border-radius: 50px;
  opacity: 1;
  // margin-left: 80px;
  text-align: center;
  font: normal normal 900 16px/22px;
  color: #ffffff;
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
