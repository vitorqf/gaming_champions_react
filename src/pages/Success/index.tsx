import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { FormStruct } from "../../components/HeroForm";
import {
   Body,
   Box,
   Container,
   Header,
   Item,
   Label,
   Redirect,
   Subtitle,
   Title,
   Value,
} from "./styles";

const Wrapper = styled.div`
   max-width: 1200px;
   min-height: 100dvh;
   margin: 0 auto;

   display: flex;

   @media (max-width: 1024px) {
      width: 100%;
      padding: 16px;
   }
`;

export default function Success() {
   const location = useLocation();
   const userInfo: FormStruct = location.state.userInfo;

   return (
      <Wrapper>
         <Container>
            <Box>
               <Header>
                  <Title>GG!</Title>
                  <Subtitle>Seu cadastro foi realizado com sucesso.</Subtitle>
                  <Subtitle>
                     Agora você está na fase de seleção para o evento.
                  </Subtitle>
               </Header>

               <Body>
                  <Title>Seus dados</Title>

                  <Item>
                     <Label>Nome completo:</Label>
                     <Value $capitalize={true}>{userInfo.fullname}</Value>
                  </Item>

                  <Item>
                     <Label>E-mail:</Label>
                     <Value>{userInfo.email}</Value>
                  </Item>

                  <Item>
                     <Label>Cenário:</Label>
                     <Value>{userInfo.game}</Value>
                  </Item>
               </Body>

               <Redirect href="/">Voltar para a página inicial</Redirect>
            </Box>
         </Container>
      </Wrapper>
   );
}
