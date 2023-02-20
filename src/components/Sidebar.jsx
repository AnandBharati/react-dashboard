import * as React from 'react';
import Box from '@mui/material/Box';
import HomeIcon from '@mui/icons-material/Home';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import PeopleIcon from '@mui/icons-material/People';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';

function SideBar({ open, setOpen }) {

  const menuArr = [
    {
      text: 'Dashboard',
      icon: HomeIcon,
      path: '/'
    },
    {
      text: 'Users',
      icon: PeopleIcon,
      path: '/users'
    },
    {
      text: 'Products',
      icon: LocalMallIcon,
      path: '/products'
    },
    {
      text: 'Login',
      icon: LoginIcon,
      path: '/login'
    },
    {
      text: 'Logout',
      icon: LogoutIcon,
      path: '/logout'
    },
  ]

  const list = <List sx={{ margin: 'auto' }}>
    {menuArr.map((menu) =>
      <ListItem key={menu.text} disablePadding sx={{ display: 'block' }} >
        <Link to={menu.path} style={{ color: 'inherit', textDecoration: 'inherit' }}>
          <ListItemButton
           size='large'
            onClick={() => setOpen(false)}
            sx={{paddingX: 4}}>
            <ListItemIcon
              sx={{ justifyContent: 'center', }}
            ><menu.icon /></ListItemIcon>
            <ListItemText primary={menu.text} />
          </ListItemButton>
        </Link>
      </ListItem>
    )}
  </List>

  const sideBar = <Box sx={{
    display: 'flex',
    height: '100svh',
    justifyContent: 'start',
    alignItem: 'center',
    transition: '.4s ease-in-out',
    boxShadow: ' 1px 0 20px -10px #333',
    position: 'fixed',
    zIndex: '999',
    backgroundColor: '#fff',
    // paddingX: 4,
    ...(!open && { transform: 'translateX(-100%)' }),
  }}
  >
    {list}
  </Box>


  return (
    <>
    {sideBar}
    </>

  )
}

export default SideBar;