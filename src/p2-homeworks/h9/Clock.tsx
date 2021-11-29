import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>(new Date())
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        clearTimeout(timerId)
    }
    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
           setDate(new Date())
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)
    }


    const stringHours = date.getHours()
    const stringMinutes = date.getMinutes()
    const stringSeconds = date.getSeconds()
    const stringMiliSeconds = date.getMilliseconds()

    const stringTime = `${stringHours}:${stringMinutes}:${stringSeconds}.${stringMiliSeconds}`



    const stringYear = date.getFullYear()
    const stringMonth = (+date.getMonth()+1).toString()
    const stringDay = date.getDate()

    const stringDate = `${stringYear}-${stringMonth}-${stringDay}`


    return (
        <div>
            <div
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {stringTime}

            </div>

            {show && (
                <div>
                    {stringDate}
                </div>
            )}

            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>

        </div>
    )
}

export default Clock
