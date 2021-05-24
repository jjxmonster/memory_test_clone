import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ApplicationState } from '../../store/store';

import { changeIsUserCanType, userStartedGame } from '../../actions/actions';

import {
   StyledScoreboardWrapper,
   StyledCircleWrapper,
   StyledStartButton,
} from './Scoreboard.css';

// export interface ScoreboardProps {

// }

const Scoreboard: React.FC = () => {
   const userLevel = useSelector(
      (store: ApplicationState) => store.user.userLevel
   );
   const userScore = useSelector(
      (store: ApplicationState) => store.user.userScore
   );
   const dispatch = useDispatch();

   const handleStartGame = (): void => {
      dispatch(userStartedGame());
      // dispatch(changeIsUserCanType(1));
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
         <StyledStartButton onClick={handleStartGame}>PLAY</StyledStartButton>
      </StyledScoreboardWrapper>
   );
};

export default Scoreboard;
