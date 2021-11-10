import { LoginPageStyled } from "./styles";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { TextField } from "@material-ui/core";
import { useAuth } from "../../providers/Authentication";

interface UserSignInData {
  email: string;
  password: string;
}

const LoginPage = () => {
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
  };

  return (
    <>
      <LoginPageStyled>
        <div>
          <form className="form_register" onSubmit={handleSubmit(handleForm)}>
            <div>
              <TextField
                label="E-mail"
                margin="normal"
                variant="outlined"
                size="small"
                color="primary"
                {...register("email")}
                error={!!errors.email}
                helperText={errors.email?.message}
              />
            </div>
            <div>
              <TextField
                label="Senha"
                margin="normal"
                variant="outlined"
                size="small"
                color="primary"
                {...register("password")}
                error={!!errors.password}
                helperText={errors.password?.message}
              />
            </div>
            <div>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </LoginPageStyled>
    </>
  );
};

export default LoginPage;
