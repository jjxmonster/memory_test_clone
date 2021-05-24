import * as React from 'react';
import { Store } from 'redux';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import configureStore from './store/store';

import {
   GameWrapper,
   HealthBar,
   Scoreboard,
   DigitDisplay,
   UserKeyboard,
} from './components';
import { theme } from './theme/theme';
import { GlobalStyles } from './theme/GlobalStyles';

const store = configureStore();

const App: React.FC = () => {
   return (
      <ThemeProvider theme={theme}>
         <GlobalStyles />
         <Provider store={store}>
            <GameWrapper>
               <HealthBar />
               <DigitDisplay />
               <UserKeyboard />
               <Scoreboard />
            </GameWrapper>
         </Provider>
      </ThemeProvider>
   );
};

export default App;
