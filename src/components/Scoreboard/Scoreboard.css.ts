import styled from 'styled-components';

export const StyledScoreboardWrapper = styled.section`
   background: ${({ theme }) => theme.colors.purple.normal};
   grid-column-start: 2;
   grid-column-end: 3;
   grid-row-start: 1;
   grid-row-end: 4;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
`;

export const StyledCircleWrapper = styled.div`
   width: 300px;
   height: 300px;
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
`;
export const StyledStartButton = styled.button`
   width: 300px;
   height: 80px;
   background: ${({ theme }) => theme.colors.green.normal};
   border-radius: 60px;
   color: white;
   font-size: 2vh;
   font-weight: 500;
`;
