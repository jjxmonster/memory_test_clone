import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ApplicationState } from '../../store/store';

import { GoogleLogout } from 'react-google-login';
import { StyledUserBarWrapper } from './UserBar.css';
import { userLogout } from '../../actions/actions';

const UserBar: React.FC = () => {
   const dispatch = useDispatch();
   const user = useSelector((store: ApplicationState) => store.userLogin.user);

   const handleLogout = () => {
      console.log('logout');
      dispatch(userLogout());
   };
   return (
      <StyledUserBarWrapper>
         <h2>Hi {user?.name} </h2>
         <GoogleLogout
            clientId={`${process.env.REACT_APP_GOOGLE_CLIENT_KEY}.apps.googleusercontent.com`}
            buttonText='Logout'
            onLogoutSuccess={handleLogout}
         />
      </StyledUserBarWrapper>
   );
};

export default UserBar;
