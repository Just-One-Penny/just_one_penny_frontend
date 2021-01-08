/**
 *
 * CategorySelect
 *
 */
import React, { memo } from 'react';
import { Field } from 'react-final-form';
import styled, { css } from 'styled-components/macro';
import Select from 'react-select';
import { CATEGORIES } from 'app/constants';

const categoryOptions = CATEGORIES.map(category => ({
  value: category.toLowerCase(),
  label: category,
}));

interface Props {}

export const CategorySelect = memo((props: Props) => {
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
    <Select
      maxMenuHeight={170}
      {...input}
      {...rest}
      isMulti
      styles={selectStyles}
      searchable
    />
  );

  return (
    <StyledSelect
      name="categories"
      component={ReactSelectAdapter}
      placeholder="Search by Category"
      options={categoryOptions}
    />
  );
});

const StyledSelect = styled(Field)`
  width: 100%;
  height: 3rem;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 25px;
  opacity: 1;
  padding: 0.5rem;
  color: #333333;
  opacity: 1;
  border: 1px solid #0a559e;

  &:hover {
    border: 1px solid #0a559e;
  }
  &:focus {
    border: 1px solid #0a559e;
    border-radius: 25px;
  }

  @media only screen and (max-width: 475px) {
    margin: 1rem 0;
    width: 68%;
  }
`;
