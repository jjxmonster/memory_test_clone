import * as React from 'react';

import { ThemeProvider } from 'styled-components';
import { GameWrapper } from './components';

import { theme } from './theme/theme';
import { GlobalStyles } from './theme/GlobalStyles';

const App: React.FC = () => {
   return (
      <ThemeProvider theme={theme}>
         <GlobalStyles />
         <GameWrapper>
            <div>elo</div>
         </GameWrapper>
      </ThemeProvider>
   );
};

export default App;
