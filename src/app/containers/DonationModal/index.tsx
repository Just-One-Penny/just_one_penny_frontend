/**
 *
 * DonationModal
 *
 */

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components/macro';
import { Form, Field } from 'react-final-form';
import { Tab, useTabState } from '@welcome-ui/tabs';
import numeral from 'numeral';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey, actions } from './slice';
import { donationModalSaga } from './saga';

import { useAuth } from 'context/auth-context';

interface Props {
  charityId: string;
  charityName: string;
}

export function DonationModal(props: Props) {
  const { user } = useAuth();
  const tab = useTabState({ selectedId: 'tab1' });
  const [state, setState] = useState({
    amount: null,
    fullName: '',
  });
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: donationModalSaga });

  const ids = {
    userId: user.id!,
    charityId: props.charityId,
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  const onChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const name = evt.currentTarget.name;
    console.log('onChange -> name', name);
    const value = evt.currentTarget.value;
    console.log('onChange -> value', value);
    setState({ ...state, [name]: value });
  };

  const submitPayment = (evt?: React.FormEvent<HTMLFormElement>) => {
    /* istanbul ignore next  */
    if (evt !== undefined && evt.preventDefault) {
      evt.preventDefault();
    }
    dispatch(actions.changeIds(ids));
    dispatch(actions.submitDonation());
  };

  const cancelPayment = (evt?: React.FormEvent<HTMLFormElement>) => {
    /* istanbul ignore next  */
    if (evt !== undefined && evt.preventDefault) {
      evt.preventDefault();
    }
    dispatch(actions.cancelDonation());
  };

  const formatPrice = value =>
    value === undefined
      ? '' // make controlled
      : numeral(value).format('$0,0.00');

  const onSubmit = async values => {
    console.log('DonationModal -> values', values);
    // window.alert(JSON.stringify(values, 0, 2));
  };

  return (
    <Wrapper>
      <Header>$0</Header>
      <ModalContent>
        <Form
          onSubmit={onSubmit}
          initialValues={{ stooge: 'larry', employed: false }}
          render={({ handleSubmit, form, submitting, pristine, values }) => (
            <form onSubmit={handleSubmit}>
              <div>
                <InputLabel>Full Name</InputLabel>
                <Input
                  name="fullName"
                  component="input"
                  type="text"
                  placeholder="First and Last Name"
                />
                <InputLabel>Email</InputLabel>
                <Input
                  name="email"
                  component="input"
                  type="text"
                  placeholder="email@example.com"
                />
              </div>
              <StyledTabList aria-label="Tabs" {...tab}>
                <StyledTab {...tab} id="tab1">
                  Micro-Donation
                </StyledTab>
                <StyledTab {...tab} id="tab2">
                  Standard
                </StyledTab>
              </StyledTabList>
              <Tab.Panel {...tab} tabId="tab1">
                <InputLabel>Donation Amount</InputLabel>
                <Input
                  name="donationAmount"
                  component="input"
                  type="text"
                  placeholder="$0.00"
                  format={formatPrice}
                  formatOnBlur
                />

                <InputLabel>Recurring</InputLabel>
                <Input name="favoriteColor" component="select">
                  <option />
                  <option value="#ff0000">❤️ Red</option>
                  <option value="#00ff00">💚 Green</option>
                  <option value="#0000ff">💙 Blue</option>
                </Input>
                <Field
                  name="coverCost"
                  component="input"
                  type="checkbox"
                  value="coverCost"
                  className="mr-3 mt-3"
                />Yes, I’d like to cover the cost of the transaction fee
                <br />
                <Field
                  name="support"
                  component="input"
                  type="checkbox"
                  value="support"
                  className="mr-3 mt-3"
                />Donate $2 to support Just One Penny
                {/* <Divider /> */}
              </Tab.Panel>
              <Tab.Panel {...tab} tabId="tab2">
                Tab.Panel 2
              </Tab.Panel>
            </form>
          )}
        />
      </ModalContent>
    </Wrapper>
  );
}

const Header = styled.div`
  display: flex;
  padding-top: 3rem;
  padding-bottom: 3rem;
  justify-content: center;
  align-items: center;
  background-color: #11569b;
  height: 5rem;
  width: 100%;
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-900)
    70px/96px var(--unnamed-font-family-avenir);
  letter-spacing: var(--unnamed-character-spacing-0);
  text-align: center;
  font: normal normal 900 70px/96px Avenir;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
`;

const ModalContent = styled.div`
  padding: 2rem;
  width: 100%;
`;

const InputLabel = styled.div`
  font: var(--unnamed-font-style-normal) normal
    var(--unnamed-font-weight-medium) var(--unnamed-font-size-14) /
    var(--unnamed-line-spacing-21) var(--unnamed-font-family-avenir);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(---333333-dark);
  text-align: left;
  font: normal normal medium 14px/21px Avenir;
  letter-spacing: 0px;
  color: #333333;
  opacity: 1;
  margin-top: 1rem;
`;

const Input = styled(Field)`
  font: var(--unnamed-font-style-normal) normal
    var(--unnamed-font-weight-normal) var(--unnamed-font-size-16) /
    var(--unnamed-line-spacing-24) var(--unnamed-font-family-avenir);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(---333333-dark);
  text-align: left;
  font: normal normal normal 16px/24px Avenir;
  letter-spacing: 0px;
  color: #333333;
  border: 1px solid #9fa2a8;
  padding: 0.25rem;
  border-radius: 5px;
  width: 100%;
`;

const StyledTabList = styled(Tab.List)`
  display: flex;
  justify-content: center;
`;

const StyledTab = styled(Tab)`
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-900)
    var(--unnamed-font-size-20) / 27px var(--unnamed-font-family-avenir);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(---0a559e-primary);
  text-align: center;
  font: normal normal 900 20px/27px Avenir;
  letter-spacing: 0px;
  opacity: 1;
`;

const DonateButton = styled.button`
  background-color: ${p => p.theme.colors.primary[800]};
  cursor: pointer;
  text-decoration: none;
  display: flex;
  padding: 0.25rem 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  align-items: center;
  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.4;
  }
  .icon {
    margin-right: 0.25rem;
  }
`;

const CancelButton = styled.button`
  background-color: #c14200;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  padding: 0.25rem 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  align-items: center;
  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.4;
  }
  .icon {
    margin-right: 0.25rem;
  }
`;

const Wrapper = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
