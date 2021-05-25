import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ApplicationState } from '../../store/store';

import { changeIsUserCanType } from '../../actions/actions';

import {
   DigitDisplayWrapper,
   StyledNumberOfDigits,
   StyledDigitContainer,
} from './DigitDisplay.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

const DigitDisplay: React.FC = () => {
   const dispatch = useDispatch();
   const drawnDigits = useSelector(
      (store: ApplicationState) => store.game.drawnDigits
   );
   const howMuchDigitsToDraw = useSelector(
      (store: ApplicationState) => store.game.howMuchDigitsToDraw
   );
   const isUserRespondedCorrect = useSelector(
      (store: ApplicationState) => store.game.isUserRespondedCorrect
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

   const DisplaySwitch = () => {
      switch (isUserRespondedCorrect) {
         case true:
            return (
               <FontAwesomeIcon
                  icon={faCheck}
                  className='display-icon-correct'
               />
            );
         case false:
            return (
               <FontAwesomeIcon icon={faTimes} className='display-icon-wrong' />
            );
         default:
            return <span ref={digitPlaceToDisplay}></span>;
      }
   };

   return (
      <DigitDisplayWrapper>
         <StyledNumberOfDigits>
            {howMuchDigitsToDraw} Digits
         </StyledNumberOfDigits>
         <StyledDigitContainer>
            <DisplaySwitch />
         </StyledDigitContainer>
      </DigitDisplayWrapper>
   );
};

export default DigitDisplay;
