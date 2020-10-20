import React from "react";
import s from "./Main.module.css"
import MainStuff from "./MainStuff/MainStuff";
import MainForms from "./MainForms/MainForms";

const Main =()=>{
    return(
      <div className={s.main}>
            <MainStuff/>
            <MainForms/>
          <div className={s.learnMore +" "+s.componentsItem}>
              <span>После регистрации Вы получите доступ ко всем возможностям VK Connect.</span>
              <a href="https://connect.vk.com/promo?">Узнать больше</a>
          </div>
      </div>
    )
}
export default Main;