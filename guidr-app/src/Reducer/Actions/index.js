
import axios from 'axios';

var jwt_decode = require('jwt-decode');

export const GET_LOGIN = "GET_LOGIN";
export const GET_CRED = "GET_CRED";
export const CREATE_USER = "CREATE_USER";

export const getLogin = (credentials) => dispatch =>{
    dispatch({type: GET_LOGIN});
    axios
        .post(`https://guidr1.herokuapp.com/api/auth/login`, {username: credentials.username, password: credentials.password})
        .then(res =>{
            console.log(res);
            let token = jwt_decode(res.data.token);
            dispatch({type: CREATE_USER, payload: token});
            console.log(token);
            localStorage.setItem('token', token)
            
        })
        .catch(err => console.log('your username or password are inccorect'))
}

export const getCred = (credentials) => dispatch =>{

    dispatch({type: GET_CRED, payload: credentials});


}

export const createUser = (credentials) => dispatch =>{
    
    axios
        .post('https://guidr1.herokuapp.com/api/auth/register', {username: credentials.username, password: credentials.password})
        .then(res =>{            
            console.log(res);
            let token = jwt_decode(res.data.token);
            dispatch({type: CREATE_USER, payload: token});
            console.log(token);
            localStorage.setItem('token', token)
        })
}