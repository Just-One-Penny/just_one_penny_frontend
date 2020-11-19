import React from "react";
import styled from "styled-components";
import { Tabs, useTabState } from '@welcome-ui/tabs'

export const AccountDonations = () => {
    const tab = useTabState({ selectedId: 'tab1' })
    return (
    // <div>
    // <CharitiesTab>Charities</CharitiesTab>
    // <HistoryTab>History</HistoryTab>
    // </div>
    <div>
          <Tab.List aria-label="Tabs" {...tab}>
            <Tab {...tab} id="tab1">
              Tab 1
            </Tab>
            <Tab {...tab} id="tab2">
              Tab 2
            </Tab>
            <Tab {...tab} id="tab3">
              Tab 3
            </Tab>
            <Tab {...tab} id="tab4">
              Tab 4
            </Tab>
            <Tab {...tab} disabled id="tab5">
              Tab 5
            </Tab>
          </Tab.List>
          <Tab.Panel {...tab} tabId="tab1">
            Tab.Panel 1
          </Tab.Panel>
          <Tab.Panel {...tab} tabId="tab2">
            Tab.Panel 2
          </Tab.Panel>
          <Tab.Panel {...tab} tabId="tab3">
            Tab.Panel 3
          </Tab.Panel>
          <Tab.Panel {...tab} tabId="tab4">
            Tab.Panel 4
          </Tab.Panel>
          <Tab.Panel {...tab} disabled tabId="tab5">
            Tab.Panel 5
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