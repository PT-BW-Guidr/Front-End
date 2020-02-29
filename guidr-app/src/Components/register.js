import React, {useState} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {getLogin, getCred} from '../Reducer/Actions'
import { intialState } from '../Reducer/guideReducer';

const Register = props =>{

    const [user, setUser] = useState(intialState)

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
        props.createUser(props.user);
        props.history.push('/protected');
        setUser(intialState);
    }


    return(
        <div  className = 'Register'>
            <h1>Sign Up Here!</h1>
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
                <button type = "submit" >Sign up</button>
            </form>
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
) (Register);