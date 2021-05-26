import * as React from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import {
   GameWrapper,
   HealthBar,
   Scoreboard,
   DigitDisplay,
   UserKeyboard,
   FinalScoreModal,
   LoginPage,
} from './components';
import { theme } from './theme/theme';
import { GlobalStyles } from './theme/GlobalStyles';
import { useSelector } from 'react-redux';
import { ApplicationState } from './store/store';

const App: React.FC = () => {
   const isGameOver = useSelector(
      (store: ApplicationState) => store.game.isGameOver
   );
   const isUserLogged = useSelector(
      (store: ApplicationState) => store.user.isUserLogged
   );
   const history = useHistory();
   React.useEffect(() => {
      if (isGameOver) {
         history.push('/final-score');
      }
      if (!isUserLogged) {
         history.push('/login');
      }
   }, [isGameOver]);
   return (
      <ThemeProvider theme={theme}>
         <GlobalStyles />
         <Switch>
            <Route path='/login'>
               <LoginPage />
            </Route>
            <Route path='/'>
               <GameWrapper>
                  <HealthBar />
                  <DigitDisplay />
                  <UserKeyboard />
                  <Scoreboard />
                  <Route path='/final-score'>
                     <FinalScoreModal />
                  </Route>
               </GameWrapper>
            </Route>
         </Switch>
      </ThemeProvider>
   );
};

export default App;
