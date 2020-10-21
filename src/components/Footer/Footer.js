import React from "react";
import s from "./Footer.module.css"


const Footer =()=>{
    return(
        <div className={s.footer}>
            <hr/>
            <footer>
                <div className={s.footerMerge}>
                    <a href="/">ВКонтакте</a>
                    <span>© 2006–2020</span>
                </div>
                <div className={s.footerLinks}>
                    <ul>
                        <li><a href="https://vk.com/about">О ВКонтакте</a></li>
                        <li><a href="https://vk.com/terms">Правила</a></li>
                        <li><a href="https://vk.com/biz?utm_source=vk_inside&utm_medium=authorization">Для бизнеса</a>
                        </li>
                        <li><a href="https://vk.com/dev">Разработчикам</a></li>
                    </ul>
                </div>
                <div className={s.footerLanguages}>
                    <ul>
                        <li><a href="/">Русский</a></li>
                        <li><a href="/">Українська</a></li>
                        <li><a href="/">English</a></li>
                        <li><a href="/">Все языки >> </a></li>
                    </ul>
                </div>
            </footer>

        </div>
    )
}
export default Footer;