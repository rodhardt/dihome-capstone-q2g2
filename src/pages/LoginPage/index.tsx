import {
  BackPage,
  BlackFilter,
  BoxForm,
  FormLogin,
  Linha,
  LoginPageStyled,
  Title,
  FlexCenter,
} from "./styles";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { TextField } from "@material-ui/core";
import { useAuth } from "../../providers/Authentication";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { BsArrowLeftCircle } from "react-icons/bs";
import logoName from "../../assets/Images/logoWithName.png";

interface UserSignInData {
  email: string;
  password: string;
}

const LoginPage = () => {
  const history = useHistory();
  const formSchema = yup.object().shape({
    email: yup
      .string()
      .required("Informe seu nome")
      .min(5, "Mínimo de 5 caracteres"),
    password: yup
      .string()
      .required("Senha necessária")
      .min(8, "Mínimo de 8 caracteres")
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/,
        "Deve contert no mínimo um número, uma letra e um caractere especial."
      ),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  const { signIn } = useAuth();

  const handleForm = (userSignInData: UserSignInData) => {
    signIn(userSignInData);
    console.log(userSignInData);
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
                <input placeholder="Senha" {...register("password")} />
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
