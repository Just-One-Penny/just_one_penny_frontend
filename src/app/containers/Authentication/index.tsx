/**
 *
 * Authentication
 *
 */

import React, { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey, actions } from './slice';
import {
  selectEmail,
  selectPassword,
  selectFullName,
  selectError,
  selectLoading,
} from './selectors';
import { authenticationSaga } from './saga';
import { Input } from 'app/components/Input';

import { ReactComponent as GithubIcon } from './assets/github.svg';
import { ReactComponent as GoogleIcon } from './assets/google.svg';

interface Props {
  newAccount?: boolean;
}

export const Authentication = memo((props: Props) => {
  const [newAccount, setNewAccount] = useState(props.newAccount);
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: authenticationSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const email = useSelector(selectEmail);
  const password = useSelector(selectPassword);
  const fullName = useSelector(selectFullName);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectLoading);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  const onChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    switch (evt.currentTarget.name) {
      case 'email':
        dispatch(actions.changeEmail(evt.currentTarget.value));
        break;
      case 'fullName':
        dispatch(actions.changeFullName(evt.currentTarget.value));
        break;
      case 'password':
        dispatch(actions.changePassword(evt.currentTarget.value));
        break;
      default:
        break;
    }
  };

  const submitForm = (evt?: React.FormEvent<HTMLFormElement>) => {
    /* istanbul ignore next  */
    if (evt !== undefined && evt.preventDefault) {
      evt.preventDefault();
    }
    console.log('submitForm -> newAccount', newAccount);
    if (newAccount) {
      dispatch(actions.registerUser());
    } else {
      console.log('submitForm -> newAccount', newAccount);
      dispatch(actions.loginUser());
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <div className="container mx-auto px-4 h-full">
      <div className="flex content-center items-center justify-center h-full">
        <div className="w-full lg:w-4/12 px-4">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
            <div className="rounded-t mb-0 px-6 py-6">
              <div className="text-center mb-3">
                <h6 className="text-gray-600 text-sm font-bold">
                  Sign {newAccount ? 'up' : 'in'} with
                </h6>
              </div>
              <div className="btn-wrapper text-center">
                <button
                  className="bg-white active:bg-gray-100 text-gray-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs"
                  type="button"
                  style={{ transition: 'all .15s ease' }}
                >
                  <GithubIcon />
                  Github
                </button>
                <button
                  className="bg-white active:bg-gray-100 text-gray-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs"
                  type="button"
                  style={{ transition: 'all .15s ease' }}
                >
                  <GoogleIcon />
                  Google
                </button>
              </div>
              <hr className="mt-4 border-b-1 border-gray-400" />
            </div>
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
              <div className="text-gray-500 text-center mb-3 font-bold">
                <small>
                  Or sign {newAccount ? 'up' : 'in'} with credentials
                </small>
              </div>
              <form>
                {newAccount ? (
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                      placeholder="Full Name"
                      value={fullName}
                      onChange={onChange}
                      style={{ transition: 'all .15s ease' }}
                    />
                  </div>
                ) : null}
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                    placeholder="Email"
                    value={email}
                    onChange={onChange}
                    style={{ transition: 'all .15s ease' }}
                  />
                </div>

                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                    placeholder="Password"
                    value={password}
                    onChange={onChange}
                    style={{ transition: 'all .15s ease' }}
                  />
                </div>
                <div>
                  <label className="inline-flex items-center cursor-pointer">
                    <input
                      id="customCheckLogin"
                      type="checkbox"
                      className="form-checkbox text-gray-800 ml-1 w-5 h-5"
                      style={{ transition: 'all .15s ease' }}
                    />
                    <span className="ml-2 text-sm font-semibold text-gray-700">
                      Remember me
                    </span>
                  </label>
                </div>

                <div className="text-center mt-6">
                  <button
                    onClick={() => submitForm()}
                    className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                    type="button"
                    style={{ transition: 'all .15s ease' }}
                  >
                    Sign {newAccount ? 'Up' : 'In'}
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="flex flex-wrap mt-6">
            <div className="w-1/2">
              <span
                onClick={e => e.preventDefault()}
                className="text-gray-300 cursor-pointer"
              >
                <small>Forgot password?</small>
              </span>
            </div>
            <div className="w-1/2 text-right">
              {newAccount ? (
                <span
                  onClick={() => setNewAccount(false)}
                  className="text-gray-300 cursor-pointer"
                >
                  <small>Already have an account?</small>
                </span>
              ) : (
                <span
                  onClick={() => setNewAccount(true)}
                  className="text-gray-300 cursor-pointer"
                >
                  <small>Create new account</small>
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

const Div = styled.div``;
