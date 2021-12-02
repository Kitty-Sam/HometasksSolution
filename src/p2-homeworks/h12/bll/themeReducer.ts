
const initState: initStateType  = {
   theme: "some"
};

type initStateType = {
    theme: string
}

export const themeReducer = (state = initState, action: ActionsType): initStateType => {
    switch (action.type) {
        case "THEME": {
            return {...state,theme: action.theme};
        }
        default:
            return state;
    }
};

export const changeThemeAC = (theme: string): any => {
  return   {type: "THEME", theme } as const
};


type ActionsType = ReturnType<typeof changeThemeAC>



