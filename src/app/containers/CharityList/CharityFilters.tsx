import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { Form, Field } from 'react-final-form';
import { FormField } from 'app/components/FormField';
import { CATEGORIES, STATES } from 'app/constants';
import { Divider } from 'app/components/Divider';
import { useHistory } from 'react-router-dom';
import { Button } from 'app/components/Button';
import { CategorySelect } from 'app/components/CategorySelect';

export const CharityFilters = () => {
  const history = useHistory();
  const [allCategories, setAllCategories] = useState(false);

  const toggle = () => setAllCategories(!allCategories);

  const handleSearch = values => {
    const search = new URLSearchParams(values);
    history.push(`/charities?${search}`);
  };

  return (
    <FilterContainer>
      <Form
        onSubmit={handleSearch}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
            <SecondaryHeader>Filter By:</SecondaryHeader>
            <Divider />
            {/* STATE */}
            <FormField
              name="state"
              label="State"
              component="select"
              placeholder="Select State"
              options={STATES}
              required
            />

            {/* CATEGORY */}
            <InputLabel className="mt-4">Category</InputLabel>
            {/* <div className="w-full">
              <CategorySelect />
            </div> */}
            {/* These are the categories checkbox */}
            {CATEGORIES.slice(0, allCategories ? CATEGORIES.length : 10).map(
              category => (
                <>
                  <Field
                    name="categories"
                    component="input"
                    type="checkbox"
                    value={category}
                    className="mr-3 mt-3"
                  />
                  <FilterText>{category}</FilterText>
                  <br />
                </>
              ),
            )}
            <div className="w-full flex justify-center align-center">
              <LinkText onClick={toggle}>
                Show {allCategories ? 'less' : 'more'}
              </LinkText>
            </div>
            {/* REVENUE SIZE */}
            <InputLabel className="mt-4">Revenue Size</InputLabel>
            <Field
              name="revenue"
              component="input"
              type="checkbox"
              value="range1"
              className="mr-3 mt-3"
            />
            <FilterText>Size Range 1</FilterText>
            <br />
            <Field
              name="revenue"
              component="input"
              type="checkbox"
              value="range2"
              className="mr-3 mt-3"
            />
            <FilterText>Size Range 2</FilterText>
            <br />
            <Field
              name="revenue"
              component="input"
              type="checkbox"
              value="range3"
              className="mr-3 mt-3"
            />
            <FilterText>Size Range 3</FilterText>
            <br />
            <div className="w-full flex justify-center align-center mt-3">
              <div className="w-1/2 mr-2">
                <Button type="submit">Search</Button>
              </div>
              <div className="w-1/2">
                <Button type="submit" btnStyle="secondary">
                  Reset Filters
                </Button>
              </div>
            </div>
          </form>
        )}
      />
    </FilterContainer>
  );
};

const SecondaryHeader = styled.span`
  font: var(--unnamed-font-style-normal) normal
    var(--unnamed-font-weight-medium) var(--unnamed-font-size-16) /
    var(--unnamed-line-spacing-24) var(--unnamed-font-family-avenir);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(---333333-dark);
  text-align: left;
  font: normal normal medium 16px/24px Avenir;
  letter-spacing: 0px;
  color: #333333;
`;

const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  flex: 1;
  background: white;
  padding: 2rem;
  margin-right: 2rem;
  border-radius: 5px;
`;

const FilterText = styled.span`
  font: var(--unnamed-font-style-normal) normal
    var(--unnamed-font-weight-normal) var(--unnamed-font-size-16) /
    var(--unnamed-line-spacing-24) var(--unnamed-font-family-avenir);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(---333333-dark);
  text-align: left;
  font: normal normal normal 16px/24px Avenir;
  letter-spacing: 0px;
  color: #333333;
`;

const InputLabel = styled.div`
  font: var(--unnamed-font-style-normal) normal
    var(--unnamed-font-weight-medium) var(--unnamed-font-size-14) /
    var(--unnamed-line-spacing-21) var(--unnamed-font-family-avenir);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(---333333-dark);
  text-align: left;
  font: normal normal medium 14px/21px Avenir;
  letter-spacing: 0px;
  color: #333333;
`;

const LinkText = styled.span`
  font: var(--unnamed-font-style-normal) normal
    var(--unnamed-font-weight-normal) var(--unnamed-font-size-16) /
    var(--unnamed-line-spacing-24) var(--unnamed-font-family-avenir);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(---0a559e-primary);
  text-align: left;
  font: normal normal normal 16px/24px Avenir;
  letter-spacing: 0px;
  color: #0a559e;
  cursor: pointer;
`;
