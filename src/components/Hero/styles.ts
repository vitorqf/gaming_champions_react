import styled from "styled-components";

export const Wrapper = styled.div`
   max-width: 1200px;
   min-height: 100dvh;
   margin: 0 auto;
`;

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
