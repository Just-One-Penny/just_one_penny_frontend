import React from 'react';
import styled from 'styled-components/macro';

interface SearchDefault {
  readonly defaultSearch: boolean;
}

export const Header = () => {
  return (
    <>
      <HeroSection>
        <HeroText>
          <SearchDiv>
            <H1>A micro-giving platform for the 21st century</H1>

            <H3>See how your spare change can change the world</H3>

            <Search
              defaultSearch={true}
              type="text"
              placeholder="Search charity name"
            />
          </SearchDiv>

          <CategoryDiv>
            <Search
              defaultSearch={false}
              list="categories"
              type="text"
              placeholder="Search by category"
            />

            <datalist id="categories">
              <option value="Animal &amp; Nature" />
              <option value="Arts &amp; Education" />
              <option value="Communities &amp; Religion" />
              <option value="Human Outreach" />
            </datalist>

            <Button>Find Charity</Button>
          </CategoryDiv>
        </HeroText>
      </HeroSection>
    </>
  );
};

const HeroSection = styled.header`
  width: 100%;
  height: 600px;
  background-color: slateblue;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeroText = styled.div`
  flex: 0 0 50%;
  margin-left -12rem;
  margin-top: -12rem;
  color: #fff;

  display:flex;
  flex-direction: column;
`;

const H1 = styled.h1`
  font-size: 36px;
  margin-bottom: 0.75rem;
`;

const H3 = styled.h3`
  font-size: 20px;
  margin-bottom: 1.5rem;
`;

const SearchDiv = styled.div`
  flex: 0 0 100%;
  display: flex;
  flex-direction: column;

  justify-content: center;

  &:not(:last-child) {
    margin-bottom: 2rem;
  }
`;

const CategoryDiv = styled.div`
  flex: 0 0 100%;
  display: flex;
`;

const Button = styled.button`
  background: transparent
    linear-gradient(0deg, #11569b 0%, #54aecc 100%, #6ccddd 100%, #7ae0e8 100%)
    0% 0% no-repeat padding-box;
  box-shadow: 0px 2px 6px #0000005a;
  border-radius: 50px;
  opacity: 1;
  font-family: inherit;
  font-size: inherit;
  color: #fff;
  padding: 0 3rem;
  margin-left: 3rem;
`;

const Search = styled.input<SearchDefault>`
  width: ${props => (props.defaultSearch ? '64.25%;' : '34%;')}
  border: 1px solid #fff;
  border-radius: 50px;
  color: #333333;
  padding-left:  1rem;
  height: 3rem;

  &::placeholder {
    color: #333333;
  }
`;
