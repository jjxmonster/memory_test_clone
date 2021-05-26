import * as React from 'react';
import { GoogleLogin } from 'react-google-login';

import {
   StyledLoginPageWrapper,
   StyledContainerLogin,
   StyledLeftSite,
   StyledRightSite,
   StyledTitleWrapper,
   StyledDescriptionWrapper,
} from './LoginPage.css';

const LoginPage: React.SFC = () => {
   const onSuccess = (res: object) => {
      console.log('zalogowano', res);
   };
   const onFailure = () => {
      console.log('błąd');
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
                  clientId={
                     '85067498020-f5lggb9qogo3sbb70dnmmkavhjsvd8va.apps.googleusercontent.com'
                  }
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
