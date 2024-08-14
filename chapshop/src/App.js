import React from 'react'
import SideBar from './components/SideBar'
import  Feed from './components/Feed'
import RightBar from './components/RightBar'
import { Box, Stack } from '@mui/material'
import Navbar from './components/Navbar'
const App = () => {
  
  return (
    <Box className='App' >
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <SideBar/>
        <Feed />
        <RightBar />
      </Stack>
    </Box>
  )
}

export default App