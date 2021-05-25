import * as types from '../actions/types';
import { startGameAction } from '../actions/actions';

export interface GameState {
   digitsToGame: Array<number>;
   howMuchDigitsToDraw: number;
   drawnDigits: Array<number>;
   isPickedDigitCorrect: boolean | undefined;
   isUserRespondedCorrect: boolean | undefined;
}

const initialState: GameState = {
   digitsToGame: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
   drawnDigits: [],
   howMuchDigitsToDraw: 1,
   isPickedDigitCorrect: undefined,
   isUserRespondedCorrect: undefined,
};

type actions = startGameAction;

export const gameReducer = (
   state: GameState = initialState,
   action: actions
): GameState => {
   const { payload, type } = action;
   switch (type) {
      case types.GAME_START_CONGIGURATION: {
         const { digitsToGame, howMuchDigitsToDraw } = state;
         const newDrawnDigits: Array<number> = [];
         for (let i = 0; i < howMuchDigitsToDraw; i++) {
            const randomIndex = Math.floor(Math.random() * digitsToGame.length);
            newDrawnDigits.push(digitsToGame[randomIndex]);
         }
         return {
            ...state,
            drawnDigits: newDrawnDigits,
            isUserRespondedCorrect: undefined,
         };
      }

      case types.CONFIGURE_GAME_AFTER_CORRECT_ANSWER:
         return {
            ...state,
            drawnDigits: [],
            howMuchDigitsToDraw: state.howMuchDigitsToDraw + 1,
            isPickedDigitCorrect: undefined,
            isUserRespondedCorrect: true,
         };
      case types.CONFIGURE_GAME_AFTER_INCORRECT_ANSWER:
         return {
            ...state,
            drawnDigits: [],
            howMuchDigitsToDraw: state.howMuchDigitsToDraw - 1,
            isPickedDigitCorrect: undefined,
            isUserRespondedCorrect: false,
         };
      case types.CONFIGURE_GAME_AFTER_INCORRECT_ANSWER_ON_1_LEVEL:
         return {
            ...state,
            drawnDigits: [],
            howMuchDigitsToDraw: state.howMuchDigitsToDraw,
            isPickedDigitCorrect: undefined,
            isUserRespondedCorrect: false,
         };
      case types.GAME_OVER:
         return {
            ...state,
            drawnDigits: [],
            howMuchDigitsToDraw: 1,
            isPickedDigitCorrect: undefined,
            isUserRespondedCorrect: false,
         };

      default:
         return state;
   }
};

export {};
