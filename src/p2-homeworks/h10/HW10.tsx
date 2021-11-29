import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {loadingAC} from "./bll/loadingReducer";
import {AppStoreType} from "./bll/store";

function HW10() {

    const dispatch = useDispatch();

    const isLoading = useSelector<AppStoreType, boolean>(state => state.loading.isLoading)




    const setLoading = () => {
        dispatch(loadingAC(!isLoading))
        setTimeout (()=>{ dispatch(loadingAC(isLoading))}, 1000)

        console.log('loading...')
    };

    return (
        <div style={{backgroundColor: "#ededa6", fontFamily: "cursive"}}>
            <hr/>
            homeworks 10

            {isLoading
                ? (
                    <div>крутилка...</div>

                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

        </div>
    )
}

export default HW10
