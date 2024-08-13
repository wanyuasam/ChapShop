import React from 'react'
import TourCard from './components/TourCard'
import { Container } from '@mui/material'
import {Grid} from '@mui/material'
const App = () => {
  return (
    <div className='App'>
      <Container>
        <Grid container spacing={2}>
          <TourCard/>
        </Grid>
      </Container>
    </div>
  )
}

export default App