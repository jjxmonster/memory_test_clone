import * as React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { StyledHealthBarWrapper } from './HealthBar.css';
import { useSelector } from 'react-redux';
import { ApplicationState } from '../../store/store';

const HealthBar: React.FC = () => {
   const userHealth = useSelector(
      (state: ApplicationState) => state.user.userHealth
   );
   const displayLifeLine: Array<JSX.Element> = Array(userHealth).fill(
      <FontAwesomeIcon icon={faHeart} className='icon-heart' />
   );
   return (
      <StyledHealthBarWrapper id='health-bar'>
         <h2>HEALTH</h2>
         {displayLifeLine}
      </StyledHealthBarWrapper>
   );
};

export default HealthBar;
