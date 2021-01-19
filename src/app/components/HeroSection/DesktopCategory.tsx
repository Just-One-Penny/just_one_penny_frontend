import React from 'react';
import { Field } from 'react-final-form';
import styled from 'styled-components/macro';
import { Button } from '../Button';

import { CategorySelect } from '../CategorySelect';

export const DesktopCategory = ({ _toggleMobile, onSubmit, values }) => {
  return (
    <SearchWrapper onSubmit={onSubmit}>
      <FieldInput
        name="name"
        component="input"
        type="text"
        placeholder="Search charity name or keyword"
        id="name"
      />

      {/* To be uncommented when Category Select goes live */}
      {/* <SelectContainer>
        <CategorySelect />
      </SelectContainer> */}

      {/* To be uncommented when Mobile Category Select goes live */}
      {/* <Text onClick={() => _toggleMobile()}>Search by category</Text> */}

      <ButtonContainer>
        <Button btnStyle={'primary'}>
          {values && (values.name ? 'Find Charities' : 'View All Charities')}
        </Button>
      </ButtonContainer>
    </SearchWrapper>
  );
};

////////////////////////////////////////////////////////////////////
// SearchWrapper
// This is for the button but will be commented out when Mobile Category select goes live
// margin-bottom: 0.5rem;
//
// This property to be uncommented when Mobile Category select goes live
// margin-bottom: 1.125rem;
////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////
// ButtonContainer
// display: none; To be uncommented when Mobile Category select goes lives
////////////////////////////////////////////////////////////////////

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

    // This is for the button but will be commented out
    margin-bottom: 0.5rem;

    // This is original design spec margin bottom for the Search by Category Text
    // margin-bottom: 1.125rem;
  }
`;

const SelectContainer = styled.div`
  width: 25%;
  margin-right: 2rem;

  @media only screen and (max-width: 475px) {
    display: none;
  }
`;
////////////////////////////////////////////
/////////// temporary commented display: none until mobile
/////////// selection goes live
////////////////////////////////////////////
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 475px) {
    // display: none;
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

const FieldInput = styled(Field)`
  flex: 3;
  margin-right: 2rem;
  height: 3rem;
  padding: 10px;
  margin-bottom: 0;
  font-size: 1rem;

  @media only screen and (max-width: 475px) {
    flex: none;
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
