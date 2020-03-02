import React from 'react';
import './App.css';
import {Route, Switch, Link} from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {guideReducer as reducer} from './Reducer/guideReducer';
import styled from "styled-components";

import PublicProfilePage from './Components/publicprofilepage';
import PrivateProfile from './Components/privateprofile';
import CreateProfile from './Components/createprofile';
import CreateTrip from './Components/createtrip'
import Login from './Components/login';
import PrivateRoute from './Components/PrivateRoute';
import register from './Components/register';

const Nav =styled.div`
padding:10px;
background:linear-gradient(to top, #592500, #BC2900, #BA6D09, #71A8EE, #3072EB, #1552C6, #0542A3);
`


function App() {
  return (
    <div>
    <Nav>

<h1>guidr</h1>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/publicprofilepage'>View members!</Link>
        <Link to='/register'>Sign Up!</Link>
        <Link to='/login'>Log in</Link>
        <Link to='/createprofile'>Create Profile</Link>
        <Link to='/createtrip'>Create Trip</Link>
        
      </nav>
      </Nav>
      <Route  path = '/publicprofilepage' component = {PublicProfilePage}/>
      <Route  exact path = '/' component = {PrivateProfile}/>
      <Route  path = '/createprofile' component = {CreateProfile}/>
      <Route  path = '/createtrip' component = {CreateTrip}/>
      <Route path = '/register' component ={register}/>
      <Route path = '/login'component = {Login}/>
      </div>

// const store = createStore(reducer, applyMiddleware(thunk));

   // <Provider store = {store}>
 
    //   <div className="App">
        
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
