import React from 'react';
import { Switch, Route } from 'react-router-dom';
import loginUser from '../utils/LoginUser';
import Header from '../components/Header';
import Main from '../components/Main';
import Home from './Home';
import Search from './Search';
import Favorites from './Favorites';
import Profile from './Profile';
import NotFound from './NotFound';

import '../assets/styles/App.css';

const App = () => {
  loginUser();
  return (
    <>
      <Header />
      <Main>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/search' component={Search} />
          <Route exact path='/favorites' component={Favorites} />
          <Route
            exact
            path='/profile'
            render={() => <Profile user={localStorage.getItem('catstagram_user')} />}
          />
          <Route component={NotFound} />
          {/* <Route exact path='/onboard' component={onboard} /> */}
        </Switch>
      </Main>
    </>
  );
};

export default App;
