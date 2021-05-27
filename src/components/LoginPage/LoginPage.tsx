import * as React from 'react';
import { useDispatch } from 'react-redux';
import { GoogleLogin } from 'react-google-login';

import { userLogged } from '../../actions/actions';
import { loginUser } from '../../fetch/userFetch';

import {
   StyledLoginPageWrapper,
   StyledContainerLogin,
   StyledLeftSite,
   StyledRightSite,
   StyledTitleWrapper,
   StyledDescriptionWrapper,
} from './LoginPage.css';

const LoginPage: React.FC = () => {
   const dispatch = useDispatch();

   const onSuccess = async (res: object) => {
      await loginUser({ data: res }).then(res => {
         if (res.googleId) {
            dispatch(userLogged(res));
         }
      });
   };
   const onFailure = () => {
      alert('Something went wrong!');
   };

   return (
      <StyledLoginPageWrapper>
         <StyledContainerLogin>
            <StyledLeftSite>
               <StyledTitleWrapper>
                  <h1>Welcome to Memory Test</h1>
               </StyledTitleWrapper>
               <StyledDescriptionWrapper>
                  <p>
                     A sequence of numbers appears on the screen, one at a time.
                     After click to start button, users click the numbers in the
                     same order. The number of digits increases with correct
                     answers.
                  </p>
               </StyledDescriptionWrapper>
            </StyledLeftSite>
            <StyledRightSite>
               <h1>Sign in</h1>
               <GoogleLogin
                  clientId={`${process.env.REACT_APP_GOOGLE_CLIENT_KEY}.apps.googleusercontent.com`}
                  buttonText='Login with Google'
                  onSuccess={onSuccess}
                  onFailure={onFailure}
                  cookiePolicy={'single_host_origin'}
                  isSignedIn={true}
               />
            </StyledRightSite>
         </StyledContainerLogin>
      </StyledLoginPageWrapper>
   );
};

export default LoginPage;
