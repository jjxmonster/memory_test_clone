import styled from 'styled-components';

export const StyledKeyboardWrapper = styled.div`
   grid-column-start: 1;
   grid-column-end: 2;
   grid-row-start: 3;
   grid-row-end: 3;
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
   grid-gap: 20px;
   padding: 4% 30%;
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
   width: 100px;
   height: 100px;
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
`;
