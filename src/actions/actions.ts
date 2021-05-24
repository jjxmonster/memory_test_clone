import * as types from './types';

export interface Action<T> {
   readonly type: string;
   readonly payload?: T;
}

export function createAction<T>(type: string, payload: T): Action<T> {
   return { type, payload };
}

// USER ACTIONS
export type userPickedDigitAction = Action<number>;
export function userPickedDigit(num: number): userPickedDigitAction {
   return createAction(types.USER_PICKED_DIGIT, num);
}

export type toogleUserCanTypeAction = Action<number>;
export function changeIsUserCanType(
   isUserCan: number
): toogleUserCanTypeAction {
   return createAction(types.TOOGLE_IS_USER_CAN_TYPE, isUserCan);
}

export type userRespondedCorrectAction = Action<null>;
export function userRespondedCorrect(): userRespondedCorrectAction {
   return createAction(types.USER_RESPONDED_CORRECT, null);
}

// GAME ACTIONS
export type startGameAction = Action<null>;
export function userStartedGame(): startGameAction {
   return createAction(types.DRAWN_NEW_DIGITS, null);
}
