import * as React from 'react';
import { useQuery } from 'react-query';
import ReactDOM from 'react-dom';
import { useSelector } from 'react-redux';
import CanvasJSReact from './assets/canvasjs.react';

import { ApplicationState } from '../../store/store';

import { StyledModalWrapper } from '../FinalScoreModal/FinalScoreModal.css';

import { getGames } from '../../fetch/userFetch';
import { useHistory } from 'react-router';

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

type GameObject = {
   level: number;
   score: number;
   date: number | string;
};
interface SyntheticEvent<T> {
   currentTarget: EventTarget & T;
}

const ScoresHistory: React.FC = () => {
   const history = useHistory();
   const userId = useSelector(
      (store: ApplicationState) => store.userLogin.user?.googleId
   );
   const { data: games } = useQuery('games', () => getGames(userId));

   const closeModal = () => {
      history.goBack();
   };
   const options = {
      animationEnabled: true,
      exportEnabled: true,
      theme: 'dark2',
      title: {
         text: 'Your Last Games Scores',
      },
      axisY: {
         includeZero: true,
      },
      axisX: {
         valueFormatString: 'DD MMM',
         crosshair: {
            enabled: true,
            snapToDataPoint: true,
         },
      },
      data: [
         {
            type: 'column',
            indexLabelFontColor: '#5A5757',
            indexLabelPlacement: 'outside',
            dataPoints:
               games !== null
                  ? games.map((game: GameObject) => {
                       return {
                          x: new Date(game.date),
                          y: game.score,
                       };
                    })
                  : null,
         },
      ],
   };

   const scoresModal = (
      <StyledModalWrapper onClick={closeModal}>
         <CanvasJSChart
            options={options}
            // onClick={(e: SyntheticEvent<React.ClickEvent<HTMLDivElement>>) =>
            //    e.stopPropagation()
            // }
         />
      </StyledModalWrapper>
   );
   const modalRoot = document.getElementById('modal') as HTMLElement;
   return ReactDOM.createPortal(scoresModal, modalRoot);
};

export default ScoresHistory;
