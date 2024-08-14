import React from 'react'
import SideBar from './components/SideBar'
import  Feed from './components/Feed'
import RightBar from './components/RightBar'
const App = () => {
  
  return (
    <div className='App'>
      <SideBar/>
      <Feed />
      <RightBar />
    </div>
  )
}

export default App