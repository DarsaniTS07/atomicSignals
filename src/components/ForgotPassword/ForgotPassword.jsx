import {
  Box,
  Button,
  Divider,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import logo from "/src/assets/logos.png";
import { Link, useNavigate } from "react-router-dom";
import ForgotPasswordStyles from "./ForgotPasswordStyle";
import ResetPassword from "../ResetPassword/ResetPassword";

const ForgotPassword = () => {

  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/reset-password");
  }

  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Box sx={ForgotPasswordStyles.containerBox}>
        <Box
          component="img"
          src={logo}
          alt="logo"
          sx={ForgotPasswordStyles.logoStyle}
        />
        <Typography sx={ForgotPasswordStyles.signUpTitle}>Forgot Password</Typography>
        <Typography sx={ForgotPasswordStyles.descriptionText}>
          Provide us the registered email to reset your password.
        </Typography>
        <Box sx={{ margin: "7px 10px" }}>
          <Typography sx={ForgotPasswordStyles.workEmailLabel}>
            Work Email<span style={{ color: "red" }}>*</span>
          </Typography>
          <TextField
            variant="outlined"
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start"></InputAdornment>
                ),
                sx: {
                  ...ForgotPasswordStyles.textFieldInput,
                },
              },
            }}
          ></TextField>
        </Box>
        <Box margin="15px 10px">
          <Button variant="contained" fullWidth 
          onClick={handleClick}
          sx={ForgotPasswordStyles.signUpButton}>
            Get Link
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "15px",
          }}
        >
          <Typography sx={ForgotPasswordStyles.loginLinkText}>
            Remembered the password?{" "}
            <Link to="/login" style={ForgotPasswordStyles.loginLink}>
              Login
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ForgotPassword;
