import React, {useState} from 'react'
import Affairs from './Affairs'
import style from "./Affairs.module.css"


// types
export type AffairPriorityType = 'high' | 'low' | 'middle'
export type AffairType = {
    _id: number
    name: string
    priority: string
}
export type FilterType = 'all' | AffairPriorityType

// constants
const defaultAffairs: AffairType[] = [
    {_id: 1, name: 'React', priority: 'high'},
    {_id: 2, name: 'JS', priority: 'high'},
    {_id: 3, name: 'YouTube', priority: 'low'},
    {_id: 4, name: 'work', priority: 'high'},
    {_id: 5, name: 'HTML & CSS', priority: 'middle'},
]

// pure helper functions
export const filterAffairs = (affairs: AffairType[] = defaultAffairs, filter: FilterType): AffairType[] | undefined => {
    if (filter === 'all') return affairs
    if (filter === 'high') {
        return affairs.filter(ft => ft.priority === 'high')
    }
    if (filter === 'low') {
        return affairs.filter(ft => ft.priority === 'low')
    }
    if (filter === 'middle') {
        return affairs.filter(ft => ft.priority === 'middle')
    }
}
export const deleteAffair = (affairs: AffairType[], _id: number): AffairType[] => {
    return affairs.filter(ft => ft._id !== _id)
}

function HW2() {
    const [affairs, setAffairs] = useState<AffairType[]>(defaultAffairs)
    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id))

    return (
        <div className={style.all}>
            <hr/>
            homeworks 2


            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
            />

        </div>
    )
}

export default HW2
