import React, {useState} from 'react';

import {connect} from 'react-redux';
import {getLogin, getCred} from '../Reducer/Actions'
import { intialState } from '../Reducer/guideReducer';
import { Link } from 'react-router-dom';
import styled from "styled-components";

const Flex= styled.div`
display: flex;
flex-flow: column wrap;
justify-content: center;
align-content:space evenly;
margin: 2% 22%;
padding:20px;
background:linear-gradient(to bottom, #747185 , #B7AAB3);
`

const Inputs = styled.div`
margin-bottom:10px;
`


const Login = props =>{

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
        props.getLogin(user, props);        
        setUser(props.user)
    }

    

    return(
        <Flex>
            <h2>Sign In Here!</h2>
            <form onSubmit={onsSubmit}>
            <div>
            <Inputs>
            <label htmlFor="username">user name</label>
           
                <input
                type = 'text'
                name = 'username'
                onChange = {handleChange}
                />
                </Inputs>
                <Inputs>
                <label htmlFor="password">password</label>
                <input
                type = 'password'
                name = 'password'
                onChange ={handleChange}
                />
                </Inputs>
                </div>
                <button type ="submit" >Login</button>
            </form>
            <Link to = "/register">No Account? Sign Up Here!</Link>
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
    {getLogin, getCred}
) (Login);