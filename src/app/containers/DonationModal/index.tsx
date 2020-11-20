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
import { actions, reducer, sliceKey } from './slice';
import { donationModalSaga } from './saga';

import { useAuth } from 'context/auth-context';
import { Divider } from 'app/components/Divider';
import { PaymentInfo } from 'app/components/PaymentInfo';
import { FormField } from 'app/components/FormField';
import { Button } from 'app/components/Button';
import { DonationSubmissionValues, DonationSubmission } from './types';

interface Props {
  charityId: string;
  charityName: string;
}

export function DonationModal(props: Props) {
  const { user } = useAuth();
  const tab = useTabState({ selectedId: 'tab1' });
  const [state, setState] = useState({
    submitting: false,
  });
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: donationModalSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  const formatPrice = value =>
    value === undefined
      ? '' // make controlled
      : numeral(value).format('$0,0.00');

  const onSubmit = async values => {
    setState({ ...state, submitting: true });
  };

  const handleSubmit = (values: DonationSubmissionValues) => {
    const submissionValues: DonationSubmission = {
      ...values,
      charityName: '',
      coverCost: Boolean(values.coverCost.length),
      support: Boolean(values.support.length),
    };
    dispatch(actions.submitDonation(submissionValues));
  };

  const donationForm = (values, formType) => (
    <>
      {formType === 'standard' ? (
        <FormField
          name="amount"
          label="Donation Amount"
          type="text"
          placeholder="$0.00"
          format={formatPrice}
          formatOnBlur
        />
      ) : null}
      {formType === 'micro' ? (
        <>
          <InputLabel>Daily Amount</InputLabel>
          <Input
            name="frequency"
            component="select"
            placeholder="Select Daily Amount"
          >
            <option />
            <option value="0.01">$0.01 Per Day</option>
            <option value="0.05">$0.05 Per Day</option>
            <option value="0.10">$0.10 Per Day</option>
            <option value="0.25">$0.25 Per Day</option>
            <option value="0.50">$0.50 Per Day</option>
          </Input>
        </>
      ) : (
        <>
          <InputLabel>Recurring</InputLabel>
          <Input name="frequency" component="select">
            <option />
            <option value="once">Only Donate Once</option>
            <option value="monthly">Every Month</option>
          </Input>
        </>
      )}
      <Field
        name="coverCost"
        component="input"
        type="checkbox"
        value="coverCost"
        className="mr-3 mt-3"
      />
      Yes, I’d like to cover the cost of the transaction fee
      <br />
      <Field
        name="support"
        component="input"
        type="checkbox"
        value="support"
        className="mr-3 mt-3"
      />
      Donate $2 to support Just One Penny
      <Divider />
      <PaymentInfo
        values={values}
        submitting={state.submitting}
        submitForm={handleSubmit}
      />
    </>
  );

  return (
    <Wrapper>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, values }) => (
          <>
            <Header>
              {values.donationAmount ? values.donationAmount : '$0'}
            </Header>
            <ModalContent>
              <form onSubmit={handleSubmit}>
                <div>
                  <FormField
                    name="fullName"
                    label="Full Name"
                    type="text"
                    placeholder="First and Last Name"
                    required
                  />
                  <FormField
                    name="email"
                    label="Email"
                    type="text"
                    placeholder="email@example.com"
                    required
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
                  {donationForm(values, 'micro')}
                </Tab.Panel>
                <Tab.Panel {...tab} tabId="tab2">
                  {donationForm(values, 'standard')}
                </Tab.Panel>
                <Divider />
                <div className="flex w-full justify-center">
                  <Button type="submit" btnStyle="primary">
                    Make Donation
                  </Button>
                </div>
              </form>
            </ModalContent>
          </>
        )}
      />
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

const Wrapper = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
