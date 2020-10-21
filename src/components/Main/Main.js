import React from "react";
import s from "./Main.module.css"
import MainStuff from "./MainStuff/MainStuff";
import MainForms from "./MainForms/MainForms";

const Main =()=>{
    return(
      <div className={s.main}>
            <MainStuff/>
            <MainForms className={s.componentsItem} />

      </div>
    )
}
export default Main;