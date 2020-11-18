/**
 *
 * Search
 *
 */
import React from 'react';
import styled from 'styled-components/macro';
import { Button } from '../Button';

export const Search = props => {
  return (
    <Div {...props}>
      <p>
        <Input name="Charity" placeholder="Search Charity Name" />
      </p>
      <Wrapper>
        <Select name="Categories" id="categories">
          <option value="" hidden>
            Search By Category
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
  width: 100%;
  height: 3rem;
  padding: 10px;
  margin-bottom: 10px;
  font: var(--unnamed-font-style-normal) normal
    var(--unnamed-font-weight-normal) var(--unnamed-font-size-16) /
    var(--unnamed-line-spacing-24) var(--unnamed-font-family-avenir);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(---333333-dark);
  text-align: left;
  font: normal normal normal 16px/24px Avenir;
  letter-spacing: 0px;
  color: #333333;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #0a559e;
  border-radius: 50px;
  ::placeholder {
    color: #333333;
    opacity: 1;
  }
`;
const Select = styled.select`
  width: 53%;
  height: 3rem;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 25px;
  opacity: 1;
  padding: 0.5rem;
  color: #333333;
  opacity: 1;
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
