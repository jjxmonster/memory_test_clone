import { createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { rootReducer } from '../reducers/rootReducer';
import { GameState } from '../reducers/gameReducer';
import { UserState } from '../reducers/userReducer';
import {
   userPickedDigitAction,
   startGameAction,
   toogleUserCanTypeAction,
} from '../actions/actions';

export interface ApplicationState {
   game: GameState;
   user: UserState;
}
type actions =
   | userPickedDigitAction
   | startGameAction
   | toogleUserCanTypeAction;

export default function configureStore() {
   const composedEnhancers = composeWithDevTools();
   const store: Store<ApplicationState, actions> = createStore(
      rootReducer,
      composedEnhancers
   );
   return store;
}
