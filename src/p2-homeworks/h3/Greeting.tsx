import React, {ChangeEvent,KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string
    addUser: () => void
    error: string
    totalUsers: number
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    onEnter: (e:KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onEnter} // деструктуризация пропсов
) => {
    const inputClass = error ? s.errorInput : s.input

    return (
        <div className={s.input}>
            <input className={s.add} value={name} onChange={setNameCallback}  onKeyDown ={onEnter}/>
            <span>{error}</span>
            <button onClick={addUser} className={s.btn}>add</button>
            <span>{totalUsers}</span>
        </div>
    )
}

export default Greeting
