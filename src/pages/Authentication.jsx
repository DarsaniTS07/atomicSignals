import { Box } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import backgroundImage from '/src/assets/backgroundImage.svg';
import SignUp from '../components/SignUp/SignUp';

const Authentication = () => {
  return (
    <Box sx={{backgroundColor:"#EFEEFB",height:'45.6rem',display:"flex", justifyContent:"center",alignItems:'center'}}>
        <Box
        component='img'
        src={backgroundImage}
        alt='Background Image'
        sx={{height:'auto', width:'100%',position:'absolute', objectFit:'cover'}}>
        </Box>
        <Outlet/>
    </Box>
  )
}

export default Authentication