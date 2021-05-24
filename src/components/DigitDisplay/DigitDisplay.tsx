import * as React from 'react';
import { useSelector } from 'react-redux';
import { ApplicationState } from '../../store/store';

import {
   DigitDisplayWrapper,
   StyledNumberOfDigits,
   StyledDigitContainer,
} from './DigitDisplay.css';

// export interface DigitDisplayProps {

// }

const DigitDisplay: React.FC = () => {
   const drawnDigits = useSelector(
      (store: ApplicationState) => store.game.drawnDigits
   );
   const howMuchDigitsToDraw = useSelector(
      (store: ApplicationState) => store.game.howMuchDigitsToDraw
   );
   React.useEffect(() => {
      console.log('render');
   }, [drawnDigits]);
   return (
      <DigitDisplayWrapper>
         <StyledNumberOfDigits>
            {howMuchDigitsToDraw} Digits
         </StyledNumberOfDigits>
         <StyledDigitContainer>
            <span></span>
         </StyledDigitContainer>
      </DigitDisplayWrapper>
   );
};

export default DigitDisplay;
