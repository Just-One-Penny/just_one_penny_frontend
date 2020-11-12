/**
 *
 * CharityList
 *
 */

import React, { memo, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/macro';
import { Table } from '@welcome-ui/table';
import { Stack } from '@welcome-ui/stack';
import { Avatar } from '@welcome-ui/avatar';
import { Checkbox } from '@welcome-ui/checkbox';
import { Select } from '@welcome-ui/select';
import { Label } from '@welcome-ui/label';
import { Field } from '@welcome-ui/field';
import { ConnectedField } from '@welcome-ui/connected-field';

import { Form } from 'react-final-form';
// import { Formik, Field as ConnectedField, Form } from 'formik';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey, actions } from './slice';
import { selectCharityList } from './selectors';
import { charityListSaga } from './saga';
import { DonateButton } from 'app/components/DonateButton';
import { Divider } from 'app/components/Divider';

interface Props {}

export const CharityList = memo((props: Props) => {
  const [rendered, setRendered] = useState(false);
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: charityListSaga });
  const dispatch = useDispatch();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const charityList = useSelector(selectCharityList);
  // useEffect(() => {
  //   if (!rendered) {
  //     dispatch(actions.getCharitiesRequest());
  //     setRendered(true);
  //   }
  // })
  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <>
      <Helmet>
        <title>Charities</title>
        <meta name="description" content="List of Charities" />
      </Helmet>
      <Row>
        <FilterContainer>
          {/* <Form
            onSubmit={() => {}}
            render={({ handleSubmit, form, submitting, pristine, values }) => (
              <>
                <SecondaryHeader>Filter By:</SecondaryHeader>
                <Divider />
                <ConnectedField component={Select} name="state" label="State" />
                <ConnectedField component={Checkbox} name="react" label="React" />
                <ConnectedField component={Checkbox} name="vue" label="Vue" />
                <ConnectedField component={Checkbox} name="angular" label="Angular" />
              </>
            )}
          /> */}
        </FilterContainer>
        <TableContainer>
          <Header>Search Results</Header>
          <Table>
            <Table.Thead>
              <Table.Tr>
                <Table.Th />
                <Table.Th />
                <Table.Th />
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {charityList.map((charity, i) => (
                <Table.Tr>
                  <Table.Td>
                    <Avatar
                      src={charity.logo}
                      name={charity.name}
                      shape="square"
                      size="xxl"
                    />
                  </Table.Td>
                  <Table.Td>
                    <Stack>
                      <Name>{charity.name}</Name>
                      <Name>{charity.categories}</Name>
                      <div>{charity.lastYearRevenue.revenue}</div>
                    </Stack>
                  </Table.Td>
                  <Table.Td>
                    <DonateButton />
                  </Table.Td>
                </Table.Tr>
              ))}
            </Table.Tbody>
          </Table>
        </TableContainer>
      </Row>
    </>
  );
});

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const Name = styled.div`
  text-transform: capitalize;
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
  flex: 1;
  background: white;
  padding: 1rem;
  margin-right: 2rem;
`;

const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3;
  padding: 2rem;
  background: white;
`;
