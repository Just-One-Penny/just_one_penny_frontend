import React, { useEffect } from "react";
import styled from "styled-components";
import { Tab , useTabState } from '@welcome-ui/tabs'
import { Table } from '@welcome-ui/table';
import { Stack } from '@welcome-ui/stack';
import { useDispatch, useSelector } from "react-redux";
import { actions } from "./slice";
import { selectId, selectUserDonations } from "./selectors";
import { format } from 'date-fns'
import { charityApi } from 'api/charityApi';
import { css } from "@xstyled/styled-components";

export const AccountDonations = () => {
    var total = 0
    const tab = useTabState({ selectedId: 'tab1' })
    const dispatch = useDispatch()
    const userId = useSelector(selectId)
    useEffect(() => {
        if (userId) { dispatch(actions.getUserDonations())}
        }, [userId])
        const donations = useSelector(selectUserDonations)
    return (
    <div>
          <Tab.List aria-label="Tabs" {...tab}>
            <Tab {...tab} id="tab1">
              <HistoryTab>Charities</HistoryTab>
            </Tab>
            <Tab {...tab} id="tab2">
              <HistoryTab>History</HistoryTab>
            </Tab>
          </Tab.List>
          <Tab.Panel {...tab} tabId="tab1"> {/* this is where you add the functionality for the selected tabs, like the meat of the html*/}
            There isnt an adobe page for a populated Charities tab
          </Tab.Panel>
          <Tab.Panel {...tab} tabId="tab2">
          <Table>
            <TableHeader>
                <Table.Th>Date</Table.Th>
                <Table.Th>Charity</Table.Th>
                <Table.Th>Amount</Table.Th>
                <Table.Th>Transaction #</Table.Th>
            </TableHeader>
            <Table.Tbody>
            {donations === null ? () => {return <Table.Tbody>No previous donations could be found</Table.Tbody>}: donations.map((donation, idx) => { //Needs to be wrapped for the possibility of no donations
                total = total + donation.amount
                return (
                <TableRow odd={idx%2 === 0}>
                    <TableValues>
                    <Table.Td>{format(new Date(donation.dateSent), 'MM/dd/yy')}</Table.Td>
                    <Table.Td>{donation.charityName}</Table.Td>
                    <Table.Td>${donation.amount.toFixed(2)}</Table.Td>
                    <Table.Td>######</Table.Td>
                    </TableValues>
                </TableRow>
                )
            })}
            </Table.Tbody>
            <TotalFormat>Total: ${total.toFixed(2)}</TotalFormat>
            </Table>
          </Tab.Panel>
          </div>
    )
}

var CharitiesTab = styled.span`font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) var(--unnamed-font-size-16)/var(--unnamed-line-spacing-24) var(--unnamed-font-family-avenir);
letter-spacing: var(--unnamed-character-spacing-0);
color: var(---0a559e-primary);
text-align: left;
font: normal normal normal 16px/24px Avenir;
letter-spacing: 0px;
color: #0A559E;
opacity: 1;`

var HistoryTab = styled.span`font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-900) var(--unnamed-font-size-20)/27px var(--unnamed-font-family-avenir);
letter-spacing: var(--unnamed-character-spacing-0);
color: var(---0a559e-primary);
text-align: center;
font: normal normal 900 20px/27px Avenir;
letter-spacing: 0px;
color: #0A559E;
opacity: 1;`

var TableHeader = styled.span`font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-medium) var(--unnamed-font-size-16)/var(--unnamed-line-spacing-24) var(--unnamed-font-family-avenir);
letter-spacing: var(--unnamed-character-spacing-0);
color: var(---333333-dark);
text-align: left;
font: normal normal medium 16px/24px Avenir;
letter-spacing: 0px;
color: #333333;
opacity: 1;`

var TableValues = styled.span`font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) var(--unnamed-font-size-16)/var(--unnamed-line-spacing-24) var(--unnamed-font-family-avenir);
letter-spacing: var(--unnamed-character-spacing-0);
color: var(---333333-dark);
text-align: left;
font: normal normal normal 16px/24px Avenir;
letter-spacing: 0px;
color: #333333;
opacity: 1;`

var TotalFormat = styled.span`font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-900) var(--unnamed-font-size-20)/var(--unnamed-line-spacing-42) var(--unnamed-font-family-avenir);
letter-spacing: var(--unnamed-character-spacing-0);
color: var(---0a559e-primary);
text-align: right;
font: normal normal 900 20px/42px Avenir;
letter-spacing: 0px;
color: #0A559E;
opacity: 1;`

var TableRow = styled(Table.Tr)`
${p => p.odd ? css`background: var(---f2f2f2-light) 0% 0% no-repeat padding-box;
background: #F2F2F2 0% 0% no-repeat padding-box;
opacity: 1;`: css`opacity: 1;`}
`

// var TableRow = styled(Table.Tr)`
// ${p => p.odd ? css`background:red`: css`background:blue`}
// `