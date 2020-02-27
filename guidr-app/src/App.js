import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import {guideReducer as reducer} from './Reducer/guideReducer';
import Login from './Components/login';

const store = createStore(reducer, applyMiddleware(thunk));

function App() {
  return (
    <Provider store = {store}>
      <div className="App">
        <header/>
        <Route exact path = '/' component = {Login}/>
        <Route path = '/trails'/>
        <Route path = '/about'/>
        <Route path = '/contact'/>
        <Switch>
          {/* <PrivateRoute exact path = '/traillist'/> */}
          <Route path = '/login'/>
          <Route path = '/register'/>
        </Switch>
      </div>
    </Provider>
  );
}

export default App;
