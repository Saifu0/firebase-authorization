import { SET_CURRENT_USER } from './userTypes';

export const setCurrentUser = ( user : any) => {
    return {
        type : SET_CURRENT_USER,
        payload : user
    }
}