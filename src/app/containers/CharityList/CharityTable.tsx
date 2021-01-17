import React from 'react';
import styled from 'styled-components/macro';
import { Table } from '@welcome-ui/table';
import { Stack } from '@welcome-ui/stack';
import { Charity } from 'types/Charity';
import { Link } from 'react-router-dom';
import { DonationButton } from 'app/components/DonationButton';
import { NoCharities } from './NoCharities';
import { LoadingSpinner } from 'app/components/LoadingSpinner';

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
    <TableContainer>
      <Header>Search Results</Header>
      <ResultsText>{props.charities.length} results</ResultsText>
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th />
            <Table.Th />
            <Table.Th />
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {props.loading && <LoadingSpinner />}
          {!props.loading && props.charities.length > 0 ? (
            props.charities.map((charity, i) => (
              <StyledTableRow>
                <Table.Td>
                  <Link to={`/charities/${charity.id}`}>
                    <CharityImage src={charity.logo} />
                  </Link>
                </Table.Td>
                <Table.Td>
                  <Stack>
                    <Link to={`/charities/${charity.id}`}>
                      <LinkName>{charity.name}</LinkName>
                    </Link>

                    <Name>{charity.categories}</Name>

                    {charity.lastYearRevenue.revenue ? (
                      <div>
                        Annual revenue: ${' '}
                        {format(charity.lastYearRevenue.revenue)}
                      </div>
                    ) : null}
                  </Stack>
                </Table.Td>
                <Table.Td>
                  {charity.connectedStripeId ? (
                    <DonationButton
                      charityId={charity.id}
                      charityName={charity.name}
                    />
                  ) : null}
                </Table.Td>
              </StyledTableRow>
            ))
          ) : (
            <NoCharities />
          )}
        </Table.Tbody>
      </Table>
    </TableContainer>
  );
};

///////////////////////////////////////////////////////////////////////
////////////////// Temporary Width property until filters go live
////////////////// Temporary comment out flex property until filters go Live
////////////////////////////////////////////////////////////////////////

const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  background: white;
  border-radius: 5px;

  /////////////////
  //// Temporary
  // flex: 3;
  width: 62.1875%;

  @media only screen and (max-width: 1024px) {
    width: 75%;
  }

  @media only screen and (max-width: 850px) {
    width: 100%;
    padding: 1rem 0.5rem;
  }
  /////////////////
`;

const Header = styled.span`
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
`;

const ResultsText = styled.span`
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

const StyledTableRow = styled(Table.Tr)`
  @media only screen and (max-width: 650px) {
    display: flex;
    flex-direction: column;

    > td {
      padding: 1rem 0 0.625rem 1rem;
    }
  }
`;

const Name = styled.div`
  text-transform: capitalize;
`;

const LinkName = styled.div`
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
`;

const CharityImage = styled.div`
  width: 15rem;
  height: 6rem;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  resize: both;
  background-image: url('${(p: ImageProps) => p.src}');

  @media only screen and (max-width: 650px) {
    height: 4rem;
    width: 11.5rem;
  }
`;
