import * as React from 'react';
import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { ApplicationState } from '../../store/store';

import { addGame } from '../../fetch/userFetch';
import { resetUserStats } from '../../actions/actions';

import {
   StyledModalWrapper,
   StyledModalTitle,
   StyledUserStatsContainer,
   StyledStatsList,
   StyledTryAgainButton,
} from './FinalScoreModal.css';

const FinalScoreModal: React.FC = () => {
   const userScore = useSelector(
      (store: ApplicationState) => store.user.userScore
   );
   const userLevel = useSelector(
      (store: ApplicationState) => store.user.userLevel
   );
   const userId = useSelector(
      (store: ApplicationState) => store.userLogin.user?.googleId
   );
   const history = useHistory();
   const dispatch = useDispatch();

   const handleTryAgain = (): void => {
      history.goBack();
      dispatch(resetUserStats());
   };

   const addScoreToDB = async () => {
      const gameObject = {
         level: userLevel,
         score: userScore,
         date: Date.now(),
      };

      await addGame(gameObject, userId);
   };

   React.useEffect(() => {
      addScoreToDB();
   }, [userScore, userLevel]);

   const modalContent = (
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
      </StyledModalWrapper>
   );
   const modalRoot = document.getElementById('modal') as HTMLElement;
   return ReactDOM.createPortal(modalContent, modalRoot);
};

export default FinalScoreModal;
