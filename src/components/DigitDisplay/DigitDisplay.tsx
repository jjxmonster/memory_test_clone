import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ApplicationState } from '../../store/store';

import { changeIsUserCanType } from '../../actions/actions';

import {
   DigitDisplayWrapper,
   StyledNumberOfDigits,
   StyledDigitContainer,
} from './DigitDisplay.css';

// export interface DigitDisplayProps {

// }

const DigitDisplay: React.FC = () => {
   const dispatch = useDispatch();
   const drawnDigits = useSelector(
      (store: ApplicationState) => store.game.drawnDigits
   );
   const howMuchDigitsToDraw = useSelector(
      (store: ApplicationState) => store.game.howMuchDigitsToDraw
   );
   const digitPlaceToDisplay = React.useRef<HTMLSpanElement>(null);

   if (drawnDigits.length > 0) {
      for (let i = 0; i < drawnDigits.length; i++) {
         setTimeout(() => {
            if (digitPlaceToDisplay.current) {
               digitPlaceToDisplay.current.textContent = String(drawnDigits[i]);
            }
         }, i * 1000);
      }
      setTimeout(() => {
         if (digitPlaceToDisplay.current) {
            digitPlaceToDisplay.current.textContent = '';
            dispatch(changeIsUserCanType(1));
         }
      }, drawnDigits.length * 1000);
   }

   return (
      <DigitDisplayWrapper>
         <StyledNumberOfDigits>
            {howMuchDigitsToDraw} Digits
         </StyledNumberOfDigits>
         <StyledDigitContainer>
            <span ref={digitPlaceToDisplay}></span>
         </StyledDigitContainer>
      </DigitDisplayWrapper>
   );
};

export default DigitDisplay;
