import { Middleware } from 'redux';
import {
   changeIsUserCanType,
   configureGameAfterCorrectAnswer,
   configureGameAfterIncorrectAnswer,
   configureGameAfterIncorrectAnswerOn1Level,
   userRespondedCorrect,
   userRespondedInCorrect,
   userRespondedInCorrectActionOn1Level,
} from '../actions/actions';
import { USER_PICKED_DIGIT } from '../actions/types';

import { ApplicationState } from '../store/store';

export const gameMiddleware: Middleware<{}, ApplicationState> =
   store => next => action => {
      const state = store.getState();
      const { type, payload } = action;
      const { game, user } = state;
      if (type === USER_PICKED_DIGIT) {
         if (game.drawnDigits[user.numberOfClick] === payload) {
            if (user.numberOfClick + 1 === game.drawnDigits.length) {
               store.dispatch(changeIsUserCanType(0));
               store.dispatch(userRespondedCorrect());
               store.dispatch(configureGameAfterCorrectAnswer());
            } else {
               return next(action);
            }
         } else {
            if (user.userLevel === 1) {
               store.dispatch(changeIsUserCanType(0));
               store.dispatch(userRespondedInCorrectActionOn1Level());
               store.dispatch(configureGameAfterIncorrectAnswerOn1Level());
            } else {
               store.dispatch(changeIsUserCanType(0));
               store.dispatch(configureGameAfterIncorrectAnswer());
               store.dispatch(userRespondedInCorrect());
            }
         }
      } else {
         return next(action);
      }
   };
