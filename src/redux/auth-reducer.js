// import React from "react";

const SET_AUTH_DATA = "SET-AUTH-DATA";
let initialState ={
    email:null,
    password:null,

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
export const setAuthData =(data)=>({type:SET_AUTH_DATA, data:data})