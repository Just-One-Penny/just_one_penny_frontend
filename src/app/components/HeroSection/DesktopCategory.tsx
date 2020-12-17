import React from 'react';
import { Field } from 'react-final-form';
import styled from 'styled-components/macro';
import { Button } from '../Button';

import { CategorySelect } from '../CategorySelect';

export const DesktopCategory = ({ _toggleMobile, onSubmit }) => {
  return (
    <SearchWrapper onSubmit={onSubmit}>
      <Input
        component="input"
        name="name"
        id="charity"
        placeholder="Search charity name or keyword"
      />
      <SelectContainer>
        <CategorySelect />
      </SelectContainer>

      <Text onClick={() => _toggleMobile()}>Search by category</Text>

      <ButtonContainer>
        <Button btnStyle={'primary'}>Find Charities</Button>
      </ButtonContainer>
    </SearchWrapper>
  );
};

const SearchWrapper = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 70%;
  margin-bottom: 1rem;

  @media only screen and (max-width: 475px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    margin-bottom: 1.125rem;
  }
`;

const SelectContainer = styled.div`
  width: 25%;
  margin-right: 2rem;

  @media only screen and (max-width: 475px) {
    display: none;
  }
`;

const ButtonContainer = styled.div`
  @media only screen and (max-width: 475px) {
    display: none;
  }
`;

const Text = styled.p`
  font-size: 1rem;
  color: #333;
  display: none;

  &:hover,
  &:active {
    text-decoration: underline;
  }

  @media only screen and (max-width: 475px) {
    display: flex;
  }
`;

const Input = styled(Field)`
  flex: 3;
  margin-right: 2rem;
  height: 3rem;
  padding: 10px;
  margin-bottom: 0;
  font-size: 1rem;

  @media only screen and (max-width: 475px) {
    flex: none;
    // width: 21.4375rem;
    width: 91.46666667%;
    margin-right: 0;
    margin-bottom: 1rem;
  }

  color: #333333;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 50px;
  ::placeholder {
    color: #333333;
    opacity: 1;
  }
`;
