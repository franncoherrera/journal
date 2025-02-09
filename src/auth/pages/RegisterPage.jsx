import { Alert, Button, Grid, TextField, Typography } from "@mui/material";
import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { useFirebaseErrorHandler, useForm } from "../../hooks";
import { startCreatingUserWithEmailPassword } from "../../store/auth/thunks";
import { formValidations } from "../../utils";
import { AuthLayout } from "../layout/AuthLayout";

const formData = {
  email: "",
  password: "",
  displayName: "",
};

export const RegisterPage = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const dispatch = useDispatch();

  const { getErrorMessage } = useFirebaseErrorHandler();

  const { status, errorMessage } = useSelector((state) => state.auth);
  const isCheckingAuthentication = useMemo(
    () => status === "checking",
    [status]
  );

  const {
    displayName,
    email,
    password,
    onInputChange,
    formState,
    isFormValid,
    emailValid,
    displayNameValid,
    passwordValid,
  } = useForm(formData, formValidations);

  const onSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);
    if (!isFormValid) return;
    dispatch(startCreatingUserWithEmailPassword(formState));
  };

  return (
    <AuthLayout title="Crear cuenta ">
      <form
        onSubmit={onSubmit}
        className="animate__animated animate__fadeIn animate__faster"
      >
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Nombre completo"
              type="text"
              placeholder="Franco Herrera"
              fullWidth
              name="displayName"
              value={displayName}
              onChange={onInputChange}
              error={!!displayNameValid && formSubmitted}
              helperText={formSubmitted ? displayNameValid : ""}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="correo@google.com"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
              error={!!emailValid && formSubmitted}
              helperText={formSubmitted ? emailValid : ""}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="Contraseña"
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
              error={!!passwordValid && formSubmitted}
              helperText={formSubmitted ? passwordValid : ""}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
          <Grid
            item
            xs={12}
            display={!!getErrorMessage(errorMessage) ? "" : "none"}
          >
            <Alert severity="error">{getErrorMessage(errorMessage)}</Alert>
          </Grid>
          <Grid item xs={12}>
            <Button
              disabled={isCheckingAuthentication}
              type="submit"
              variant="contained"
              fullWidth
            >
              Crear cuenta
            </Button>
          </Grid>

          <Grid
            container
            direction={"row"}
            justifyContent={"end"}
            sx={{ mt: 2 }}
          >
            <Typography sx={{ mr: 1 }}> ¿Ya tienes cuenta?</Typography>
            <RouterLink component={RouterLink} color="inherit" to="/auth/login">
              Ingresar
            </RouterLink>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
