import useAuth from './auth.check';
import useRoutes from './Routes';
import { AuthContext } from './context/AuthContext';

import './Style/header.css';
import './Style/enter-style/mainEnter.css';
import './Style/enter-style/mainEnter-media.css';
import './Style/main-style/filling.css';
import './Style/main-style/table.css'

const App = () => {
  const { token, loginCheck, logout } = useAuth();
  const isAuthenticated = !!token;
  const routes = useRoutes(isAuthenticated);
  return (
    <AuthContext.Provider value={{
      token,
      loginCheck, 
      logout
    }}>

    <div className="App">
      {routes}
    </div>

    </AuthContext.Provider>
  );
}

export default App;
