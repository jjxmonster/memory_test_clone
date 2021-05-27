import { combineReducers } from 'redux';

import { gameReducer } from './gameReducer';
import { userReducer } from './userReducer';
import { userLogin } from './userLoginReducer';

export const rootReducer = combineReducers({
   user: userReducer,
   game: gameReducer,
   userLogin: userLogin,
});
