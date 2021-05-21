interface GameState {
   drawnDigits: Array<Number>;
   pickedDigit: Number | null;
   howMuchDigitsToDraw: Number;
   level: Number;
   score: Number;
}
interface GameAction {
   type: String;
   payload: Number | Array<Number> | Boolean;
}

const initialState: GameState = {
   drawnDigits: [],
   pickedDigit: null,
   howMuchDigitsToDraw: 1,
   level: 1,
   score: 0,
};

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
