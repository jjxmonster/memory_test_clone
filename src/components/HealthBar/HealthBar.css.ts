import styled from 'styled-components';

export const StyledHealthBarWrapper = styled.nav`
   grid-column-start: 1;
   grid-column-end: 2;
   grid-row-start: 1;
   grid-row-end: 2;
   display: flex;
   align-items: center;
   padding-left: 5%;
   > h2 {
      color: white;
      font-size: 2vh;
      font-weight: 300;
      margin-right: 1%;
   }
   > .icon-heart {
      color: ${({ theme }) => theme.colors.pink.normal};
      font-size: 3vh;
      margin-right: 1%;
   }
`;
