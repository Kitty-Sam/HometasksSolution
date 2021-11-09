import React from 'react'
import style from "./../h1/Message.module.css"


type MessagePropsType = {
    avatar: string;
    name: string,
    message: string,
    time: string,

}

function Message({avatar, name, message, time}: MessagePropsType) {
    return (
        <div className={style.message}>
            <div >
                <img  className={style.avatar} src={avatar} />
            </div>

            <div className={style.textMes}>
                <div className={style.nameUs}>{name}</div>
                <div className={style.messageUs}>{message}</div>
                <div className={style.timeUs}>{time}</div>
            </div>

        </div>
    )
}

export default Message
