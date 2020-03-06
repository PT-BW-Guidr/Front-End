import { GET_LOGIN, GET_CRED, CREATE_USER, SET_ID } from "./Actions"




export const intialState = {
    isFetchingData: true,
    isFetchingLogin: false,
    isSendingLogin: false,
    user: {

        username:"",
        password:""
    },
    token: {},
    trip:{
        id: 0,
        user_id:'',
        title:"",
        description: "",
        is_private: true,
        is_professional: false,
        duration: "0.00",
        distance: "0.00",
        date: Date(),
        trip_type: ""
    },
    profile:{
        id: 0,
        user_id:'',
        title: "",
        tagline:"",
        guide_specialty:"",
        age: "",
        years_experience: ""
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
        case CREATE_USER:
            return{
                ...state,
                token: action.payload             
            }
        default:
            return state;
    }
}