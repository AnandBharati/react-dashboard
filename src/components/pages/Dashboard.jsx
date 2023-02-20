import { Avatar, Box, Card, CardContent, CardHeader, CssBaseline, Typography } from '@mui/material'
import { green, grey, orange, purple, red, teal } from '@mui/material/colors'
import { Container, Stack } from '@mui/system'
import { CartesianGrid, Cell, Legend, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import DirectionsBusFilledIcon from '@mui/icons-material/DirectionsBusFilled';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import React from 'react'
import PieChartCustom from '../PieChartCustom';

function Dashboard() {

  const cards = <>
    <Card elevation={2} sx={{ margin: 1, flex: '1 1 250px' }}>
      <CardContent>
        <Stack direction='row' justifyContent='space-between'>
          <Typography sx={{ fontSize: 16, fontWeight: 700 }} variant='h4'>Sales</Typography>
          <Avatar sx={{ bgcolor: purple[700] }}> <DirectionsBusFilledIcon /> </Avatar>
        </Stack>
        <Typography sx={{ fontSize: 24 }}>2458</Typography>
        <Typography> <Typography variant='span' sx={{ color: red[400] }}>3.2%</Typography> then prev weeek</Typography>
      </CardContent>
    </Card>
    <Card elevation={2} sx={{ margin: 1, flex: '1 1 250px' }}>
      <CardContent>
        <Stack direction='row' justifyContent='space-between'>
          <Typography sx={{ fontSize: 16, fontWeight: 700 }} variant='h4'>Purchase</Typography>
          <Avatar sx={{ bgcolor: orange[700] }}> <ShoppingCartIcon /> </Avatar>
        </Stack>
        <Typography sx={{ fontSize: 24 }}>1000</Typography>
        <Typography> <Typography variant='span' sx={{ color: green[600] }}>4.2%</Typography> then prev weeek</Typography>
      </CardContent>
    </Card>
    <Card elevation={2} sx={{ margin: 1, flex: '1 1 250px' }}>
      <CardContent>
        <Stack direction='row' justifyContent='space-between'>
          <Typography sx={{ fontSize: 16, fontWeight: 700 }} variant='h4'>Trial Balance</Typography>
          <Avatar sx={{ bgcolor: red[700] }}> <AccountBalanceWalletIcon /> </Avatar>
        </Stack>
        <Typography sx={{ fontSize: 24 }}>500</Typography>
        <Typography> <Typography variant='span' sx={{ color: red[400] }}>5.2%</Typography> then prev weeek</Typography>
      </CardContent>
    </Card>
    <Card elevation={2} sx={{ margin: 1, flex: '1 1 250px' }}>
      <CardContent>
        <Stack direction='row' justifyContent='space-between'>
          <Typography sx={{ fontSize: 16, fontWeight: 700 }} variant='h4'>ROE</Typography>
          <Avatar sx={{ bgcolor: teal[700] }}> <MonetizationOnIcon /> </Avatar>
        </Stack>
        <Typography sx={{ fontSize: 24 }}>20%</Typography>
        <Typography> <Typography variant='span' sx={{ color: green[400] }}>3.2%</Typography> then prev weeek</Typography>
      </CardContent>
    </Card>
  </>

  const data = [
    { name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
    { name: 'Page B', uv: 450, pv: 2400, amt: 2400 },
    { name: 'Page C', uv: 500, pv: 2400, amt: 2400 },
    { name: 'Page D', uv: 200, pv: 2400, amt: 2400 },
    { name: 'Page E', uv: 300, pv: 2400, amt: 2400 },
    { name: 'Page F', uv: 600, pv: 2400, amt: 2400 },

  ];
  const renderLineChart = (
    <LineChart height={320} width={600} data={data}>
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" strokeDasharray="5" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
    </LineChart>
  );

  /**********************Pie chart*************** */

  const PieData = [
    { name: 'Europe', value: 2005 },
    { name: 'US', value: 3000 },
    { name: 'ASIA', value: 3500 },
    { name: 'AU', value: 2500 },
  ]

  const PieData2 = [
    { name: 'Current Liability', value: 1000 },
    { name: 'Total reserves', value: 3000 },
    { name: 'Share Capital', value: 500 },
    { name: 'Borrowings', value: 3000 },
  ]

  const PieData3 = [
    { name: 'Loan & Advances', value: 4000 },
    { name: 'Investments', value: 2000 },
    { name: 'Current Assets', value: 1000 },
    { name: 'Capital WIP', value: 2500 },
  ]



  return (
    <Container maxWidth='xl' sx={{ height: '100%', flexWrap: 'wrap', paddingY: 4 }}>
      <CssBaseline />
      <Typography variant='h4'>Analytical Dashboard</Typography>
      <Stack direction='row' flexWrap='wrap' justifyContent='center' alignItems={'center'}>
        <Stack direction='row' flexWrap='wrap' sx={{ flex: '1 1 100%' }}>
          {cards}
        </Stack>

        <Stack flexBasis='50%' justifyContent={'center'} alignItems='center' flexDirection={'column'}>
          <Stack direction={{xs: 'column', sm: 'row'}}>
            <PieChartCustom data={PieData} chartName='Region wise' />
            <PieChartCustom data={PieData2} chartName='Liability' />
            <PieChartCustom data={PieData3} chartName='Asset' />
          </Stack>
          <Typography variant='h6'>Region wise | Liability | Asset </Typography>
        </Stack>

        <Box sx={{ flex: '1 1 50%', boxShadow: '4px 4px 4px 0 #ddd' }}>
          {renderLineChart}
        </Box>
      </Stack>

    </Container>
  )
}

export default Dashboard