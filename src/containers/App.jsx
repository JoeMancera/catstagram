import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from '../components/Header';
import '../assets/styles/App.css';

const App = () => {
  return (
    <div>
      <Header />
      <main className='main'>
        <Switch>
          <Route exact path='/' component={home} />
          <Route exact path='/search' component={search} />
          <Route exact path='/favorites' component={favorite} />
          <Route exact path='/profile' component={profile} />
          <Route exact path='/onboard' component={onboard} />
        </Switch>
      </main>
    </div>
  );
};

export default App;
