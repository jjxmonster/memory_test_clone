import * as types from '../actions/types';

import {
   userPickedDigitAction,
   toogleUserCanTypeAction,
} from '../actions/actions';

export interface UserState {
   pickedDigit: number | undefined;
   userLevel: number;
   userScore: number;
   userHealth: HealthNumbers;
   isUserCanType: boolean;
   numberOfClick: number;
}

type HealthNumbers = 0 | 1 | 2 | 3;

const initialState: UserState = {
   pickedDigit: undefined,
   userLevel: 1,
   userScore: 0,
   userHealth: 3,
   isUserCanType: false,
   numberOfClick: 0,
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
      default:
         return state;
   }
};

export {};
