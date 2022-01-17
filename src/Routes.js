import { Switch, Route, Redirect } from 'react-router-dom';
import MainPage from './components/mainPage/MainPage';
import Login from './components/enter/Login';
import Registration from './components/enter/Registration';

const useRoutes = (isAuthenticated) => {

  if (isAuthenticated) {
    return (
      <Switch>
        <Route path='/mainPage'>
          <MainPage />
        </Route>
        <Redirect to='/mainPage'/>
      </Switch>
    )
  }

  return (
    <Switch>
      <Route path='/authorization'>
        <Login />
      </Route>
      <Route path='/registration'>
        <Registration />
      </Route>
      <Redirect from='/' to='/authorization' />
    </Switch>
  )
}

export default useRoutes;