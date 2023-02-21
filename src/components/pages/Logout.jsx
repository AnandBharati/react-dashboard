import { Alert, Button, Link, Snackbar, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom'

function Logout({ setUserInfo }) {
  const [open, setOpen] = useState(false);
  const [errMsg, setErrMsg] = useState({ severity: 'success', message: 'deafult message' });
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
        setErrMsg({message: 'logged out successfully..!!', severity: 'success'})
        setOpen(true)
        setUserInfo({ username: '', token: '', refreshToken: '' });
        localStorage.setItem('token', '');
        localStorage.setItem('username', '');
        localStorage.setItem('refreshToken', '');
      })
      .catch((err) => {
        setErrMsg({message: err.message, severity: 'error'});
        setOpen(true);
      })
  }


  return (
    <>
      <Box justifyContent='center' alignItems='center'>
        <Typography variant='h4'>
          Do you want to
          <Button variant='text' color='primary' onClick={handleLogout} endIcon={<LogoutIcon/>}>
            <Typography variant='h4' color='dark'> Logout </Typography>
          </Button>
          ...?
        </Typography>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity={errMsg.severity} sx={{ width: '100%' }}>
            {errMsg.message}
          </Alert>
        </Snackbar>
      </Box>
    </>
  )
}

export default Logout