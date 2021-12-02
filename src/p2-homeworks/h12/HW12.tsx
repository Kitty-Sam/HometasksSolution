import React, {useState} from "react";
import s from "./HW12.module.css";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeAC} from "./bll/themeReducer";

const themes = ['dark', 'red', 'some'];

function HW12() {
    const dispatch = useDispatch();
    const theme = useSelector<AppStoreType, string>(state => state.themes.theme)

    const onChangeSelectClick = (theme: string) => {
        dispatch(changeThemeAC(theme))
    }

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>

          <SuperSelect options={themes}
                       value={theme}
                       onChangeOption={onChangeSelectClick} />

            <hr/>
        </div>
    );
}

export default HW12;
