import React from 'react';
import styled from 'styled-components/macro';
import { Table } from '@welcome-ui/table';
import { Stack } from '@welcome-ui/stack';
import { Charity } from 'types/Charity';
import { Link } from 'react-router-dom';
import { DonationModal } from '../DonationModal';
import { DonationButton } from 'app/components/DonationButton';
import { NoCharities } from './NoCharities';

interface Props {
  charities: Charity[];
}

export const CharityTable = (props: Props) => {
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
          {/* {props.charities.map((charity, i) => (
            <Table.Tr>
              <Table.Td>
                <CharityImage src={charity.logo} />
              </Table.Td>
              <Table.Td>
                <Stack>
                  <Link to={`/charities/${charity.id}`}>
                    <LinkName>{charity.name}</LinkName>
                  </Link>
                  <Name>{charity.categories}</Name>
                  <div>{charity.lastYearRevenue.revenue}</div>
                </Stack>
              </Table.Td>
              <Table.Td>
                <DonationButton
                  charityId={charity.id}
                  charityName={charity.name}
                />
              </Table.Td>
            </Table.Tr>
          ))} */}
          <NoCharities />
        </Table.Tbody>
      </Table>
    </TableContainer>
  );
};

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

interface ImageProps {
  src: string;
}

const CharityImage = styled.div`
  width: 15rem;
  height: 6rem;
  background-size: cover;
  resize: both;
  background-image: url('${(p: ImageProps) => p.src}');
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

const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3;
  padding: 2rem;
  background: white;
  border-radius: 5px;
`;
