import { Formik } from "formik";
import * as yup from "yup";
import { Button, InputWrapper, Label, StyledField, StyledForm } from "./styles";

type FormData = {
   name: string;
   email: string;
   game: string;
   login: string;
   password: string;
};

// prettier-ignore
const FormSchema = yup.object().shape({
   name: yup.string().required("É necessário que você informe seu nome completo."),
   email: yup.string().required("É necessário que você informe seu e-mail.").email("E-mail inválido"),
   game: yup.string().required("É necessário que você informe um jogo para continuar."),
   login: yup.string().required("É necessário que você informe um login para continuar."),
   password: yup.string().required("É necessário que você informe uma senha para continuar."),
})

export function HeroForm() {
   const initialValues: FormData = {
      name: "",
      email: "",
      game: "",
      login: "",
      password: "",
   };

   return (
      <Formik
         initialValues={initialValues}
         validationSchema={FormSchema}
         onSubmit={values => {
            console.log(values);
         }}
      >
         {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
         }) => (
            <StyledForm>
               <InputWrapper>
                  <Label htmlFor="fullname">Nome completo</Label>
                  <StyledField
                     type="text"
                     name="fullname"
                     placeholder="Fulano de Tal"
                  />
               </InputWrapper>

               <InputWrapper>
                  <Label htmlFor="e-mail">E-mail</Label>
                  <StyledField
                     type="text"
                     name="e-mail"
                     placeholder="champions@example.com"
                  />
               </InputWrapper>

               <InputWrapper>
                  <Label htmlFor="game">Cenário</Label>
                  <StyledField $as="select" as="select" name="game">
                     <option value="lol">League of Legends</option>
                     <option value="valorant">Valorant</option>
                     <option value="wow">World of Warcraft</option>
                     <option value="rocketleague">Rocket League</option>
                  </StyledField>
               </InputWrapper>

               <InputWrapper>
                  <Label htmlFor="login">Login</Label>
                  <StyledField
                     type="text"
                     name="login"
                     placeholder="exemplo123"
                  />
               </InputWrapper>

               <InputWrapper>
                  <Label htmlFor="password">Senha</Label>
                  <StyledField
                     type="text"
                     name="password"
                     placeholder="digite sua senha"
                  />
               </InputWrapper>

               <Button type="submit" disabled={isSubmitting}>
                  Concluir
               </Button>
            </StyledForm>
         )}
      </Formik>
   );
}
