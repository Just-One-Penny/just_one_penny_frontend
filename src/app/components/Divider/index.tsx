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
  border-top: 1.5px solid #bbb;
  border-color: #f2f2f2;
`;
