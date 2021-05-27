import * as React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Switch, Route, useHistory } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import {
   GameWrapper,
   BarComponent,
   Scoreboard,
   DigitDisplay,
   UserKeyboard,
   FinalScoreModal,
   LoginPage,
   ScoresHistory,
} from './components';
import { theme } from './theme/theme';
import { GlobalStyles } from './theme/GlobalStyles';
import { useSelector } from 'react-redux';
import { ApplicationState } from './store/store';

const client = new QueryClient({
   defaultOptions: {
      queries: {
         suspense: true,
         refetchOnWindowFocus: false,
      },
   },
});

const App: React.FC = () => {
   const isGameOver = useSelector(
      (store: ApplicationState) => store.game.isGameOver
   );
   const isUserLogged = useSelector(
      (store: ApplicationState) => store.userLogin.isUserLogged
   );
   const history = useHistory();
   React.useEffect(() => {
      if (isUserLogged) {
         history.push('/');
         if (isGameOver) {
            history.push('/final-score');
         }
      } else history.push('/login');
   }, [isGameOver, isUserLogged, history]);
   return (
      <ThemeProvider theme={theme}>
         <GlobalStyles />
         <QueryClientProvider client={client}>
            <Switch>
               <Route path='/login'>
                  <LoginPage />
               </Route>
               <Route path='/'>
                  <GameWrapper>
                     <BarComponent />
                     <DigitDisplay />
                     <UserKeyboard />
                     <Scoreboard />
                     <Route path='/final-score'>
                        <FinalScoreModal />
                     </Route>
                     <Route path='/scores-history'>
                        <React.Suspense fallback='LOADING...'>
                           <ScoresHistory />
                        </React.Suspense>
                     </Route>
                  </GameWrapper>
               </Route>
            </Switch>
         </QueryClientProvider>
      </ThemeProvider>
   );
};

export default App;
