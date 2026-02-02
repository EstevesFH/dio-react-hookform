import { useForm } from "react-hook-form";
import { useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { login, saveToken } from "../../services/auth";

import { 
  Container, 
  LoginContainer, 
  Column, 
  Spacing, 
  Title,
  SuccessMessage,
  ErrorMessageBox,
  InfoBox,
  InfoTitle,
  InfoText,
  Form
} from "./styles";
import { defaultValues, IFormLogin } from "./types";

const schema = yup
  .object({
    email: yup
      .string()
      .email("E-mail inválido")
      .required("Campo obrigatório"),
    password: yup
      .string()
      .min(6, "No mínimo 6 caracteres")
      .required("Campo obrigatório"),
  })
  .required();

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IFormLogin>({
    resolver: yupResolver(schema),
    mode: "onBlur",
    defaultValues,
    reValidateMode: "onChange",
  });

  const onSubmit = async (data: IFormLogin) => {
    try {
      // Limpa mensagens anteriores
      setSuccessMessage("");
      setErrorMessage("");
      setIsLoading(true);

      // Chama o serviço de autenticação
      const response = await login(data);

      if (response.success && response.token) {
        // Salva o token
        saveToken(response.token);
        
        // Exibe mensagem de sucesso
        setSuccessMessage(
          `${response.message} Bem-vindo(a), ${response.user?.name}!`
        );

        // Aqui você pode redirecionar o usuário para outra página
        // Por exemplo: navigate('/dashboard');
        console.log("Usuário autenticado:", response.user);
        console.log("Token:", response.token);
      } else {
        // Exibe mensagem de erro
        setErrorMessage(response.message);
      }
    } catch (error) {
      // Trata erros inesperados
      setErrorMessage(
        "Ocorreu um erro ao tentar fazer login. Tente novamente."
      );
      console.error("Erro no login:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <LoginContainer>
        <Column>
          <Title>Login</Title>

          {/* Mensagens de feedback */}
          {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
          {errorMessage && <ErrorMessageBox>{errorMessage}</ErrorMessageBox>}

          <Form onSubmit={handleSubmit(onSubmit)}>
            <Input
              name="email"
              placeholder="Email"
              control={control}
              errorMessage={errors?.email?.message}
              disabled={isLoading}
            />
            <Spacing />
            <Input
              name="password"
              type="password"
              placeholder="Senha"
              control={control}
              errorMessage={errors?.password?.message}
              disabled={isLoading}
            />
            <Spacing />
            <Button 
              title={isLoading ? "Entrando..." : "Entrar"} 
              type="submit"
              disabled={isLoading || !isValid}
            />
          </Form>
        </Column>
      </LoginContainer>
    </Container>
  );
};

export default Login;
