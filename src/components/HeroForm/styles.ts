import { Field, Form } from "formik";
import styled from "styled-components";

type FieldProps = {
   $as?: string;
};

export const StyledForm = styled(Form)`
   margin-top: 16px;
   background: #1c1717;
   border-radius: 16px;
   width: 512px;

   padding: 24px;
   display: flex;
   flex-direction: column;
   gap: 16px;

   @media (max-width: 768px) {
      width: 100%;
      padding: 16px;
      gap: 20px;
   }
`;

export const InputWrapper = styled.div`
   display: flex;
   flex-direction: column;
   gap: 8px;
`;

export const Label = styled.label`
   font-family: "Montserrat";
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 100%;
   /* identical to box height, or 16px */

   letter-spacing: 0.5px;

   color: #ffffff;
`;

export const StyledField = styled(Field)<FieldProps>`
   max-width: 100%;
   appearance: none;
   background: #221c1c;
   border-radius: 8px;
   border: none;
   padding-inline: 16px;
   height: 40px;
   outline: none;

   font-family: "Montserrat";
   font-style: normal;
   font-weight: 400;
   font-size: 14px;
   line-height: 100%;
   /* identical to box height, or 14px */

   letter-spacing: 0.25px;

   color: #fff;

   ${({ $as }) => $as === "select" && "cursor: pointer;"}

   &:focus {
      outline: 2px solid #332d2d;
   }

   @media (max-width: 768px) {
      font-size: 12px;
      height: 36px;
   }
`;

export const Button = styled.button`
   align-self: center;

   background: #f00;
   border-radius: 8px;
   width: 160px;
   height: 40px;

   border: none;
   outline: none;
   cursor: pointer;

   font-family: "Montserrat";
   font-style: normal;
   font-weight: 500;
   font-size: 14px;
   line-height: 100%;
   /* identical to box height, or 14px */

   letter-spacing: 1.25px;
   text-transform: uppercase;

   color: #ffffff;

   &:hover {
      background: #f44;
   }

   &:active {
      background: #f66;
   }

   @media (max-width: 768px) {
      width: 100%;
      height: 36px;
      font-size: 12px;
   }
`;

export const Error = styled.span`
   font-family: "Montserrat";
   font-style: normal;
   font-weight: 400;
   font-size: 12px;
   line-height: 100%;
   /* identical to box height, or 12px */

   letter-spacing: 0.4px;

   color: #f00;
`;

export const Title = styled.h2`
   font-family: "Montserrat";
   font-style: normal;
   font-weight: 500;
   font-size: 20px;
   line-height: 100%;
   /* identical to box height, or 20px */

   letter-spacing: 0.15px;

   color: #ffffff;

   @media (max-width: 768px) {
      font-size: 16px;
   }
`;
