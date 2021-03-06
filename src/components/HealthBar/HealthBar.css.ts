import styled from 'styled-components';

export const StyledHealthBarWrapper = styled.div`
   height: 100%;
   width: 45%;
   display: flex;
   align-items: center;
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
