/**
 *
 * Search
 *
 */
import React from 'react';
import { Form, Field } from 'react-final-form';
import { useHistory } from 'react-router-dom';
import Select from 'react-select';
import styled from 'styled-components/macro';
import { StyleConstants } from 'styles/StyleConstants';
import { Button } from '../Button';
import { CategorySelect } from '../CategorySelect';

export const Search = props => {
  const history = useHistory();

  const handleSearch = values => {
    const searchValues = { ...values };
    if (searchValues.categories) {
      searchValues.categories = searchValues.categories.map(
        category => category.value,
      );
    }
    const search = new URLSearchParams(searchValues);
    history.push(`/charities?${search}`);
  };

  return (
    <Form
      onSubmit={handleSearch}
      render={({ handleSubmit }) => (
        <FormContainer onSubmit={handleSubmit} {...props}>
          <p>
            <Input name="Charity" placeholder="Search Charity Name" />
          </p>
          <Wrapper>
            <SelectContainer>
              <CategorySelect />
            </SelectContainer>
            <Button btnStyle={'primary'}>Find Charities</Button>
          </Wrapper>
        </FormContainer>
      )}
    />
  );
};

const FormContainer = styled.form`
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

const SelectContainer = styled.div`
  width: 53%;
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
