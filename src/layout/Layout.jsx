import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'
import { Box } from '@mui/material'

const Layout = () => {
  return (
    <>
    <Box display="flex" height="100vh">
    <Sidebar/>
    <Box flex={21}>
        <Outlet />
      </Box>
    </Box>
    </>
  )
}

export default Layout