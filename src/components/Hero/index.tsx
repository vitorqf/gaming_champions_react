import {
   Container,
   Description,
   EventName,
   Welcome,
   Welcomer,
   Wrapper,
} from "./styles";

export function Hero() {
   return (
      <Wrapper>
         <Container>
            <Welcomer>
               <Welcome>Boas vindas ao</Welcome>
               <EventName>
                  GAMING
                  <strong>CHAMPIONS</strong>
               </EventName>
               <Description>
                  Faça seu cadastro e venha jogar conosco na{" "}
                  <strong>maior disputa</strong> de jogos eletrônicos da{" "}
                  <strong>América Latina</strong>.
               </Description>
            </Welcomer>
         </Container>
      </Wrapper>
   );
}
