import {
  BackPage,
  BlackFilter,
  BoxForm,
  FormRegister,
  RegisterPageStyled,
  Title,
  FlexCenter,
} from "./styles";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { TextField } from "@material-ui/core";
import { useAuth } from "../../providers/Authentication";
import { UserData } from "../../assets/Types/user";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { BsArrowLeftCircle } from "react-icons/bs";
import { ErrorMessage, Linha } from "../LoginPage/styles";
import logoName from "../../assets/Images/logoWithName.png";

const RegisterPage = () => {
  const history = useHistory();
  const formSchema = yup.object().shape({
    name: yup
      .string()
      .required("Informe seu nome")
      .min(5, "Mínimo de 5 caracteres"),
    email: yup
      .string()
      .required("Informe seu e-mail.")
      .email("E-mail inválido"),
    password: yup
      .string()
      .required("Senha necessária")
      .min(8, "Mínimo de 8 caracteres")
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/,
        "Deve conter no mínimo um número, uma letra e um caractere especial."
      ),
    telephone: yup.string().required("Informe seu telefone"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  const { registerUser } = useAuth();

  const handleForm = (userData: UserData) => {
    const newUser = {
      ...userData,
      consultant: false,
      announcedProperties: [],
      bookmarkedProperties: [],
      subscriptionType: "Nenhum",
      markedDates: [],
    };

    registerUser(newUser);
  };

  return (
    <>
      <RegisterPageStyled>
        <BlackFilter>
          <Link to="/">
            <BackPage>
              <BsArrowLeftCircle />
              voltar para início
            </BackPage>
          </Link>

          <FlexCenter>
            <img className="logo" src={logoName} alt="dihome-logo" />
            <BoxForm>
              <FormRegister
                className="form_register"
                onSubmit={handleSubmit(handleForm)}
              >
                <Title>
                  <h2>Cadastro</h2>
                </Title>
                <input placeholder="Nome" {...register("name")} />
                <ErrorMessage>{errors && errors.name?.message}</ErrorMessage>
                <input placeholder="E-mail" {...register("email")} />
                <ErrorMessage>{errors && errors.email?.message}</ErrorMessage>
                <input
                  placeholder="Senha"
                  type="password"
                  {...register("password")}
                />
                <ErrorMessage>
                  {errors && errors.password?.message}
                </ErrorMessage>
                <input placeholder="Telefone" {...register("telephone")} />
                <ErrorMessage>
                  {errors && errors.telephone?.message}
                </ErrorMessage>

                <button className="registerButton" type="submit">
                  cadastrar
                </button>
                <button
                  onClick={() => history.push("/login")}
                  className="backToLogin"
                >
                  Login
                </button>
              </FormRegister>
            </BoxForm>
          </FlexCenter>
        </BlackFilter>
      </RegisterPageStyled>
    </>
  );
};

export default RegisterPage;
