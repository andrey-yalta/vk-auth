import React from "react";
import s from "./MainForms.module.css"
import question from "../../../common/img/question.svg"
import arrow from "../../../common/img/dropdown_arrow.png"
import LoginReduxForm from "./LoginForm";
import RegistrationForm from "./RegistrationForm";
import LoginFormContainer from "./LoginFormContainer";





const MainForms =()=>{

    const onSubmit=(state)=>{

        console.log(state);
    }
    return(
        <div className={s.mainForms}>

            <LoginFormContainer/>

            <div className={s.mainRegistration +" "+s.componentsItem}>
                <h2>Впервые ВКонтакте?</h2>
                <span>Моментальная регистрация</span>
                <RegistrationForm/>
            </div>

            <div className={s.learnMore +" "+s.componentsItem}>
                <span>После регистрации Вы получите доступ ко всем возможностям VK Connect.</span>
                <a href="https://connect.vk.com/promo?">Узнать больше</a>
            </div>




        </div>

    )
}
export default MainForms;