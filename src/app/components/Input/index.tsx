/**
 *
 * Input
 *
 */
import styled from 'styled-components/macro';

export const Input = styled.input`
  border: 2px solid ${p => p.theme.colors.light[200]};
  border-radius: 4px;
  color: ${p => p.theme.colors.light[500]};
  display: block;
  width: 100%;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5;
  color: ${p => p.theme.colors.light[500]};
  background-color: ${p => p.theme.colors.light[500]};
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  outline: none;
  height: 2.75rem;
  padding: 0 0.75rem;
  &::placeholder {
    font-weight: 300;
    color: ${p => p.theme.colors.light[200]};
  }
`;
