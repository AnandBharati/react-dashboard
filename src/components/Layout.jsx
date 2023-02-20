import { Box } from '@mui/material'
import React from 'react'
import {Outlet} from 'react-router-dom'

function Layout({setOpen}) {
  return (
    <Box onClick={()=>setOpen(false)} sx={{
      flex: 1,
      width: '100%',
      minHeight: 'calc(100svh - 64px)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Outlet/>
    </Box>
  )
}

export default Layout