import React from 'react';
import { Switch, Route } from 'react-router-dom';
import loginUser from '../utils/LoginUser';
import Header from '../components/Header';
import Home from '../components/Home';
import Search from '../components/Search';
import Favorites from '../components/Favorites';
import '../assets/styles/App.css';

const App = () => {
  loginUser;
  return (
    <div>
      <Header />
      <main className='main'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/search' component={Search} />
          <Route path='/favorites' component={Favorites} />
          {/* <Route exact path='/profile' component={profile} />
          <Route exact path='/onboard' component={onboard} /> */}
        </Switch>
      </main>
    </div>
  );
};

export default App;
