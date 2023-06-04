import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import {
   Button,
   Error,
   InputWrapper,
   Label,
   StyledField,
   StyledForm,
} from "./styles";

export type FormStruct = {
   fullname: string;
   email: string;
   game: string;
   login: string;
   password: string;
};

// prettier-ignore
const FormSchema = yup.object().shape({
   fullname: yup.string().required("É necessário que você informe seu nome completo."),
   email: yup.string().required("É necessário que você informe seu e-mail.").email("Insira um e-mail válido, neste formato: champions@example.com"),
   game: yup.string().required("É necessário que você informe um jogo para continuar."),
   login: yup.string().required("É necessário que você informe um login para continuar."),
   password: yup.string().required("É necessário que você informe uma senha para continuar."),
})

export function HeroForm() {
   const navigate = useNavigate();

   const initialValues: FormStruct = {
      fullname: "",
      email: "",
      game: "",
      login: "",
      password: "",
   };

   const handleFormSubmit = (values: FormStruct) => {
      navigate("/success", { state: { userInfo: values } });
   };

   return (
      <Formik
         initialValues={initialValues}
         validationSchema={FormSchema}
         onSubmit={handleFormSubmit}
      >
         {({ values, errors, touched, isSubmitting, handleChange }) => (
            <StyledForm>
               <InputWrapper>
                  <Label htmlFor="fullname">Nome completo</Label>
                  <StyledField
                     type="text"
                     name="fullname"
                     id="fullname"
                     placeholder="Fulano de Tal"
                  />
                  {errors.fullname && touched.fullname ? (
                     <Error>{errors.fullname}</Error>
                  ) : undefined}
               </InputWrapper>

               <InputWrapper>
                  <Label htmlFor="email">E-mail</Label>
                  <StyledField
                     type="text"
                     name="email"
                     id="email"
                     placeholder="champions@example.com"
                  />
                  {errors.email && touched.email ? (
                     <Error>{errors.email}</Error>
                  ) : undefined}
               </InputWrapper>

               <InputWrapper>
                  <Label htmlFor="game">Cenário</Label>
                  <StyledField
                     $as="select"
                     as="select"
                     name="game"
                     id="game"
                     onChange={handleChange}
                     value={values.game}
                  >
                     <option value="" disabled>
                        Selecione um jogo
                     </option>
                     <option value="League of Legends">
                        League of Legends
                     </option>
                     <option value="Valorant">Valorant</option>
                     <option value="World of Warcraft">
                        World of Warcraft
                     </option>
                     <option value="Rocket League">Rocket League</option>
                  </StyledField>
                  {errors.game && touched.game ? (
                     <Error>{errors.game}</Error>
                  ) : undefined}
               </InputWrapper>

               <InputWrapper>
                  <Label htmlFor="login">Login</Label>
                  <StyledField
                     type="text"
                     name="login"
                     id="login"
                     placeholder="exemplo123"
                  />
                  {errors.login && touched.login ? (
                     <Error>{errors.login}</Error>
                  ) : undefined}
               </InputWrapper>

               <InputWrapper>
                  <Label htmlFor="password">Senha</Label>
                  <StyledField
                     type="password"
                     name="password"
                     id="password"
                     placeholder="digite sua senha"
                  />
                  {errors.password && touched.password ? (
                     <Error>{errors.password}</Error>
                  ) : undefined}
               </InputWrapper>

               <Button type="submit" disabled={isSubmitting}>
                  Concluir
               </Button>
            </StyledForm>
         )}
      </Formik>
   );
}
