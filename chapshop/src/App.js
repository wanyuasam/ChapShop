import React from 'react'
import TourCard from './components/TourCard'
import { Button, styled } from '@mui/material'
// import {DeleteIcon} from '@mui/icons-material/Delete';
import DeleteIcon from '@mui/icons-material/Delete';
const App = () => {
  const BlueButton = styled(Button)({
    backgroundColor: "skyblue",
    color: "#008",
    margin: 5,
    "&:hover": {
      backgroundColor: "lightblue"
    },
  })
  return (
    <div className='App'>
      <Button variant="text" size='small'>HDKSJF</Button>
      <Button variant="contained" startIcon={<DeleteIcon />}>Delete</Button>
      <Button variant="outlined"href='https://youtube.com'>Outlined</Button>
      <Button variant='contained'  disabled>Unique Button</Button>
      <BlueButton>THEOIJ</BlueButton>
    </div>
  )
}

export default App