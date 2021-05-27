import * as React from 'react';
import { useHistory } from 'react-router';

import { HealthBar, UserBar } from '../index';
import { StyledBarContainer } from './BarComponent.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const BarComponent: React.FC = () => {
   const history = useHistory();

   const handleOpenHistory = (): void => {
      history.push('scores-history');
   };
   return (
      <StyledBarContainer>
         <HealthBar />
         <button onClick={handleOpenHistory}>
            History <FontAwesomeIcon icon={faStar} />
         </button>
         <UserBar />
      </StyledBarContainer>
   );
};

export default BarComponent;
