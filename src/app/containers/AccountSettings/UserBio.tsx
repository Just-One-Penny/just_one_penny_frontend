import React from 'react';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { useAuth } from 'context/auth-context';
import styled from 'styled-components/macro';
import { ReactComponent as EditIcon } from './assets/edit-regular.svg';
import { InputText } from '@welcome-ui/input-text';
import { Box } from '@welcome-ui/box';
import { Button } from '@welcome-ui/button';
// import { Field } from '@welcome-ui/field';
// import { Form } from 'react-final-form';
import { reducer, sliceKey, actions } from './slice';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectIsEditing,
  selectEmail,
  selectFullName,
  selectPassword,
  selectOldPassword,
  selectRole,
  selectAccountSettings,
} from './selectors';
import { accountSettingsSaga } from './saga';
import { UpdatedUser } from './types';
import { Modal } from '../../components/Modal';
import { FormField } from '../../components/FormField';
import { Form, Field } from 'react-final-form';

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
      case 'name':
        dispatch(actions.changeName(evt.currentTarget.value));
        break;
      case 'role':
        dispatch(actions.changeRole(evt.currentTarget.value));
        break;
      // case 'currentPassword':
      //   dispatch(actions.changeOldPassword(evt.currentTarget.value));
      //   break;
      // case 'newPassword':
      //   dispatch(actions.changePassword(evt.currentTarget.value));
      // break;
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

  const submitPasswordForm = values => {
    /* istanbul ignore next  */
    if (
      values.newPassword.length > 0 &&
      values.newPassword === values.confirmPassword
    ) {
      dispatch(
        actions.changePassword({
          password: values.newPassword,
          oldPassword: values.currentPassword,
          userId: user.id,
        }),
      );
      window.location.reload();
    }
  };

  const submitNameForm = values => {
    /* istanbul ignore next  */
    if (values.fullName.length > 0) {
      dispatch(
        actions.updateUser({
          fullName: values.fullName,
          email: user.email,
          id: user.id,
          role: selectedRole,
        }),
      );
      window.location.reload();
    }
  };

  const submitEmailForm = values => {
    /* istanbul ignore next  */
    if (values.email.length > 0) {
      dispatch(
        actions.updateUser({
          fullName: user.fullName,
          email: values.email,
          id: user.id,
          role: selectedRole,
        }),
      );
      window.location.reload();
    }
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
  console.log('SELECTED FN', selectedFullName);
  return (
    <PageWrapper>
      {user ? (
        <div>
          {!isEditing ? (
            <div>
              <div>
                <FieldGrid>
                  <TitleContainer>Name:</TitleContainer>
                  <FieldContent>
                    {!selectedFullName ? user?.fullName : selectedFullName}
                  </FieldContent>
                  <Modal
                    buttonElement={<EditButton>Edit</EditButton>}
                    modalBody={
                      <ModalContainer>
                        <ModalHeader>
                          <H3>Edit Name</H3>
                          <HR />
                          <Form
                            initialValues={{ fullName: user.fullName }}
                            onSubmit={submitNameForm}
                          >
                            {({ handleSubmit }) => (
                              <FormContainer>
                                <form onSubmit={handleSubmit}>
                                  <FieldContainer>
                                    <FormField
                                      name="fullName"
                                      label="Full Name"
                                      placeholder="Greg Barrow"
                                    />
                                  </FieldContainer>
                                  <SaveContainer>
                                    <SaveButton type="submit">Save</SaveButton>
                                  </SaveContainer>
                                </form>
                              </FormContainer>
                            )}
                          </Form>
                        </ModalHeader>
                      </ModalContainer>
                    }
                  />
                  <TitleContainer>Email:</TitleContainer>
                  <FieldContent>{user?.email}</FieldContent>
                  <Modal
                    buttonElement={<EditButton>Edit</EditButton>}
                    modalBody={
                      <ModalContainer>
                        <ModalHeader>
                          <H3>Edit Email</H3>
                          <HR />
                          <Form
                            initialValues={{ email: user.email }}
                            onSubmit={submitEmailForm}
                          >
                            {({ handleSubmit }) => (
                              <FormContainer>
                                <form onSubmit={handleSubmit}>
                                  <FieldContainer>
                                    <FormField
                                      name="email"
                                      label="Email"
                                      placeholder="test@example.com"
                                    />
                                  </FieldContainer>
                                  <SaveContainer>
                                    <SaveButton type="submit">Save</SaveButton>
                                  </SaveContainer>
                                </form>
                              </FormContainer>
                            )}
                          </Form>
                        </ModalHeader>
                      </ModalContainer>
                    }
                  />
                  <TitleContainer>Password:</TitleContainer>
                  <FieldContent>
                    &#8226; &#8226; &#8226; &#8226; &#8226; &#8226; &#8226;
                    &#8226; &#8226;
                  </FieldContent>
                  <Modal
                    buttonElement={<EditButton>Edit</EditButton>}
                    modalBody={
                      <ModalContainer>
                        <ModalHeader>
                          <H3>Edit Password</H3>
                          <HR />
                          <Form onSubmit={submitPasswordForm}>
                            {({ handleSubmit }) => (
                              <FormContainer>
                                <form onSubmit={handleSubmit}>
                                  <FieldContainer>
                                    <FormField
                                      name="currentPassword"
                                      label="Confirm Current Password"
                                      placeholder="Current Password"
                                      type="password"
                                    />
                                  </FieldContainer>
                                  <FieldContainer>
                                    <FormField
                                      name="newPassword"
                                      label="New Password"
                                      placeholder="New Password"
                                      type="password"
                                    />
                                  </FieldContainer>
                                  <FieldContainer>
                                    <FormField
                                      name="confirmPassword"
                                      label="Confirm New Password"
                                      placeholder="Confirm New Password"
                                      type="password"
                                    />
                                  </FieldContainer>
                                  <SaveContainer>
                                    <SaveButton type="submit">Save</SaveButton>
                                  </SaveContainer>
                                </form>
                              </FormContainer>
                            )}
                          </Form>
                        </ModalHeader>
                      </ModalContainer>
                    }
                  />
                </FieldGrid>
              </div>
              {/* <div>
                <Button onClick={handleClick} name="edit">
                  <EditIcon />
                </Button>
              </div> */}
            </div>
          ) : (
            // <Form
            //   onSubmit={submitForm}
            //   initialValues={{
            //     fullName: selectedFullName,
            //     email: selectedEmail,
            //     role: selectedRole,
            //   }}
            // >
            //   <Field
            //     name="fullName"
            //     component={InputText}
            //     onChange={onChange}
            //   />
            //   <Field name="email" component={InputText} onChange={onChange} />
            //   <Field name="role" component={InputText} onChange={onChange} />
            //   <Button onClick={() => submitForm()}>SAVE</Button>
            //   <Button name="cancel" onClick={() => cancelForm()}>
            //     CANCEL
            //   </Button>
            // </Form>
            <div />
          )}
        </div>
      ) : (
        <div></div>
      )}
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: content-box;
`;

const FieldGrid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 40% 40% 20%;
  row-gap: 80%;
`;

const TitleContainer = styled.div``;

const FieldContent = styled.p``;

const EditButton = styled.button`
  font: var(--unnamed-font-style-normal) normal
    var(--unnamed-font-weight-normal) var(--unnamed-font-size-16) /
    var(--unnamed-line-spacing-24) var(--unnamed-font-family-avenir);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(---0a559e-primary);
  text-align: left;
  font: normal normal normal 16px/24px Avenir;
  letter-spacing: 0px;
  color: #0a559e;
  opacity: 1;

  justify-self: flex-end;
`;

const ModalContainer = styled.div`
  padding: 1em;
`;

const ModalHeader = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
  padding-bottom: 1rem;
  align-items: flex-start;
`;

const H3 = styled.h3`
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

const HR = styled.hr`
  border: 1px solid #cbd5e0;
  width: 100%;
  opacity: 0.4;
`;

const FormContainer = styled.div`
  width: 80%;
  margin: auto;
  margin-bottom: 100px;
`;

const SaveContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 15%;
  width: 100%;
  text-align: center;

  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px -3px 6px #0000001a;
  border-radius: 0px 0px 5px 5px;
  opacity: 1;

  height: 80px;
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

const SaveButton = styled.button`
  background: transparent
    linear-gradient(0deg, #11569b 0%, #54aecc 100%, #6ccddd 100%, #7ae0e8 100%)
    0% 0% no-repeat padding-box;
  box-shadow: 0px 2px 6px #0000005a;
  border-radius: 50px;
  opacity: 1;

  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-900)
    var(--unnamed-font-size-16) / 22px var(--unnamed-font-family-avenir);
  letter-spacing: var(--unnamed-character-spacing-0);
  text-align: center;
  font: normal normal 900 16px/22px Avenir;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;

  margin: auto 0;
  width: 75%;
  height: 90%;
  max-width: 250px;
`;

const FieldContainer = styled.div``;
