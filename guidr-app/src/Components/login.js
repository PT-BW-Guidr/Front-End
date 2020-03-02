import React, {useState} from 'react';

import {connect} from 'react-redux';
import {getLogin, getCred} from '../Reducer/Actions'
import { intialState } from '../Reducer/guideReducer';
import { Link } from 'react-router-dom';


const Login = props =>{

    const [user, setUser] = useState(intialState.user)

    const handleChange = e => {
        e.preventDefault();
        setUser({
            ...user,[e.target.name]: e.target.value
        })
        console.log('user credentials', user);
        props.getCred(user);

    }

    const onsSubmit = e =>{
        e.preventDefault();
        props.getLogin(props.user);
        props.history.push('/protected');
        setUser(intialState.user)
    }


    return(
        <div  className = 'Login'>
            <h1>Sign In Here!</h1>
            <form onSubmit={onsSubmit}>
                <input
                type = 'text'
                name = 'username'
                onChange = {handleChange}
                />
                <input
                type = 'text'
                name = 'password'
                onChange ={handleChange}
                />
                <button type ="submit" >Login</button>
            </form>
            <Link to = "/register">No Account? Sign Up Here!</Link>
        </div>
    )
}
const mapStateToProps = state =>{
    return {
        user: state.user
    }
}

export default connect(
    mapStateToProps,
    {getLogin, getCred}
) (Login);