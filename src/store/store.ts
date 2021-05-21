import { createStore } from 'redux';
import { gameReducer } from '../reducers/gameReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

export default function configureStore() {
   const composedEnhancers = composeWithDevTools();
   const store = createStore(gameReducer, composedEnhancers);

   return store;
}
