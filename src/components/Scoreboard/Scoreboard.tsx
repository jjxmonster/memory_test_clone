import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ApplicationState } from '../../store/store';

import { userStartedGame } from '../../actions/actions';

import {
   StyledScoreboardWrapper,
   StyledCircleWrapper,
   StyledStartButton,
} from './Scoreboard.css';

const Scoreboard: React.FC = () => {
   const userLevel = useSelector(
      (store: ApplicationState) => store.user.userLevel
   );
   const userScore = useSelector(
      (store: ApplicationState) => store.user.userScore
   );
   const isStartButtonActive = useSelector(
      (store: ApplicationState) => store.user.isUserCanType
   );
   const dispatch = useDispatch();

   const handleStartGame = (): void => {
      dispatch(userStartedGame());
   };

   return (
      <StyledScoreboardWrapper>
         <StyledCircleWrapper>
            <h3>LEVEL</h3>
            <span>{userLevel}</span>
         </StyledCircleWrapper>
         <StyledCircleWrapper>
            <h3>SCORE</h3>
            <span>{userScore}</span>
         </StyledCircleWrapper>
         <StyledStartButton
            disabled={isStartButtonActive}
            onClick={handleStartGame}
         >
            PLAY LEVEL
         </StyledStartButton>
      </StyledScoreboardWrapper>
   );
};

export default Scoreboard;
