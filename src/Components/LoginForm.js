import React, { useState, useEffect } from "react";
import {FormControl,TextField,Checkbox,Button,InputAdornment,IconButton,Snackbar,Alert,AlertTitle} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { login, resetError } from "../features/FormSlice";
import "../Styles/LoginForm.css";
import { buttonStyle } from "../Styles/CustomCss";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const authError = useSelector((state) => state.user.error);
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .matches(/^[A-Z].*$/, "Password must start with an uppercase letter")
      .matches(/[\W_]/, "Password must contain at least one special character")
      .required("Password is required"),
  });

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    dispatch(login(data));
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    } else if (authError) {
      setSnackbarOpen(true);
      setError("email", { message: authError });
      setError("password", { message: authError });
    }
  }, [isAuthenticated, authError, navigate, setError]);

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
    dispatch(resetError()); 
  };

  return (
    <div className="form-container">
      <div className="form-header">
        <h1 id="sign">Sign in to Admin</h1>
        <p id="para">Enter the email address and password</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl>
          <div className="form-body1">
            <TextField
              id="email"
              name="email"
              className="email"
              label="Email Address"
              variant="outlined"
              {...register("email")}
              error={!!errors.email}
              helperText={errors.email?.message}
            />
          </div>
          <div className="form-body2">
            <TextField
              id="password"
              name="password"
              label="Password"
              className="password"
              variant="outlined"
              type={showPassword ? "text" : "password"}
              {...register("password")}
              error={!!errors.password}
              helperText={errors.password?.message}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </div>
        </FormControl>

        <div className="form-footer">
          <div className="form-head">
            <div className="footer-header">
              <Checkbox className="checkbox" />
              <p id="rem">Remember me</p>
            </div>
            <div className="forgotp">
              <p id="forgot">Forgot Password?</p>
            </div>
          </div>
          <div className="login-but">
            <Button type="submit" variant="contained" fullWidth style={buttonStyle}>
              Login
            </Button>
            <Snackbar
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              open={snackbarOpen}
              onClose={handleSnackbarClose}
              autoHideDuration={3000}
            >
              <Alert severity="error" onClose={handleSnackbarClose}>
                <AlertTitle>Error</AlertTitle>
                Invalid credentials
              </Alert>
            </Snackbar>
          </div>
        </div>
      </form>
    </div>
  );
}
