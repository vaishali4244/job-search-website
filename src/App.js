import React from 'react';
import Register from './components/Register';
import Signin from './components/Signin';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar';
import DashBoard from './components/DashBoard';
import './App.css';

const App = () => {
  return (
    <div className="main-container">
      <NavBar />
      <h1 className='main-heading'>JOB SEARCH PORTAL</h1>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route exact path="/register" element={<Register />} />
        <Route path="/dashboard" element={<DashBoard />} />

      </Routes>
    </div>

  )
}

export default App;

