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
margin: 10px 35%;
padding:10px;
background:linear-gradient(to bottom, #747185 , #B7AAB3);
`

const Inputs = styled.div`
margin-bottom:10px;
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
            
            
            <form onSubmit={onsSubmit}>
            <h2>Sign Up Here!</h2>
            <Inputs>
            <label htmlFor="username">enter username</label>
                <input
                type = 'text'
                name = 'username'
                onChange = {handleChange}
                placeholder ={props.user.username}
                />
                </Inputs>
                <div>
                <label htmlFor="username">enter password</label>
                <input
                type = 'password'
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