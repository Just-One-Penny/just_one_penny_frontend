/**
 *
 * Search
 *
 */
import React, { useState } from 'react';
import { Form, Field } from 'react-final-form';
import { useHistory } from 'react-router-dom';

import styled, { css } from 'styled-components/macro';
import { StyleConstants } from 'styles/StyleConstants';
import { Button } from '../Button';
import { CategorySelect } from '../CategorySelect';
import { ReactComponent as ButtonClear } from '../HeroSection/assets/ButtonClear.svg';

export const Search = props => {
  const [showMobile, toggleMobile] = useState(false);

  const _toggleMobile = () => {
    toggleMobile(!showMobile);
  };

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
      render={({ handleSubmit, values }) => (
        <>
          <FormContainer onSubmit={handleSubmit} {...props}>
            <FieldInput
              component="input"
              name="name"
              type="text"
              placeholder="Search charity name or keyword"
              id="name"
              render={props => {
                return <input {...props.input} />;
              }}
            />

            <Wrapper>
              {/* To be uncommented when Category Select goes live */}

              {/* <SelectContainer>
                <CategorySelect />
              </SelectContainer> */}

              <ButtonWrapper>
                <Button btnStyle={'primary'}>
                  {values &&
                    (values.name ? 'Find Charities' : 'View All Charities')}
                </Button>
              </ButtonWrapper>
            </Wrapper>

            {/* To be uncommented when Mobile Category Select goes live */}
            {/* <MobileSelectBG showMobile={showMobile} /> */}

            {/* To be uncommented when Mobile Category Select goes live */}
            {/* <Text onClick={() => _toggleMobile()}>Search by category</Text> */}

            {/* To be uncommented when Mobile Category Select goes live */}

            {/* <MobileSelectContainer showMobile={showMobile}>
              <ButtonClearContainer onClick={() => _toggleMobile()}>
                <ButtonClear />
              </ButtonClearContainer>

              <MobileSelect>
                <CategorySelect />
              </MobileSelect>

              <ButtonContainer>
                <Button btnStyle={'primary'}>Find Charities</Button>
              </ButtonContainer>
            </MobileSelectContainer> */}
          </FormContainer>
        </>
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
    // display: none;
    flex-direction: column;
    align-items: center;
  }
`;

const SelectContainer = styled.div`
  width: 53%;

  @media only screen and (max-width: 475px) {
    display: none;
  }
`;

const FieldInput = styled(Field)`
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
  margin-bottom: 2rem;

  @media only screen and (max-width: 475px) {
    margin-bottom: 1.5rem;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
//
// To be refactored into herosection component in future
//
///////////////////////////////////////////////////////////////

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
    justify-content: center;
  }
`;

const MobileSelectBG = styled.div<{ showMobile: boolean }>`
  width: 0;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 2;
  background-color: #d9d9d9;
  opacity: 0;

  transition: all 0.4s;

  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);

  ${props =>
    props.showMobile &&
    css`
      width: 100vw;
      opacity: 0.85;
    `};
`;

const MobileSelectContainer = styled.div<{
  showMobile: boolean;
}>`
  display: flex;
  flex-direction: column;

  position: absolute;
  height: 100vh;
  width: 100vw;
  top: 0;
  right: 0;
  transform: translateX(100%);

  opacity: 0;
  z-index: 3;
  transition: all 0.4s;

  ${props =>
    props.showMobile &&
    css`
      opacity: 1;
      transform: translateX(0);
    `};
`;

const ButtonClearContainer = styled.span`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  margin-top: calc(1.046875rem + ${StyleConstants.MOBILE_NAV_BAR_HEIGHT});
  margin-left: 1.296875rem;

  margin-bottom: 12.04125rem;
`;

const MobileSelect = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 12.5rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
