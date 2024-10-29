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
import ResetPasswordStyles from "./ResetPasswordStyles";

const ResetPassword = () => {

  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/login");
  }

  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Box sx={ResetPasswordStyles.containerBox}>
        <Box
          component="img"
          src={logo}
          alt="logo"
          sx={ResetPasswordStyles.logoStyle}
        />
        <Typography sx={ResetPasswordStyles.signUpTitle}>Reset Password</Typography>
        <Typography sx={ResetPasswordStyles.descriptionText}>
          Please provide a new password for your &nbsp;&nbsp;&nbsp; account
        </Typography>
        <Box sx={{ margin: "7px 10px" }}>
          <Typography sx={ResetPasswordStyles.workEmailLabel}>
            New password<span style={{ color: "red" }}>*</span>
          </Typography>
          <TextField
            variant="outlined"
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start"></InputAdornment>
                ),
                sx: {
                  ...ResetPasswordStyles.textFieldInput,
                },
              },
            }}
          ></TextField>
        </Box>
        <Box sx={{ margin: "7px 10px" }}>
          <Typography sx={ResetPasswordStyles.workEmailLabel}>
            Confirm password<span style={{ color: "red" }}>*</span>
          </Typography>
          <TextField
            variant="outlined"
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start"></InputAdornment>
                ),
                sx: {
                  ...ResetPasswordStyles.textFieldInput,
                },
              },
            }}
          ></TextField>
        </Box>
        <Box margin="15px 10px">
          <Button variant="contained" fullWidth 
          onClick={handleClick}
          sx={ResetPasswordStyles.signUpButton}>
            Reset Password
          </Button>
        </Box>

      </Box>
    </Box>
  );
};

export default ResetPassword;
