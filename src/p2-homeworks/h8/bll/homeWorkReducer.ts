import {UserType} from "../HW8";


type ActionsType = sortStateACType | checkStateACType


export const homeWorkReducer = (state: UserType[], action: ActionsType): UserType[] => {

    const  CompareFnUp = (a: UserType, b: UserType) => {
        if (a.name < b.name) {
            return -1;
        }
        if (a.name > b.name) {
            return 1;
        }
        return 0;
    }
    const  CompareFnDown = (a: UserType, b: UserType) => {
        if (a.name > b.name) {
            return -1;
        }
        if (a.name < b.name) {
            return 1;
        }
        return 0;
    }

    switch (action.type) {
        case 'sort': {
            let stateCopy = [...state]

       return     action.payload === "up" ? stateCopy.sort(CompareFnUp) : stateCopy.sort(CompareFnDown)

        }
        case 'check':

          return  state.filter((person : UserType) => {
                return person.age >= action.payload
            })




        default:
            return state
    }
}

const sortStateAC = (payload: string) => {
    return {
        type: "sort",
        payload: payload
    } as const

}

const checkStateAC = (payload: number) => {
    return {
        type: "check",
        payload: payload
    } as const

}

type sortStateACType = ReturnType<typeof sortStateAC>
type checkStateACType = ReturnType<typeof checkStateAC>