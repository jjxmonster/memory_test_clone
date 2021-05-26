import styled from 'styled-components';

export const StyledGameWrapper = styled.div`
   width: 100vw;
   height: 100vh;
   background: ${({ theme }) => theme.colors.grey.normal};
   display: grid;
   grid-template-columns: 80% 20%;
   grid-template-rows: 5% 55% 20% 20%;
   //MOBILE
   @media (max-width: 1000px) {
      grid-template-rows: 5% 45% 30% 20%;
   }
`;
