import { Middleware } from 'redux';
import { changeIsUserCanType, userRespondedCorrect } from '../actions/actions';
import { USER_PICKED_DIGIT } from '../actions/types';

import { ApplicationState } from '../store/store';

export const gameMiddleware: Middleware<{}, ApplicationState> =
   store => next => action => {
      const state = store.getState();
      let result = next(action);
      const { type, payload } = action;
      const { game, user } = state;
      if (type === USER_PICKED_DIGIT) {
         if (game.drawnDigits[user.numberOfClick] === payload) {
            if (user.numberOfClick + 1 === game.drawnDigits.length) {
               store.dispatch(changeIsUserCanType(0));
               store.dispatch(userRespondedCorrect());
            }
         } else {
            store.dispatch(changeIsUserCanType(0));
         }
      }
      return result;
   };
