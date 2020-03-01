import React from 'react';
import './App.css';
import {Route, Switch, Link} from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import PublicProfilePage from './Components/publicprofilepage';
import PrivateProfile from './Components/privateprofile';
import CreateProfile from './Components/createprofile';
import CreateTrip from './Components/createtrip'

 import {guideReducer as reducer} from './Reducer/guideReducer';
import Login from './Components/login';
import PrivateRoute from './Components/PrivateRoute';
import register from './Components/register';

// const store = createStore(reducer, applyMiddleware(thunk));

function App() {
  return (
    
    <div>

<h1>guidr</h1>
      <nav>
        <Link to='/privateprofile'>Home</Link>
        <Link to='/publicprofilepage'>View members!</Link>
        <Link to='/register'>Sign Up!</Link>
        <Link to='/'>Log in</Link>
        <Link to='/createprofile'>Create Profile</Link>
        <Link to='/createtrip'>Create Trip</Link>
      </nav>
      <Route  path = '/publicprofilepage' component = {PublicProfilePage}/>
      <Route  path = '/privateprofile' component = {PrivateProfile}/>
      <Route  path = '/createprofile' component = {CreateProfile}/>
      <Route  path = '/createtrip' component = {CreateTrip}/>
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
