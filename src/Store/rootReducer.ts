import { combineReducers } from 'redux';
import userReducer from './User/userReducer';

const rootReducer = combineReducers({
    userState : userReducer
});

export default rootReducer;
