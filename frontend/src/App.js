import React, { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import { Route, Switch } from 'react-router-dom';
import LoginFormPage from './components/LoginFormPage';
import SignUpForm from './components/SignupFormPage';
import * as sessionActions from "./store/session";
import Navigation from './components/Navigation';
import SplashPage from './components/SplashPage';
import Dashboard from './components/Dashboard';

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return isLoaded && (
    <>
        {isLoaded && (
          <Switch>
            <Route path='/' exact>
              <SplashPage />
            </Route>
            <Route path='/dash'>
              <Navigation isLoaded={isLoaded} />
              <Dashboard />
            </Route>
            <Route path='/login'>
              <Navigation isLoaded={isLoaded} />
              <LoginFormPage />
            </Route>
            <Route path='/signup'>
              <Navigation isLoaded={isLoaded} />
              <SignUpForm />
            </Route>
        </Switch>
        )}
    </>
  );
}

export default App;
