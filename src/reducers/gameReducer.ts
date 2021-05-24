import * as types from '../actions/types';
import { startGameAction } from '../actions/actions';

export interface GameState {
   digitsToGame: Array<number>;
   howMuchDigitsToDraw: number;
   drawnDigits: Array<number>;
}

const initialState: GameState = {
   digitsToGame: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
   drawnDigits: [],
   howMuchDigitsToDraw: 1,
};

type actions = startGameAction;

export const gameReducer = (
   state: GameState = initialState,
   action: actions
): GameState => {
   const { payload, type } = action;
   switch (type) {
      case types.DRAWN_NEW_DIGITS: {
         const { digitsToGame, howMuchDigitsToDraw } = state;
         const newDrawnDigits: Array<number> = [];
         for (let i = 0; i < howMuchDigitsToDraw; i++) {
            const randomIndex = Math.floor(Math.random() * digitsToGame.length);
            newDrawnDigits.push(digitsToGame[randomIndex]);
         }
         return { ...state, drawnDigits: newDrawnDigits };
      }

      default:
         return state;
   }
};

export {};
