import React, {useState} from 'react';
import {connect} from 'react-redux';
import {getLogin, getCred, createUser} from '../Reducer/Actions'
import { Link } from 'react-router-dom';
import styled from "styled-components";

const Flex= styled.div`
display: flex;
flex-flow: column wrap;
justify-content: center;
align-content:space evenly;
margin: 0 35%;
`

const Register = props =>{

    const [user, setUser] = useState(props.user)

    const handleChange = e => {
        e.preventDefault();        
        setUser({
            ...user,[e.target.name]: e.target.value
        })
        
        
    }
    console.log('user credentials', user);
    const onsSubmit = e =>{
        e.preventDefault();
        props.createUser(props.user,props);        
        console.log(user);
        setUser(props.user);
        props.getCred(user);
    }


    return(
        <Flex>
            <h1>Sign Up Here!</h1>
            
            <form onSubmit={onsSubmit}>
            <div>
            <label htmlFor="username">enter username</label>
                <input
                type = 'text'
                name = 'username'
                onChange = {handleChange}
                placeholder ={props.user.username}
                />
                </div>
                <div>
                <label htmlFor="username">enter password</label>
                <input
                type = 'text'
                name = 'password'
                onChange ={handleChange}
                placeholder = {props.user.password}
                />
                </div>
                <button type = "submit" >Sign up</button>
            </form>
            <Link to = "/login">Already a user? Sign in Here!</Link>
        </Flex>
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