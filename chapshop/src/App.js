import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SignUp from './components/Signup';
import SignIn from './components/Signin';
import Home from './components/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
    </Routes>
  );
}

export default App;
