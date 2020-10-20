import React from "react";
import s from "./MainStuff.module.css"
import android from "../../../common/img/reg_android_ru.png"
import iphone from "../../../common/img/reg_iphone_ru.png"
import androidIcon from "../../../common/img/android.svg"
import productArrow from "../../../common/img/login_all_products_arrow.svg"
const MainStuff =()=>{
    return(
        <div className={s.mainStuff}>
            <div className={s.mainInformation}>
                <h2>ВКонтакте для мобильных устройств</h2>
                <span>Установите официальное мобильное приложение ВКонтакте и оставайтесь <br/> в курсе новостей Ваших друзей, где бы Вы ни находились.</span>
                <a href="https://play.google.com/store/apps/details?id=com.vkontakte.android"
                   className={s.mainInformationImg}><img src={android} alt="android"/></a>
                <a href="https://apps.apple.com/ru/app/id564177498" className={s.mainInformationImg}>
                    <img id="iphone" src={iphone} alt="iphone"/></a>

                <div className={s.mainInformationLinks}>
                    <a className={s.linksItem} href="https://play.google.com/store/apps/details?id=com.vkontakte.android">
                        <img src={androidIcon} alt=""/>VK для Android </a>
                    <a href="https://apps.apple.com/ru/app/id564177498"><img src={androidIcon} alt=""/>VK для Iphone</a><br/>
                    <a href="https://connect.vk.com/promo?">Все продукты <img src={productArrow} alt=""/></a>
                </div>


            </div>
        </div>
    )
}
export default MainStuff;