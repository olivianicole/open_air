import React, { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import { Route, Switch } from 'react-router-dom';
import LoginFormPage from './components/LoginFormPage';
import SignUpForm from './components/SignupFormPage';
import * as sessionActions from "./store/session";
import Navigation from './components/Navigation';
import SplashPage from './components/SplashPage';
import Dashboard from './components/Dashboard';
import Text from './components/Text';
import Image from './components/Image';
import Link from './components/Link';
import Video from './components/Video'

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
            <Route path='/dashboard' exact>
              <Navigation isLoaded={isLoaded} />
              <Dashboard />
            </Route>
            <Route path='/dashboard/text'>
              <Navigation isLoaded={isLoaded} />
              <Text />
            </Route>
            <Route path='/dashboard/image'>
              <Navigation isLoaded={isLoaded} />
              <Image  />
            </Route>
            <Route path='/dashbaord/link'>
              <Navigation isLoaded={isLoaded} />
              <Link />
            </Route>
            <Route path='/dashboard/video'>
              <Navigation  isLoaded={isLoaded}/>
              <Video />
            </Route>
            <Route path='/login'>
              <Navigation isLoaded={isLoaded}/>
              <LoginFormPage />
            </Route>
            <Route path='/signup'>
              <Navigation isLoaded={isLoaded}/>
              <SignUpForm />
            </Route>
        </Switch>
        )}
    </>
  );
}

export default App;
