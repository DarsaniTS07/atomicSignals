import { Box, Button, Divider, InputAdornment, TextField, Typography } from '@mui/material';
import React from 'react';
import logo from '/src/assets/logos.png';
import { Link } from 'react-router-dom';
import SignupStyles from './SignupStyle';


const SignUp = () => {
  return (
    <Box display="flex" justifyContent='center' alignItems='center'>
      <Box sx={SignupStyles.containerBox}>
          <Box
            component='img'
            src={logo}
            alt='logo'
            sx={SignupStyles.logoStyle}
          />
        <Typography sx={SignupStyles.signUpTitle}>Sign up</Typography>
        <Typography sx={SignupStyles.descriptionText}>You're just a few details away to set up a culture of feedback and thriving environment</Typography>
        <Box marginInline="10px">
        <Button 
        sx={SignupStyles.buttonStyle} fullWidth><Typography sx={{fontSize:"13px",fontWeight:"500"}}>Sign up with Google</Typography></Button>
        <Button sx={SignupStyles.buttonStyle} fullWidth><Typography sx={{fontSize:"13px",fontWeight:"500"}}>Sign up with Outlook </Typography></Button>
        </Box>
          <Box display="flex" alignItems="center" justifyContent="center" sx={{marginTop:"5px"}}>
            <Divider sx={{color:"black",width:"7rem"}}/>
            <Typography sx={SignupStyles.dividerText}>or</Typography>
            <Divider sx={{color:"black",width:"7rem"}}/>
          </Box>
          <Box sx={{margin:"7px 10px"}}>
          <Typography sx={SignupStyles.workEmailLabel}>Work Email<span style={{color:"red"}}>*</span></Typography>
          <TextField variant='outlined'
          slotProps ={{
            input:{
            startAdornment:<InputAdornment position='start' sx={{marginLeft:"11px",fontWeight:"700",
            }}></InputAdornment>,
            style:{
              padding:0,
              height:'2rem',
              width:'20rem',
              marginTop:'10px',
              fontWeight:"700",              
            }
          }}
        }></TextField>
        </Box>
        <Box margin="15px 10px">
        <Button variant='contained' fullWidth sx={{textTransform:'none',backgroundColor:"#49C792"}}>Sign up</Button>
        </Box>
        <Box sx={{display:"flex", justifyContent:"center",marginBottom:"10px"}}>
        <Typography sx={{color:'#71707E',fontSize:"13px"}}>Already have an account? <Link to="/login" sx={{color:"#353448", fontWeight:"600"}}>Login</Link></Typography>
        </Box>
    </Box>
    </Box>
  );
};

export default SignUp;
