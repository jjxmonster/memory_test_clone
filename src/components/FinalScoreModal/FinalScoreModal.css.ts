import styled from 'styled-components';

export const StyledModalWrapper = styled.div`
   position: fixed;
   top: 0;
   margin: auto;
   background: rgba(0, 0, 0, 0.7);
   width: 100vw;
   height: 100vh;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
`;

export const StyledModalTitle = styled.h1`
   color: white;
   font-size: 5vh;
`;
export const StyledUserStatsContainer = styled.div`
   width: 30vw;
   height: 30vh;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
`;

export const StyledStatsList = styled.ul`
   width: 100%;
   height: 85%;
   display: flex;
   flex-direction: column;
   padding: 5%;
   > li {
      flex: 1;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: white;
      font-size: 3vh;
      > span {
         font-weight: 600;
      }
   }
`;

export const StyledTryAgainButton = styled.button`
   width: 150px;
   height: 15%;
   background: ${({ theme }) => theme.colors.green.normal};
   border-radius: 5px;
   color: white;
   font-size: 1.5vh;
   font-weight: 500;
`;
