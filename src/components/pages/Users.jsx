import { Avatar, Box, Button, CssBaseline, Divider, FormGroup, List, ListItem, ListItemButton, ListItemText, TextField, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { blue, purple } from '@mui/material/colors';


function Users() {

    const [AllUser, setAllUsers] = useState([]);
    const [currProfile, setCurrProfile] = useState({
        username: '',
        email: '',
        name: { firstname: '', lastname: '' },
        phone: '',
        id: '',
        address: {
            city: '',
            street: '',
            number: '',
            zipcode: ''
        }
    })

    useEffect(() => { getAllUser() }, [])

    function getAllUser() {
        fetch('https://fakestoreapi.com/users')
            .then((res) => {
                if (res.ok) { return res.json() }
                else { throw new Error('Error') }
            })
            .then((result) => {
                setAllUsers(result)
                setCurrProfile(result[0])
            })
            .catch((err) => console.log(err))
    }


    function handleProfile(id) {
        setCurrProfile(AllUser.find((u) => u.id === id))
    }


    const userList = <List>
        {AllUser.map((user) =>
            <React.Fragment key={user.id}>
                <ListItem disablePadding>
                    <ListItemButton sx={{ paddingX: 4 }}
                        onClick={() => handleProfile(user.id)}
                    >
                        <Avatar sx={{ bgcolor: purple[700] }}>{user.name.firstname[0]}</Avatar>
                        <ListItemText sx={{ padding: 1 }}>{user.name.firstname + ' ' + user.name.lastname}</ListItemText>
                    </ListItemButton>
                </ListItem>
                <Divider />
            </React.Fragment>
        )}
    </List>

    return (
        <Stack direction='row' sx={{ width: '100%', height: '100%' }}>
            <Stack sx={{ flex: 25, overflowY: 'scroll', maxHeight: 'calc(100svh - 64px)' }}>
                {userList}
            </Stack>
            <Divider orientation='vertical' />

            <Stack sx={{ flex: 75, overflow: 'scroll', maxHeight: 'calc(100svh - 64px)', width: '100%' }}>
                <Stack alignItems='center' justifyContent='center' padding={4}>
                    <Typography variant='h4' >Update User Details</Typography>
                </Stack>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 4,
                }}
                >
                    <Typography variant='h5'>Basic Details</Typography>

                    <FormGroup row sx={{ gap: 4, justifyContent: 'center' }}>
                        <TextField sx={{ width: '300px', marginX: 4 }}
                            disabled
                            label='username'
                            value={currProfile.username} />
                        <TextField sx={{ width: '300px', marginX: 4 }}
                            disabled
                            label='email'
                            value={currProfile.email} />
                        <TextField sx={{ width: '300px', marginX: 4 }}
                            id="outlined-basic"
                            label='Firstname'
                            value={currProfile.name.firstname} />
                        <TextField sx={{ width: '300px', marginX: 4 }}
                            id="outlined-basic"
                            label='Lastname'
                            value={currProfile.name.lastname} />
                        <TextField sx={{ width: '300px', marginX: 4 }}
                            id="outlined-basic"
                            label='Phone'
                            value={currProfile.phone} />
                    </FormGroup>

                    <Typography variant='h5'>Address</Typography>
                    <FormGroup row sx={{ gap: 4, justifyContent: 'center' }}>
                        <CssBaseline />
                        <TextField sx={{ width: '350px', marginX: 4 }}
                            id="outlined-basic"
                            label='City'
                            value={currProfile.address.city} />
                        <TextField sx={{ width: '350px', marginX: 4 }}
                            id="outlined-basic"
                            label='Street'
                            value={currProfile.address.street} />
                        <TextField sx={{ width: '350px', marginX: 4 }}
                            id="outlined-basic"
                            label='Number'
                            value={currProfile.address.number} />
                        <TextField sx={{ width: '350px', marginX: 4 }}
                            id="outlined-basic"
                            label='Zipcode'
                            value={currProfile.address.zipcode} />
                    </FormGroup>
                </Box>
                <Stack justifyContent={'center'} alignItems='center' padding={2}>
                    <Button variant='contained' >Save</Button>
                </Stack>
            </Stack>

        </Stack>
    )
}

export default Users