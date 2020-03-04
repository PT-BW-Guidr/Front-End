import React, {useState} from 'react';

import {connect} from 'react-redux';
import {getLogin, getCred, createUser} from '../Reducer/Actions'

import { Link } from 'react-router-dom';

const Register = props =>{

    const [user, setUser] = useState(props.user)

    const handleChange = e => {
        e.preventDefault();
        
        setUser({
            ...user,[e.target.name]: e.target.value
        })
        props.getCred(user);
        
    }
    console.log('user credentials', user);
    const onsSubmit = e =>{
        e.preventDefault();
        props.createUser(props.user);
        props.history.push('/privateprofile');
        console.log(user);
        setUser(props.user);

    }


    return(
        <div  className = 'Register'>
            <h1>Sign Up Here!</h1>
            <form onSubmit={onsSubmit}>
                <input
                type = 'text'
                name = 'username'
                onChange = {handleChange}
                placeholder ={props.user.username}
                />
                <input
                type = 'text'
                name = 'password'
                onChange ={handleChange}
                placeholder = {props.user.password}
                />
                <button type = "submit" >Sign up</button>
            </form>
            <Link to = "/login">Already a user? Sign in Here!</Link>
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
    {getLogin, getCred, createUser}
) (Register);