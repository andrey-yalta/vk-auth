import React from "react";

import {Field, reduxForm} from "redux-form";







const LoginForm =(props)=>{

    return(

        <form   onSubmit={props.handleSubmit}>
            <div><Field component={"input"} name={"email"} type="email" placeholder={"Телефон или Email"} /></div>
            <div><Field component={"input"} name={"password"} type="password" placeholder={"Пароль"} /></div>
            {/*<div><Field component={"input"} name={"saved"} type={"checkbox" }/></div>*/}

            <button>Войти</button>*/}
            <a href="/">Забыли пароль?</a>
        </form>

    )
}
const LoginReduxForm = reduxForm({form:"login"})(LoginForm);

export default LoginReduxForm;