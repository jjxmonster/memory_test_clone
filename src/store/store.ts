import { createStore, Store, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { rootReducer } from '../reducers/rootReducer';
import { GameState } from '../reducers/gameReducer';
import { UserState } from '../reducers/userReducer';
import { UserLoginState } from '../reducers/userLoginReducer';
import {
   userPickedDigitAction,
   toogleUserCanTypeAction,
   userRespondedCorrectAction,
   userRespondedInCorrectAction,
   userRespondedInCorrectActionOn1LevelAction,
   startGameAction,
   configureGameAfterCorrectAnswerAction,
   configureGameAfterIncorrectAnswerAction,
   configureGameAfterIncorrectAnswerOn1LevelAction,
   userLoggedAction,
} from '../actions/actions';
import { gameMiddleware } from '../middlewares/gameMiddleware';

export interface ApplicationState {
   game: GameState;
   user: UserState;
   userLogin: UserLoginState;
}
type actions =
   | userPickedDigitAction
   | toogleUserCanTypeAction
   | userRespondedCorrectAction
   | userRespondedInCorrectAction
   | startGameAction
   | configureGameAfterCorrectAnswerAction
   | configureGameAfterIncorrectAnswerAction
   | configureGameAfterIncorrectAnswerOn1LevelAction
   | userRespondedInCorrectActionOn1LevelAction
   | userLoggedAction;

type DispatchType = (args: actions) => actions;

export default function configureStore() {
   const middlewareEnhancer = applyMiddleware(gameMiddleware);
   const enhancers = [middlewareEnhancer];
   const composedEnhancers = composeWithDevTools(...enhancers);
   const store: Store<ApplicationState, actions> & { dispatch: DispatchType } =
      createStore(rootReducer, composedEnhancers);
   return store;
}
