import styled from 'styled-components';

export const StyledScoreboardWrapper = styled.section`
   background: ${({ theme }) => theme.colors.purple.normal};
   grid-column-start: 2;
   grid-column-end: 3;
   grid-row-start: 1;
   grid-row-end: 5;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;

   //MOBILE
   @media (max-width: 1000px) {
      grid-column-start: 1;
      grid-column-end: 3;
      grid-row-start: 4;
      grid-row-end: 5;
      flex-direction: row;
      justify-content: space-around;
   }
`;

export const StyledCircleWrapper = styled.div`
   width: 15vw;
   height: 15vw;
   background: ${({ theme }) => theme.colors.purple.dark};
   border-radius: 50%;
   margin-bottom: 15%;
   padding: 20% 0;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-around;
   font-size: 5vh;
   color: white;
   //MOBILE
   @media (max-width: 1000px) {
      width: 12vh;
      height: 12vh;
      font-size: 4vh;
      padding: 0 0;
      margin-bottom: 0;
      font-size: 2.5vh;
      justify-content: center;
   }
`;
export const StyledStartButton = styled.button`
   width: 15vw;
   height: 4vw;
   background: ${({ theme }) => theme.colors.green.normal};
   border-radius: 60px;
   color: white;
   font-size: 2vh;
   font-weight: 500;
   ${({ disabled }) =>
      disabled
         ? `
         opacity:0.5;
         cursor:not-allowed;
      `
         : `
         opacity:1;
      `}

   //MOBILE
      @media (max-width: 1000px) {
      height: 10vh;
      width: 10vh;
   }
`;
