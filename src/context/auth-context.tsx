import React from 'react';
import { queryCache } from 'react-query';
import LogRocket from 'logrocket';
import { userApi } from 'api/userApi';
// import { LoadingSpinner } from '../app/components/LoadingSpinner';
import { Fallback } from '../app/components/Fallback';
// import { User } from 'types/User';
import { useAsync } from 'utils/hooks';

async function bootstrapAppData() {
  const token = await userApi.getToken();
  if (token) {
    const user = await userApi.getProfile();
    return user;
  }
}

const AuthContext = React.createContext({
  user: {
    id: null,
    email: null,
    fullName: null,
  },
});
AuthContext.displayName = 'AuthContext';

function AuthProvider(props) {
  const {
    data: user,
    status,
    error,
    isLoading,
    isIdle,
    isError,
    isSuccess,
    run,
    setData,
  } = useAsync({
    token: '',
  });
  React.useEffect(() => {
    const appDataPromise = bootstrapAppData();
    run(appDataPromise);
  }, [run]);

  const login = React.useCallback(
    form =>
      userApi.loginUser(form).then(user => {
        // This is an example script - don't forget to change it!
        LogRocket.identify('THE_USER_ID_IN_YOUR_APP', user);
        setData(user);
      }),
    [setData],
  );
  const register = React.useCallback(
    form =>
      userApi.registerUser(form).then(user => {
        // This is an example script - don't forget to change it!
        LogRocket.identify('THE_USER_ID_IN_YOUR_APP', user);
        setData(user);
      }),
    [setData],
  );
  const logout = React.useCallback(() => {
    userApi.logout();
    queryCache.clear();
    setData(null);
  }, [setData]);

  const value = React.useMemo(() => ({ user, login, logout, register }), [
    login,
    logout,
    register,
    user,
  ]);

  if (isLoading || isIdle) {
    return <div />;
  }

  if (isError && error && error.response && error.response.status === 401) {
    return <>{props.children}</>;
  }

  if (isError) {
    return <Fallback error={error} />;
  }

  if (isSuccess) {
    return <AuthContext.Provider value={value} {...props} />;
  }

  throw new Error(`Unhandled status: ${status}`);
}

function useAuth() {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error(`useAuth must be used within a AuthProvider`);
  }
  return context;
}

export { AuthProvider, useAuth };
