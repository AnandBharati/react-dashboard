import './App.css'
import { Box, CssBaseline, AppBar, Toolbar, IconButton, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { useEffect, useState } from 'react';
import SideBar from './components/Sidebar';
import Layout from './components/Layout';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/pages/Dashboard'
import Login from './components/pages/Login';
import Logout from './components/pages/Logout';
import Users from './components/pages/Users';
import Products from './components/pages/Products';


function App() {
  const [open, setOpen] = useState(false);
  const [userInfo, setUserInfo] = useState({
    username: localStorage.getItem('username'),
    token: localStorage.getItem('token'),
    refreshToken: localStorage.getItem('refreshToken'),
  })

  useEffect(() => {
    setUserInfo({
      username: localStorage.getItem('username'),
      token: localStorage.getItem('token'),
      refreshToken: localStorage.getItem('refreshToken'),
    })
  }, [, localStorage.getItem('token')])

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
      <CssBaseline />
      <AppBar position="relative" sx={{ flexBasis: '100%', zIndex: 1000, height: '64px' }} elevation={5}>
        <Toolbar>
          <IconButton
            onClick={() => setOpen(!open)}
          // sx={{ ...(open && { marginLeft: '100px' }) }}
          >
            <MenuIcon />
          </IconButton>

        </Toolbar>
      </AppBar>

      <SideBar open={open} setOpen={setOpen} /> {/*second flex element*/}

      <Routes>
        {/*third flex element*/}
        <Route path='/' element={<Layout setOpen={setOpen} />}>
          <Route index element={<Dashboard />} />
          <Route path='/login' element={!userInfo.token ? <Login /> : <Dashboard />} />
          <Route path='/logout' element={userInfo.token ? <Logout setUserInfo={setUserInfo} /> : <Login />} />
          <Route path='/users' element={!userInfo.token ? <Login /> : <Users />} />
          <Route path='/products' element={!userInfo.token ? <Login /> : <Products />} />
          <Route path='*' element={
            <Typography component='h1'>Error</Typography>
          } />

        </Route>
      </Routes>

    </Box >
  )
}

export default App
