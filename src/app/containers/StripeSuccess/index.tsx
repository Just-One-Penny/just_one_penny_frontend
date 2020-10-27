import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { charityApi } from 'api/charityApi';
import { LoadingSpinner } from 'app/components/LoadingSpinner';
import { Checkmark } from 'app/components/Checkmark/Loadable';
import styled from 'styled-components';
import { AnimatedError } from 'app/components/AnimatedError/Loadable';

interface LocationParams {
  search: SearchParams;
}

interface SearchParams {
  code?: string;
  state?: string;
}

export function StripeSuccess() {
  const [state, setState] = useState({
    rendered: false,
    loading: false,
    success: false,
    error: false,
  });

  const loc = useLocation();

  const saveStripe = (code, email) => {
    charityApi
      .connectCharityStripe(code, email)
      .then(() =>
        setState({ ...state, rendered: true, loading: false, success: true }),
      )
      .catch(error =>
        setState({
          ...state,
          rendered: true,
          error: error.message,
          loading: false,
        }),
      );
  };

  useEffect(() => {
    if (loc.search && !state.rendered) {
      setState({
        ...state,
        loading: true,
      });
      const { code, state: st } = queryString.parse(loc.search);
      if (code && st) {
        saveStripe(code, st);
      }
    }
    if (!state.rendered) {
      setState({
        ...state,
        rendered: true,
      });
    }
  });
  console.log(state);
  return (
    <Center>
      {/* <LoadingSpinner /> */}
      {state.loading && <LoadingSpinner />}
      {state.success ? (
        <>
          <h4>Your Stripe account has been successfully connected</h4>
          <CheckmarkContainer>
            <Checkmark />
          </CheckmarkContainer>
        </>
      ) : null}
      {state.error ? (
        <>
          <h4>{state.error}</h4>
          <CheckmarkContainer>
            <AnimatedError />
          </CheckmarkContainer>
        </>
      ) : null}
    </Center>
  );
}

const CheckmarkContainer = styled.div`
  height: 5rem;
  width: 5rem;
  margin-top: 2rem;
`;

const Center = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
`;
