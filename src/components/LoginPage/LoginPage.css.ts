import styled from 'styled-components';

export const StyledLoginPageWrapper = styled.div`
   width: 100vw;
   height: 100vh;
   background: ${({ theme }) => theme.colors.grey.normal};
   display: flex;
   align-items: center;
   justify-content: center;
`;

export const StyledContainerLogin = styled.div`
   width: 55vw;
   height: 55vh;
   display: flex;
   border-radius: 30px;
   overflow: hidden;
`;

export const StyledLeftSite = styled.div`
   width: 50%;
   height: 100%;
   background: ${({ theme }) => theme.colors.purple.dark};
   display: flex;
   flex-direction: column;
   justify-content: center;
   padding: 15% 8%;
`;
export const StyledTitleWrapper = styled.div`
   flex: 1;
   display: flex;
   flex-direction: column;
   justify-content: center;
   > h1 {
      color: white;
      font-size: 3vh;
      font-weight: 800;
      position: relative;
      &::after {
         content: '';
         position: absolute;
         top: 120%;
         left: 0;
         margin: auto;
         width: 25%;
         border-bottom: 3px solid white;
      }
   }
`;
export const StyledDescriptionWrapper = styled.div`
   flex: 1;
   > p {
      font-size: 1.7vh;
      color: white;
   }
`;

export const StyledRightSite = styled.div`
   width: 50%;
   height: 100%;
   background: white;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   padding: 15%;
   > h1 {
      margin-bottom: 10%;
      position: relative;
      &::after {
         content: '';
         position: absolute;
         top: 110%;
         left: 0;
         right: 0;
         margin: auto;
         width: 30%;
         border-bottom: 3px solid ${({ theme }) => theme.colors.purple.dark};
      }
   }
`;
