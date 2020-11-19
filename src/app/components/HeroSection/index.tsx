/**
 *
 * HeroSection
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
import AboutHeroImage1x from './assets/AboutHeroImage1x.png';
import AboutHeroImage2x from './assets/AboutHeroImage2x.png';
import MobileAboutHeroImage1x from './assets/MobileAboutHeroImage1x.png';
import MobileAboutHeroImage2x from './assets/MobileAboutHeroImage2x.png';

const categoryOptions = CATEGORIES.map(category => ({
  value: category.toLowerCase(),
  label: category,
}));

interface Props {}

export function HeroSection(props: Props) {
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
    <HeroDiv>
      <Form
        onSubmit={handleSearch}
        render={({ handleSubmit }) => (
          <SearchWrapper onSubmit={handleSubmit}>
            <Input
              component="input"
              name="name"
              id="charity"
              placeholder="Search Charity Name"
            />
            <StyledSelect
              name="categories"
              component={ReactSelectAdapter}
              placeholder="Search By category"
              options={categoryOptions}
            />
            <Button btnStyle={'primary'}>Find Charity</Button>
          </SearchWrapper>
        )}
      />
    </HeroDiv>
  );
}

const HeroDiv = styled.div`
  width: calc(100% + 4rem);
  margin-left: -2rem;
  height: 150px;
  background-image: url(${MobileAboutHeroImage1x});
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (min-resolution: 192dpi) and (min-width: 320px),
    only screen and (-webkit-min-device-pixel-ratio: 2) and (min-width: 320px) {
    background-image: url(${MobileAboutHeroImage2x});
  }

  @media only screen and (min-width: 476px) {
    margin-top: -${StyleConstants.NAV_BAR_HEIGHT};
    background-image: url(${AboutHeroImage1x});
  }

  @media only screen and (min-resolution: 192dpi) and (min-width: 476px),
    only screen and (-webkit-min-device-pixel-ratio: 2) and (min-width: 476px),
    only screen and (min-width: 1920px) {
    background-image: url(${AboutHeroImage2x});
  }
`;

const SearchWrapper = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 70%;
  margin-top: 4rem;
  @media only screen and (max-width: 475px) {
    width: 100%;
  }
`;

const Input = styled(Field)`
  flex: 3;
  margin-right: 2rem;
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
  border-radius: 50px;
  ::placeholder {
    color: #333333;
    opacity: 1;
  }
`;

const StyledSelect = styled(Field)`
  flex: 2;
  margin-right: 2rem;
  height: 3rem;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 25px;
  opacity: 1;
  padding: 0.5rem;
  color: #333333;
  opacity: 1;

  @media only screen and (max-width: 475px) {
    margin: 1rem 0;
    width: 100%;
  }
`;
