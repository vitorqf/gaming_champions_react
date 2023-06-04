import styled from "styled-components";

export const Container = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
`;

export const Box = styled.div`
   background: #1c1717;
   border-radius: 16px;
   padding: 32px;
   width: 400px;

   display: flex;
   flex-direction: column;
   gap: 16px;

   text-align: center;

   @media (max-width: 768px) {
      width: 100%;
   }
`;

export const Header = styled.section`
   display: flex;
   flex-direction: column;
   gap: 8px;
`;

export const Title = styled.h1`
   font-family: "Montserrat";
   font-style: normal;
   font-weight: 600;
   font-size: 32px;
   line-height: 60px;
   /* identical to box height, or 188% */

   letter-spacing: 0.5px;

   @media (max-width: 768px) {
      font-size: 24px;
      line-height: 110%;
   }
`;

export const Subtitle = styled.p`
   font-family: "Montserrat";
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 100%;
   /* or 16px */

   letter-spacing: 0.15px;

   color: #ffffff;

   @media (max-width: 768px) {
      font-size: 14px;
   }
`;

export const Body = styled.section`
   display: flex;
   flex-direction: column;
   gap: 16px;
`;

export const Item = styled.div`
   display: flex;
   flex-direction: column;
   gap: 8px;
   align-items: flex-start;
`;

export const Label = styled.label`
   font-family: "Montserrat";
   font-style: normal;
   font-weight: 600;
   font-size: 16px;
   line-height: 100%;
   /* identical to box height, or 16px */

   letter-spacing: 0.5px;

   color: #ffffff;

   margin-right: 8px;

   @media (max-width: 768px) {
      font-size: 14px;
   }
`;

export const Value = styled.p<{ $capitalize?: boolean }>`
   font-family: "Montserrat";
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 100%;
   /* identical to box height, or 16px */

   letter-spacing: 0.5px;

   color: #ffffff;

   margin-right: 8px;

   text-transform: ${props => (props.$capitalize ? "capitalize" : "none")};

   @media (max-width: 768px) {
      font-size: 14px;
   }
`;

export const Redirect = styled.a`
   font-family: "Montserrat";
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 100%;
   /* identical to box height, or 16px */

   letter-spacing: 0.5px;

   color: #f00;

   text-decoration: none;

   &:hover {
      text-decoration: underline;
   }

   &:active {
      color: #f44;
   }

   cursor: pointer;

   @media (max-width: 768px) {
      font-size: 14px;
   }
`;
