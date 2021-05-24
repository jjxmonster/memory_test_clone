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
}

type HealthNumbers = 0 | 1 | 2 | 3;

const initialState: UserState = {
   pickedDigit: undefined,
   userLevel: 1,
   userScore: 0,
   userHealth: 3,
   isUserCanType: false,
};

type actions = userPickedDigitAction | toogleUserCanTypeAction;

export const userReducer = (
   state: UserState = initialState,
   action: actions
): UserState => {
   const { payload, type } = action;
   switch (type) {
      case types.USER_PICKED_DIGIT:
         return { ...state, pickedDigit: payload };
      case types.TOOGLE_IS_USER_CAN_TYPE:
         return { ...state, isUserCanType: payload === 1 ? true : false };
      default:
         return state;
   }
};

export {};
