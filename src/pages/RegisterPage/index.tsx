import { RegisterPageStyled } from "./styles";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { TextField } from "@material-ui/core";
import { useAuth } from "../../providers/Authentication";
import { UserData } from "../../assets/Types/user";

const RegisterPage = () => {
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
      advertised_properties: [],
      saved_properties: [],
      signed_plan: "none",
    };
    registerUser(newUser);
  };

  return (
    <>
      <RegisterPageStyled>
        <div>
          <form className="form_register" onSubmit={handleSubmit(handleForm)}>
            <div>
              <TextField
                label="Nome"
                margin="normal"
                variant="outlined"
                size="small"
                color="primary"
                {...register("name")}
                error={!!errors.name}
                helperText={errors.name?.message}
              />
            </div>
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
              <TextField
                label="Telefone"
                margin="normal"
                variant="outlined"
                size="small"
                color="primary"
                {...register("phone")}
                error={!!errors.phone}
                helperText={errors.phone?.message}
              />
            </div>

            <div>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </RegisterPageStyled>
    </>
  );
};

export default RegisterPage;
