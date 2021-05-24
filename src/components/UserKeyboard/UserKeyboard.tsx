import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ApplicationState } from '../../store/store';

import { userPickedDigit } from '../../actions/actions';

import {
   StyledKeyboardWrapper,
   StyledKeyboardKeyContainer,
   StyledKeyboardKey,
} from './UserKeyboard.css';

// export interface UserKeyboardProps {

// }

const UserKeyboard: React.FC = () => {
   const digitsToGame = useSelector(
      (store: ApplicationState) => store.game.digitsToGame
   );
   const isUserCanType = useSelector(
      (store: ApplicationState) => store.user.isUserCanType
   );

   const dispatch = useDispatch();

   const handleKeyClick = (num: number) => {
      dispatch(userPickedDigit(num));
   };

   const keyboard: JSX.Element[] = digitsToGame.map(digit => (
      <StyledKeyboardKeyContainer
         key={String(digit)}
         onClick={() => handleKeyClick(digit)}
      >
         <StyledKeyboardKey disabled={!isUserCanType}>
            {digit}
         </StyledKeyboardKey>
      </StyledKeyboardKeyContainer>
   ));

   return <StyledKeyboardWrapper>{keyboard}</StyledKeyboardWrapper>;
};

export default UserKeyboard;
