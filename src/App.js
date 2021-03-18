import './App.css';
import React from 'react';
import Sidebar from './Sidebar';
import Chat from './Chat';
import { Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import Login from './Login';
import { useStateValue } from './StateProvider';

function App() {
  const [{ user }] = useStateValue();

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (

        <div className='app_body'>

          <Sidebar />
          <Switch>
            <Route path='/rooms/:roomId'>
              <Chat />
            </Route>
            <Route path='/'>
              <Chat />
            </Route>
          </Switch>
        </div>
      )}

    </div>
  );
}

export default App;


