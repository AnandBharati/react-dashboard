import { Alert, Button, Snackbar, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Logout({setUserInfo}) {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate();

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  function handleLogout() {
    localStorage.getItem('token') && fetch('https://sore-gray-oyster-coat.cyclic.app/auth/logout', {
      method: 'POST',
      headers: {
        authorization: `Bearer ${localStorage.getItem('refreshToken')}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username: localStorage.getItem('username') })
    }).then((res) => res.ok && res.json())
      .then((result) => {
        // console.log(result)
        setOpen(true) //displaying alert
        setUserInfo({username: '', token: '', refreshToken: ''});
        localStorage.setItem('token', '');
        localStorage.setItem('username', '');
        localStorage.setItem('refreshToken', '')
        setTimeout(()=>navigate('/login'), 2000);
      })
      .catch((err) => console.log(err))
  }


  return (
    <>
      <Box>
        <Typography component='h1'>
          Do you want to logout
          <Button variant='contained' color='secondary' onClick={handleLogout} > Logout </Button>
        </Typography>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
            Logged out successfully..!!
          </Alert>
        </Snackbar>
      </Box>
    </>
  )
}

export default Logout