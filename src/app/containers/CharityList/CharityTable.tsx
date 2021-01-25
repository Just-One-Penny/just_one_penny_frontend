import React from 'react';
import styled from 'styled-components/macro';
import { Charity } from 'types/Charity';
import { Link } from 'react-router-dom';
import { DonationButton } from 'app/components/DonationButton';
import { NoCharities } from './NoCharities';
import { LoadingSpinner } from 'app/components/LoadingSpinner';

import { DonationModal } from 'app/containers/DonationModal';
import { Modal, Size } from 'app/components/Modal';

interface Props {
  charities: Charity[];
  loading: boolean;
}

interface ImageProps {
  src: string;
}

export const CharityTable = (props: Props) => {
  function format(revenue) {
    return Number.parseFloat(revenue)
      .toFixed(2)
      .replace(/\d(?=(\d{3})+\.)/g, '$&,');
  }
  return (
    <Wrapper>
      <Header>Search Results</Header>
      <ResultsText>{props.charities.length} results</ResultsText>

      <CharityWrapper>
        {props.loading && <LoadingSpinner />}
        {!props.loading && props.charities.length > 0 ? (
          props.charities.map((charity, i) => (
            <CharityRow>
              {console.log(charity)}
              <StyledLink to={`/charities/${charity.id}`}>
                <CharityImage src={charity.logo} />
              </StyledLink>

              <CharityDetailsWrapper>
                <CharityDetails>
                  <Link to={`/charities/${charity.id}`}>
                    <LinkName>{charity.name}</LinkName>
                  </Link>

                  <Name>{charity.categories}</Name>

                  {charity.lastYearRevenue.revenue ? (
                    <div>
                      {`Annual revenue: $ ${format(
                        charity.lastYearRevenue.revenue,
                      )}`}
                    </div>
                  ) : null}
                  {charity.state ? (
                    <div>{`Location: ${charity.city}, ${charity.state}`}</div>
                  ) : null}
                </CharityDetails>

                <MobileDonateBtn>
                  {charity.connectedStripeId ? (
                    <Modal
                      size={Size.sm}
                      buttonElement={<LinkName>Donate</LinkName>}
                      modalBody={
                        <DonationModal
                          charityId={charity.id}
                          charityName={charity.name}
                        />
                      }
                    />
                  ) : null}
                </MobileDonateBtn>
              </CharityDetailsWrapper>

              <CharityDonateBtn>
                {charity.connectedStripeId ? (
                  <DonationButton
                    buttonStyle="primary"
                    charityId={charity.id}
                    charityName={charity.name}
                  />
                ) : null}
              </CharityDonateBtn>
            </CharityRow>
          ))
        ) : (
          <NoCharities />
        )}
      </CharityWrapper>
    </Wrapper>
  );
};

///////////////////////////////////////////////////////////////////////
////////////////// Temporary Width property until filters go live
////////////////// Temporary comment out flex property until filters go Live
////////////////////////////////////////////////////////////////////////

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  padding: 1.5rem 1rem;
  background: #fff;
  border-radius: 5px;

  /////////////////
  //// Temporary
  // flex: 3;
  width: 62.1875%;

  @media only screen and (max-width: 1024px) {
    width: 90%;
  }

  @media only screen and (max-width: 850px) {
    width: 100%;
    padding: 1rem 0.5rem;
  }
  /////////////////

  @media only screen and (max-width: 650px) {
  }
`;

const Header = styled.div`
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-900)
    var(--unnamed-font-size-20) / var(--unnamed-line-spacing-30)
    var(--unnamed-font-family-avenir);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(---333333-dark);
  text-align: left;
  font: normal normal 900 20px/30px Avenir;
  letter-spacing: 0px;
  color: #333333;
  opacity: 1;

  margin-bottom: 0.5rem;
  margin-left: 0.5rem;
`;

const ResultsText = styled.p`
  font: var(--unnamed-font-style-normal) normal
    var(--unnamed-font-weight-normal) var(--unnamed-font-size-16) /
    var(--unnamed-line-spacing-24) var(--unnamed-font-family-avenir);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(---333333-dark);
  text-align: left;
  font: normal normal normal 16px/24px Avenir;
  letter-spacing: 0px;
  color: #333333;

  margin-bottom: 1rem;
  margin-left: 0.5rem;

  @media only screen and (max-width: 650px) {
    margin-bottom: 0.5rem;
  }
`;

const CharityWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

const CharityRow = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 1.5rem 1rem;
  position: relative;

  border-top: 1px solid #9fa2a8;

  &:last-of-type {
    border-bottom: 1px solid #9fa2a8;
  }

  @media only screen and (max-width: 650px) {
    flex-direction: column;
    align-items: flex-start;

    padding: 1rem 0.4375rem 0.625rem 1rem;
  }
`;

const StyledLink = styled(Link)`
  margin-right: 2rem;

  @media only screen and (max-width: 650px) {
    margin-right: 0;
  }
`;

const CharityDetailsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const CharityDetails = styled.div`
  display: flex;
  flex-direction: column;
  flex: 4;
`;

const MobileDonateBtn = styled.div`
  display: none;

  @media only screen and (max-width: 650px) {
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;

    flex: 1;
  }
`;

const CharityDonateBtn = styled.div`
  @media only screen and (max-width: 650px) {
    display: none;
  }
`;

const Name = styled.p`
  text-transform: capitalize;
`;

const LinkName = styled.p`
  text-transform: capitalize;
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

  &:hover,
  &:active {
    text-decoration: underline;
  }
`;

const CharityImage = styled.div`
  width: 11.5rem;
  height: 4rem;

  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  resize: both;
  background-image: url('${(p: ImageProps) => p.src}');

  @media only screen and (max-width: 650px) {
    background-position: left;
    margin-bottom: 0.5rem;
  }
`;
