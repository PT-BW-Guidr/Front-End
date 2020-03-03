import { GET_LOGIN, GET_CRED, CREATE_USER } from "./Actions"




export const intialState = {
    trailList: [],
    isFetchingData: true,
    isFetchingLogin: false,
    isSendingLogin: false,
    user: {
        id: 0,
        username:"AdventureMan",
        password:"123456"
    },
    token: {},
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
    profile:[{
        id: 0,
        title: "adventure-man",
        tagline:"gonna send it",
        guideSpecialty:"mushrooms",
        age: 9000,
        yearsExperience: 9000
    }]

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
        case CREATE_USER:
            return{
                ...state,
                token: action.payload
            }
        default:
            return state;
    }
}