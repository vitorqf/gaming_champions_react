import styled from "styled-components";
import { Hero } from "../components/Hero";

const Wrapper = styled.div`
   max-width: 1200px;
   min-height: 100dvh;
   margin: 0 auto;

   display: flex;
`;

export default function Home() {
   return (
      <Wrapper>
         <Hero />
      </Wrapper>
   );
}
