import React, {useState} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {getLogin, getCred} from '../Reducer/Actions'

const Login = props =>{

    const [user, setUser] = useState({
        username: "",
        password: ""
    })

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
                <button>Login</button>
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
) (Login);