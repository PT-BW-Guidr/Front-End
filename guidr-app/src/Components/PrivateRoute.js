//importing dependencies
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';

// Requirements:
// 1. It has the same API as <Route />. (same props as Route)
// 2. It renders a <Route /> and passes all the props through to it.
// 3. It checks if the user is authenticated, if they are, it renders
// the “component” prop. If not, it redirects the user to /login.

const PrivateRoute = (prop, { component: Component, ...props }) => {
  return (
    <Route
      {...props}
      render={() => {
        /*if the localStorage item is set to the value within token the component is rendered*/
        if (localStorage.getItem('token') === prop.token) {
          return <Component />;
        }
        //if not the user is redirected to the login page.
        else {
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};

const mapStateToProps = state =>{
  return {
      token: state.token,
      user: state.profile
  }
}

export default connect(
  mapStateToProps,
  {}
) (PrivateRoute);