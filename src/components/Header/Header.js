import React from "react";
import s from "./Header.module.css"
import icon from "../../common/img/ic_head_logo.svg"
const Header =()=>{
    return(
        <div className={s.header}>
            <div className={s.stuff}>
                <div className={s.img}>
                    <div className={s.imgNav}>
                        <a href="/">
                            <img src={icon} alt="vk"/>
                        </a>
                    </div>
                </div>
                <div className={s.input}><input type="text" placeholder="     Поиск"/></div>
                <div className={s.language}><a href="/">Switch to English</a></div>
            </div>
        </div>
    )
}
export default Header;