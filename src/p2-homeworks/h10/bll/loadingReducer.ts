const initState = {
    isLoading: false
}

type initStateType = {
    isLoading: boolean
}

export const loadingReducer = (state: initStateType = initState, action: loadingACType): initStateType => {
    switch (action.type) {
        case 'loading': {
            return {...state, isLoading: action.isLoading }
        }
        default:
            return state
    }
}

export const loadingAC = (isLoading: boolean) => {
    return {
        type: 'loading', isLoading
    } as const
}

type loadingACType = ReturnType<typeof loadingAC>