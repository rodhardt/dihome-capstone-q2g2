import {
  BackPage,
  BlackFilter,
  BoxForm,
  FormLogin,
  Linha,
  LoginPageStyled,
  Title,
  FlexCenter,
  ErrorMessage,
} from "./styles";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useAuth } from "../../providers/Authentication";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { BsArrowLeftCircle } from "react-icons/bs";
import logoName from "../../assets/Images/logoWithName.png";
import { useEffect } from "react";

interface UserSignInData {
  email: string;
  password: string;
}

const LoginPage = () => {
  const history = useHistory();
  const formSchema = yup.object().shape({
    email: yup.string().required("Informe seu e-mail").email("E-mail inválido"),
    password: yup.string().required("Informe sua senha"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  const { signIn } = useAuth();

  const handleForm = (userSignInData: UserSignInData) => {
    signIn(userSignInData);
  };

  return (
    <>
      <LoginPageStyled>
        <BlackFilter>
          <BackPage>
            <BsArrowLeftCircle />

            <Link to="/">voltar para início</Link>
          </BackPage>
          <FlexCenter>
            <img className="logo" src={logoName} alt="" />
            <BoxForm>
              <FormLogin
                className="form_register"
                onSubmit={handleSubmit(handleForm)}
              >
                <Title>
                  <h2>Login</h2>
                </Title>
                <input placeholder="E-mail" {...register("email")} />
                <ErrorMessage>{errors && errors.email?.message}</ErrorMessage>
                <input placeholder="Senha" {...register("password")} />
                <ErrorMessage>
                  {errors && errors.password?.message}
                </ErrorMessage>
                <button className="loginButton" type="submit">
                  entrar
                </button>
                <Linha></Linha>
                <button
                  className="registerButton"
                  onClick={() => history.push("/registrar")}
                >
                  criar nova conta
                </button>
              </FormLogin>
            </BoxForm>
          </FlexCenter>
        </BlackFilter>
      </LoginPageStyled>
    </>
  );
};

export default LoginPage;
