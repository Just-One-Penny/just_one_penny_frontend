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
    id: '',
    email: '',
    fullName: '',
    charities: [],
  },
  logout: () => {},
  setUser: user => {},
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

  const setUser = React.useCallback(
    user => {
      LogRocket.identify(user.id);
      setData(user);
    },
    [setData],
  );

  const login = React.useCallback(() => {
    // console.log("AuthProvider -> login", bootstrapAppData())
    // bootstrapAppData().then((user) =>{
    //   console.log("AuthProvider -> user", user)
    //   if (user) {
    //     LogRocket.identify(user.id);
    //     setData(user);
    //   }
    // })
  }, [setData]);

  const register = React.useCallback(
    form =>
      userApi.userRegister(form).then(user => {
        // This is an example script - don't forget to change it!
        LogRocket.identify(user.id);
        setData(user);
      }),
    [setData],
  );
  const logout = React.useCallback(() => {
    userApi.logout();
    queryCache.clear();
    setData(null);
  }, [setData]);

  const value = React.useMemo(
    () => ({ user, setUser, login, logout, register }),
    [login, setUser, logout, register, user],
  );

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
