import React from "react";
import s from "./MainForms.module.css";
import question from "../../../common/img/question.svg";
import arrow from "../../../common/img/dropdown_arrow.png";

const RegistrationForm = ()=>{


    return(                <form action="">
        <input type="text" placeholder="Ваше имя"/>
        <input type="text" placeholder="Ваша фамилия"/>
        <div className="components__registration-date">
              <span className={s.spanData}>Дата рождения

                <p data-tooltip="Заполненная дата рождения позволит друзьям легче найти Вас, а также подбирать для Вас интересные материалы.Вы сможете всегда настроить видимость Вашей даты рождения в редактировании профиля.">
                   <img src={question} alt=""/></p>

                 </span>
            <div className={s.container}>
                <div className={s.dropdown  + " "+ s.day  }>
                    <div className={s.select }>
                        <div>День <img src={arrow} alt=""/></div>
                        <i className="fa fa-chevron-left"></i>
                    </div>
                    <input type="hidden" name="gender"/>
                    <ul className={s.dropdownMenu  }>

                        <li id="day">1</li>
                        <li id="day">2</li>
                        <li id="day">3</li>
                        <li id="day">4</li>
                        <li id="day">5</li>
                        <li id="day">6</li>
                        <li id="day">7</li>
                        <li id="day">8</li>
                        <li id="day">9</li>
                    </ul>
                </div>

                <div className={s.dropdown + " " +s.month}>
                    <div className={s.select}>
                        <div>Месяц <img src={arrow} alt=""/></div>
                        <i className="fa fa-chevron-left"></i>
                    </div>
                    <input type="hidden" name="gender"/>
                    <ul className={s.dropdownMenu}>
                        <li id="month">Январь</li>
                        <li id="month">Февраль</li>
                        <li id="month">Март</li>
                        <li id="month">Апрель</li>
                        <li id="month">Май</li>
                        <li id="month">Июнь</li>
                        <li id="month">Июль</li>
                    </ul>
                </div>
                <div className={s.dropdown + " " +s.year}>
                    <div className={s.select}>
                        <div>Год <img src={arrow} alt=""/></div>
                        <i className="fa fa-chevron-left"></i>
                    </div>
                    <input type="hidden" name="gender"/>
                    <ul className={s.dropdownMenu}>
                        <li id="year">2006</li>
                        <li id="year">2005</li>
                        <li id="year">2004</li>
                        <li id="year">2003</li>
                        <li id="year">2002</li>
                        <li id="year">2001</li>
                        <li id="year">2000</li>
                        <li id="year">1999</li>

                    </ul>
                </div>
            </div>

            <button className={s.registrationBtn}>Продолжить регистрацию</button>
            <button className={s.facebookBtn}><img
                src="data:image/svg+xml;charset=utf-8,%3Csvg%20height%3D%2216%22%20width%3D%2216%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22M0%200h16v16H0z%22%2F%3E%3Cpath%20d%3D%22M8%200a8%208%200%20011%2015.938v-5.934h2.145L11.502%208H8.999V6.435C9%205.798%209.311%205%2010.311%205h1.015V3.195s-.921-.14-1.802-.157C7.5%203%207%204.153%207%206.172V8H5v2.004h2v5.934A8.001%208.001%200%20018%200z%22%20fill%3D%22%23fff%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                alt=""/>Войти через Facebook
            </button>
        </div>
    </form>)
}
export default RegistrationForm;