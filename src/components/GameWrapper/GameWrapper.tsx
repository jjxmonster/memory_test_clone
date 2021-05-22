import * as React from 'react';

import { StyledGameWrapper } from './GameWrapper.css';

interface GameWrapperProps {
   children: React.ReactNode;
}
const GameWrapper: React.FC<GameWrapperProps> = ({ children }) => {
   return <StyledGameWrapper>{children}</StyledGameWrapper>;
};

export default GameWrapper;
