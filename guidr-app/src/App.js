import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import ProfilePage from './Components/profile'

import {guideReducer as reducer} from './Reducer/guideReducer';
import Login from './Components/login';
import PrivateRoute from './Components/PrivateRoute';
import register from './Components/register';

const store = createStore(reducer, applyMiddleware(thunk));

function App() {
  return (
    
    <Provider store = {store}>
      <div className="App">
        <h1>guidr</h1>
        <ProfilePage/>
        <header/>
        <Route exact path = '/' component = {Login}/>
        <Route path = '/trails'/>
        <Route path = '/about'/>
        <Route path = '/contact'/>
        <Switch>
          <PrivateRoute exact path = '/traillist' />
          <Route path = '/login'component = {Login}/>
          <Route path = '/register' component ={register}/>
        </Switch>
      </div>
    </Provider>
  );
}

export default App;
