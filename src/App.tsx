import * as React from 'react';

import { ThemeProvider } from 'styled-components';
import {
   GameWrapper,
   HealthBar,
   Scoreboard,
   DigitDisplay,
   UserKeyboard,
} from './components';

import { theme } from './theme/theme';
import { GlobalStyles } from './theme/GlobalStyles';

const App: React.FC = () => {
   return (
      <ThemeProvider theme={theme}>
         <GlobalStyles />
         <GameWrapper>
            <HealthBar />
            <DigitDisplay />
            <UserKeyboard />
            <Scoreboard />
         </GameWrapper>
      </ThemeProvider>
   );
};

export default App;
