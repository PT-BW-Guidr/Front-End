import React from 'react';
import './App.css';
import {Route, Switch, Link} from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import PublicProfile from './Components/publicprofile'
import PrivateProfile from './Components/privateprofile'

import {guideReducer as reducer} from './Reducer/guideReducer';
import Login from './Components/login';
import PrivateRoute from './Components/PrivateRoute';
import register from './Components/register';

// const store = createStore(reducer, applyMiddleware(thunk));

function App() {
  return (
    
    <div>
      <nav>
        <Link to='/privateprofile'>Home</Link>
        <Link to='/publicprofile'>View members!</Link>
        <Link to='/register'>Sign Up!</Link>
        <Link to='/login'>Log in</Link>
      </nav>
      <Route exact path = '/publicprofile' component = {PublicProfile}/>
      <Route exact path = '/privateprofile' component = {PrivateProfile}/>
    </div>

    // <Provider store = {store}>
    //   <div className="App">
    //     <h1>guidr</h1>
        
    //     <header/>
        
    //     <Route exact path = '/' component = {Login}/>
    //     <Route path = '/trips'/>
    //     <Route path = '/about'/>
    //     <Route path = '/contact'/>
    //     <Switch>
    //       <PrivateRoute exact path = '/triplist' />
    //       <Route path = '/login'component = {Login}/>
    //       <Route path = '/register' component ={register}/>
    //     </Switch>
    //   </div>
    // </Provider>
  );
}

export default App;
