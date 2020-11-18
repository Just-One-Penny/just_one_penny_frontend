/**
 *
 * Divider
 *
 */
import React from 'react';
import styled from 'styled-components';

interface Props {}

export function Divider(props: Props) {
  return <DividerLine></DividerLine>;
}

const DividerLine = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
  height: 1px;
  box-shadow: inset 0 -1px 0 #e1e1e1;
`;
