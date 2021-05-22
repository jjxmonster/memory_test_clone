import { GameAction } from '../actions/actions';

export interface GameState {
   howMuchDigitsToDraw: Number;
   drawnDigits: Array<Number>;
   pickedDigit: Number | null;
   level: Number;
   score: Number;
}

const initialState: GameState = {
   drawnDigits: [],
   pickedDigit: null,
   howMuchDigitsToDraw: 1,
   level: 1,
   score: 0,
};

const digitsToGame: Array<Number> = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

export const gameReducer = (
   state: GameState = initialState,
   action: GameAction
): GameState => {
   const { payload, type } = action;
   switch (type) {
      // case value:
      //    break;

      default:
         return state;
   }
};

export {};
