import styled from 'styled-components';

export const StyledKeyboardWrapper = styled.div`
   grid-column-start: 1;
   grid-column-end: 2;
   grid-row-start: 3;
   grid-row-end: 4;
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(5vw, 1fr));
   grid-gap: 20px;
   padding: 4% 30%;
   //MOBILE
   @media (max-width: 1000px) {
      grid-gap: 10px;
      grid-column-end: 3;
      padding: 4% 5%;
      grid-template-columns: repeat(auto-fit, minmax(13vw, 1fr));
   }
`;

export const StyledKeyboardKeyContainer = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   cursor: pointer;
   transition: 0.2s ease;
`;

export const StyledKeyboardKey = styled.button`
   transition: 0.2s ease;
   color: white;
   background: ${({ theme }) => theme.colors.purple.normal};
   border-radius: 50%;
   width: 5vw;
   height: 5vw;
   font-size: 3.5vh;
   ${({ disabled, theme }) =>
      disabled
         ? `opacity:0.6;
            cursor:not-allowed;
         `
         : `opacity:1; 
         &:hover  {
      color: ${theme.colors.purple.normal};
      background: white;
   }`}
   //MOBILE
   @media (max-width: 1000px) {
      width: 8vh;
      height: 8vh;
   }
`;
