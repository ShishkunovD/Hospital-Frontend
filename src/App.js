import Login from './components/enter/Login';
import Registration from './components/enter/Registration';
import { Switch, Route, Redirect } from 'react-router-dom';

import './Style/header.css'
import './Style/enter-style/mainEnter.css'
import './Style/enter-style/mainEnter-media.css'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/authorization'>
          <Login />
        </Route>
        <Route path='/registration'>
          <Registration />
        </Route>
        <Redirect from='/' to='/authorization' />
      </Switch>
    </div>
  );
}

export default App;
