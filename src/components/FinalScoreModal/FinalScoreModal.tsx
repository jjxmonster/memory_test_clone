import * as React from 'react';
import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { ApplicationState } from '../../store/store';

import { resetUserStats } from '../../actions/actions';

import {
   StyledModalWrapper,
   StyledModalTitle,
   StyledUserStatsContainer,
   StyledStatsList,
   StyledTryAgainButton,
} from './FinalScoreModal.css';

const FinalScoreModal: React.FC = () => {
   const modalRoot = document.getElementById('modal') as HTMLElement;
   const userScore = useSelector(
      (store: ApplicationState) => store.user.userScore
   );
   const userLevel = useSelector(
      (store: ApplicationState) => store.user.userLevel
   );
   const history = useHistory();
   const dispatch = useDispatch();

   const handleTryAgain = (): void => {
      history.goBack();
      dispatch(resetUserStats());
   };

   return ReactDOM.createPortal(
      <StyledModalWrapper>
         <StyledModalTitle>GAME OVER</StyledModalTitle>
         <StyledUserStatsContainer>
            <StyledStatsList>
               <li>
                  <p>LEVEL:</p>
                  <span>{userLevel}</span>
               </li>
               <li>
                  <p>SCORE:</p>
                  <span>{userScore}</span>
               </li>
            </StyledStatsList>
            <StyledTryAgainButton onClick={handleTryAgain}>
               TRY AGAIN
            </StyledTryAgainButton>
         </StyledUserStatsContainer>
      </StyledModalWrapper>,
      modalRoot
   );
};

export default FinalScoreModal;
