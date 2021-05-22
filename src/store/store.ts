import { createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { gameReducer } from '../reducers/gameReducer';
import { GameState } from '../reducers/gameReducer';
import { GameAction } from '../actions/actions';

export default function configureStore() {
   const composedEnhancers = composeWithDevTools();
   const store: Store<GameState, GameAction> = createStore(
      gameReducer,
      composedEnhancers
   );

   return store;
}
