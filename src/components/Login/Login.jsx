import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import logo from "/src/assets/logos.png";
import { Link, useNavigate } from "react-router-dom";
import { Password, Visibility, VisibilityOff } from "@mui/icons-material";
import LoginStyles from "./LoginStyle";
import { useDispatch, useSelector } from "react-redux";


const Login = () => {

  const navigate = useNavigate()

  const handleLoginClick = () => {
    navigate("/dashboard/team");
  }
  // const dispatch = useDispatch();
  // const {email,password,showPassword,emailError,passwordError} = useSelector((state) => state.atomicSignals)
 
 
  // const handleEmailChange = (e) => {
  //   dispatch(setEmail(e.target.value));
  // };

  // const handlePasswordChange = (e) => {
  //   dispatch(setPassword(e.target.value));
  // };

  // const handleClickShowPassword = () => {
  //   dispatch(toggleShowPassword());
  // };

  // const handleLoginClick = () => {
  //   let valid = true;
  //   // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  //   if (!emailRegex.test(email)) {
  //     dispatch(setEmailError("Please enter a valid email address."));
  //     valid = false;
  //   }

  //   if (!password) {
  //     dispatch(setPasswordError("Please enter your password."));
  //     valid = false;
  //   }

  //   if (valid) {
  //     console.log("Logging in with:", email, password);
  //     // Proceed with login logic
  //   }
  // };
 
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Box sx={LoginStyles.containerBox}>
        <Box
          component="img"
          src={logo}
          alt="logo"
          sx={LoginStyles.logoStyle}
        />
        <Typography sx={LoginStyles.signUpTitle}>Welcome!</Typography>
        <Typography sx={LoginStyles.descriptionText}>
          One positive feedback per day or week can make us grow exponentially
        </Typography>

        <Box sx={{ margin: "13px 10px" }}>
          <Typography sx={LoginStyles.workEmailLabel}>
            Email
          </Typography>
          <TextField
            variant="outlined"
            type="Email"
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start"></InputAdornment>
                ),
                sx: {
                  ...LoginStyles.textFieldInput,
                },
              },
            }}
          ></TextField>
        </Box>
        <Box sx={{ margin: "2px 10px" }}>
        <Typography sx={LoginStyles.workEmailLabel}>
            Password
          </Typography>
          <TextField
          type="password"
            variant="outlined"
            slotProps={{
              input: {
                sx: {
                  ...LoginStyles.textFieldInput,
                },
              },
            }}
          ></TextField>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "end",
            marginBottom: "15px",
          }}
        >
            <Link to="/forgot-password" style={{...LoginStyles.loginLink, margin:"10px",fontFamily:"poppins"}}>
              Forgot Password?
            </Link>
        </Box>
        <Box margin="15px 10px">
          <Button variant="contained" fullWidth sx={LoginStyles.signUpButton}
          onClick={handleLoginClick}>
            Log in
          </Button>
        </Box>
      
      </Box>
    </Box>
  );
};

export default Login;
