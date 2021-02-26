import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Tab, useTabState } from '@welcome-ui/tabs';
import { Table } from '@welcome-ui/table';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from './slice';
import { selectId, selectUserDonations } from './selectors';
import { format } from 'date-fns';
import { css } from '@xstyled/styled-components';
import { NoCharities } from './NoCharities';
import { Link } from 'react-router-dom';
import { AccountCharities } from './AccountCharities';

export const AccountDonations = () => {
  var total = 0;
  const tab = useTabState({ selectedId: 'tab1' });
  const dispatch = useDispatch();
  const userId = useSelector(selectId);
  useEffect(() => {
    if (userId) {
      dispatch(actions.getUserDonations());
    }
  }, [userId, dispatch]);
  const donations = useSelector(selectUserDonations);
  return (
    <Wrapper>
      <Tab.List aria-label="Tabs" {...tab}>
        <StyledTab {...tab} id="tab1">
          <HistoryTab>Charities</HistoryTab>
        </StyledTab>

        <StyledTab {...tab} id="tab2">
          <HistoryTab>History</HistoryTab>
        </StyledTab>
      </Tab.List>

      <Tab.Panel {...tab} tabId="tab1">
        <AccountCharities />
      </Tab.Panel>

      <Tab.Panel {...tab} tabId="tab2">
        {donations === null || donations.length === 0 ? (
          <NoCharities />
        ) : (
          <>
            <Table>
              <TableHeader>
                <TableHead>Date</TableHead>
                <TableHead>Charity</TableHead>
                <TableHead>Transaction #</TableHead>
                <TableHead>Amount</TableHead>
              </TableHeader>
              <Table.Tbody>
                {donations.map((donation, idx) => {
                  //Needs to be wrapped for the possibility of no donations
                  total = total + donation.amount;
                  return (
                    <TableRow odd={idx % 2 === 0}>
                      <TableValues>
                        {format(new Date(donation.dateSent), 'MM/dd/yy')}
                      </TableValues>
                      <TableValues>
                        <StyledLink to={`/charities/${donation.charityId}`}>
                          {donation.charityName}
                        </StyledLink>
                      </TableValues>
                      <TableValues>######</TableValues>
                      <TableValues>${donation.amount.toFixed(2)}</TableValues>
                    </TableRow>
                  );
                })}
              </Table.Tbody>
            </Table>
            <div className="w-full flex justify-end pr-6">
              <TotalFormat>Total: ${total.toFixed(2)}</TotalFormat>
            </div>
          </>
        )}
      </Tab.Panel>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 3.0625rem 1rem 0 1rem;
  min-height: 49rem;

  @media only screen and (max-width: 650px) {
    padding: 1.5625rem 0.5rem 0 0.5rem;
    min-height: 30rem;
  }
`;

const CharitiesTab = styled.span`
  color: var(---0a559e-primary);
  text-align: center;
  font: normal normal normal 16px/24px Avenir;
  letter-spacing: 0px;
  color: #0a559e;
  opacity: 1;
`;

const StyledTab = styled(Tab)`
  color: #333333;

  padding: 0 0.9375rem 0.25rem 0.9375rem;
`;

const HistoryTab = styled.span`
  color: var(---0a559e-primary);
  text-align: center;
  font: normal normal 900 20px/27px Avenir;
  letter-spacing: 0px;
  // color: #0a559e;
  // color: #333333;
  opacity: 1;
`;

const TableHeader = styled(Table.Thead)`
  color: var(---333333-dark);
  text-align: center;
  font: normal normal medium 16px/24px Avenir;
  letter-spacing: 0px;
  color: #333333;
  opacity: 1;
`;

const TableHead = styled(Table.Th)`
  color: var(---333333-dark);
  text-align: center;
  font: normal normal medium 16px/24px Avenir;
  letter-spacing: 0px;
  color: #333333;
`;

const TableValues = styled(Table.Td)`
  color: var(---333333-dark);
  text-align: center;
  font: normal normal normal 16px/24px Avenir;
  letter-spacing: 0px;
  color: #333333;
  opacity: 1;
  text-transform: capitalize;
`;

const TotalFormat = styled.span`
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-900)
    var(--unnamed-font-size-20) / var(--unnamed-line-spacing-42)
    var(--unnamed-font-family-avenir);
  color: var(---0a559e-primary);
  text-align: right;
  font: normal normal 900 20px/42px Avenir;
  letter-spacing: 0px;
  color: #0a559e;
  opacity: 1;
`;

const StyledLink = styled(Link)`
  color: var(---0a559e-primary);
  text-align: left;
  font: normal normal normal 16px/24px Avenir;
  letter-spacing: 0px;
  color: #0a559e;
  opacity: 1;
`;

const TableRow = styled(Table.Tr)`
  ${p =>
    p.odd
      ? css`
          background: var(---f2f2f2-light) 0% 0% no-repeat padding-box;
          background: #f2f2f2 0% 0% no-repeat padding-box;
          opacity: 1;
        `
      : css`
          opacity: 1;
        `}
`;

// var TableRow = styled(Table.Tr)`
// ${p => p.odd ? css`background:red`: css`background:blue`}
// `
