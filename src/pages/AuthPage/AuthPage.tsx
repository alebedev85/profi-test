import { useForm } from "react-hook-form";
import { User } from "types/User";
import { Button, TextField } from "@mui/material";
import { useAppDispatch } from "../../redux/store";
import { setUser } from "../../redux/slices/authSlice";

import styles from "./AuthPage.module.scss";
import { useNavigate } from "react-router-dom";

function AuthPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>({
    defaultValues: { username: "", password: "" },
    mode: "onChange",
  });
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit = (data: User) => {
    dispatch(setUser(data));
    navigate('/', { replace: true });
  };

  return (
    <div className={styles.login}>
      <div className={styles.container}>
        <h2 className={styles.title}>Вход</h2>
        <form
          className={styles.form}
          name="Login"
          onSubmit={handleSubmit(onSubmit)}
        >
          <TextField
            className={styles.formInput}
            error={errors.username?.message ? true : false}
            margin="dense"
            id="username-input"
            label="Ваше имя"
            variant="outlined"
            helperText={errors.username?.message || " "}
            {...register("username", {
              required: "Введите ваше имя",
            })}
          />
          <TextField
            error={errors.password?.message ? true : false}
            id="password-input"
            label="Пароль"
            variant="outlined"
            helperText={errors.password?.message || " "}
            {...register("password", { required: "Введите вашь пароль" })}
          />
          <Button
            className={styles.formButton}
            variant="contained"
            type="submit"
          >
            Login
          </Button>
        </form>
      </div>
    </div>
  );
}

export default AuthPage;
