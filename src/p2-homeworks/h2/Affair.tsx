import React from 'react'
import {AffairType} from "./HW2";
import style from "./Affairs.module.css"

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType
    deleteAffairCallback:  (id: number) => void
}

function Affair({affair,deleteAffairCallback}: AffairPropsType) {
    const deleteCallback = () => deleteAffairCallback(affair._id)

    return (
        <div className={style.affairs}>
           <div>{affair._id}</div>
           <div>{affair.name}</div>
           <div>{affair.priority}</div>

            <button className={style.btn} onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
