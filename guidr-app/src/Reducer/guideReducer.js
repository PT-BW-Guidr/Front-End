import { GET_LOGIN, GET_CRED } from "./Actions"

export const intialState = {
    trailList: [],
    isFetchingData: true,
    isFetchingLogin: false,
    user: {
        username:"",
        password:""
    },
    token: ""
}

export const guideReducer = (state = intialState, action) =>{
    switch(action.type){
        case GET_LOGIN :
            return{
                ...state,
                isFetchingLogin: true,
            };
        case GET_CRED:
            return{
                ...state,
                user: action.payload
            };
        default:
            return state;
    }
}