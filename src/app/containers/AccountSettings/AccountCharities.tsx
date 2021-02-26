import React, { useEffect } from 'react';
import styled from 'styled-components/macro';
import { format } from 'date-fns';
import { Table } from '@welcome-ui/table';
import { Stack } from '@welcome-ui/stack';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { NoCharities } from './NoCharities';
import { reducer, sliceKey } from './slice';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';

import { accountSettingsSaga } from './saga';
import { actions } from './slice';
import { selectUserDonationSchedules, selectId } from './selectors';

export function AccountCharities() {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: accountSettingsSaga });
  const dispatch = useDispatch();
  const userId = useSelector(selectId);

  useEffect(() => {
    if (userId) {
      dispatch(actions.getUserDonationSchedules());
    }
  }, [userId, dispatch]);

  const donationSchedules = useSelector(selectUserDonationSchedules);

  return (
    <>
      {donationSchedules.length > 0 ? (
        <Table>
          <Table.Thead>
            <Table.Tr>
              <TableHead>Charity</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Next Donation</TableHead>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {donationSchedules.map((donationSchedule, i) => (
              <Table.Tr>
                <Table.Td>
                  <Stack>
                    <Link to={`/charities/${donationSchedule.charityId}`}>
                      <CharityImage src={donationSchedule.charityLogo} />
                    </Link>
                    <Link to={`/charities/${donationSchedule.charityId}`}>
                      <LinkName>{donationSchedule.charityName}</LinkName>
                    </Link>
                  </Stack>
                </Table.Td>
                <Table.Td>
                  <Stack>
                    <TableData>${donationSchedule.totalDonated}</TableData>
                    <TableData>
                      {donationSchedule.type}{' '}
                      {donationSchedule.type === 'micro'
                        ? `${donationSchedule.amount} per day`
                        : null}
                    </TableData>
                  </Stack>
                </Table.Td>
                <Table.Td>
                  <div className="flex flex-col align-center">
                    {donationSchedule.nextDonation ? (
                      <TableData>
                        {format(
                          new Date(donationSchedule.nextDonation),
                          'MM/dd/yy',
                        )}
                      </TableData>
                    ) : null}
                    {donationSchedule.active ? (
                      <Active>Stop Recurring</Active>
                    ) : null}
                  </div>
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      ) : (
        <NoCharities />
      )}
    </>
  );
}

const LinkName = styled.div`
  text-transform: capitalize;
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

const TableHead = styled(Table.Th)`
  color: var(---333333-dark);
  text-align: left;
  font: normal normal medium 16px/24px Avenir;
  letter-spacing: 0px;
  color: #333333;
`;

const TableData = styled.span`
  text-transform: capitalize;
  color: var(---333333-dark);
  text-align: left;
  font: normal normal normal 16px/24px Avenir;
  letter-spacing: 0px;
  color: #333333;
`;

const Active = styled.span`
  color: var(---0a559e-primary);
  text-align: left;
  font: normal normal normal 16px/24px Avenir;
  letter-spacing: 0px;
  color: #0a559e;
  cursor: pointer;
`;
