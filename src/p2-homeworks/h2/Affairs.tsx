import React from 'react'
import Affair from './Affair'
import {AffairType} from './HW2'
import style from "./Affairs.module.css"


type AffairsPropsType = {
    data: AffairType[] | undefined
    setFilter: Function
    deleteAffairCallback: (id: number) => void
}

function Affairs({data, setFilter, deleteAffairCallback}: AffairsPropsType) {
    const mappedAffairs = data!.map((a: AffairType) => (
        <Affair
            key={a._id}
            affair={a}
            deleteAffairCallback={deleteAffairCallback}
        />
    ))

    const setAll = () => setFilter("all")
    const setHigh = () => setFilter("high")
    const setMiddle = () => setFilter("middle")
    const setLow = () => setFilter("low")

    return (
        <div>

            {mappedAffairs}
            <div className={style.filterBtn}>
                <button className={style.btn} onClick={setAll}>All</button>
                <button className={style.btn} onClick={setHigh}>High</button>
                <button className={style.btn} onClick={setMiddle}>Middle</button>
                <button className={style.btn} onClick={setLow}>Low</button>
            </div>
        </div>
    )
}

export default Affairs
