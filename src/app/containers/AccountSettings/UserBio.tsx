import React from 'react';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { useAuth } from 'context/auth-context';
import styled from 'styled-components/macro';
import { ReactComponent as EditIcon } from './assets/edit-regular.svg';
import { Button, InputText, Form, ConnectedField, Box } from '@welcome-ui/core';
import { reducer, sliceKey, actions } from './slice';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectIsEditing,
  selectEmail,
  selectFullName,
  selectRole,
} from './selectors';
import { accountSettingsSaga } from './saga';
import { UpdatedUser } from './types';

export function UserBio() {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: accountSettingsSaga });

  const { user } = useAuth();
  const currentUser: UpdatedUser = {
    id: user.id!,
    fullName: user.fullName!,
    email: user.email!,
  };

  const dispatch = useDispatch();

  const onChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    switch (evt.currentTarget.name) {
      case 'email':
        dispatch(actions.changeEmail(evt.currentTarget.value));
        break;
      case 'fullName':
        dispatch(actions.changeName(evt.currentTarget.value));
        break;
      case 'role':
        dispatch(actions.changeRole(evt.currentTarget.value));
        break;
      default:
        break;
    }
  };

  const selectedEmail = useSelector(selectEmail);
  const selectedFullName = useSelector(selectFullName);
  const selectedRole = useSelector(selectRole);
  const isEditing = useSelector(selectIsEditing);

  const handleClick = (evt: React.MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    switch (evt.currentTarget.name) {
      case 'edit':
        dispatch(actions.changeIsEditing(currentUser));
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
    dispatch(actions.updateUser());
  };

  const cancelForm = (evt?: React.FormEvent<HTMLFormElement>) => {
    /* istanbul ignore next  */
    if (evt !== undefined && evt.preventDefault) {
      evt.preventDefault();
    }
    dispatch(actions.changeIsEditing(false));
    dispatch(actions.changeEmail(selectedEmail));
    dispatch(actions.changeName(selectedFullName));
    dispatch(actions.changeRole(selectedRole));
  };

  return (
    <PageWrapper>
      {user ? (
        <div>
          {!isEditing ? (
            <div>
              <div>
                <Box>Name: {user?.fullName}</Box>
                <Box>Email: {user?.email}</Box>
              </div>
              <div>
                <Button onClick={handleClick} name="edit">
                  <EditIcon />
                </Button>
              </div>
            </div>
          ) : (
            <Form
              initialValues={{
                fullName: selectedFullName,
                email: selectedEmail,
                role: selectedRole,
              }}
            >
              <ConnectedField
                name="fullName"
                component={InputText}
                onChange={onChange}
              />
              <ConnectedField
                name="email"
                component={InputText}
                onChange={onChange}
              />
              <ConnectedField
                name="role"
                component={InputText}
                onChange={onChange}
              />
              <Button onClick={() => submitForm()}>SAVE</Button>
              <Button name="cancel" onClick={() => cancelForm()}>
                CANCEL
              </Button>
            </Form>
          )}
        </div>
      ) : (
        <div></div>
      )}
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  width: 960px;
  margin: 0 auto;
  padding: 0 1.5rem;
  box-sizing: content-box;
`;
