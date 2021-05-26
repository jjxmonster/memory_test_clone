import styled from 'styled-components';

export const DigitDisplayWrapper = styled.section`
   grid-column-start: 1;
   grid-column-end: 2;
   grid-row-start: 2;
   grid-row-end: 3;
   display: flex;
   flex-direction: column;
   padding: 5% 35% 0 35%;
   //MOBILE
   @media (max-width: 1000px) {
      grid-column-start: 1;
      grid-column-end: 3;
      grid-row-start: 2;
      grid-row-end: 3;
      padding: 5% 15% 0 15%;
   }
`;

export const StyledNumberOfDigits = styled.h2`
   flex: 2;
   font-size: 4vh;
   font-weight: 300;
   color: white;
   text-align: center;
`;
export const StyledDigitContainer = styled.div`
   flex: 8;
   background: ${({ theme }) => theme.colors.purple.dark};
   border-radius: 30px;
   display: flex;
   align-items: center;
   justify-content: center;
   > span {
      font-size: 13vw;
      color: ${({ theme }) => theme.colors.green.normal};
      //MOBILE
      @media (max-width: 1000px) {
         font-size: 50vw;
      }
   }
   > .display-icon-correct {
      font-size: 15em;
      color: ${({ theme }) => theme.colors.green.normal};
      @media (max-width: 1000px) {
         font-size: 50vw;
      }
   }
   > .display-icon-wrong {
      font-size: 15em;
      color: red;
      @media (max-width: 1000px) {
         font-size: 50vw;
      }
   }
`;
