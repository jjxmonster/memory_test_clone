import * as types from '../actions/types';

import {
   userPickedDigitAction,
   toogleUserCanTypeAction,
} from '../actions/actions';

export interface UserState {
   pickedDigit: number | undefined;
   userLevel: number;
   userScore: number;
   userHealth: number;
   isUserCanType: boolean;
   numberOfClick: number;
   isUserLogged: boolean;
}

const initialState: UserState = {
   pickedDigit: undefined,
   userLevel: 1,
   userScore: 0,
   userHealth: 3,
   isUserCanType: false,
   numberOfClick: 0,
   isUserLogged: false,
};

type actions = userPickedDigitAction | toogleUserCanTypeAction;

export const userReducer = (
   state: UserState = initialState,
   action: actions
): UserState => {
   const { payload, type } = action;
   switch (type) {
      case types.USER_PICKED_DIGIT:
         return {
            ...state,
            pickedDigit: payload,
            numberOfClick: state.numberOfClick + 1,
         };
      case types.TOOGLE_IS_USER_CAN_TYPE:
         return { ...state, isUserCanType: payload === 1 ? true : false };
      case types.USER_RESPONDED_CORRECT:
         return {
            ...state,
            userScore: state.userScore + 300,
            numberOfClick: 0,
            userLevel: state.userLevel + 1,
            pickedDigit: undefined,
         };
      case types.USER_RESPONDED_INCORRECT:
         return {
            ...state,
            numberOfClick: 0,
            userLevel: state.userLevel - 1,
            pickedDigit: undefined,
            userHealth: state.userHealth - 1,
         };
      case types.USER_RESPONDED_INCORRECT_ON_1_LEVEL:
         return {
            ...state,
            numberOfClick: 0,
            userLevel: state.userLevel,
            pickedDigit: undefined,
            userHealth: state.userHealth - 1,
         };
      case types.USER_LOST_GAME:
         return {
            ...state,
            pickedDigit: undefined,
            isUserCanType: false,
            userHealth: 3,
            numberOfClick: 0,
         };
      case types.RESET_USER_STATS:
         return {
            ...state,
            userLevel: 1,
            userScore: 0,
         };
      default:
         return state;
   }
};

export {};
