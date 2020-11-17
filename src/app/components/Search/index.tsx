/**
 *
 * Search
 *
 */
import React from 'react';
import styled, { css } from 'styled-components/macro';
import { Button } from '../Button';

export const Search = props => {
  return (
    <Div {...props}>
      <p>
        <Input name="Charity" id="charity" placeholder="Search Charity Name" />
      </p>
      <Wrapper>
        <Select name="Categories" id="categories">
          <option value="" hidden>
            Search By category
          </option>
          <option value="1">Animal & Nature</option>
          <option value="2">Arts & Education </option>
          <option value="3">Communities & Religion</option>
          <option value="4">Human Outreach</option>
        </Select>
        <Button btnStyle={'primary'}>Find Charity</Button>
      </Wrapper>
    </Div>
  );
};

const Div = styled.div`
  width: 70%;
  @media only screen and (max-width: 475px) {
    width: 100%;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 475px) {
    flex-direction: column;
    align-items: center;
  }
`;
const Input = styled.input`
  color: ${p => p.theme.colors.light[200]};
  width: 100%;
  height: 3rem;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #ffffff;
  border-radius: 50px;
  line-height: 1.5;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  outline: none;
  opacity: 1;
  padding: 10px;
  margin-bottom: 10px;
  font-style: normal normal normal 16px/22px Avenir;
  &::placeholder {
    font-weight: 300;
    color: ${p => p.theme.colors.light[200]};
  }
  &:hover {
    border: 1px solid #0a559e;
    opacity: 0.8;
  }
  &:active {
    opacity: 0.4;
    border: 0px;
  }
`;
const Select = styled.select`
  width: 53%;
  height: 3rem;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #ffffff;
  border-radius: 25px;
  opacity: 1;
  padding: 10px;
  &:hover {
    border: 1px solid #0a559e;
  }
  &:focus {
    border: 1px solid #0a559e;
    border-radius: 25px;
  }

  @media only screen and (max-width: 475px) {
    margin: 1rem 0;
    width: 100%;
  }
`;
