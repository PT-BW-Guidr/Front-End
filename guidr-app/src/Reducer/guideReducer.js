import { GET_LOGIN, GET_CRED } from "./Actions"
// import uuid from 'uuid';

export const intialState = {
    trailList: [],
    isFetchingData: true,
    isFetchingLogin: false,
    isSendingLogin: false,
    user: {
        // id: uuid(),
        username:"",
        password:""
    },
    token: "",
    trip:{
        title:"",
        description: "",
        isPrivate: true,
        isProfessional: false,
        duration: 0.00,
        distance: 0.00,
        date: Date.now(),
        tripType: ""
    },
    profile:{
        title: "",
        tagline:"",
        guideSpecialty:"",
        age: Number,
        yearsExperience: Number
    }

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