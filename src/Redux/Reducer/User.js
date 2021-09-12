import { TypeActions } from "../Types";
const initialState={
Me:null,
}


export const User =(state = initialState,action) =>{
    switch (action.type) {
        case TypeActions.SET_ME:
            state.Me =action.payload;
            return {...state} 
        default: return {...state} 
    }
}