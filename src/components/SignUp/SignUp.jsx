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
import { Link } from "react-router-dom";
import SignupStyles from "./SignupStyle";
import GoogleIcon from "../../assets/GoogleIcon";
import MicrosoftIcon from "../../assets/MicrosftIcon";
import {useDispatch,useSelector} from 'react-redux'
import { setEmail,setEmailError } from "../../Redux/Slice";

const SignUp = () => {

  const dispatch = useDispatch();

  const email = useSelector((state) => state.atomicSignals.email);
  const emailError = useSelector((state) => state.atomicSignals.emailError);

  const handleEmailChange = (e) => {
    dispatch(setEmail(e.target.value));
    dispatch(setEmailError(""));
  };

  const handleSignUpClick = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)){
      dispatch(setEmailError("Please enter a valid email address."))
    }else{
      console.log("Sign up with:",email);
    }
  }
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Box sx={SignupStyles.containerBox}>
        <Box
          component="img"
          src={logo}
          alt="logo"
          sx={SignupStyles.logoStyle}
        />
        <Typography sx={SignupStyles.signUpTitle}>Sign up</Typography>
        <Typography sx={SignupStyles.descriptionText}>
          You're just a few details away to set up a culture of feedback and
          thriving environment
        </Typography>
        <Box marginInline="10px">
          <Button sx={SignupStyles.buttonStyle} fullWidth>
            <GoogleIcon
              display="flex"
              justifyContent="start"
              alignItems="start"
            />
            <Typography sx={SignupStyles.buttonText}>
              Sign up with Google
            </Typography>
          </Button>
          <Button sx={SignupStyles.buttonStyle} fullWidth>
            <MicrosoftIcon
              display="flex"
              justifyContent="start"
              alignItems="start"
            />
            <Typography sx={SignupStyles.buttonText}>
              Sign up with Outlook{" "}
            </Typography>
          </Button>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{ marginTop: "5px" }}
        >
          <Divider sx={{ color: "black", width: "7rem" }} />
          <Typography sx={SignupStyles.dividerText}>or</Typography>
          <Divider sx={{ color: "black", width: "7rem" }} />
        </Box>
        <Box sx={{ margin: "7px 10px" }}>
          <Typography sx={SignupStyles.workEmailLabel}>
            Work Email<span style={{ color: "red" }}>*</span>
          </Typography>
          <TextField
          required
          type="email"
          value={email}
          onChange={handleEmailChange}
          error={Boolean(emailError)}
          helperText={emailError}
            variant="outlined"
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start"></InputAdornment>
                ),
                sx: {
                  ...SignupStyles.textFieldInput,
                },
              },
            }}
          ></TextField>
        </Box>
        <Box margin="15px 10px">
          <Button variant="contained" fullWidth 
          onClick={handleSignUpClick}
          sx={SignupStyles.signUpButton}>
            Sign up
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "15px",
          }}
        >
          <Typography sx={SignupStyles.loginLinkText}>
            Already have an account?{" "}
            <Link to="/login" style={SignupStyles.loginLink}>
              Login
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default SignUp;
