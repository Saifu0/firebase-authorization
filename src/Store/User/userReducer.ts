import { SET_CURRENT_USER } from './userTypes';

const initialState : any = {
    user : null
}

const reducer = ( state : any = initialState, action : any ) => {
    switch(action.type){
        case SET_CURRENT_USER:
            return {
                user : action.payload
            }
        default:
            return state;
    }
}

export default reducer;