import styled from 'styled-components';

export const DigitDisplayWrapper = styled.section`
   grid-column-start: 1;
   grid-column-end: 2;
   grid-row-start: 2;
   grid-row-end: 3;
   display: flex;
   flex-direction: column;
   padding: 5% 35% 0 35%;
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
      font-size: 15em;
      color: ${({ theme }) => theme.colors.green.normal};
   }
`;
