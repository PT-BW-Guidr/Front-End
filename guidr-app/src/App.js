import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import ProfilePage from './Components/profile'

import {guideReducer as reducer} from './Reducer/guideReducer';

const store = createStore(reducer, applyMiddleware(thunk));

function App() {
  return (
    
    <Provider store = {store}>
      <div className="App">
        <h1>guidr</h1>
        <ProfilePage/>
        <header/>
        <Route exact path = '/'/>
        <Route path = '/trips'/>
        <Switch>
           {/* <PrivateRoute exact path = '/triplist'/>  */}
          <Route path = '/login'/>
          <Route path = '/register'/>
        </Switch>
      </div>
    </Provider>
  );
}

export default App;
