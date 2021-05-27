import styled from 'styled-components';

export const StyledBarContainer = styled.nav`
   grid-column-start: 1;
   grid-column-end: 2;
   grid-row-start: 1;
   grid-row-end: 2;
   display: flex;
   padding: 0 3%;
   > button {
      height: 100%;
      width: 10%;
      color: white;
   }
   //MOBILE
   @media (max-width: 1000px) {
      grid-column-end: 3;
   }
`;
