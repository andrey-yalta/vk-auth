import React from "react";
import {connect} from "react-redux";
import s from "./MainForms.module.css";
import LoginReduxForm from "./LoginForm";
import {loginThunkCreator, setAuthData} from "../../../redux/auth-reducer";

const LoginFormContainer =(props)=>{

    const onSubmit=(state)=>{

        props.loginThunkCreator(state);
        debugger;
    }

    return(
        <div className={s.mainLogin +" "+s.componentsItem}>
            <LoginReduxForm  onSubmit={onSubmit} className={s.mainLogin +" "+s.componentsItem}/>
        </div>
    )
}
let mapStateToProps = (state) => {
    return {

        isAuth: state.auth.isAuth,
    };
};
export default connect(mapStateToProps,{setAuthData,loginThunkCreator})(LoginFormContainer);
