import * as React from 'react';

import { HealthBar, UserBar } from '../index';
import { StyledBarContainer } from './BarComponent.css';

const BarComponent: React.FC = () => {
   return (
      <StyledBarContainer>
         <HealthBar />
         <UserBar />
      </StyledBarContainer>
   );
};

export default BarComponent;
