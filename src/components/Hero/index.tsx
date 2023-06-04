import { Calendar, MapPinLine } from "@phosphor-icons/react";
import { HeroForm } from "../HeroForm";
import {
   Container,
   Description,
   Disclaimer,
   EventName,
   LocalAndDate,
   LocalAndDateItem,
   Welcome,
   Welcomer,
} from "./styles";

export function Hero() {
   return (
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

         <LocalAndDate>
            <LocalAndDateItem>
               <Calendar size={24} color="#f00" />
               <span>03/03/2023</span>
            </LocalAndDateItem>

            <LocalAndDateItem>
               <MapPinLine size={24} color="#f00" />
               <span>Pau dos Ferros, RN</span>
            </LocalAndDateItem>
         </LocalAndDate>

         <Disclaimer>
            * Após concluir o cadastro, você será colocado na fase de seleção.
         </Disclaimer>

         <HeroForm />
      </Container>
   );
}
