import React from 'react';
import useRoutes from './Routes';
import useAuth from './auth.check';
import { AuthContext } from './context/AuthContext';

const App = () => {
  const { isAuth, loginCheck, logout } = useAuth();
  const isAuthenticated = !!isAuth;
  const routes = useRoutes(isAuthenticated);
  return (
    <AuthContext.Provider value={{
      isAuth,
      loginCheck, 
      logout,
    }}>

    <div className="App">
      {routes}
    </div>

    </AuthContext.Provider>
  );
}

export default App;
