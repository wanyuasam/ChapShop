import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './components/Signup';
import SignIn from './components/Signin';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={SignIn} />
        <Route path="/" component={Home} />
      </Routes>
    </Router>
  );
}

export default App;
