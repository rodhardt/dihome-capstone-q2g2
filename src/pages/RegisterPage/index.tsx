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
import { Linha } from "../LoginPage/styles";
import logoName from "../../assets/Images/logoWithName.png";

const RegisterPage = () => {
  const history = useHistory();
  const formSchema = yup.object().shape({
    name: yup.string().required("Informe seu e-mail.").email("E-mail inválido"),
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
    phone: yup.string().required("Informe seu telefone"),
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
    };
    registerUser(newUser);
  };

  return (
    <>
      <RegisterPageStyled>
        <BlackFilter>
          <BackPage>
            <BsArrowLeftCircle />

            <Link to="/">voltar para início</Link>
          </BackPage>
          <FlexCenter>
            <img className="logo" src={logoName} alt="" />
            <BoxForm>
              <FormRegister
                className="form_register"
                onSubmit={handleSubmit(handleForm)}
              >
                <Title>
                  <h2>Cadastro</h2>
                </Title>
                <input placeholder="Nome" {...register("name")} />
                <input placeholder="E-mail" {...register("email")} />
                <input placeholder="Senha" {...register("password")} />
                <input placeholder="Telefone" {...register("phone")} />

                <button className="registerButton" type="submit">
                  cadastrar
                </button>
                <button
                  onClick={() => history.push("/login")}
                  className="backToLogin"
                  type="submit"
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
