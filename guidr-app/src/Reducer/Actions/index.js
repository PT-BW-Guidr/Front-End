import { axiosWithAuth } from '../../Components/Utilities/Utilities';

export const GET_LOGIN = "GET_LOGIN";
export const GET_CRED = "GET_CRED";
export const CREATE_USER = "CREATE_USER";

export const getLogin = (credentials) => dispatch =>{
    dispatch({type: GET_LOGIN});
    axiosWithAuth()
        .post(`https://guidr1.herokuapp.com/api/auth/login`,credentials)
        .then(res =>{
            console.log(res);
            localStorage.setItem('token', res.data.payload)
            
        })
        .catch(err => console.log('your username or password are inccorect'))
}

export const getCred = (credentials) => dispatch =>{

    dispatch({type: GET_CRED, payload: credentials});


}

export const createUser = (credentials) => dispatch =>{
    dispatch({type: CREATE_USER});
    axiosWithAuth()
        .post(`https://guidr1.herokuapp.com/api/auth/register`, credentials)
        .then(res =>{
            localStorage.setItem('token', res.data.token);
            console.log(localStorage);
        })
}