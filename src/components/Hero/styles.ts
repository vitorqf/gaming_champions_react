import styled from "styled-components";

export const Container = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
`;

export const Welcomer = styled.section`
   display: flex;
   flex-direction: column;
   gap: 24px;
`;

export const Welcome = styled.h1`
   font-family: "Montserrat";
   font-style: normal;
   font-weight: 600;
   font-size: 32px;
   line-height: 60px;
   /* identical to box height, or 188% */
`;

export const EventName = styled.h2`
   display: flex;
   flex-direction: column;

   font-family: "Mulish";
   font-style: normal;
   font-weight: 200;
   font-size: 48px;
   line-height: 60px;
   /* or 125% */

   letter-spacing: -2px;

   > strong {
      font-weight: 700;
      font-size: 72px;
      letter-spacing: 4px;
      color: #f00;
   }
`;

export const Description = styled.p`
   font-family: "Montserrat";
   font-style: normal;
   font-weight: 400;
   font-size: 20px;
   line-height: 120%;
   letter-spacing: -1px;
   /* or 24px */
   max-width: 512px;

   > strong {
      font-weight: 500;
      color: #f00;
   }
`;

export const LocalAndDate = styled.section`
   display: flex;
   align-items: center;
   gap: 16px;
   margin-top: 16px;
   margin-bottom: 16px;
`;

export const LocalAndDateItem = styled.span`
   display: flex;
   align-items: center;
   gap: 4px;

   font-family: "Montserrat";
   font-style: normal;
   font-weight: 500;
   font-size: 16px;
   line-height: 100%;
   /* identical to box height, or 16px */

   letter-spacing: 0.15px;
`;

export const Disclaimer = styled.p`
   font-family: "Montserrat";
   font-style: normal;
   font-weight: 400;
   font-size: 14px;
   line-height: 100%;
   /* identical to box height, or 14px */

   color: #808080;
`;
