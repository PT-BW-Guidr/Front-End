import { GET_LOGIN, GET_CRED } from "./Actions"
import { v4 } from "uuid";



export const intialState = {
    trailList: [],
    isFetchingData: true,
    isFetchingLogin: false,
    isSendingLogin: false,
    user: {
        id: v4(),
        username:"AdventureMan",
        password:"123456"
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
        id: 0,
        profile_title: "adventure-man",
        tagline:"gonna send it",
        guide_specialty:"mushrooms",
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