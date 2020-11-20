/**
 *
 * Search
 *
 */
import { CATEGORIES } from 'app/constants';
import React from 'react';
import { Form, Field } from 'react-final-form';
import { useHistory } from 'react-router-dom';
import Select from 'react-select';
import styled from 'styled-components/macro';
import { StyleConstants } from 'styles/StyleConstants';
import { Button } from '../Button';

const categoryOptions = CATEGORIES.map(category => ({
  value: category.toLowerCase(),
  label: category,
}));

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

  const selectStyles = {
    control: (_, { selectProps: { width } }) => ({
      display: 'flex',
      height: '100%',
      width: '100%',
      background: '#ffffff 0% 0% no-repeat padding-box',
      borderRadius: '25px',
      opacity: 1,
      color: '#333333',
      textAlign: 'left',
      font: 'normal normal normal 16px/24px Avenir',
      letterSpacing: '0px',
    }),
  };

  const ReactSelectAdapter = ({ input, ...rest }) => (
    <Select {...input} {...rest} isMulti styles={selectStyles} searchable />
  );
  return (
    <Form
      onSubmit={handleSearch}
      render={({ handleSubmit }) => (
        <FormContainer onSubmit={handleSubmit} {...props}>
          <p>
            <Input name="Charity" placeholder="Search Charity Name" />
          </p>
          <Wrapper>
            <StyledSelect
              name="categories"
              component={ReactSelectAdapter}
              placeholder="Search By category"
              options={categoryOptions}
            />
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
const StyledSelect = styled(Field)`
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
