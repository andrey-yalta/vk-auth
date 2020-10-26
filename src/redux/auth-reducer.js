// import React from "react";

import {messagesAPI} from "../api/api";

const SET_AUTH_DATA = "SET-AUTH-DATA";
let initialState ={
    email:null,
    password:null,
    isAuth:false,

}
let  authReducer =(state = initialState,action)=>{
    switch (action.type) {

        case "SET-AUTH-DATA":{

            return { ...state, email: action.data.email, password: action.data.password};
        }
        default:
            return state;
    }
}

export default authReducer;
export const setAuthData =(data)=>({type:SET_AUTH_DATA, data:data});
export const loginThunkCreator =(data)=>{
    return(dispatch)=>{
        dispatch(setAuthData(data));
        messagesAPI.sendMessage(data)
            .then(data=>{
                console.log(data)
            })
    }
}
