import * as types from './types';
import { UserType } from '../reducers/userLoginReducer';

export interface Action<T> {
   readonly type: string;
   readonly payload?: T;
}

export function createAction<T>(type: string, payload: T): Action<T> {
   return { type, payload };
}

//////////////////////////////////////////////////////////////////////////////////////////////// USER ACTIONS
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

export type userRespondedInCorrectAction = Action<null>;
export function userRespondedIncorrect(): userRespondedCorrectAction {
   return createAction(types.USER_RESPONDED_INCORRECT, null);
}
export type userRespondedInCorrectActionOn1LevelAction = Action<null>;
export function userRespondedInCorrectActionOn1Level(): userRespondedInCorrectActionOn1LevelAction {
   return createAction(types.USER_RESPONDED_INCORRECT_ON_1_LEVEL, null);
}
export type userLostGameAction = Action<null>;
export function userLostGame(): userLostGameAction {
   return createAction(types.USER_LOST_GAME, null);
}
export type resetUserStatsAction = Action<null>;
export function resetUserStats(): resetUserStatsAction {
   return createAction(types.RESET_USER_STATS, null);
}

//////////////////////////////////////////////////////////////////////////////////////////////// USER LOGIN
export type userLoggedAction = Action<UserType>;
export function userLogged(user: UserType): userLoggedAction {
   return createAction(types.USER_LOGGED, user);
}
export type userLogoutAction = Action<null>;
export function userLogout(): userLogoutAction {
   return createAction(types.USER_LOGOUT, null);
}

//////////////////////////////////////////////////////////////////////////////////////////////// GAME ACTIONS
export type startGameAction = Action<null>;
export function userStartedGame(): startGameAction {
   return createAction(types.GAME_START_CONGIGURATION, null);
}

export type configureGameAfterCorrectAnswerAction = Action<null>;
export function configureGameAfterCorrectAnswer(): configureGameAfterCorrectAnswerAction {
   return createAction(types.CONFIGURE_GAME_AFTER_CORRECT_ANSWER, null);
}
export type configureGameAfterIncorrectAnswerAction = Action<null>;
export function configureGameAfterIncorrectAnswer(): configureGameAfterIncorrectAnswerAction {
   return createAction(types.CONFIGURE_GAME_AFTER_INCORRECT_ANSWER, null);
}
export type configureGameAfterIncorrectAnswerOn1LevelAction = Action<null>;
export function configureGameAfterIncorrectAnswerOn1Level(): configureGameAfterIncorrectAnswerOn1LevelAction {
   return createAction(
      types.CONFIGURE_GAME_AFTER_INCORRECT_ANSWER_ON_1_LEVEL,
      null
   );
}
export type gameOverAction = Action<null>;
export function gameOver(): gameOverAction {
   return createAction(types.GAME_OVER, null);
}
