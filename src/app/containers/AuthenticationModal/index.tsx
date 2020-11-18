/**
 *
 * AuthenticationModal
 *
 */

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey, actions } from './slice';
import { authenticationModalSaga } from './saga';
import { Form, Field } from 'react-final-form';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import {
  FacebookLoginButton,
  GoogleLoginButton,
} from 'react-social-login-buttons';
import { Button } from 'app/components/Button';
import { FormField } from 'app/components/FormField';
import styled from 'styled-components';

interface Props {
  isSignup: boolean;
}

AuthenticationModal.defaultProps = {
  isSignup: false,
};

export function AuthenticationModal(props: Props) {
  const [isSignup, setIsSignup] = useState(props.isSignup);
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: authenticationModalSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  const submitForm = values => {
    if (isSignup) {
      dispatch(actions.registerUser(values));
    } else {
      dispatch(actions.loginUser(values));
    }
  };

  const onSignIn = response => {
    dispatch(
      actions.setAccessToken({
        accessToken: response.accessToken,
        provider: 'google',
      }),
    );
  };

  const responseFacebook = response => {
    dispatch(
      actions.setAccessToken({
        accessToken: response.accessToken,
        provider: 'facebook',
      }),
    );
  };

  const onFailure = error => console.error('Im a bug', error);

  return (
    <div className="container mx-auto px-4 w-full h-full">
      <div className="flex content-center items-center justify-center h-full">
        <div className="w-full px-4">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-2 border-0">
            <div className="rounded-t mb-0 px-6 py-6">
              <div className="text-center mb-3">
                <H3 className="flex justify-center">
                  Sign {isSignup ? 'up' : 'in'} with
                </H3>
              </div>
              <div className="flex flex-row w-full">
                <div className="w-1/2">
                  <GoogleLogin
                    clientId="470508940865-tjqisat9qbo4vc5gm953f6fq04ii5u7j.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={onSignIn}
                    onFailure={onFailure}
                    render={renderProps => (
                      <GoogleLoginButton
                        className="h-3"
                        onClick={renderProps.onClick}
                      />
                    )}
                    cookiePolicy={'single_host_origin'}
                  />
                </div>
                <div className="w-1/2">
                  <FacebookLogin
                    appId="767504717314327"
                    fields="name,email,picture"
                    render={renderProps => (
                      <FacebookLoginButton
                        className="h-3"
                        onClick={renderProps.onClick}
                      />
                    )}
                    callback={responseFacebook}
                  />
                </div>
              </div>
              <hr className="mt-4 border-b-1 border-gray-400" />
            </div>
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
              <H3 className="flex justify-center">
                Or sign {isSignup ? 'up' : 'in'} with credentials
              </H3>
              <Form
                onSubmit={submitForm}
                render={({ handleSubmit, values }) => (
                  <form onSubmit={handleSubmit}>
                    {isSignup ? (
                      <div>
                        <FormField
                          name="firstName"
                          label="First Name"
                          type="text"
                          placeholder="First Name"
                          required
                        />
                        <FormField
                          name="lastName"
                          label="Last Name"
                          type="text"
                          placeholder="Last Name"
                          required
                        />
                      </div>
                    ) : null}
                    <FormField
                      name="email"
                      label="Email"
                      type="text"
                      placeholder="Email"
                      required
                    />
                    <FormField
                      name="password"
                      label="Password"
                      type="password"
                      placeholder="Password"
                      required
                    />
                    <Field
                      name="remember"
                      component="input"
                      type="checkbox"
                      value="remember"
                      className="mr-3 mt-3"
                    />
                    Remember me
                    <div className="text-center mt-6">
                      <Button btnStyle="primary">
                        Sign {isSignup ? 'Up' : 'In'}
                      </Button>
                    </div>
                  </form>
                )}
              />
            </div>
          </div>
          <div className="flex flex-wrap mb-3">
            <div className="w-1/2">
              <span
                onClick={e => e.preventDefault()}
                className="text-black cursor-pointer"
              >
                <Text>Forgot password?</Text>
              </span>
            </div>
            <div className="w-1/2 text-right">
              {isSignup ? (
                <span
                  onClick={() => setIsSignup(false)}
                  className="text-black cursor-pointer"
                >
                  <Text>Already have an account?</Text>
                </span>
              ) : (
                <span
                  onClick={() => setIsSignup(true)}
                  className="text-black cursor-pointer"
                >
                  <Text className="text-right">Create new account</Text>
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
      <script
        src="https://apis.google.com/js/platform.js?onload=renderButton"
        async
        defer
      ></script>
    </div>
  );
}

const H3 = styled.h3`
  font: var(--unnamed-font-style-normal) normal
    var(--unnamed-font-weight-medium) var(--unnamed-font-size-20) / 27px
    var(--unnamed-font-family-avenir);
  letter-spacing: var(--unnamed-character-spacing-0);
  text-align: left;
  font: normal normal 700 20px/27px Avenir;
  letter-spacing: 0px;
  font-size: 20px;
  margin-bottom: 2rem;

  @media only screen and (max-width: 475px) {
    font-size: 0.75rem;
  }
`;

const Text = styled.span`
  font: var(--unnamed-font-style-normal) normal
    var(--unnamed-font-weight-medium) var(--unnamed-font-size-20) / 27px
    var(--unnamed-font-family-avenir);
  letter-spacing: var(--unnamed-character-spacing-0);
  text-align: left;
  font: normal normal medium 12px/18px Avenir;
  letter-spacing: 0px;
  font-size: 12px;
  margin-bottom: 2rem;

  @media only screen and (max-width: 475px) {
    font-size: 0.75rem;
  }
`;
