import React, {useState} from 'react'
import {NavLink} from "react-router-dom";
import { PATH } from './Routes';
import st from "./Header.module.css"

function Header() {
    const [menuActive, setMenuActive] = useState(false)
    return (
        <div>
            <nav className={st.nav}>
                <button className={st.burgerBtn} onClick={() => setMenuActive(!menuActive)}>

                </button>
            </nav>
            <div className={menuActive ?  st.activeMenu : st.menuHeader}>
                <div ><NavLink className={st.menuHeaderItem} to={PATH.PRE_JUNIOR}>PRE_JUNIOR</NavLink></div>
                <div ><NavLink className={st.menuHeaderItem} to={PATH.JUNIOR}>JUNIOR</NavLink></div>
                <div ><NavLink className={st.menuHeaderItem} to={PATH.JUNIORPlus}>JUNIORPlus</NavLink></div>
            </div>

        </div>
    )
}

export default Header
