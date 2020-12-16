/**
 *
 * DonationModal
 *
 */

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
import { selectSuccess } from '../AuthenticationModal/selectors';
import { Success } from './Success';
import { Modal } from '../../components/Modal';
import { TermsOfService } from '../../components/TermsOfService';
import { TermsOfRecurringAmounts } from '../../components/TermsOfRecurringAmounts';

interface Props {
  charityId: string;
  charityName: string;
  hide?: Function;
}

export function DonationModal(props: Props) {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const tab = useTabState({ selectedId: 'micro' });
  const [state, setState] = useState({
    submitting: false,
    total: 0,
  });

  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: donationModalSaga });

  const success = useSelector(selectSuccess);

  useEffect(() => {
    if (success && props.hide) {
      props.hide();
    }
  }, [success]);

  const formatPrice = value => {
    if (value !== undefined && value >= 3)
      return numeral(value).format('$0,0.00');
    return '';
  };

  const calculateTotal = values => {
    let amount = values.amount
      ? Number(values.amount.replace(/[^0-9.-]+/g, ''))
      : 0;
    const coverCost = values.coverCost
      ? Boolean(values.coverCost.length)
      : false;
    const support = values.support ? Boolean(values.support.length) : false;

    if (support) {
      amount += 2;
    }

    if (coverCost) {
      amount += amount * 0.029 + 0.3;
    }
    return amount;
  };

  const onSubmit = async values => {
    setState({ ...state, submitting: true });
  };

  const handleSubmit = (values: DonationSubmissionValues) => {
    const coverCost = values.coverCost
      ? Boolean(values.coverCost.length)
      : false;
    const support = values.support ? Boolean(values.support.length) : false;
    const submissionValues: DonationSubmission = {
      ...values,
      amount: Number(values.amount.replace(/[^0-9.-]+/g, '')),
      type: tab.currentId,
      userId: user.id,
      charityId: props.charityId,
      coverCost,
      support,
    };

    if (tab.currentId === 'micro') {
      submissionValues['frequency'] = submissionValues['amount'].toString();
    }

    const total = calculateTotal(values);

    dispatch(actions.submitDonation(submissionValues));
    setState({ ...state, ...values, total });
  };

  const donationForm = (values, formType) => (
    <>
      {formType === 'standard' ? (
        <FormField
          name="amount"
          label="Donation Amount"
          type="text"
          placeholder="Minimum $3.00"
          format={formatPrice}
          formatOnBlur
        />
      ) : null}
      {formType === 'micro' ? (
        <>
          <InputLabel>
            Daily Amount{' '}
            <Modal
              buttonElement={<Icon type="button">?</Icon>}
              modalBody={<TermsOfRecurringAmounts />}
            />
          </InputLabel>

          <Input
            name="amount"
            component="select"
            placeholder="Select Daily Amount"
          >
            <option>--- Please Select ---</option>
            <option value="$3.65">$0.01 Per Day</option>
            <option value="$4.57">$0.05 Per Day</option>
            <option value="$9.13">$0.10 Per Day</option>
            <option value="$7.61">$0.25 Per Day</option>
            <option value="$15.21">$0.50 Per Day</option>
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

  if (success) {
    return <Success {...state} hide={props.hide} />;
  }

  return (
    <Wrapper>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, form, values }) => (
          <>
            <Header>{formatPrice(calculateTotal(values))}</Header>
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
                  <StyledTab {...tab} id="micro" onClick={form.reset}>
                    Micro-Donation
                  </StyledTab>
                  <StyledTab {...tab} id="standard" onClick={form.reset}>
                    Standard
                  </StyledTab>
                </StyledTabList>
                <Tab.Panel {...tab} tabId="micro">
                  {donationForm(values, 'micro')}
                </Tab.Panel>
                <Tab.Panel {...tab} tabId="standard">
                  {donationForm(values, 'standard')}
                </Tab.Panel>
                <Divider />
                <div className="flex w-full justify-center">
                  <Button type="submit" btnStyle="primary">
                    Make Donation
                  </Button>
                </div>
                <Field
                  name="terms"
                  component="input"
                  type="checkbox"
                  value="terms"
                  className="mr-3 mt-3"
                  required
                />
                I agree to the{' '}
                <Modal
                  buttonElement={<TextLink>Terms and Conditions</TextLink>}
                  modalBody={<TermsOfService />}
                />
                <br />
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

const TextLink = styled.span`
  color: #0a559e;
  &:hover {
    text-decoration: underline;
  }

  &:active {
    color: #0c4379;
    text-decoration: underline;
  }
`;

const Icon = styled.button`
  margin-bottom: 2px;
  color: #0a559e;
  background: transparent;
  border: 2px solid #0a559e;
  &:hover,
  &:active {
    border-color: #0c4379;
    color: #0c4379;
  }

  &:focus,
  &:active {
    text-decoration: underline;
  }

  width: 25px;
  height: 25px;
  font-weight: 900;
  box-shadow: 0px 2px 6px #0000005a;
  border-radius: 50px;
  opacity: 1;
  text-align: center;
  font: normal normal 900 16px/22px;
  .icon {
    margin-right: 0.25rem;
  }
`;
