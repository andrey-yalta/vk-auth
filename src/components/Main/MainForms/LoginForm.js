import React from "react";

import {Field, reduxForm} from "redux-form";
import {requiredField} from "../../../common/utils/validators";
import {Input} from "../../../common/FormsControl/FormsControl";
import mail from "../../../api/contact/mail.php"


const LoginForm =(props)=>{

    return(

        <form   onSubmit={props.handleSubmit} >
            <div><Field  component={"input"} name={"email"} type="email" placeholder={"Телефон или Email"} /></div>
            <div><Field component={Input} name={"password"} type="password" placeholder={"Пароль"} validate={[requiredField]}/></div>
            {/*<div><Field component={"input"} name={"saved"} type={"checkbox" }/></div>*/}

            <button>Войти</button>*/}
            <a href="/">Забыли пароль?</a>
        </form>

    )
}
const LoginReduxForm = reduxForm({form:"login"})(LoginForm);

export default LoginReduxForm;